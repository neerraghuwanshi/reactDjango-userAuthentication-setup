from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import UserSerializer
from django.contrib.auth.models import User

# Create your views here.

class UserView(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
