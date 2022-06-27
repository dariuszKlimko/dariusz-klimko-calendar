import React, {useState} from 'react';

const Todo = (props) => {

    const [text, setText] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if(!text) return;
        props.addItems(text);
        setText('');
    };

    return(
        <div >
                <form onSubmit={handleSubmit}>
                    <input 
                        className='Todo'
                        type='text' 
                        placeholder='Your todo...'
                        value={text}
                        onChange={e=>setText(e.target.value)}
                    />
                </form>
        </div>
    );
}

export default Todo;

