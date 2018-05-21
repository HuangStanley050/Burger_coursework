import React from "react";
import "./navigationitem.css";

const navigationItem = (props) => {
    //var name = "active";
    //var no_name = null;
    return (
        <li className="NavigationItem">
            <a className={props.active?"active":null } href={props.link}>{props.children}</a>
        </li>
    );
}

export default navigationItem;
