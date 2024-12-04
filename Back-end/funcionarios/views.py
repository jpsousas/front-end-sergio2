from django.shortcuts import render

from rest_framework import mixins,generics,permissions

from .models import Funcionario, Horario, Alocacao
from .serializers import FuncionarioSerializer, HorarioSerializer, AlocacaoSerializer

class FuncionarioListAPIView(generics.ListAPIView):
    serializer_class = FuncionarioSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Funcionario.objects.all()

class HorarioListAPIView(generics.ListAPIView):
    serializer_class = HorarioSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Horario.objects.all()

class AlocacaoListAPIView(generics.ListAPIView):
    serializer_class = AlocacaoSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Alocacao.objects.all()
