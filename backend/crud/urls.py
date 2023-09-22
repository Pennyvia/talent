from django.urls import path
from .views import DepartmentView, EmployeeView, CompanyView


urlpatterns = [
  path('employee/', EmployeeView.as_view()),
  path('employee/<int:id>/', EmployeeView.as_view()),
  path('crud1/', CompanyView.as_view()),
  path('crud1/<int:id>/', CompanyView.as_view()),
  path('crud2/', DepartmentView.as_view()),
  path('crud2/<int:id>/', DepartmentView.as_view()),
]
