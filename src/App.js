import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Layout from "./hoc/layout/layout.js";
import BurgerBuilder from "./containers/burgerbuilder/burgerbuilder.js";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
         <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
