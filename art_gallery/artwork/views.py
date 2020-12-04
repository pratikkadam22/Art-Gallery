from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Art
from .serializers import ArtSerializer

### Implement your REST API here to connect to your front-end ###

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List': '/art-list/',
        'Art': '/art/<str:pk>',
        'Create': '/art-create/',
        'Update': '/art-update/<str:pk>/',
        'Delete': '/art-delete/<str:pk>/'
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
    serializer = ArtSerializer(art, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def artCreate(request):
    serializer = ArtSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response("The provided data is not correct!")

@api_view(['POST'])
def artUpdate(request, artname):
    try:
        art = Art.objects.get(name=artname)
    except:
        art = None
    serializer = ArtSerializer(instance=art, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def artDelete(request, artname):
    try:
        art = Art.objects.get(name=artname)
    except:
        art = None
    if not art:
        return Response("No such artwork found in the gallery!")
    art.delete()
    return Response("Artwork successfully deleted!")