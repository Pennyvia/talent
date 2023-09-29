import React,{ useEffect, useState }from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import AddEmployeeModal from "./AddEmployeeModal";
import UpdateEmployeeModal from "./UpdateEmployeeModal";
import { getEmployee, deleteEmployee } from '../services/employeeservice';
import Tooltip from 'react-bootstrap/Tooltip';


const Manage = () => {
    const [employee, setEmployee] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editEmployee, setEditEmployee] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [showstartdate, setShowstartdate] = useState(false);

    useEffect(() => {
       let mounted = true;
       if(employee.length && !isUpdated) {
        return;
        }
       getEmployee()
         .then(data => {
           if(mounted) {
             setEmployee(data);
           }
         })
       return () => {
          mounted = false;
          setIsUpdated(false);
       }
     }, [isUpdated, employee])

    const handleUpdate = (e, emp) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditEmployee(emp);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    };

    const handleDelete = (e, employeeId) => {
        if(window.confirm('Are you sure ?')){
            e.preventDefault();
            deleteEmployee(employeeId)
            .then((result)=>{
                alert(result);
                setIsUpdated(true);
            },
            (error)=>{
                alert("Failed to Delete Employee");
            })
        }
    };

    let AddModelClose=()=>setAddModalShow(false);
    let EditModelClose=()=>setEditModalShow(false);
    return(
        <div className="container-fluid side-container">
        <div className="row side-row" >
        <p id="manage"></p>
            <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
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
                  <td>

                  <Button className="mr-2" variant="danger"
                    onClick={event => handleDelete(event,emp.employeeId)}>
                        <RiDeleteBin5Line />
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <Button className="mr-2"
                    onClick={event => handleUpdate(event,emp)}>
                        <FaEdit />
                  </Button>
                  <UpdateEmployeeModal show={editModalShow} employee={editEmployee} setUpdated={setIsUpdated}
                              onHide={EditModelClose}></UpdateEmployeeModal>
                </td>
                </tr>)}
              </tbody>
            </Table>
            <ButtonToolbar>
                <Button variant="primary" onClick={handleAdd}>
                Add Employee
                </Button>
                <AddEmployeeModal show={addModalShow} setUpdated={setIsUpdated}
                onHide={AddModelClose}></AddEmployeeModal>
            </ButtonToolbar>
        </div>
        </div>
    );
};

export default Manage;