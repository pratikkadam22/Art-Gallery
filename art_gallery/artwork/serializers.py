from rest_framework import serializers
from .models import Art

### Create your model serializers here ###

class ArtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Art
        fields = '__all__'
