# Generated by Django 4.2.6 on 2024-01-12 22:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authorization', '0002_user_user_level'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='user',
            name='last_name',
        ),
    ]
