from django.urls import path
from . import views

urlpatterns = [
    path(r'', views.index ),
    path(r'index', views.index ),
    path(r'index.html', views.index ),
]
