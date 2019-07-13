from django import forms
from landing_page.models import Message

class MessageForm(forms.ModelForm):

    class Meta:
        model = Message
        fields = ('name', 'email', 'm_theme', 'm_text')
        labels = {
            'name': 'Your name',
            'email': 'E-mail',
            'm_theme': 'Theme',
            'm_text': 'Main text'
        }
