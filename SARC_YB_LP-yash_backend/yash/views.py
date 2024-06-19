from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from response.models import userResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def submitPage(request):
    return render(request, "submitPage.html")

@csrf_exempt
def index(request):
   return render(request, "index.html")

@csrf_exempt
def userResponse(request):
    if request.method=="POST":
      fullname=request.POST.get('name')#inluding name attribute given to the form
      email=request.POST.get('gmail')
      roll=request.POST.get('rollno')
      phone=request.POST.get('phoneno')
      ldap=request.POST.get('ldapemail')
      department=request.POST.get('dept')
      degree=request.POST.get('degree')
      typeofcopies=request.POST.get('address')
      ncopies=request.POST.get('nos')
      liststudents=request.POST.get('liststudents')
      comments=request.POST.get('comments')
      data=userResponse(name=fullname, gmail=email, rollno=roll, phoneno=phone, ldapemail=ldap, dept=department, degree=degree,
                      address=typeofcopies, nos=ncopies, liststudents=liststudents, comments=comments)
      data.save()
    return render(request,"submitPage.html")