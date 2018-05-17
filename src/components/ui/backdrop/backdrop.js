import React from "react";
import "./backdrop.css";

const backdrop = props => {
    return (
        props.show ? <div onClick={props.clicked} className="Backdrop"></div> : null
    );
}

export default backdrop;
