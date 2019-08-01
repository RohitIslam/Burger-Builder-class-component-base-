import React, { Component } from "react";

import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummery extends Component {
  state = {};
  render() {
    const ingredientsSummery = Object.keys(this.props.ingredients).map(
      ingredientKey => {
        return (
          <li key={ingredientKey}>
            <span style={{ textTransform: "capitalize" }}>{ingredientKey}</span>
            : {this.props.ingredients[ingredientKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order!!</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>{ingredientsSummery}</ul>
        <p>
          <strong> Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummery;
