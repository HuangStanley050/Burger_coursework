import React from "react";
import Media from "react-media";
import Logo from "../../logo/logo.js";
import NavigationItems from "../navigationitems/navigationitems.js";
import Backdrop from "../../ui/backdrop/backdrop.js";
import Aux from "../../../hoc/aux/aux.js";
import "./sidedrawer.css";

const sidedrawer = props => {
    let attachedClasses;
    if (props.open) {
        attachedClasses = "Open";
    }
    else {
        attachedClasses = "Close";
    }

    return (
        <Aux>
        <Media query="(max-width: 500px)"
        render={()=><Backdrop show={props.open} clicked={props.closed}/>}
        />
        
        
        <div className={"SideDrawer "+attachedClasses}>
        
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
