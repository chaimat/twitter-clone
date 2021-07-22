# Main Imports

# Django Imports
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# My Module Imports
from authentication.models import BasicUserProfile
from hashtag.models import Topic

# ENUMS
# ------------
class TweetType(models.TextChoices):
    POST = 'POST', ('POST')
    ARTICLE = 'ARTICLE', ('ARTICLE')
    TRADE = 'TRADE', ('TRADE')

class Privacy(models.TextChoices):
    EVERYONE = 'EVERYONE', ('EVERYONE')
    FOLLOWERS = 'FOLLOWERS', ('FOLLOWERS')
    MEMBER = 'MEMBER', ('MEMBER')

class TradeType(models.TextChoices):
    BUY = 'BUY', ('BUY')
    SELL = 'SELL', ('SELL')
# ------------

# POST
# ------------
class Post(models.Model):
    id = models.AutoField(primary_key=True)
    # limit of centent
    content = models.TextField()
    pass
# ------------

# ARTICLE
# ------------
class Article(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=512)
    cover_photo = models.ImageField(
        upload_to="tweet_photo/", blank=True, null=True
    )
    content = models.TextField()
    pass
# ------------

# TRADE
# ------------
class Trade(models.Model):
    id = models.AutoField(primary_key=True)
    coin = models.CharField(max_length=512)
    trade_type = models.CharField(choices=TradeType.choices, default=TradeType.BUY, max_length=64)
    target = models.FloatField(default=10)
    stoploss = models.FloatField(default=1)
    in_progress = models.BooleanField()
    verified = models.BooleanField()
# ------------

# Tweet Model
# --------------
# This model holdes the records of tweets made by users
class Tweet(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(
        BasicUserProfile,
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )
    creation_date = models.DateField(default=timezone.now)
    update_date = models.DateField(default=timezone.now)
    archive = models.BinaryField()
    likes = models.IntegerField(default=0)
    comments = models.IntegerField(default=0)
    privacy = models.CharField(choices=Privacy.choices, default=Privacy.EVERYONE, max_length=64)
    tweet_type = models.CharField(choices=TweetType.choices, default=TweetType.POST, max_length=64)
    post_id = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )
    article_id = models.ForeignKey(
        Article,
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )
    trade_id = models.ForeignKey(
        Trade,
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )

    # Not needed
    content = models.TextField()
    image = models.ImageField(
        upload_to="tweet_photo/", blank=True, null=True
    )
    topic = models.ForeignKey(
        Topic,
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )
    tweet_like_amount = models.IntegerField(default=0)
    tweet_comment_amount = models.IntegerField(default=0)

    def __str__(self):
        return "Tweet id: " + str(self.id)

# Tweet Comment
# --------------
class TweetComment(models.Model):
    id = models.AutoField(primary_key=True)
    commentor = models.ForeignKey(
        BasicUserProfile,
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )
    creation_date = models.DateField(default=timezone.now)
    update_date = models.DateField(default=timezone.now)
    tweet = models.ForeignKey(
        Tweet,
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )
    content = models.TextField()
    likes = models.IntegerField(default=0)
    like_amount = models.IntegerField(default=0)

    def __str__(self):
        return "Comment id: " + str(self.id)

# Tweet Like
# --------------
class TweetLike(models.Model):
    id = models.AutoField(primary_key=True)
    creation_date = models.DateField(default=timezone.now)
    update_date = models.DateField(default=timezone.now)
    tweet = models.ForeignKey(
        Tweet,
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )
    liker = models.ForeignKey(
        BasicUserProfile,
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )

    like_count = models.IntegerField(default=0)

    def __str__(self):
        return "Like id: " + str(self.id)


# Tweet Comment Like
class TweetCommentLike(models.Model):
    id = models.AutoField(primary_key=True)
    creation_date = models.DateField(default=timezone.now)
    update_date = models.DateField(default=timezone.now)
    tweet_comment = models.ForeignKey(
        TweetComment,
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )
    liker = models.ForeignKey(
        BasicUserProfile,
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )
    like_count = models.IntegerField(default=0)

    def __str__(self):
        return "Like id: " + str(self.id)


# Not needed

# Tweet Retweet
# --------------
class TweetRetweet(models.Model):
    creation_date = models.DateField(default=timezone.now)
    id = models.AutoField(primary_key=True)
    tweet = models.ForeignKey(
        Tweet,
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )
    retweeter = models.ForeignKey(
        BasicUserProfile,
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )

    def __str__(self):
        return "Retweet id: " + str(self.id)


