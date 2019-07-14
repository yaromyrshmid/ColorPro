from rest_framework import serializers
from landing_page.models import Message

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'        #('id', 'name', 'email', 'm_theme', 'm_text')
