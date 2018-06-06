import React from "react";
import Burger from "../../burger/burger.js";
import Button from "../../ui/button/button.js";
import "./checkoutsummary.css";

const checkoutSummary = props => {

    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes good!</h1>
            <div style={{width:"100%",margin:"auto"}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button clicked btnType="Danger">CANCEL</Button>
            <Button clicked btnType="Success">CONTINUE</Button>
        </div>
    );
};

export default checkoutSummary;
