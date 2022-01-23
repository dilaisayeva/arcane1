from math import fabs
from operator import truediv
from unicodedata import category
from django.db import models
from multiselectfield import MultiSelectField

# Create your models here.

SPORT_CHOICES = (
        ('Sport','Sport'),
        ('Sandbox','Sandbox'),
        ('RTS','Real-time strategy'),
        ('FPS','Shooters'),
        ('MOBA','Multiplayer online battle arena'),
        ('RGP','Role-playing'),
        ('Adventure','Action-adventure'),
        ('Survive','Survival and horror'),
        ('Platformer','Platformer')
    )
TECHNOLOGY_CHOICES = (
    ('GSM','Global System for Mobile Communications'),
    ('CDMA','Code Division Multiple Access'),
    ('HSPA','High Speed Packet Access'),
    ('EVDO','Evolution-Data Optimized'),
    ('LTE','Long Term Evolution'),
    ('5G','5G')
)
COLORS_CHOICES = (
    ('Green','Green'),
    ('Gray','Gray'),
    ('Red','Red'),
    ('Purple','Purple'),
    ('White','White'),
    ('Blue','Blue'),
    ('Pink','Pink'),
    ('Black','Black'),
    ('Yellow','Yellow'),
    ('Olive','Olive'),
    ('Lavender','Lavender'),
    ('Graphite','Graphite'),
)
class Category(models.Model):
    base_category = models.CharField(max_length=120)
    category = models.ForeignKey("self", on_delete=models.CASCADE,
                                 db_index=True, related_name='category_realted',null=True, blank=True)
    description = models.TextField()
    is_active = models.BooleanField(default=True)

    def _str_(self):
        return self.base_category + ' ' + self.category


class Car(models.Model):
    marka = models.CharField(max_length=120)
    model = models.CharField(max_length=120)
    year =models.IntegerField(default=0)
    image = models.ImageField('Image',upload_to='cars/', null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    trim = models.CharField(max_length=120)
    description = models.TextField()
    is_active = models.BooleanField(default=True)

    def _str_(self):
        return self.marka + ' ' + self.model

class Phone(models.Model):
    technology = models.CharField(
        max_length=25,choices=TECHNOLOGY_CHOICES)
    model = models.CharField(max_length=120)
    year =models.IntegerField(default=0)
    image = models.ImageField('Image',upload_to='phones/', null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    colors = models.CharField(
        max_length=20, choices=COLORS_CHOICES)
    price = models.CharField(max_length=120)
    os = models.CharField(max_length=120)
    memory = models.CharField(max_length=120)
    description = models.TextField()
    is_active = models.BooleanField(default=True)

    def _str_(self):
        return self.technology + ' ' + self.model

class Game(models.Model):
    genre =  models.CharField(
        max_length=40,choices=SPORT_CHOICES)
    platform=models.CharField(max_length=120)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    series=models.CharField(max_length=120)
    developer=models.CharField(max_length=100)
    publisher=models.CharField(max_length=120)
    platform=models.CharField(max_length=120)
    image = models.ImageField('Image',upload_to='game/', null=True, blank=True)
    price = models.CharField(max_length=120)
    description = models.TextField()
    is_active = models.BooleanField(default=True)
