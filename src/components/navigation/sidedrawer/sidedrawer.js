import React from "react";
import Media from "react-media";
import Logo from "../../logo/logo.js";
import NavigationItems from "../navigationitems/navigationitems.js";
import Backdrop from "../../ui/backdrop/backdrop.js";
import Aux from "../../../hoc/aux.js";
import "./sidedrawer.css";

const sidedrawer = props => {
    return (
        <Aux>
        <Media query="(max-width: 500px)"
        render={()=><Backdrop show/>}
        />
        
        
        <div className="SideDrawer">
        
            <div className="LogoS">
            <Logo/>
                </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    );
};

export default sidedrawer;
