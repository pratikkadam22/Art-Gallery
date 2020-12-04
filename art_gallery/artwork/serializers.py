from rest_framework import serializers
from .models import Art, Artist, Buyer

### Create your model serializers here ###

class ArtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Art
        fields = '__all__'

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = '__all__'

class BuyerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Buyer
        fields = '__all__'
