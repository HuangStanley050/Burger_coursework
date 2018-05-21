import React from "react";
import "./navigationitems.css";
import NavigationItem from "./navigationitem/navigationitem.js";

const navigationItems = () => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
            <NavigationItem link="/checkout">CheckOUt</NavigationItem>
            </ul>
    );

};

export default navigationItems;
