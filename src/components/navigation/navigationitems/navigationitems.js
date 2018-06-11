import React from "react";
import "./navigationitems.css";
import NavigationItem from "./navigationitem/navigationitem.js";

const navigationItems = () => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" exact >Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
            </ul>
    );

};

export default navigationItems;
