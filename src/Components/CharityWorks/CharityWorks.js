import React, { useEffect, useState } from 'react';
import {Container, Row } from 'react-bootstrap';
// import charityWorks from '../../fakeDatas/fakeDataAssTen'
import CharityWork from './CharityWork';
const CharityWorks = () => {
    const [works,setWorks] = useState([])
    useEffect(()=>{
        fetch('https://pacific-wildwood-01856.herokuapp.com/allTasks')
        .then(response => response.json())
        .then(data => setWorks(data))
    },[])
    return (
        <Container> 
            <Row> 
                { 
                    works.map(work => <CharityWork key={work.key} work={work} />)
                }
            </Row>
            
        </Container>
    );
};

export default CharityWorks;