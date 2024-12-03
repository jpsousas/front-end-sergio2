from django.contrib import admin
from .models import Funcionario, Horario, Alocacao


admin.site.register(Funcionario)
admin.site.register(Alocacao)
admin.site.register(Horario)