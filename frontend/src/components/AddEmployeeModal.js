import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { addEmployee } from '../services/employeeservice';


const AddEmployeeModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Add Student");
        })
    }

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Fill In Employee Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="name">
                                    <Form.Label> name</Form.Label>
                                    <Form.Control type="text" name="name" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="ssn">
                                    <Form.Label>ssn</Form.Label>
                                    <Form.Control type="text" name="ssn" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="personal_email">
                                    <Form.Label>personal_email</Form.Label>
                                    <Form.Control type="text" name="personal_email" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="company">
                                    <Form.Label>company</Form.Label>
                                    <Form.Control type="text" name="company" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="department">
                                    <Form.Label>department</Form.Label>
                                    <Form.Control type="text" name="department" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="role">
                                    <Form.Label>role</Form.Label>
                                    <Form.Control type="text" name="role" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="start_date">
                                    <Form.Label>start_date</Form.Label>
                                    <Form.Control type="text" name="start_date" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="end_date">
                                    <Form.Label>end_date</Form.Label>
                                    <Form.Control type="text" name="end_date" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="duties">
                                    <Form.Label>duties</Form.Label>
                                    <Form.Control type="text" name="duties" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="created_at">
                                    <Form.Label>created_at</Form.Label>
                                    <Form.Control type="text" name="created_at" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="updated_at">
                                    <Form.Label>updated_at</Form.Label>
                                    <Form.Control type="text" name="updated_at" required placeholder="" />
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

export default AddEmployeeModal;