from django.db import models

### Create your database models here ###

# class Artist(models.Model):
#     name = models.CharField(max_length=50, primary_key=True)
# class Buyer(models.Model):
#     name = models.CharField(max_length=50, primary_key=True)

class Art(models.Model):
    name = models.CharField(max_length=50, primary_key=True)
    # artist_name = models.ForeignKey(Artist, to_field='name', on_delete=PROTECT)
    # buyer_name = models.ForeignKey(Buyer, to_field='name', on_delete=PROTECT)
    artist_name = models.CharField(max_length=50)
    buyer_name = models.CharField(max_length=50)
    picture = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.name