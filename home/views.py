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
        
        message_reply = f'Hi {name},\n\nThank you for contacting us. We will get back to you as soon as possible.\n\nRegards,\n\nRaivis'

        try:
            send_mail(
                f"New contact form submission from {name}",  # subject
                message_body,  # message
                email,  # from email
                [settings.DEFAULT_FROM_EMAIL],  # to email
                fail_silently=False,
            )
            
            send_mail(
                f"Thank you for contacting us {name}",  # subject
                message_reply,  # message
                settings.DEFAULT_FROM_EMAIL,  # from email
                [email],  # to email
                fail_silently=False,
            )
            
            messages.success(request, 'Your message has been sent!')
            return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
        except BadHeaderError:
            return HttpResponse('Invalid header found.')
        
    return render(request, 'contact.html')

def about(request):
    return render(request, 'about.html')


def responsive_deign(request):
    return render(request, 'responsive-design.html')


def fromladstodads(request):
    return render(request, 'fromladstodads.html')

             
