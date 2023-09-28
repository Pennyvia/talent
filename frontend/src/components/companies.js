import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getCompanies } from '../services/companiesservice';
import "../App.css";
import { Tooltip } from 'react-bootstrap';

const Company = () => {
  const [company, setCompany] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
   let mounted = true;
   getCompanies()
     .then(data => {
       if(mounted) {
         setCompany(data)
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
            <th style={{width: '10%'}}>name</th>
            <th style={{width: '15%'}}>registration</th>
            <th style={{width: '150px'}}>registration_number</th>
            <th style={{width: '10%'}}>address</th>
            <th style={{width: '10%'}}>phone</th>
            <th style={{width: '15%'}}>email</th>
            <th style={{width: '15%'}}>departments</th>
            <th style={{width: '150px'}}>number_employees</th>
            <th style={{width: '15%'}}>created_at</th>
            <th style={{width: '15%'}}>updated_at</th>

            </tr>
        </thead>
        <tbody>
            {company.map((comp) =>
            <tr key={comp.id}>
                <td>{comp.name}</td>
                <td>{comp.registration}</td>
                <td>
                    <div
                        onClick={() => setShowTooltip(!showTooltip)}
                        className="truncate"
                        >
                        {comp.registration_number.substring(0, 20)}...
                      </div>

                      {showTooltip && (
                        <Tooltip title={comp.registration_number}>
                          {comp.registration_number}
                        </Tooltip>
                      )}
                </td>
                <td>{comp.address}</td>
                <td>{comp.phone}</td>
                <td>{comp.email}</td>
                <td>{comp.departments}</td>
                <td>{comp.number_employees}</td>
                <td>{comp.created_at}</td>
                <td>{comp.updated_at}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Company;