import React, { useState } from "react";
import List from "../components/list";
import {IoIosCall} from 'react-icons/io'
import "./home.css";
import CallDialog from "../components/CallDialog";

const users = [
    {
        name : 'Ram',
        Date : '17-02-2023',
    },
    {
        name : 'Niraj',
        Date : '18-02-2023',
    },
]

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const makeCallHandler = () => {
        setShowModal(true);
    } 

    const closeHandler = () => {
        setShowModal(false);
    }
        
    return (
        <div className="home-container">
            <div className="call-btn">
                <div className="content">
                    <button onClick={makeCallHandler}>Make a Call</button>
                    {showModal && <CallDialog open ={!showModal} close={closeHandler} />}
                </div>
            </div>
            <div className="recent-call-container">
                <h1>Recent Calls</h1>
                {users.length===0 && <p>Sorry no users available</p>}
                {users.length >0 && <ul className="call-list">
                    <div className='header'>
                        <div className="name">Call Name</div>
                        <div className="date">Date</div>
                        <div className="icon">Call Again</div>
                    </div>
                    {users.map((user,index) => {
                        return <List
                        key = {index}
                        name= {user.name}
                        date= {user.Date}
                        icon= {<IoIosCall  />}
                    />
                    })}
                </ul>}
            </div>
        </div>
    );
};

export default Home;
