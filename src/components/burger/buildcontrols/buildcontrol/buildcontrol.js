import React from "react";
import "./buildcontrol.css";

const buildcontrol = props => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button onClick={props.removed} disabled={props.disabled} className="Less">Less</button>
            <button onClick={props.added} className="More">More</button>
        </div>
    )

};

export default buildcontrol;
