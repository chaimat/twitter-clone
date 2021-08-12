from django.http import HttpRequest, HttpResponse
import json

from .models import Tweet, TweetLike, TweetComment, Post, Article, Trade
from utils.session_utils import get_current_user, get_current_user_profile
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.models import User

def create_tweet(request: HttpRequest):
    # print(request)
    # print(request.body["tweet_type"])

    # body_unicode = request.body.decode('utf-8')
    # body = json.loads(body_unicode)
    # print(body)
    # content = body['content'] 
    # print(content)
    # print(request.__dict__)
    print("reached create_tweet")
    tweet_type = request.POST.get("tweet_type")
    print(tweet_type)
    if tweet_type == "opinion":
        return create_opinion(request)
    elif tweet_type == "research":
        return create_research(request)
    elif tweet_type == "trade":
        return create_trade(request)

def create_opinion(request):
    # verify request params
    current_basic_user = get_current_user(request, User, ObjectDoesNotExist)
    print("reached create_opinion 1")
    content = request.POST.get("content")
    print(content)
    print("reached")
    post = Post(content=content)
    tweet = Tweet(user=current_basic_user, post_id=post.id, content=content)
    post.save()
    tweet.save()
    print("Opnion saved")
    return HttpResponse("Opinion done")

def create_research(request):
    # verify request params
    # Get the current users
    current_basic_user = get_current_user(request, User, ObjectDoesNotExist)
    content = request.POST.get("content")
    title = request.POST.get("title")
    art = Article(title=title, content=content)
    tweet = Tweet(user=current_basic_user, article_id=art.id, content=content)
    art.save()
    tweet.save()
    return HttpResponse("Research done")

def create_trade(request):
    # verify request params
    current_basic_user = get_current_user(request, User, ObjectDoesNotExist)
    content = request.POST.get("content")
    coin = request.POST.get("coin")
    trade_type = request.POST.get("trade_type")
    trade = Trade(coin=coin, trade_type=trade_type,in_progress=False, verified=False)
    tweet = Tweet(user=current_basic_user, trade_id=trade.id, content=content)
    trade.save()
    tweet.save()
    return HttpResponse("Trade done")
