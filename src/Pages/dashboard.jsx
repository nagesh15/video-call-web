import React, { useContext,useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/sidebar";
import UserContext from "../store/UserContext";

import './dashboard.css'

const Dashboard = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(UserContext);

    useEffect(()=> {
        if(!isAuthenticated) {
          navigate('/');
        }
      }, [isAuthenticated])
    
    return ( 
        <div className="dashboard-container">
            <div className="side-container">
                <SideBar />
            </div>
            <main>
                <div className="main-header"></div>
                <div className="main-content">
                    {<Outlet />}
                </div>
            </main>    
        </div>
        
    )
};

export default Dashboard;