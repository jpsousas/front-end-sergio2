from rest_framework import serializers

from .models import Funcionario, Horario, Alocacao

class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = ('id','nome','cargo')
        read_only_fields = ['id']


class HorarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Horario
        fields = ('id','dia_sem','hora_inicio','hora_fim')
        read_only_fields = ['id']

class AlocacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alocacao
        fields = ('id_func','id_horario')
        