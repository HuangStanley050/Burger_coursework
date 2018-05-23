import React from "react";
import Aux from "../../hoc/aux.js";
import "./layout.css";
import Toolbar from "../navigation/toolbar/toolbar.js";
import SideDrawer from "../navigation/sidedrawer/sidedrawer.js";

const layout = (props) => {

    return (
        <Aux>
        
                <Toolbar/>
                <SideDrawer/>
                <main className="Content"> 
                {props.children}
                </main>
        
        </Aux>
    );
};

export default layout;
