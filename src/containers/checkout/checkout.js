import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
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
        let summary = <Redirect to="/"/>;


        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;

            summary = (
                <div>
                  {purchasedRedirect}
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
        return summary;


    }

};

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
        //price: state.totalPrice
    };
};

/*const mapDispatchToProps = dispatch => {
    return {
        onInitPurchase: () => dispatch(actions.purchaseInit())
    };
};*/

//mapStateToProps --->always 1st argument
//mapDispatchToProps--->always 2nd argument
export default connect(mapStateToProps)(Checkout);
