import React,{Component} from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { updateEmployee } from '../services/employeeservice';



const UpdateEmployeeModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(props.employee.employeeId, e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Update Employee");
        })
    };

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Employee Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="name">
                                    <Form.Label>name</Form.Label>
                                    <Form.Control type="text" name="name" required defaultValue={props.employee.name} placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="ssn">
                                    <Form.Label>ssn</Form.Label>
                                    <Form.Control type="text" name="ssn" required defaultValue={props.employee.ssn} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="personal_email">
                                    <Form.Label>personal_email</Form.Label>
                                    <Form.Control type="text" name="personal_email" required defaultValue={props.employee.personal_email} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="company">
                                    <Form.Label>company</Form.Label>
                                    <Form.Control type="text" name="company" required defaultValue={props.employee.company} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="department">
                                    <Form.Label>department</Form.Label>
                                    <Form.Control type="text" name="department" required defaultValue={props.employee.department} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="role">
                                    <Form.Label>role</Form.Label>
                                    <Form.Control type="text" name="role" required defaultValue={props.employee.role} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="start_date">
                                    <Form.Label>start_date</Form.Label>
                                    <Form.Control type="text" name="start_date" required defaultValue={props.employee.start_date} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="end_date">
                                    <Form.Label>end_date</Form.Label>
                                    <Form.Control type="text" name="end_date" required defaultValue={props.employee.end_date} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="duties">
                                    <Form.Label>duties</Form.Label>
                                    <Form.Control type="text" name="duties" required defaultValue={props.employee.duties} placeholder="" />
                            </Form.Group>
                            <Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};


export default UpdateEmployeeModal;