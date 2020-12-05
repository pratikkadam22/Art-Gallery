from django.db import models

### Create your database models here ###

class Artist(models.Model):
    """
    The Artist model for storing an Artist record.
    """
    name = models.CharField(max_length=50, primary_key=True)

class Buyer(models.Model):
    """
    The Buyer model for storing a Buyer record.
    """
    name = models.CharField(max_length=50, primary_key=True)

class Art(models.Model):
    """
    The Art model for storing an Art record, which is related to :model:`artwork.Artist` and
    :model:`artwork.Buyer`.
    """
    name = models.CharField(max_length=50, primary_key=True)
    artist = models.ForeignKey(Artist, to_field='name', on_delete=models.PROTECT)
    buyer = models.ForeignKey(Buyer, to_field='name', on_delete=models.PROTECT)
    picture = models.ImageField()

    def __str__(self):
        return self.name