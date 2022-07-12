import React from 'react';
import './InputComponent.css';
 
const InputComponent = () => {
  return (
    <div className="input-container">
        <p className='input-header'>Note: You can only input a "falsy value", an "array" or "anything else"</p>
        <input className='input-body' type="text"></input>
    </div>
  );
}
 
export default InputComponent;