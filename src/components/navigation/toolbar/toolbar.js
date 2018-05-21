import React from 'react';
import "./toolbar.css";
import Logo from "../../logo/logo.js";
import NavigationItems from "../navigationitems/navigationitems.js";

const toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div>Menu</div>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default toolbar;
