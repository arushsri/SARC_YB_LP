# Generated by Django 5.0.6 on 2024-06-19 08:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('response', '0004_userresponse_address_alter_userresponse_comments'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userresponse',
            name='address',
        ),
    ]
