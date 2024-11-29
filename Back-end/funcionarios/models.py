from django.db import models

# Create your models here.
class Funcionario(models.Model):
        nome = models.CharField(max_length=45)
        cargo = models.CharField(max_length=45)

        