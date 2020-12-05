from rest_framework import serializers
from .models import Art, Artist, Buyer

### Create your model serializers here ###

class ArtSerializer(serializers.ModelSerializer):
    """
    Translate the given data to Django objects based on the Art model provided.
    """
    class Meta:
        model = Art
        fields = '__all__'

class ArtistSerializer(serializers.ModelSerializer):
    """
    Translate the given data to Django objects based on the Artist model provided.
    """
    class Meta:
        model = Artist
        fields = '__all__'

class BuyerSerializer(serializers.ModelSerializer):
    """
    Translate the given data to Django objects based on the Buyer model provided.
    """
    class Meta:
        model = Buyer
        fields = '__all__'
