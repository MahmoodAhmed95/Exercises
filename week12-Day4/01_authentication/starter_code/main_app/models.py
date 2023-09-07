from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User


# Create your models here.
class Cat(models.Model):
    name = models.CharField(max_length=100)
    breed = models.CharField(max_length=100)
    description = models.TextField(max_length=250)
    age = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    # Changing this instance method
    # does not impact the database, therefore
    # no makemigrations is necessary
    def __str__(self):
        return f"{self.name} ({self.id})"

    def get_absolute_url(self):
        return reverse("detail", kwargs={"cat_id": self.id})
