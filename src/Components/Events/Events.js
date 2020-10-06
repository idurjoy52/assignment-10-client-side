import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Event from './Event';

const Events = () => {
    const [events,setEvents] = useState([])
    useEffect(()=> {
        fetch('https://pacific-wildwood-01856.herokuapp.com/allEvents')
        .then(response => response.json())
        .then(data => setEvents(data))
    },[events])
    return (
        <Container> 
            <div style={{textAlign:"center"}}>
                {events.length>0 && <h1>Upcoming Events: {events.length}</h1>}
                
                { 
                    events.map(event => <Event event={event}></Event>)
                }
            </div>
        </Container>
    );
};

export default Events;