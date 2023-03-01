import React,{useState} from "react";
import ReactDOM from 'react-dom';
import './modal.css';

const Modal = (props) => {

    if(props.open) return null;

    return ReactDOM.createPortal(
        <>
            <div className="overlay" onClick={props.close}></div>
            <div className="modal">
                {props.children}
            </div>
        </>, 
        document.getElementById('portal')
    )
}


export default Modal;
