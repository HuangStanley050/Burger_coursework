import React, { Component } from "react";
import Order from "../../components/order/order.js";
import axios from "../../axios-orders.js";
import withErrorHandler from "../../hoc/withErrorHandler/witherrorhandler.js";

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get("/orders.json")
            .then(res => { //turn the objects into array from the GET request
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key

                    });
                }
                this.setState({ loading: false, orders: fetchedOrders });
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <div>
                 {this.state.orders.map(order=>(
                    <Order 
                    key={order.id} 
                    ingredients={order.ingredients}
                    price={+order.price}
                    />
                 ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);
