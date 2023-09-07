from django.contrib import admin

# Register your models here.
from .models import Rental, Inventory, Store, Staff

admin.site.register(Rental)
admin.site.register(Inventory)
admin.site.register(Store)
admin.site.register(Staff)