import React from 'react';
import './ToDoListTemplate.css';

const ToDoList = ({children}) => {
    return (
        <div className="container">
            <div className="head">
                <h1 className="title">ToDoList</h1>
            </div>
            {children}
        </div>
    );
}

export default ToDoList;