import axios from 'axios';

export function getEmployee() {
  return axios.get('http://127.0.0.1:8000/employee/')
    .then(response => response.data)
}

export function deleteEmployee(employeeId) {
  return axios.delete('http://127.0.0.1:8000/employee/' + employeeId + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addEmployee(employee){
  return axios.post('http://127.0.0.1:8000/employee/', {
    employee:null,
    name:employee.name.value,
    ssn:employee.ssn.value,
    personal_email:employee.personal_email.value,
    company:employee.company.value,
    department:employee.department.value,
    role:employee.role.value,
    start_date:employee.start_date.value,
    end_date:employee.end_date.value,
    duties:employee.duties.value
  })
    .then(response=>response.data)
}

export function updateEmployee(empid, employee) {
  return axios.put('http://127.0.0.1:8000/employee/' + empid + '/', {
    name:employee.name.value,
    ssn:employee.ssn.value,
    personal_email:employee.personal_email.value,
    company:employee.company.value,
    department:employee.department.value,
    role:employee.role.value,
    start_date:employee.start_date.value,
    end_date:employee.end_date.value,
    duties:employee.duties.value,
    created_at:employee.created_at.value,
    updated_at:employee.updated_at.value
  })
   .then(response => response.data)
}