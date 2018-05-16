import React from "react";
import Aux from "../../../hoc/aux.js";

const ordersummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                <span style={{textTransform:"capitalize"}}>{igKey}</span>:{props.ingredients[igKey]}
                </li>
            );

        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>The burger with the following ingredients:</p>
            <ul>
             {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
         </Aux>
    );
};

export default ordersummary;
