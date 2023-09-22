from django.contrib import admin
from .models import Department, Company, Employee

# Register individual models with admin site
admin.site.register(Department)
admin.site.register(Employee)
admin.site.register(Company)
