import React, { Component } from "react";
import Modal from "../../components/ui/modal/modal.js";
import Aux from "../aux/aux.js";

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            })
            axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });

            });
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Aux>
            <Modal modalClosed={this.errorConfirmedHandler} show={this.state.error}>
                   {this.state.error? this.state.error.message:null}
            </Modal>
            <WrappedComponent {...this.props}/>
            </Aux>
            );
        }
    }
};

export default withErrorHandler;
