from django.urls import path

from . import views

app_name = 'funcionarios'

urlpatterns = [
    path('funcionarios/', views.FuncionarioListAPIView.as_view(),
        name='funcionario-list'),
    path('horarios/', views.HorarioListAPIView.as_view(),
        name='horario-list'),
    path('alocacao/', views.AlocacaoListAPIView.as_view(),
        name='alocacao-list')
    ]