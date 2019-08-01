import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    address: {
      country: "",
      city: "",
      zipCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const orderData = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Rohit",
        phone: 315413241,
        email: "aa@a.com",
        address: {
          country: "Bangladesh",
          city: "Dhaka",
          zipCode: "Dhaka-1205"
        }
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", orderData)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
        console.log(error);
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className={classes.Input}
          type="text"
          name="phone"
          placeholder="Your Phone Number"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Your Mail"
        />
        <input
          className={classes.Input}
          type="text"
          name="country"
          placeholder="Your Country"
        />
        <input
          className={classes.Input}
          type="text"
          name="city"
          placeholder="Your City"
        />
        <input
          className={classes.Input}
          type="text"
          name="zipcode"
          placeholder="Your Zip Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          Order Now
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Information</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
