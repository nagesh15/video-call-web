import React, {useState} from "react";
import { FaBars, FaHome } from 'react-icons/fa';
import {FiPhoneCall} from 'react-icons/fi'
import { Link, NavLink } from "react-router-dom";
import './sidebar.css';


const SideBar = () => {
    const [isToggle, setIsToggle] = useState(true);

    //when menu button is clicked
    const toggleHanlder = () => {
        setIsToggle(!isToggle);
    }

    return (
        <>
            <div className="sidebar" style={{width : isToggle ? '190px' : '50px'}}>
                <div className="name-section">
                    <h1 className="user-name" style={{display : isToggle ? 'block' : 'none'}}>Hi Sandeep</h1>
                    <div className="bars" style={{marginLeft : isToggle ? '30px': '0px'}}><FaBars onClick={toggleHanlder}/></div>
                </div>
            </div>
            <NavLink to="/dashboard" className='link'>
                <div className="icon"><FaHome/></div>
                <div className="name" style={{display : isToggle ? 'block' : 'none'}}>Home</div>
            </NavLink>
            <NavLink to="call_history" className='link'>
                <div className="icon"><FiPhoneCall /></div>
                <div className="menu-name" style={{display : isToggle ? 'block' : 'none'}}>Call History</div>
            </NavLink>
            <NavLink to="logout" className='link'>
                <div className="icon"><FiPhoneCall /></div>
                <div className="menu-name" style={{display : isToggle ? 'block' : 'none'}}>Logout</div>
            </NavLink>
        </>
    );
};

export default SideBar;