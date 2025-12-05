import React from 'react';

const Task = (props) => {
const priorityColor = props.priority === "High" ? "red"
                    : props.priority === "Medium" ? "orange"
                    : "green";

       return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priorityLabel" style={{backgroundColor: priorityColor}}><b>{props.priority}</b></p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}

export default Task;