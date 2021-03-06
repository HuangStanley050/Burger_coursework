import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import Layout from "./hoc/layout/layout.js";
import BurgerBuilder from "./containers/burgerbuilder/burgerbuilder.js";
import Checkout from "./containers/checkout/checkout.js";
import Orders from "./containers/orders/orders.js";
import Auth from "./containers/auth/auth";
import Logout from "./containers/auth/logout/logout";
import * as actions from "./store/actions/index";

class App extends Component {

    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        let routes = (
            <Switch>
              <Route path="/auth" component={Auth}/>
              <Route exact path="/" component={BurgerBuilder}/>
              <Redirect to="/"/>
            </Switch>
        );

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/orders" component={Orders}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/auth" component={Auth}/>
                <Route exact path="/" component={BurgerBuilder}/>
                <Redirect to="/"/>
            </Switch>
            );
        }
        return (
            <div>
               <Layout>
                    {routes}
                </Layout>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
