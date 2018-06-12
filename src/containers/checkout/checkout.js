import React, { Component } from "react";
import { Route } from 'react-router-dom';
import ContactData from "./contactdata/contactdata.js";
import CheckoutSummary from "../../components/order/checkoutsummary/checkoutsummary.js";
import { connect } from "react-redux";
/*global URLSearchParams*/

class Checkout extends Component {


    /*componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            }
            else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ ingredients: ingredients, totalPrice: price });
    }
    */

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                checkoutCanelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}
                ingredients={this.props.ings}
                />
                <Route path={this.props.match.path +'/contact-data'}
                       component={ContactData}
                />
            </div>
        );
    }

};

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        //price: state.totalPrice
    };
};

//mapStateToProps --->always 1st argument
//mapDispatchToProps--->always 2nd argument
export default connect(mapStateToProps)(Checkout);
