import React from 'react';
import {Form,Col,Row,Button} from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="Contact">
            <h2>Contact Page</h2>
            <Form className="Form">
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={6}>
                    <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={6}>
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1" className="Message">
                    <Form.Label className="Label">Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit" className="Button">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Contact;
