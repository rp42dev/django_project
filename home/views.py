from django.views.decorators.http import require_POST
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.core.mail import BadHeaderError
from django.contrib import messages
from django.conf import settings


def home(request):
    return render(request, 'home.html')


def contact(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']
        
        message_body = f'Name: {name}\nEmail: {email}\nMessage: {message}'

        try:
            send_mail(
                f"New contact form submission from {name}", # subject
                message_body, # message
                email, # from email
                [settings.DEFAULT_FROM_EMAIL], # to email
                fail_silently=False,
            )
            messages.success(request, 'Your message has been sent!')
            return redirect('contact')
        except BadHeaderError:
            return HttpResponse('Invalid header found.')
        
    return render(request, 'contact.html')

def about(request):
    return render(request, 'about.html')


def responsive_deign(request):
    return render(request, 'responsive-design.html')


def responsive_redesign(request):
    return render(request, 'responsive-redesign.html')


def refresh(request):
    return render(request, 'refresh.html')


def custom_development(request):
    return render(request, 'custom-development.html')

             
