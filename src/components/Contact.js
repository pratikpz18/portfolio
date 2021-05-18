import React,{ useState } from 'react';
import emailjs from 'emailjs-com';
import emaildata from '../email';
import {Form,Col,Row,Button,Navbar,Container,NavbarBrand} from 'react-bootstrap';

const Contact = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(name,email,message);
        // console.log(emaildata);
        emailjs.sendForm(emaildata[0], emaildata[1], event.target, emaildata[2])
            .then((result) => {
                alert("Message Sent, We will get back to you shortly", result.text);
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                alert("An error occurred, Please try again", error.text);
            });
    }

    return (
        <div>
            <div className="Contact">
            <h2>Contact Page</h2>
            <Form className="Form" onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={1} className="Name">
                    Name
                    </Form.Label>
                    <Col sm={6}>
                    <Form.Control type="text" placeholder="Name" value={name} name='name'
                        onChange={e => setName(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={1} className="Email">
                    Email
                    </Form.Label>
                    <Col sm={6}>
                    <Form.Control type="email" placeholder="Email" value={email} name='email'
                        onChange={e => setEmail(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1" className="Message">
                    <Form.Label className="Label">Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Text Your Message to Me" rows={3} value={message} name='message'
                        onChange={e => setMessage(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit" className="Button">
                    Submit
                </Button>
            </Form>
        </div>
            
            {/* Footer */}
            <div className="footer">  
                <Navbar bg="dark" variant="dark" className="footer-data">
                    <Container>
                        <NavbarBrand className="brand">Copyright© Pratik Zinjurde &nbsp;<i className="fa fa-envelope-o" aria-hidden="true">&nbsp;zinjurdepratik.pz@gmail.com</i></NavbarBrand>
                    </Container>
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="icons">
                    </Navbar.Text>
                </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default Contact;
