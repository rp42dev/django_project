from django.db import models

# Create your models here.

class Seo(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    keywords = models.CharField(max_length=200)

    def __str__(self):
        return self.title

class Image(models.Model):
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.image.name

class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    images = models.ManyToManyField(Image, blank=True)
    url = models.URLField(blank=True)
    github = models.URLField(blank=True)
    seo = models.OneToOneField(Seo, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.name
    
class Service(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.CharField(max_length=200)
    image = models.ImageField(upload_to='services/images/', blank=True)
    seo = models.OneToOneField(Seo, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.title
