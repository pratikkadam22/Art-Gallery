from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Art, Artist, Buyer
from .serializers import ArtSerializer, ArtistSerializer, BuyerSerializer

### Implement your REST API here to connect to your front-end ###

@api_view(['GET'])
def apiOverview(request):
    """
    Displays a list of available apis.
    """
    api_urls = {
        'List': '/art-list/',
        'Art': '/art/<str:artname>',
        'Create': '/art-create/',
        'Delete': '/art-delete/<str:artname>/'
    }
    return Response(api_urls)

@api_view(['GET'])
def artList(request):
    """
    Displays a current list of all the Artworks in the gallery.
    """
    arts = Art.objects.all()
    serializer = ArtSerializer(arts, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def art(request, artname):
    """
    Retrieves and displays the artwork with the name matching the artname passed as parameter.
    If the artwork is not present in the gallery, displays a message stating the same.
    This check is done using a Try Except block.
    """
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
    """
    Creates the new artwork based on the POST data received.
    """
    artist_serializer = ArtistSerializer(data={'name':request.data['artist']})
    buyer_serializer = BuyerSerializer(data={'name':request.data['buyer']})
    # Check the Artist and Buyer data is valid
    if artist_serializer.is_valid() and buyer_serializer.is_valid():
        artist_instance = artist_serializer.save()
        buyer_instance = buyer_serializer.save()
    else:
        return Response("The provided data is not correct!")
    art_serializer = ArtSerializer(data=request.data)
    # Check if the Art data is valid
    if art_serializer.is_valid():
        art_serializer.save()
        return Response(art_serializer.data)
    else:
        # if the artwork is invalid, we need to delete the artist and buyer instance we just created.
        artist_instance.delete()
        buyer_instance.delete()
        return Response("The provided data is not correct!")

@api_view(['DELETE'])
def artDelete(request, artname):
    """
    Deletes the artwork with the name matching the artname passed as parameter.
    """
    try:
        art = Art.objects.get(name=artname)
    except:
        art = None
    if not art:
        return Response("No such artwork found in the gallery!")
    art.delete()
    # If the artist no more has any artwork, we can delete the record for that artist
    if len(Art.objects.filter(artist=art.artist)) == 0:
        art.artist.delete()
    # If the buyer no more has any artwork, we can delete the record for that buyer
    if len(Art.objects.filter(buyer=art.buyer)) == 0:
        art.buyer.delete()    
    return Response("Artwork successfully deleted!")