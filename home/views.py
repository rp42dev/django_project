from django.views.decorators.http import require_POST
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.conf import settings


def home(request):
    return render(request, 'home.html')

@require_POST
def contact(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']
        
        message_body = f'Name: {name}\nEmail: {email}\nMessage: {message}'

        # Send email
        send_mail(
            f"New contact form submission from {name}", # subject
            message_body, # message
            email, # from email
            [settings.DEFAULT_FROM_EMAIL], # to email
            fail_silently=False,
        )
    
    return redirect('home')
            
             
