import React,{useRef, useState} from "react";
import './CallDialog.css';
import Modal from './modal'

const CallDialog = (props) => {
    const username = useRef();
    // const [isOpen,setIsOpen] = useState(false);

    // const modalClose = () => {
    //     setIsOpen(!isOpen);
    // }

    return (
        <>
            <Modal open={props.open} close={props.close}>
                <div className="dialog-container">
                    <div className="input">
                        <p>Please enter username</p>
                    </div>
                    <div className="input">
                        <input type="text" name="username" ref={username} />
                    </div>
                    <div className="btn-container">
                        <button className="btn-cancel " onClick={props.close}>Cancel</button>
                        <button className="btn-call">Call</button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default CallDialog;
