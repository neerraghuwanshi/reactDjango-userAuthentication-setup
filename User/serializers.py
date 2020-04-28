from django.contrib.auth.models import User
from rest_framework import routers, serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','email','password']

    