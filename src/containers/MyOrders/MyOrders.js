import React, { Component } from "react";
import Orders from "../../components/Orders/Orders";

class MyOrders extends Component {
  state = {};
  render() {
    return (
      <div>
        <Orders />
        <Orders />
      </div>
    );
  }
}

export default MyOrders;
