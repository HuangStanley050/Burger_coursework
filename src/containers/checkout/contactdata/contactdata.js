import React, { Component } from "react";
import Button from "../../../components/ui/button/button.js";
import "./contactdata.css";
import axios from "../../../axios-orders.js";
import Spinner from "../../../components/ui/spinner/spinner.js";
import { connect } from "react-redux";
import Input from "../../../components/ui/input/input.js";


/*
name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        },
*/


class ContactData extends Component {


    state = {
        orderForm: {

            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Name"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },

            street: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Street"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false

            },

            zipCode: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Zip Code"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },

            country: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Country"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },

            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Your Mail"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },

            deliveryMethod: {
                elementType: "select",
                elementConfig: {
                    options: [
                        { value: "fastest", displayValue: "Fastest" },
                        { value: "cheapest", displayValue: "Cheapest" }
                    ]
                },
                value: "cheapest",
                valid: true,
                validation: {}
            }

        },
        formIsValid: false,
        loading: false
    };


    orderHandler = (event) => {
        event.preventDefault();
        //console.log(this.props.ingredients);

        this.setState({ loading: true });
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData

        };

        axios.post("/orders.json", order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({ loading: false });
            });

    }

    checkValidity(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }
        if (rules.minLength) {

            isValid = value.length >= rules.minLength && isValid;

        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        //----->need to deep clone the state which has several nested states
        const updatedOrderForm = {
            ...this.state.orderForm //--->clone the whole thing
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier] //--->clone that specific object in the state
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        //console.log(updatedFormElement);
        let formIsValid = false;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        console.log(formIsValid);
        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
    }

    render() {
        const formElementsArray = [];

        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]

            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                    
                    {formElementsArray.map(formElement=>(
                        <Input
                           key={formElement.id}
                           elementType={formElement.config.elementType}
                           elementConfig={formElement.config.elementConfig}
                           invalid={!formElement.config.valid}
                           shouldValidate={formElement.config.validation}
                           value={formElement.config.value}
                           touched={formElement.config.touched}
                           changed={(event)=>this.inputChangedHandler(event,formElement.id)} // use ()=> if you need paass parameter to the method
                        />                                       // ()=> calls the handler then handler gets the parameters
                    ))}
                    <Button  disabled={!this.state.formIsValid} btnType="Success">Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>;
        }
        return (
            <div className="ContactData">
                <h4>Enter your contact data</h4>
                {form}
                
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
};

export default connect(mapStateToProps)(ContactData);
