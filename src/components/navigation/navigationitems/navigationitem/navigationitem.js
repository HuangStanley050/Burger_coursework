import React from "react";
import { NavLink } from 'react-router-dom';
import "./navigationitem.css";

const navigationItem = (props) => {
    //var name = "active";
    //var no_name = null;
    return (
        <li className="NavigationItem">
            <NavLink exact={props.exact} activeClassName="active" to={props.link}>{props.children}</NavLink>
        </li>
    );
}

export default navigationItem;
