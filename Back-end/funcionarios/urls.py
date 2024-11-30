from django.urls import path

from . import views

app_name = 'funcionarios'

urlpatterns = [
    path('funcionarios/', views.FuncionarioListAPIView.as_view(),
        name='funcionario-list')
]