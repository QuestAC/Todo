from rest_framework import serializers
from myapp.models import User,To_do
from django.db.models import fields

class DetailSerialiser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id","first_name","last_name","email","mobilenumber","gender","password","username")
        
class TodoSerialiser(serializers.ModelSerializer):
    class Meta:
        model = To_do
        fields = '__all__'