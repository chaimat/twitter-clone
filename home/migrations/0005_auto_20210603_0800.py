# Generated by Django 3.2.2 on 2021-06-03 08:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_tweetcommentlike'),
    ]

    operations = [
        migrations.AddField(
            model_name='tweetcommentlike',
            name='like_count',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='tweetlike',
            name='like_count',
            field=models.IntegerField(default=0),
        ),
    ]