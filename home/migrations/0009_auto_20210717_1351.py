# Generated by Django 3.1.12 on 2021-07-17 13:51

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0008_tweet_tweet_comment_amount'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=512)),
                ('cover_photo', models.ImageField(blank=True, null=True, upload_to='tweet_photo/')),
                ('content', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('content', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Trade',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('coin', models.CharField(max_length=512)),
                ('trade_type', models.CharField(choices=[('BUY', 'BUY'), ('SELL', 'SELL')], default='BUY', max_length=64)),
                ('target', models.FloatField()),
                ('stoploss', models.FloatField()),
                ('in_progress', models.BooleanField()),
                ('verified', models.BooleanField()),
            ],
        ),
        migrations.AddField(
            model_name='tweet',
            name='archive',
            field=models.BinaryField(default=None),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='tweet',
            name='comments',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='tweet',
            name='likes',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='tweet',
            name='privacy',
            field=models.CharField(choices=[('EVERYONE', 'EVERYONE'), ('FOLLOWERS', 'FOLLOWERS'), ('MEMBER', 'MEMBER')], default='EVERYONE', max_length=64),
        ),
        migrations.AddField(
            model_name='tweet',
            name='tweet_type',
            field=models.CharField(choices=[('POST', 'POST'), ('ARTICLE', 'ARTICLE'), ('TRADE', 'TRADE')], default='POST', max_length=64),
        ),
        migrations.AddField(
            model_name='tweet',
            name='update_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='tweetcomment',
            name='likes',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='tweetcomment',
            name='update_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='tweetcommentlike',
            name='update_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='tweetlike',
            name='update_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='tweet',
            name='article_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='home.article'),
        ),
        migrations.AddField(
            model_name='tweet',
            name='post_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='home.post'),
        ),
        migrations.AddField(
            model_name='tweet',
            name='trade_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='home.trade'),
        ),
    ]
