import React from "react";
import "./input.css";

const input = props => {
    let inputElement = null;
    const inputClasses = ["InputElement"];
    let validationError = null;

    if (props.invalid && props.shouldValidate && props.touched) {
        validationError = <p className="ValidationError">Please enter a valid value!</p>;
        inputClasses.push("Invalid");
    }

    switch (props.elementType) {
        case ("input"):
            inputElement = <input onChange={props.changed} className={inputClasses.join(" ")} {...props.elementConfig} value={props.value}/>;
            break;
        case ("textarea"):
            inputElement = <textarea onChange={props.changed} className="InputElement" {...props.elementConfig} value={props.value}/>;
            break;
        case ("select"):
            inputElement = (
                <select onChange={props.changed} className={inputClasses.join(" ")} value={props.value}>
                 {props.elementConfig.options.map(option=>(
                    <option key={option.value} value={option.value}>
                     {option.displayValue}
                    </option>
                 ))}
                </select>
            );
            break;
        default:
            inputElement = <input className="InputElement" {...props.elementConfig} value={props.value}/>;
            break;
    }




    return (
        <div className="Input">
         <label className="Label">{props.label}</label>
         {inputElement}
         {validationError}
        </div>
    );
};

export default input;
