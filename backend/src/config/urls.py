from django.http import JsonResponse
from django.urls import path

def example(request):
    return JsonResponse({"test": 1})

urlpatterns = [
    path('', example),
]
