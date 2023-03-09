import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import UserContext from "../store/UserContext";
import "./logout.css";


const Logout = (props) => {
    const [isOpen,setIsOpen] = useState(false);
    const {isAuthenticated ,setIsAuthenticated} = useContext(UserContext);
    const navigate = useNavigate();

    const modalClose = () => {
        setIsOpen(true);
        navigate('/dashboard');
    }

    const logoutHandler = () => {
        if(isAuthenticated) {
            setIsAuthenticated(false);
        }
    }

    return (
        <Modal open={isOpen} close={modalClose}>
            <div className="logout-container">
                <div className="text">
                    <h4>Are you sure,</h4>
                    <h4>you want to logout?</h4>
                </div>
                <div className="btn-container">
                    <button className="button btn-cancel" onClick={modalClose}>Cancel</button>
                    <button className="button btn-logout" onClick={logoutHandler}>LogOut</button>
                </div>
            </div>
        </Modal>
    );
};

export default Logout;
