import React from 'react';
import { todoData } from '../../data/data';

function Todos() {
    return (
        <div className="todo">
            <div className="head">
                <h3>Todos</h3>
                <i className='bx bx-plus' ></i>
                <i className='bx bx-filter' ></i>
            </div>
            <ul className="todo-list">
                {
                    todoData.map(todo => {
                        return (
                            <li key={todo.id} className={todo.completed ? "completed" : "not-completed"}>
                                <p>{todo.title}</p>
                                <i className='bx bx-dots-vertical-rounded'></i>
                            </li>
                        )
                    })
                }                
            </ul>
        </div>
    )
}

export default Todos
