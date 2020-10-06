import React, {useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import WorkersTable from './WorkersTable';
import plus from '../../logos/plus 1.png'
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    const [showWorkers,setShowWorkers] = useState([]);
    useEffect(() => {
        fetch('https://pacific-wildwood-01856.herokuapp.com/allUsers')
        .then(response => response.json())
        .then(data => setShowWorkers(data))
    },[])
    const handleDeleteWorker = (workerTaskId) => {
        fetch(`https://pacific-wildwood-01856.herokuapp.com/deleteWorker/${workerTaskId}`,{ 
            method: 'DELETE', 
        })
        .then( response => response.json())
        .then(result =>{
            if(result) {
                fetch('https://pacific-wildwood-01856.herokuapp.com/allUsers')
                .then(response => response.json())
                .then(data => setShowWorkers(data))
            }
        })
        
    }
    return (
        <Container>
            <h3 style={{textAlign: "center"}}>Volunteer Register List</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Registration Date</th>
                    <th>Volunteer List</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        showWorkers.map((worker=> <WorkersTable handleDeleteWorker={handleDeleteWorker} key={worker._id}  worker={worker}></WorkersTable>))
                    }
                </tbody>
            </Table>
            <Link to="/create-event"> 
                <Button style={{margin:"50px auto",display: "block"}}> 
                    <img src={plus} alt="" style={{width:"30px",height:"30px"}}/>Add Event
                </Button> 
            </Link>
        </Container>
    );
};

export default AdminPanel;