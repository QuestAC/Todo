from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from .serializers import DetailSerialiser,TodoSerialiser
from rest_framework.response import Response
from django.contrib.auth import authenticate
from myapp.models import User,To_do

# Create your views here.

def samplefirstpage(request):
    return HttpResponse("<h1>Testing Page</h1>")

@api_view(['POST'])
def register(request):
    print(request.data)
    person = DetailSerialiser(data=request.data)
    if person.is_valid():
        person.save()
        return Response({'status':1,"values":person.data})
    else:
        return Response({'status':0,"values":"faield"})
    
@api_view(['POST'])
def log123(request):
    print(request.data)
    username = request.data.get("username")
    password = request.data.get("password")
    # user = authenticate(username=username, password=password)
    user = User.objects.get(username=username, password=password)
    print(user,"-------------")
    if user is not None:
        user_data = DetailSerialiser(user).data
        return Response({'status': 1, 'values': user_data})
    else:
        return Response({'status': 0, 'values': "Login failed. Invalid credentials"})

@api_view(['POST'])
def add_to_do(request):
    print(request.data)
    todo = TodoSerialiser(data=request.data)
    if todo.is_valid():
        todo.save()
        return Response({'status':1,"values":todo.data})
    else:
        return Response({'status':0,"values":"faield"})
    
@api_view(['GET'])
def view_to_do(request):
    if request.query_params:
        todo = To_do.objects.filter(**request.query_params.dict())
    if todo:
        todotable = TodoSerialiser(todo,many=True)
        return Response({'data':todotable.data})
    else:
        return Response({'data':"no data"})

@api_view(['DELETE'])
def deletetask(request,id):
    task = To_do.objects.get(pk=id)
    task.delete()
    return Response({'status':1,"values":"deleted"})

@api_view(['POST','GET'])
def updatetask(request):
    if request.method=='POST':
        print(request.data)
        task = To_do.objects.get(pk=request.data['id'])
        tododata = TodoSerialiser(instance = task,data=request.data)
        if tododata.is_valid():
            tododata.save()
            return Response({'data':tododata.data})
    else:
        if request.query_params:
            todo = To_do.objects.get(**request.query_params.dict())
        if todo:
            todotable = TodoSerialiser(todo)
            return Response({'data':todotable.data})
        
@api_view(['GET'])
def view_completed_to_do(request,user,s):
    todo = To_do.objects.filter(user=user,status=s)
    if todo:
        todotable = TodoSerialiser(todo,many=True)
        return Response({'data':todotable.data})
    else:
        return Response({'data':"no data"})