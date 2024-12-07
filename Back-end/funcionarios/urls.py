from django.urls import path
from .views import (
    FuncionarioListAPIView,
    FuncionarioCreateAPIView,
    FuncionarioDeleteAPIView,
    HorarioListAPIView,
    HorarioCreateAPIView,
    HorarioDeleteAPIView,
    AlocacaoListAPIView,
    AlocacaoCreateAPIView,
    AlocacaoDeleteAPIView,
)

urlpatterns = [
    # Rotas de Funcionários
    path('funcionarios/', FuncionarioListAPIView.as_view(), name='funcionario-list'),
    path('funcionarios/create/', FuncionarioCreateAPIView.as_view(), name='funcionario-create'),
    path('funcionarios/delete/<int:pk>/', FuncionarioDeleteAPIView.as_view(), name='funcionario-delete'),
    
    # Rotas de Horários
    path('horarios/', HorarioListAPIView.as_view(), name='horario-list'),
    path('horarios/create/', HorarioCreateAPIView.as_view(), name='horario-create'),
    path('horarios/delete/<int:pk>/', HorarioDeleteAPIView.as_view(), name='horario-delete'),
    
    # Rotas de Alocações
    path('alocacoes/', AlocacaoListAPIView.as_view(), name='alocacao-list'),
    path('alocacoes/create/', AlocacaoCreateAPIView.as_view(), name='alocacao-create'),
    path('alocacoes/delete/<int:pk>/', AlocacaoDeleteAPIView.as_view(), name='alocacao-delete'),
]
