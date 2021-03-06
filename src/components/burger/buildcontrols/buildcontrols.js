import React from "react";
import "./buildcontrols.css";
import BuildControl from "./buildcontrol/buildcontrol.js";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }

];

const buildcontrols = (props) => {
    return (
        <div className="BuildControls">
            <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctr=>(
                <BuildControl key={ctr.label} label={ctr.label} added={()=>props.ingredientAdded(ctr.type)}
                removed={()=>props.ingredientRemoved(ctr.type)}
                disabled={props.disabled[ctr.type]}
                />
            ))}
            <button onClick={props.ordered} disabled={!props.purchaseable} className="OrderButton">{props.isAuth? "ORDER NOW":"Sign up to order"}</button>
            </div>

    );
};

export default buildcontrols;
