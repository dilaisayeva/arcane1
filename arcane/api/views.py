from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *
from rest_framework.generics import CreateAPIView, ListAPIView, ListCreateAPIView
from django.views.generic import TemplateView

# Create your views here.

class CategoryList(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class CategoryList(ListAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        category = self.request.data.get('category')
        queryset = Category.objects.order_by('-id')
        if category:
            queryset = queryset.filter(category__icontains=category)

        return queryset

    def post(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

class CreateCategoryAPIView(CreateAPIView):
    model = Category
    serializer_class = CategorySerializer


class CarList(ListAPIView):
    serializer_class = CarSerializer

    def get_queryset(self):
        # category = self.request.data.get('category')
        queryset = Car.objects.order_by('-id')
        # if category:
        #     queryset = queryset.filter(category__icontains=category)

        return queryset

    def post(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

class CarCreateAPIView(CreateAPIView):
    model = Car
    serializer_class = CarSerializer


class PhoneList(ListAPIView):
    serializer_class = PhoneSerializer

    def get_queryset(self):
        # category = self.request.data.get('category')
        queryset = Car.objects.order_by('-id').first()
        # if category:
        #     queryset = queryset.filter(category__icontains=category)

        return queryset

    def post(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

class PhoneCreateAPIView(CreateAPIView):
    model = Phone
    serializer_class = PhoneSerializer

class GameList(ListAPIView):
    serializer_class = GameSerializer

    def get_queryset(self):
        # category = self.request.data.get('category')
        queryset = Game.objects.order_by('-id')
        # if category:
        # queryset = queryset.filter(category__icontains=category)

        return queryset

    def post(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

class GameCreateAPIView(CreateAPIView):
    model = Game
    serializer_class = GameSerializer


def index(request):
    return render(request,'index.html')