
from django.shortcuts import render
from django.conf import settings
from django.core.mail import send_mail

# Create your views here.
from django.http import HttpResponse
import datetime

def home(request):
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now 
    return HttpResponse(html)
