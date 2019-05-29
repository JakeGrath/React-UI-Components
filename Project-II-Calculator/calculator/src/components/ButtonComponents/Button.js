import React from 'react';
import './Button.css';

const Button = props => {
    return (
        <button className={props.buttonStyle}>{props.text}</button>
    )
}

export default Button;