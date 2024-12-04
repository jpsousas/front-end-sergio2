from django.urls import path
from .views import (
    FuncionarioListAPIView, FuncionarioCreateAPIView,
    HorarioListAPIView, HorarioCreateAPIView,
    AlocacaoListAPIView, AlocacaoCreateAPIView
)

urlpatterns = [
    # Funcionários
    path('funcionarios/', FuncionarioListAPIView.as_view(), name='funcionario-list'),
    path('funcionarios/create/', FuncionarioCreateAPIView.as_view(), name='funcionario-create'),
    
    # Horários
    path('horarios/', HorarioListAPIView.as_view(), name='horario-list'),
    path('horarios/create/', HorarioCreateAPIView.as_view(), name='horario-create'),
    
    # Alocações
    path('alocacoes/', AlocacaoListAPIView.as_view(), name='alocacao-list'),
    path('alocacoes/create/', AlocacaoCreateAPIView.as_view(), name='alocacao-create'),
]
