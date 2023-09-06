from django.shortcuts import render
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import TemplateView , ListView , DetailView
from .models import Finch
finches = [
    {"name": "Finch", "num": 1, "color": "Yellow", "size": "Small"},
    {"name": "Finch", "num": 2, "color": "Red", "size": "Tiny"},
]


class HomeView(TemplateView):
  template_name= 'home.html'

class AboutView(TemplateView):
  template_name= 'about.html'

def all_finches(request):
    return render(request, "all_fin.html", {"finches": finches})

class FinchIndexView(ListView):
    model = Finch
    template_name = 'all_fin.html'
    context_object_name = 'finches'

class FinchDetailView(DetailView):
    model = Finch
    template_name = 'fin_details.html'
    context_object_name = 'finch'
    pk_url_kwarg = 'finch_id'
class FinchCreate(CreateView):
  model = Finch
  fields = '__all__'

class FinchUpdate(UpdateView):
  model = Finch
  # Let's disallow the renaming of a cat by excluding the name field!
  fields = ['num', 'color', 'size']

class FinchDelete(DeleteView):
  model = Finch
  success_url = '/finches'
