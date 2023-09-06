# Add UpdateView & DeleteView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import TemplateView , ListView , DetailView
from .models import Cat

# Create your views here.
# def home(request):
#   return render(request, 'home.html')
class HomeView(TemplateView):
  template_name= 'home.html'
# def about(request):
#   return render(request, 'about.html')
class AboutView(TemplateView):
  template_name= 'about.html'

# def cats_index(request):
#   cats = Cat.objects.all()
#   return render(request, 'cats/index.html', {
#     'cats': cats
#   })
class CatIndexView(ListView):
    model = Cat
    template_name = 'cats/index.html'
    context_object_name = 'cats'

# def cats_detail(request, cat_id):
#   cat = Cat.objects.get(id=cat_id)
#   return render(request, 'cats/detail.html', {
#     'cat': cat
#   })
class CatDetailView(DetailView):
    model = Cat
    template_name = 'cats/detail.html'
    context_object_name = 'cat'
    pk_url_kwarg = 'cat_id'
class CatCreate(CreateView):
  model = Cat
  fields = '__all__'

class CatUpdate(UpdateView):
  model = Cat
  # Let's disallow the renaming of a cat by excluding the name field!
  fields = ['breed', 'description', 'age']

class CatDelete(DeleteView):
  model = Cat
  success_url = '/cats'
