from django.db import models
from encrypted_model_fields.fields import EncryptedCharField, EncryptedEmailField


class Department(models.Model):

    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Company(models.Model):

    name = models.CharField(max_length=100)
    registration = models.DateField()
    registration_number = models.CharField(max_length=100, unique=True)
    # Encrypted fields
    address = EncryptedCharField(max_length=255)
    phone = EncryptedCharField(max_length=20)
    email = EncryptedEmailField()
    departments = models.ManyToManyField(Department)
    num_employees = models.IntegerField()
    # audit fields
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Employee(models.Model):

    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)

    ssn = models.CharField(max_length=15)
    personal_email = EncryptedEmailField()
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True)
    role = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    duties = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
