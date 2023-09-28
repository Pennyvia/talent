import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getEmployee } from '../services/employeeservice';
import "../App.css";
import { Tooltip } from 'react-bootstrap';

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showstartdate, setShowstartdate] = useState(false);

  useEffect(() => {
   let mounted = true;
   getEmployee()
     .then(data => {
       if(mounted) {
         setEmployee(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
   <div className="container-fluid side-container" style={{overflowX: 'auto'}}>
   <div className="row side-row" >
    <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable" style={{width:'100%', tableLayout:'fixed'}}>
        <thead>
            <tr>
            <th>name</th>
            <th>ssn</th>
            <th style={{width: '15%'}}>personal_email</th>
            <th>company</th>
            <th style={{width: '10%'}}>department</th>
            <th>role</th>
            <th>start_date</th>
            <th>end_date</th>
            <th style={{width: '10%'}}>duties</th>
            <th>created_at</th>
            <th>updated_at</th>

            </tr>
        </thead>
        <tbody>
            {employee.map((emp) =>
            <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.ssn}</td>
                <td>
                    <div
                        onClick={() => setShowTooltip(!showTooltip)}
                        className="truncate"
                        >
                        {emp.personal_email.substring(0, 20)}...
                      </div>

                      {showTooltip && (
                        <Tooltip title={emp.personal_email}>
                          {emp.personal_email}
                        </Tooltip>
                      )}
                </td>
                <td>{emp.company}</td>
                <td>{emp.department}</td>
                <td>{emp.role}</td>
                <td>
                  <div onClick={() => setShowstartdate(!showstartdate)}>
                    {emp.start_date.substring(0, 10)}...
                  </div>

                  {showstartdate &&
                    <Tooltip>{emp.start_date}</Tooltip>
                  }
                </td>
                <td>{emp.end_date}</td>
                <td>{emp.duties}</td>
                <td>{emp.created_at}</td>
                <td>{emp.updated_at}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Employee;