import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const CreateEvent = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var eventTitle;
    var eventDescription;
    const history = useHistory()
    const handleTitleBlur = (e) => {
        eventTitle = e.target.value;
    }
    const handleDescriptionBlur = (e) => {
        eventDescription = e.target.value;
    }
 
    const handleEventSubmit = (e) => {
        const eventDetails ={eventTitle:eventTitle, eventDescription:eventDescription,eventDate:date};
        fetch('https://pacific-wildwood-01856.herokuapp.com/addEvent',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(eventDetails)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        e.preventDefault();
        history.push('/home')  
    }
    return (
        <div>
            <Container> 
                <h3 style={{textAlign: 'center'}}>Add event</h3>
                <div className="registration-form">
            <form onSubmit={handleEventSubmit}> 
                <label htmlFor="title">Event Title</label>
                <input type="text" name="title" id="title" onBlur={handleTitleBlur}/>
                <label htmlFor="description">Event Description</label>
                <input type="text" name="description" id="description" onBlur={handleDescriptionBlur}/>
                <label htmlFor="date">Event Date</label>
                <input type="text" name="date" id="date"  defaultValue={date}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>    
            </Container>
        </div>
    );
};

export default CreateEvent;