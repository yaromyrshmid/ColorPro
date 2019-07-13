from django.shortcuts import render, redirect, get_object_or_404
from landing_page.forms import MessageForm
from time import strftime, gmtime

def index(request):
    accepted = ''
    if request.method == 'POST':
        form = MessageForm(request.POST)
        if form.is_valid():
            instance = form.save(commit=False)
            instance.date_dir = strftime("%Y_%m_%d", gmtime())
            instance.save()
            accepted = 'Wysłano!'
    else:
        form = MessageForm()
    return render(request, 'index.html', {
            'form': form, 'accepted': accepted
            })
