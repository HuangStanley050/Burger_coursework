import React from "react";
import "./button.css";

const button = props => {
    var okay = "Button Success";
    var notokay = "Button Danger";

    return (
        <button disabled={props.disabled} className={props.btnType==="Success"? okay:notokay} onClick={props.clicked}>
        {props.children}
        </button>
    );
}

export default button;
