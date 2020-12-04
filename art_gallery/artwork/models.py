from django.db import models

### Create your database models here ###

class Artist(models.Model):
    name = models.CharField(max_length=50, primary_key=True)

class Buyer(models.Model):
    name = models.CharField(max_length=50, primary_key=True)

class Art(models.Model):
    name = models.CharField(max_length=50, primary_key=True)
    artist = models.ForeignKey(Artist, to_field='name', on_delete=models.PROTECT)
    buyer = models.ForeignKey(Buyer, to_field='name', on_delete=models.PROTECT)
    picture = models.ImageField()

    def __str__(self):
        return self.name