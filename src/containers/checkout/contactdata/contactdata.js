import React, { Component } from "react";
import Button from "../../../components/ui/button/button.js";
import "./contactdata.css";
import axios from "../../../axios-orders.js";
import Spinner from "../../../components/ui/spinner/spinner.js";
import { connect } from "react-redux";


class ContactData extends Component {


    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        },
        loading: false
    };


    orderHandler = (event) => {
        event.preventDefault();
        //console.log(this.props.ingredients);
        this.setState({ loading: true });

        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            customer: {
                name: "Stanley",
                address: {
                    street: "12 Test Street",
                    zipCode: "3333",
                    country: "Australia"
                },
                email: "test@test.com"
            },
            deliveryMethod: "fastest"
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
                    <input className="Input" type="text" name="name" placeholder="Your Name"/>
                    <input className="Input" type="email" name="email" placeholder="Your Mail"/>
                    <input className="Input" type="text" name="street" placeholder="Street"/>
                    <input className="Input" type="text" name="postal" placeholder="Postal Code"/>
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
