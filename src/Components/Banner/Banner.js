import React from 'react';
import { Button, Container, Form, FormControl } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <Container>  
            <div className="banner-area"> 
                <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
                <Form inline>
                    <div className="m-auto">
                        <FormControl type="text" placeholder="Search"/>
                        <Button variant="primary">Search</Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default Banner;