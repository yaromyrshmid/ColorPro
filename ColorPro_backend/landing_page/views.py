from django.shortcuts import render, redirect, get_object_or_404
from landing_page.forms import MessageForm

def index(request):
    if request.method == 'POST':
        form = MessageForm(request.POST)
        if form.is_valid():
            instance = form.save(commit=False)
            instance.date_dir = strftime("%Y_%m_%d", gmtime())
            instance.save()
            return render()
    else:
        form = DatafileForm()
    return render(request, '.html', {
        'form': form
    })
