from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('responsive-design/', views.responsive_deign, name='responsive-design'),
    path('fromladstodads/', views.fromladstodads, name='from-lads-to-dads')
]
