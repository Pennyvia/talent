import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getDepartment } from '../services/departmentsservice';
import "../App.css";

const Department = () => {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
   let mounted = true;
   getDepartment()
     .then(data => {
       if(mounted) {
         setDepartment(data)
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
            <th>created_at</th>
            <th>updated_at</th>

            </tr>
        </thead>
        <tbody>
            {department.map((dept) =>
            <tr key={dept.id}>
                <td>{dept.name}</td>
                <td>{dept.created_at}</td>
                <td>{dept.updated_at}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Department;