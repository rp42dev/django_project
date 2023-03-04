from django.contrib import admin
from .models import Project, Page, Image, Seo


# Register your models here.
admin.site.register(Project)
admin.site.register(Page)
admin.site.register(Image)
admin.site.register(Seo)

