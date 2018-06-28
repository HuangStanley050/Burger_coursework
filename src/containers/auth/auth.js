import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Input from "../../components/ui/input/input";
import Button from "../../components/ui/button/button";
import "./auth.css";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            controls: {
                email: {
                    elementType: "input",
                    elementConfig: {
                        type: "email",
                        placeholder: "Mail Address"
                    },
                    value: "",
                    validation: {
                        required: true,
                        isEmai: true
                    },
                    valid: false,
                    touched: false
                },
                password: {
                    elementType: "input",
                    elementConfig: {
                        type: "password",
                        placeholder: "Password"
                    },
                    value: "",
                    validation: {
                        required: true,
                        minLength: 6
                    },
                    valid: false,
                    touched: false
                }
            }

        }
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

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({ controls: updatedControls });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
    }

    render() {
        const formElementsArray = [];

        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]

            });
        }

        const form = formElementsArray.map(formElement => {
            return <Input 
                      key={formElement.id}
                      elementType={formElement.config.elementType}
                      elementConfig={formElement.config.elementConfig}
                      invalid={!formElement.config.valid}
                      shouldValidate={formElement.config.validation}
                      value={formElement.config.value}
                      touched={formElement.config.touched}
                      changed={(event)=>this.inputChangedHandler(event,formElement.id)} 
            
                    />

        });

        return (
            <div className="Auth">
                <form onSubmit={this.submitHandler}>
                  {form}
                  <Button btnType = "Success">SUBMIT</Button>
                </form>
                </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
};

export default connect(null, mapDispatchToProps)(Auth);