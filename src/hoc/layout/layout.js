import React, { Component } from "react";
import Aux from "../aux/aux.js";
import "./layout.css";
import Toolbar from "../../components/navigation/toolbar/toolbar.js";
import SideDrawer from "../../components/navigation/sidedrawer/sidedrawer.js";
import { connect } from "react-redux";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: true
        };
        this.sideDrawerClosedHandler = this.sideDrawerClosedHandler.bind(this);
        this.drawerToggleHandler = this.drawerToggleHandler.bind(this);
    }

    sideDrawerClosedHandler() {
        this.setState({ showSideDrawer: false });
    }

    drawerToggleHandler() {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }


    render() {
        return (
            <Aux>
        
                <Toolbar 
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.drawerToggleHandler} 
                 />
                <SideDrawer 
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}
                />
                <main className="Content"> 
                {this.props.children}
                </main>
        
            </Aux>
        );
    }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps, null)(Layout);
