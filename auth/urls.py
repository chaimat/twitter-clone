from django.urls import path
from . import views

urlpatterns = [
    # signup Page
    path("auth/signup/", views.signup, name="signup"),
    # login page
    path("auth/login/", views.login, name="login"),
    # logout
    path("auth/logout", views.logout, name="logout"),
]
