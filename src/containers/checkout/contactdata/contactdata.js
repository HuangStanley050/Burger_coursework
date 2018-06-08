import React, { Component } from "react";
import Button from "../../../components/ui/button/button.js";
import "./contactdata.css";

class ContactData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: {
                street: "",
                postalCode: ""
            }
        }
    }

    render() {
        return (
            <div className="ContactData">
                <h4>Enter your contact data</h4>
                <form>
                    <input className="Input" type="text" name="name" placeholder="Your Name"/>
                    <input className="Input" type="email" name="email" placeholder="Your Mail"/>
                    <input className="Input" type="text" name="street" placeholder="Street"/>
                    <input className="Input" type="text" name="postal" placeholder="Postal Code"/>
                    <Button btnType="Success">Order</Button>
                </form>
                
            </div>
        );
    }

}

export default ContactData;
