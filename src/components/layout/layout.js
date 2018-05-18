import React from "react";
import Aux from "../../hoc/aux.js";
import "./layout.css";
import Toolbar from "../navigation/toolbar/toolbar.js";

const layout = (props) => {

    return (
        <Aux>
        
                <Toolbar/>
                <main className="Content"> 
                {props.children}
                </main>
        
        </Aux>
    );
};

export default layout;
