"""
URL configuration for myproject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from myapp.views import *

urlpatterns = [
    path("admin/", admin.site.urls),
    path('',samplefirstpage),
    path('register/',register,name="register"),
    path('log123/',log123),
    path('add_to_do/',add_to_do),
    path('view_to_do/',view_to_do),
    path('deletetask/<int:id>',deletetask),
    path('updatetask/',updatetask),
    path('view_completed_to_do/<int:user>/<int:s>/',view_completed_to_do)

]