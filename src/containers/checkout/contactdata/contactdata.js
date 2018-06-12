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
                value: ""
            },

            street: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Street"
                },
                value: ""

            },

            zipCode: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Zip Code"
                },
                value: ""
            },

            country: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Country"
                },
                value: ""
            },

            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Your Mail"
                },
                value: ""
            },

            deliveryMethod: {
                elementType: "select",
                elementConfig: {
                    options: [
                        { value: "fastest", displayValue: "Fastest" },
                        { value: "cheapest", displayValue: "Cheapest" }
                    ]
                },
                value: ""
            }

        },
        loading: false
    };


    orderHandler = (event) => {
        event.preventDefault();
        //console.log(this.props.ingredients);
        this.setState({ loading: true });

        const order = {
            ingredients: this.props.ings,
            price: this.props.price

        };

        axios.post("/orders.json", order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({ loading: false })
            });

    }

    render() {
        let form = (
            <form>
                    <Input elementType="..." elementConfig="..." value="..."/>
                    <Input inputtype="input" type="email" name="email" placeholder="Your Mail"/>
                    <Input inputtype="input" type="text" name="street" placeholder="Street"/>
                    <Input inputtype="input"  type="text" name="postal" placeholder="Postal Code"/>
                    <Button clicked={this.orderHandler} btnType="Success">Order</Button>
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
