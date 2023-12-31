from django.db import models
from django.urls import reverse
from datetime import date

MEALS = (
  ('B', 'Breakfast'),
  ('L', 'Lunch'),
  ('D', 'Dinner'),
)
# Create your models here.
class Finch(models.Model):
    name = models.CharField(max_length=100)
    num = models.IntegerField()
    color = models.TextField(max_length=250)
    size = models.CharField(max_length=100)  # new code below

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('detail', kwargs={'finch_id': self.id})


    def fed_for_today(self):
        return self.feeding_set.filter(date=date.today()).count() >= len(MEALS)

class Feeding(models.Model):
  date = models.DateField('Feeding Date')
  meal = models.CharField(
    max_length=1,
    choices=MEALS,
    default=MEALS[0][0]
  )
  # Create a cat_id FK
  finch = models.ForeignKey(
    Finch,
    on_delete=models.CASCADE
  )

  def __str__(self):
    return f"{self.get_meal_display()} on {self.date}"

  class Meta:
    ordering = ['-date']