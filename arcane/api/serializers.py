from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'base_category','category', 'description', 'is_active')

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('id', 'marka','model', 'year', 'image','category','trim','description','is_active')


class PhoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phone
        fields = ('id', 'technology','model', 'year', 'image','category','colors','price','os','memory', 'description','is_active')
        

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'genre','platform','category', 'series', 'developer','publisher','platform','image','price', 'description','is_active')

      
 