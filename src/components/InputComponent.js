import React, { useState, useEffect } from 'react';
import './InputComponent.css';

export default class InputComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputQuery: ""
    }
  }

  handleInputChanged(event) {
    this.setState({
      inputQuery: event.target.value
    });
  }

  handleButtonClicked(event) {
    const inputQuery = this.state.inputQuery;
    const showDateAndTime = alert(new Date());

    // Check if input is negative and alert date
    if (inputQuery <= 0) {
      showDateAndTime();
    } else {
      alert(inputQuery);
    }
  }

  render() {
    return  (
      <div className='input-container'>
        <p className='input-header'>Note: You can only inout an "Array", a "Negative number" and "Anything else"</p>
        <input className='input-box' type="text" value={this.state.inputQuery} onChange={this.handleInputChanged.bind(this)}/>
        <button className='input-button' onClick={this.handleButtonClicked.bind(this)}>
          Submit
        </button>
      </div>
    );
  }
}