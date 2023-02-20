from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('refresh/', views.refresh, name='refresh'),
    path('responsive-design/', views.responsive_deign, name='responsive-design'),
    path('responsive-redesign/', views.responsive_redesign, name='responsive-redesign'),
    path('custom-development/', views.custom_development, name='custom-development')
]
