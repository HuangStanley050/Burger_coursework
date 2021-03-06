import React, { Component } from "react";
import Aux from "../../hoc/aux/aux.js";
import Burger from "../../components/burger/burger.js";
import BuildControls from "../../components/burger/buildcontrols/buildcontrols.js";
import Modal from "../../components/ui/modal/modal.js";
import OrderSummary from "../../components/burger/ordersummary/ordersummary.js";
import axios from "../../axios-orders.js";
import Spinner from "../../components/ui/spinner/spinner.js";
import withErrorHandler from "../../hoc/withErrorHandler/witherrorhandler.js";
import { connect } from "react-redux";
//import * as actionTypes from "../../store/actions.js";
import * as actions from "../../store/actions/index.js";



export class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //ingredients: null,


            purchasing: false
            //loading: false,
            //error: false
        };
        //this.addIngredientHandler = this.addIngredientHandler.bind(this);
        //this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
        this.updatePurchaseState = this.updatePurchaseState.bind(this);
        this.purchaseHandler = this.purchaseHandler.bind(this);
        this.purchaseCancelHandler = this.purchaseCancelHandler.bind(this);
        this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this);

    }

    componentDidMount() {
        /*axios.get("https://burger-react-bc897.firebaseio.com/ingredients.json")
            .then(response => {
                //console.log(response.data);
                this.setState({ ingredients: response.data });
            })
            .catch(error => {
                this.setState({ error: true });
            });
        */
        this.props.onInitIngredients();
    }


    updatePurchaseState(ingredients) {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        //this.setState({ purchaseable: sum > 0 });
        return sum > 0;
    }

    /*addIngredientHandler(type) {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients);
    }*/

    /*removeIngredientHandler(type) {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);

    }*/

    purchaseHandler() {
        if (this.props.isAuthenticated) {
            this.setState({ purchasing: true });
        }
        else {
            this.props.onSetAuthRedirectPath("/checkout");
            this.props.history.push("/auth");
        }

    }

    purchaseCancelHandler() {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler() {
        //alert("Continue");

        /*const queryParams = [];
        for (var i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push("price=" + this.state.totalPrice);
        const queryString = queryParams.join("&");
        */
        this.props.onInitPurchase();
        this.props.history.push("/checkout");
    }



    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        //{salad:true,meat:false,cheese: true......
        let orderSummary = null;




        let burger = this.props.error ? <p>ingredients can't be loaded</p> : <Spinner/>;

        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings}/> 
                     <BuildControls
                        ingredientAdded = { this.props.onIngredientAdded }
                        ingredientRemoved = { this.props.onIngredientRemoved }
                        disabled = { disabledInfo }
                        price = { this.props.price }
                        purchaseable = { this.updatePurchaseState(this.props.ings)}
                        isAuth={this.props.isAuthenticated}
                        ordered = { this.purchaseHandler }
                    />
            </Aux>
            );
            orderSummary = <OrderSummary 
                            price={this.props.price}
                            ingredients={this.props.ings}
                            purchaseCancelled={this.purchaseCancelHandler}
                            purchaseContinued={this.purchaseContinueHandler}
                           />;

        }

        /* if (this.state.loading) {
             orderSummary = <Spinner/>;
         }*/


        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                    
                </Modal>
                {burger}
                
            </Aux>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    };
};

const mapStateToProps = state => {

    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
