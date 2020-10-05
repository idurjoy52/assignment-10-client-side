import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import img from '../../image/extraVolunteer.png'

const SingleTask = (props) => {
    const{_id,task,date} = props.userTask;
    return (
        <Col lg={3} md={4} xs={12}> 
            <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h3>{task}</h3>
                        <h5>{date}</h5>
                        <Button onClick={()=>props.handleCancelTask(_id)}>Cancel</Button>
                    </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleTask;