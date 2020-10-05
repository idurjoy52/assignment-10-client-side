import React from 'react';
import { Button } from 'react-bootstrap';
import trash from '../../logos/trash-2 9.png'

const WorkersTable = (props) => {
    const {_id,name,email,task,date} = props.worker;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{task}</td>
            <td>
                <Button variant="danger" onClick={()=>props.handleDeleteWorker(_id)}>
                    <img style={{width:"30px",height:"30px"}} src={trash} alt=""/>
                </Button>
            </td>
      </tr>
    );
};

export default WorkersTable;