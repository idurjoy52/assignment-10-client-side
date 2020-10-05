import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CharityWork = (props) => {
    const {charityName,img} = props.work;
    return (
        <div>
            <Col lg={3} md={4} xs={12}> 
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Link to ={`/charitywork/${charityName}`}><Button>{charityName}</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default CharityWork;