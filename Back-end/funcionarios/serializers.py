from rest_framework import serializers

from .models import Funcionario, Horario, Alocacao

class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = {'id_func','nome','cargo'}
        read_only_fields = {'id_func'}


class HorarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Horario
        fields = {'id_horario','dia_sem','hora_inicio','hora_fim'}
        read_only_fields = {'id_horario'}

class AlocacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alocacao
        field = {'id_func','id_horario'}