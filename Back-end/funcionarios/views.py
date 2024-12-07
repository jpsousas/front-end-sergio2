from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Funcionario, Horario, Alocacao
from .serializers import FuncionarioSerializer, HorarioSerializer, AlocacaoSerializer
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

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

# Exclusão de Funcionários
class FuncionarioDeleteAPIView(APIView):
    permission_classes = [permissions.AllowAny]  # Permite qualquer um acessar
    @csrf_exempt
    def delete(self, request, pk, *args, **kwargs):
        try:
            funcionario = Funcionario.objects.get(pk=pk)
            funcionario.delete()
            return Response({"message": "Funcionário deletado com sucesso."}, status=status.HTTP_204_NO_CONTENT)
        except Funcionario.DoesNotExist:
            return Response({"error": "Funcionário não encontrado."}, status=status.HTTP_404_NOT_FOUND)

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

# Exclusão de Horários
class HorarioDeleteAPIView(APIView):
    permission_classes = [permissions.AllowAny]  # Permite qualquer um acessar
    @csrf_exempt
    def delete(self, request, pk, *args, **kwargs):
        try:
            horario = Horario.objects.get(pk=pk)
            horario.delete()
            return Response({"message": "Horário deletado com sucesso."}, status=status.HTTP_204_NO_CONTENT)
        except Horario.DoesNotExist:
            return Response({"error": "Horário não encontrado."}, status=status.HTTP_404_NOT_FOUND)

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

# Exclusão de Alocações
class AlocacaoDeleteAPIView(APIView):
    permission_classes = [permissions.AllowAny]  # Permite qualquer um acessar
    @csrf_exempt
    def delete(self, request, pk, *args, **kwargs):
        try:
            alocacao = Alocacao.objects.get(pk=pk)
            alocacao.delete()
            return Response({"message": "Alocação deletada com sucesso."}, status=status.HTTP_204_NO_CONTENT)
        except Alocacao.DoesNotExist:
            return Response({"error": "Alocação não encontrada."}, status=status.HTTP_404_NOT_FOUND)
