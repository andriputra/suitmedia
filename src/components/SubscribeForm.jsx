import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Subscribe = () => {
    return(
        <div className="subscribe-form box">
            <div className="subscribe-form text">
                Register now so you don't miss our programs
            </div>
            <div className="subscribe-form form">
                <Form className="d-flex" role="search">
                    <Form.Control className="form-control" type="email" placeholder="Enter your Email" aria-label="Email"/>
                    <Button className="btn btn-primary" type="submit">Subscribe Now</Button>
                </Form>
            </div>
        </div>
    )
}

export default Subscribe;
