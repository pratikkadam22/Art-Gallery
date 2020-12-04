from django.contrib import admin
from .models import Art, Artist, Buyer

### Register your models here ###

admin.site.register(Art)
admin.site.register(Artist)
admin.site.register(Buyer)