# Generated by Django 5.0.6 on 2024-06-19 06:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('response', '0002_alter_userresponse_liststudents'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userresponse',
            old_name='dept',
            new_name='department',
        ),
        migrations.RenameField(
            model_name='userresponse',
            old_name='gmail',
            new_name='email',
        ),
        migrations.RenameField(
            model_name='userresponse',
            old_name='name',
            new_name='fullname',
        ),
        migrations.RenameField(
            model_name='userresponse',
            old_name='ldapemail',
            new_name='ldap',
        ),
        migrations.RenameField(
            model_name='userresponse',
            old_name='nos',
            new_name='ncopies',
        ),
        migrations.RenameField(
            model_name='userresponse',
            old_name='phoneno',
            new_name='phone',
        ),
        migrations.RenameField(
            model_name='userresponse',
            old_name='rollno',
            new_name='roll',
        ),
        migrations.RenameField(
            model_name='userresponse',
            old_name='address',
            new_name='typeofcopy',
        ),
        migrations.RemoveField(
            model_name='userresponse',
            name='liststudents',
        ),
        migrations.AddField(
            model_name='userresponse',
            name='otherSelectedPeople',
            field=models.JSONField(blank=True, default=list),
        ),
    ]
