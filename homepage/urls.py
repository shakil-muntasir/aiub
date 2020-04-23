from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage, name='home'),
    path('about/', views.about, name='about'),
    path('information/', views.information, name='information'),
    path('generalinformation/', views.generalinformation, name='generalinformation'),
    path('rules_of_entry/', views.rules_of_entry, name='rules_of_entry'),
    path('why_study_here/', views.why_study_here, name='why_study_here'),
    path('resources/', views.resources, name='resources'),
    path('career/', views.career, name='career'),
    path('convocation/', views.convocation, name='convocation'),
    path('video/', views.video, name='video'),
    path('academics/', views.academics, name='academics'),
    path('regulations/', views.regulations, name='regulations'),
    path('calender/', views.calender, name='calender'),
    path('vice_chancellor/', views.vice_chancellor, name='vice_chancellor'),
    path('register/', views.register, name='register'),
    path('admission/', views.admission, name='admission'),
    path('contact/', views.contact, name='contact'),


]