import React from 'react';
import './InputComponent.css';
import { useState } from "react";
  
export default function InputComponent() {
  const [text, setText] = useState("");

  const getInput = (t) => {
    console.log(t);
    setText(t);
  };

  return (
    <div className="input-parent-container">
      <Component getInput={getInput} value={text} />
      <p className='input-text-output'>{text}</p>
    </div>
  );
}

const Component = ({ getInput, value }) => {
  return (
    <>
    <div className='input-child-container'>
      <h1 className='input-child-header'> Type in the box bellow</h1>
      <input className='input-child-box' type="text" value={value} onChange={(e) => getInput(e.target.value)}></input>
    </div>
    </>
  );
};