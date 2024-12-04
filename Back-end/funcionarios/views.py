from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Funcionario, Horario, Alocacao
from .serializers import FuncionarioSerializer, HorarioSerializer, AlocacaoSerializer

# Listagem de Funcionários
class FuncionarioListAPIView(generics.ListAPIView):
    serializer_class = FuncionarioSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Funcionario.objects.all()

# Criação de Funcionários
class FuncionarioCreateAPIView(generics.CreateAPIView):
    serializer_class = FuncionarioSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Funcionario.objects.all()

# Listagem de Horários
class HorarioListAPIView(generics.ListAPIView):
    serializer_class = HorarioSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Horario.objects.all()

# Criação de Horários
class HorarioCreateAPIView(generics.CreateAPIView):
    serializer_class = HorarioSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Horario.objects.all()

# Listagem de Alocações
class AlocacaoListAPIView(generics.ListAPIView):
    serializer_class = AlocacaoSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Alocacao.objects.all()

# Criação de Alocações
class AlocacaoCreateAPIView(generics.CreateAPIView):
    serializer_class = AlocacaoSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Alocacao.objects.all()
