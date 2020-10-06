import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import SingleTask from './SingleTask';

const UserTasksList = () => {
    const[userTasks,setUserTasks] = useState([]);
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://pacific-wildwood-01856.herokuapp.com/users?email='+loggedInUser.email)
        .then(response => response.json())
        .then(result => {
            setUserTasks(result)
        })
    },[userTasks])
    const handleCancelTask = (taskId) => {
        fetch(`https://pacific-wildwood-01856.herokuapp.com/delete/${taskId}`,{ 
            method: 'DELETE', 
        })
        .then( response => response.json())
        .then(result =>{
            if(result) {
                fetch('https://pacific-wildwood-01856.herokuapp.com/users?email='+loggedInUser.email)
                .then(response => response.json())
                .then(data => setUserTasks(data))
            }
        })
        
    }
    return (
        <Container> 
            <Row> 
                { 
                    userTasks.map(userTask => <SingleTask handleCancelTask={handleCancelTask} userTask={userTask} />)
                }
            </Row>
        </Container>
    );
};

export default UserTasksList;