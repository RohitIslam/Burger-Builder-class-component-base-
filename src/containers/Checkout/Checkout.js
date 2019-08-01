import React, { Component } from "react";
import { Route } from "react-router-dom";

import CheckoutSummery from "../../components/Orders/CheckoutSummery/CheckoutSummery";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 2,
      bacon: 1,
      meat: 2
    }
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const extractedIngredients = {};
    for (let param of query.entries()) {
      // entries will be like ['salad', '1']
      extractedIngredients[param[0]] = +param[1];
    }

    this.setState({ ingredients: extractedIngredients });
  }

  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummery
          ingredients={this.state.ingredients}
          checkoutCanceled={this.checkoutCanceledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
}

export default Checkout;
