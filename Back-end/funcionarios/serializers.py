from rest_framework import serializers

from .models import Funcionario

class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = {'idFunc','nome','cargo'}
        read_only_fields = {'id'}