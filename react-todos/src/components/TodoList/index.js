import React from 'react';

function TodoList(props) {
    return (
        <ul>
            {
                props.todos.map((item, index) => {
                    return (
                        <li key={index}>{ item.text }<button onClick={ () => props.onClick(index) }>C</button></li>
                    );
                })
            }
        </ul>
    );
}

export default TodoList;