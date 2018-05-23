import React from 'react';
import "./toolbar.css";
import Logo from "../../logo/logo.js";
import NavigationItems from "../navigationitems/navigationitems.js";
import DrawerToggle from "../sidedrawer/drawertoggle/drawertoggle.js";

const toolbar = (props) => {
    return (
        <header className="Toolbar">
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className="LogoT">
                <Logo/>
            </div>
            <nav className="DesktopOnly">
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default toolbar;
