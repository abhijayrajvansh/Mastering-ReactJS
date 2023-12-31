import React from 'react';
import Todoitem from './Todoitem';
import './style.css';

const Todo: React.FC = () => {
    return (
        <div className='todoContainer'>
            <ol>
                <Todoitem />
                <Todoitem />
                <Todoitem />
            </ol>
        </div>
    )
}

export default Todo;