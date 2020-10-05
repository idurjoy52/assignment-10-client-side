import React from 'react';

const Event = (props) => {
    const {eventTitle,eventDescription,eventDate} = props.event;
    return (
        <div style={{ backgroundColor:"#8395a7",margin: "20px 0"}}>
            <h3>Event Title: <small>{eventTitle}</small> </h3> 
            <h4>Event Description: <small>{eventDescription}</small></h4>
            <h5>Event Date: <small>{eventDate}</small></h5>
        </div>
    );
};

export default Event;