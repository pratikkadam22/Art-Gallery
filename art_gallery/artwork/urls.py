from django.urls import path
from . import views

urlpatterns = [
    ### Add your API Paths here ###
    path('', views.apiOverview, name="api-overview"),
    path('art-list/', views.artList, name="art-list"),
    path('art/<str:artname>/', views.art, name="art"),
    path('art-create/', views.artCreate, name="art-create"),
    # path('art-update/<str:artname>', views.artUpdate, name="art-update"),
    path('art-delete/<str:artname>', views.artDelete, name="art-delete"),
]