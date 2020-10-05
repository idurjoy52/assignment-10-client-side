import React, { useContext } from 'react';
import './Register.css'
import {useHistory, useParams } from 'react-router-dom';

import { UserContext } from '../../App';


const Register = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var description;
    const history = useHistory();
    const{workname} = useParams()
    const[loggedInUser,setLoggedInUser] = useContext(UserContext);
    
    const handleBlur = (e) => {
        description = e.target.value;
    }
    const handleSubmit = (e) => {
        const workerDetails = {...loggedInUser,description:description,task:workname,date:date};
        fetch('https://pacific-wildwood-01856.herokuapp.com/addUser',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(workerDetails)
        })
        .then(response => response.json())
        .then(result => {
            
        })
        history.push('/my-tasks')
        e.preventDefault();
        
    }
    return (
        <div className="registration-form">
            <form onSubmit={handleSubmit}> 
                <input type="text" name="name" id="" defaultValue ={loggedInUser.name}/>
                <input type="email" name="email" id=""  defaultValue ={loggedInUser.email}/>
                
                <input type="text" name="date" id=""  defaultValue={date}/>
            
                <input type="text" name="description" id="" onBlur={handleBlur} placeholder="Description"/>
                
                <input type="text" name="workname" id="" defaultValue={workname}/>
                
                 <input type="submit" value="Registration"/>
            </form>
        </div>    
        
    );
};

export default Register;