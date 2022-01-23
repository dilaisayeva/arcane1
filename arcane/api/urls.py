from django.urls import path
from .views import *
from django.contrib.auth.views import LogoutView

app_name = 'api'

urlpatterns = [
    path('category/', CategoryList.as_view() ,name ='category'),
    path('create-category/', CreateCategoryAPIView.as_view() ,name ='create-category'),
    path('create-car/', CarCreateAPIView.as_view() ,name ='create-car'),
    path('cars/', CarList.as_view() ,name ='cars'),
    path('phones/', PhoneList.as_view() ,name ='phones'),
    path('phone-create/', PhoneCreateAPIView.as_view() ,name ='phone-create'),
    path('games/', GameList.as_view() ,name ='games'),
    path('game-create/', GameCreateAPIView.as_view() ,name ='game-create'),
    path('',index,name ='main'),

    ]