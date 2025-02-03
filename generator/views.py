from django.shortcuts import render
from .forms import ContactForm


# Create your views here.
def index(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            return render(request, 'generator/index.html', {'success': True})
    else:
        form = ContactForm()
        return render(request, 'generator/index.html', {'form': form})