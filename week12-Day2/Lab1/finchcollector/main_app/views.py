from django.shortcuts import render

finches = [
    {"name": "Finch", "num": 1, "color": "Yellow", "size": "Small"},
    {"name": "Finch", "num": 2, "color": "Red", "size": "Tiny"},
]


def home(request):
    # Include an .html file extension - unlike when rendering EJS templates
    return render(request, "home.html")


def about(request):
    # Include an .html file extension - unlike when rendering EJS templates
    return render(request, "about.html")


def all_finches(request):
    return render(request, "all_fin.html", {"finches": finches})
