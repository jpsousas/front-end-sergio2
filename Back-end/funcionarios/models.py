from django.db import models

# Create your models here.
class Funcionario(models.Model):
        nome = models.CharField(max_length=45)
        cargo = models.CharField(max_length=45)

        class Meta:
                ordering = ['nome']

                def __str__(self):
                    return {self.nome}, {self.cargo}
                
class Horario(models.Model):
       dia_sem = models.CharField(max_length=45)
       hora_inicio = models.CharField(max_length=5)
       hora_fim = models.CharField(max_length=5)
       
       class Meta:
                ordering = ['dia_sem']

                def __str__(self):
                    return {self.dia_sem}, {self.hora_inicio}, {self.hora_fim}
       
class Alocacao(models.Model):
       id_func = models.BigIntegerField()
       id_horario = models.IntegerField()
       class Meta:
              def __str__(self):
                return {self.id_func}, {self.id_horario}