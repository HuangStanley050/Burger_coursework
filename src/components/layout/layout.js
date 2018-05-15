import React from "react";
import Aux from "../../hoc/aux.js";
import "./layout.css";

const layout = (props) => {

    return (
        <Aux>
        
            <div>Toolbar, Side Drawer and Backdrop</div> 
                <main className="Content"> 
                {props.children}
                </main>
        
        </Aux>
    );
};

export default layout;
