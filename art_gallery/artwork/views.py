from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Art, Artist, Buyer
from .serializers import ArtSerializer, ArtistSerializer, BuyerSerializer

### Implement your REST API here to connect to your front-end ###

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List': '/art-list/',
        'Art': '/art/<str:artname>',
        'Create': '/art-create/',
        # 'Update': '/art-update/<str:pk>/',
        'Delete': '/art-delete/<str:artname>/'
    }
    return Response(api_urls)

@api_view(['GET'])
def artList(request):
    arts = Art.objects.all()
    serializer = ArtSerializer(arts, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def art(request, artname):
    try:
        art = Art.objects.get(name=artname)
    except:
        art = None
    if not art:
        return Response("No such artwork found in the gallery!")
    serializer = ArtSerializer(art, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def artCreate(request):
    artist_serializer = ArtistSerializer(data={'name':request.data['artist']})
    buyer_serializer = BuyerSerializer(data={'name':request.data['buyer']})
    if artist_serializer.is_valid() and buyer_serializer.is_valid():
        artist_instance = artist_serializer.save()
        buyer_instance = buyer_serializer.save()
    else:
        return Response("The provided data is not correct!")
    art_serializer = ArtSerializer(data=request.data)
    if art_serializer.is_valid():
        art_serializer.save()
        return Response(art_serializer.data)
    else:
        artist_instance.delete()
        buyer_instance.delete()
        return Response("The provided data is not correct!")

@api_view(['DELETE'])
def artDelete(request, artname):
    try:
        art = Art.objects.get(name=artname)
    except:
        art = None
    if not art:
        return Response("No such artwork found in the gallery!")
    art.delete()
    if len(Art.objects.filter(artist=art.artist)) == 0:
        art.artist.delete()
    if len(Art.objects.filter(buyer=art.buyer)) == 0:
        art.buyer.delete()    
    return Response("Artwork successfully deleted!")

# @api_view(['POST'])
# def artUpdate(request, artname):
#     try:
#         art = Art.objects.get(name=artname)
#     except:
#         art = None
#     serializer = ArtSerializer(instance=art, data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)