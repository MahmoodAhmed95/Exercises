from django.shortcuts import redirect
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import TemplateView , ListView , DetailView
from .models import Finch
from .forms import FeedingForm

class HomeView(TemplateView):
  template_name= 'home.html'

class AboutView(TemplateView):
  template_name= 'about.html'

class FinchIndexView(ListView):
    model = Finch
    template_name = 'finches/all_fin.html'
    context_object_name = 'finches'

class FinchDetailView(DetailView):
    model = Finch
    template_name = 'finches/fin_details.html'
    context_object_name = 'finch'
    pk_url_kwarg = 'finch_id'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['feeding_form'] = FeedingForm()
        return context
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

def add_feeding(request, finch_id):
  # create a ModelForm instance using 
  # the data that was submitted in the form
  form = FeedingForm(request.POST)
  # validate the form
  if form.is_valid():
    # We want a model instance, but
    # we can't save to the db yet
    # because we have not assigned the
    # cat_id FK.
    new_feeding = form.save(commit=False)
    new_feeding.finch_id = finch_id
    new_feeding.save()
  return redirect('detail', finch_id=finch_id)