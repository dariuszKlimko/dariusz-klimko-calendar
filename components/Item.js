import React  from 'react';

const Item = (props) => {

    return(
        <div className='item' style={{ textDecoration: props.item.complete ? "line-through" : "" }}>
            <button onClick={()=>props.completeItem(props.index)} className='todoAppClassButtonDone' >done</button>
            {props.item.title}
            <button onClick={()=>props.removeItem(props.index)}  className='todoAppClassButtonX'>x</button>
        </div>
    );
}

export default Item;

         