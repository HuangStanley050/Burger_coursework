import React from 'react';
import "./toolbar.css";
import Logo from "../../logo/logo.js";

const toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div>Menu</div>
            <Logo/>
            <nav>...</nav>
        </header>
    );
};

export default toolbar;
