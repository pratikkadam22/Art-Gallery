# Should not change this file
from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),
]
