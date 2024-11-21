from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    mobilenumber = models.CharField(max_length=15, blank=True, null=True)
    gender = models.CharField(max_length=15, blank=True, null=True)
    
    
class To_do(models.Model):
    title = models.CharField(max_length=50)
    discription = models.TextField()
    status = models.IntegerField(default=0)
    user = models.ForeignKey(User,on_delete=models.CASCADE)