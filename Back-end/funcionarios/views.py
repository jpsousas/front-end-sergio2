from django.shortcuts import render

from rest_framework import mixins,generics,permissions

from .models import Funcionario
from .serializers import FuncionarioSerializer

class FuncionarioListAPIView(generics.ListAPIView):
    serializer_class = FuncionarioSerializer
    permission_classes = [permissions.AllowAny]
    queryse = Funcionario.objects.all()