from django.db import models

class Message(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    m_theme = models.CharField(max_length=50)
    m_text = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    
