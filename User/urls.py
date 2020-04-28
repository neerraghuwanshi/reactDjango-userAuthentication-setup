from django.urls import path, include, re_path
from .views import UserView
from rest_framework import routers

router = routers.DefaultRouter()

router.register(r'', UserView)

urlpatterns = [
    path('',include(router.urls))
]