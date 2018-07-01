import React from "react";
import "./navigationitems.css";
import NavigationItem from "./navigationitem/navigationitem.js";

const navigationItems = (props) => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" exact >Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
            {props.isAuthenticated? <NavigationItem link="/auth">Authenticate</NavigationItem> : <NavigationItem link="/logout">Logout</NavigationItem>}
            </ul>
    );

};

export default navigationItems;
