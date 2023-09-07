# todo/todo_api/views.py
from rest_framework.response import Response
from .models import Rental
from django.http import JsonResponse
from django.utils import timezone
from django.core import serializers


# Gets a paginated list of all rentals. Defaults to showing the first 10
# Exclude the API from csrf
# Wrap in an api_view decorator limited to POSTS

def rental_list(request):

    # Create the keyword argument list to get the filtered list of objects

    # Create the page number
    # If the page number is on the req and is a number and is greater than 0, use it, otherwise default to 1


    # Create the number to show number
    # If the number is on the req and is a number, use it, otherwise default to 10


    # Calculate the offset records (for example, the first page is 0). It should be the index of the page * the number to show

    # Get the current time
    
    # If overdue is set, then explicitly handle return date
        # Add to kwards with key return_date less than now
        # else
        # Add to kwards with key return_date greater or equal than now
    


    # Run the get and sort desc by rental date and limit to the offset and number to show


    
    # Serialize the data


    # Return the data with a json response
    return JsonResponse(serializer.data,safe=False)


