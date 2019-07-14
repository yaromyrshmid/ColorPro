from django.urls import path
from . import views

urlpatterns = [
    path('api/landing_page/', views.MessageListCreate.as_view() ),
]
