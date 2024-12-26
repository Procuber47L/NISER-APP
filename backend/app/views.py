from django.shortcuts import render
from django.contrib.auth import login as auth_login
import json
from django.http import JsonResponse
from django.contrib.auth import authenticate


def index(request):
    return render(request, 'dist/index.html')

def login(request):
    if request.method != "POST":
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    try:
        body = json.loads(request.body.decode('utf-8'))
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON body'}, status=400)
    email = body.get('email')
    password = body.get('password')
    if not email or not password:
        return JsonResponse({'error': 'Email and password are required'}, status=400)
    user = authenticate(request, email=email, password=password)
    if user is not None:
        auth_login(request, user)
        return JsonResponse({'message': 'Login Successful'}, status=200)
    else:
        return JsonResponse({'message': 'Login Failed'}, status=400)