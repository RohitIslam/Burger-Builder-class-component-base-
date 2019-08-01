import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";

class ContactData extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    address: {
      country: "",
      city: "",
      zipCode: ""
    }
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Information</h4>
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
          <Button btnType="Success">Order Now</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
