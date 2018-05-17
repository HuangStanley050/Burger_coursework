import React from "react";
import "./modal.css";
import Aux from "../../../hoc/aux.js";
import Backdrop from "../backdrop/backdrop.js";

const modal = props => {
    return (
        <Aux>
        <Backdrop clicked={props.modalClosed} show={props.show}/>
        <div className="Modal" 
        style={{
           transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
           opacity: props.show ? "1":"0"
            
        }}>
            {props.children}
            </div>
        </Aux>
    );

};

export default modal;
