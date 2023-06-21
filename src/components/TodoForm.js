import React, { useState } from 'react';
import shortid from 'shortid';

const TodoForm = (props) => {
    const [text,setText]=useState("");
     const hanhandleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: shortid.generate(),
            text:text,
            complete:false,
        });
        setText("");
     }
     
  return (
    <form onSubmit={hanhandleSubmit}>
        <input className='input-field' type='text' onChange={(e)=> {
            setText(e.target.value)
        }} value={text}/>
        <button className='btn' onClick={hanhandleSubmit}>Add Todo</button>
    </form>
  )
}

export default TodoForm;
