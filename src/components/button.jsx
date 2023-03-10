import React from "react";
import './button.css'

const Button = (props) => {
    return (
        <button type={props.type} className="button" >
            {props.children}
        </button>
    );
};

export default Button;