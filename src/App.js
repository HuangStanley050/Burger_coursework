import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Layout from "./hoc/layout/layout.js";
import BurgerBuilder from "./containers/burgerbuilder/burgerbuilder.js";
import Checkout from "./containers/checkout/checkout.js";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
         <Switch>
         <Route path="/checkout" component={Checkout}/>
         <Route exact path="/" component={BurgerBuilder}/>
         </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
