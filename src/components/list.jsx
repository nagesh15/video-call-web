import React from "react";
import "./list.css";

const List = (props) => {
    return (
        <>
            <li>
                <div className="name">{props.name}</div>
                <div className="date">{props.date}</div>
                <div className="icon">{props.icon}</div>
            </li>
        </>
    );
};

export default List;
