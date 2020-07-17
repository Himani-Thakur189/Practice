import React, { Component } from 'react';
import './style.css'
const CustomButton = ({ name, handleClick }) => {
    return (<button className='btn' onClick={() => handleClick()}>
        {name}
    </button>);
}

export default CustomButton;