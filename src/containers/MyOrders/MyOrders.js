import React, { Component } from "react";
import { connect } from "react-redux";

import Orders from "../../components/Orders/Orders";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/indexActions";
import Spinner from "../../components/UI/Spinner/Spinner";

class MyOrders extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map(order => (
        <Orders
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price}
        />
      ));
    }
    return <div>{orders}</div>;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrder())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(MyOrders, axios));
