from django.urls import path
from . import views

urlpatterns = [
  path('', views.HomeView.as_view(), name='home'),
  path('about/', views.AboutView.as_view(), name='about'),
  path('cats/', views.CatIndexView.as_view(), name='index'),
  path('cats/<int:cat_id>/', views.CatDetailView.as_view(), name='detail'),
  path('cats/create/', views.CatCreate.as_view(), name='cats_create'),
  path('cats/<int:pk>/update/', views.CatUpdate.as_view(), name='cats_update'),
  path('cats/<int:pk>/delete/', views.CatDelete.as_view(), name='cats_delete'),
]