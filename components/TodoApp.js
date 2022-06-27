import React from 'react';
import Todo from './Todo';
import Item from './Item';

const TodoApp = (props) => {

    const addItems = (title) =>{
        props.addItems(title);
    };

    const completeItem = (index) =>{
        props.completeItem(index);
    };

    const removeItem = (index) =>{
        props.removeItem(index);
    };

    const buttonClick = (e) =>{
        props.closeTodo();
        e.preventDefault();
    };
    
    return(
            <div className='todoAppClass'>
                <div>
                    <div className='numberContainer'>{props.dayItem}</div>
                </div>
                <div>
                    <div className='TodoApp'>
                        {props.items.map((e, index) =>(
                            <Item 
                            item={e}
                            index={index}
                            removeItem={removeItem}
                            completeItem={completeItem}
                            key={index}
                            />
                        ))}
                            <Todo
                            addItems={addItems}     
                            />
                     </div>
                </div>
                <button onClick={buttonClick} className='todoAppClassButton'>back</button>
            </div>
    );
}

export default TodoApp;