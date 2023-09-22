from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Department, Company, Employee
from .serializers import DepartmentSerializer, EmployeeSerializer, CompanySerializer


class DepartmentView(APIView):

    @staticmethod
    def get(request):
        departments = Department.objects.all()
        serializer = DepartmentSerializer(departments, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = DepartmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def put(self, request, id):
        departments = Department.objects.get(id=id)
        serializer = DepartmentSerializer(departments, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, id):
        departments = Department.objects.get(id=id)
        departments.delete()
        return Response(status=204)


class CompanyView(APIView):

    @staticmethod
    def get(request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def put(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, id):
        companies = Company.objects.get(id=id)
        companies.delete()
        return Response(status=204)


class EmployeeView(APIView):

    @staticmethod
    def get(request):
        employees = Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    @staticmethod
    def put(self, request, id):
        employee = Employee.objects.get(id=id)
        serializer = EmployeeSerializer(employee, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, id):
        employee = Employee.objects.get(id=id)
        employee.delete()
        return Response(status=204)