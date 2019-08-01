import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Aux from "./hoc/Auxiliary/Auxiliary";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import MyOrders from "./containers/MyOrders/MyOrders";

class App extends Component {
  state = {};
  render() {
    return (
      <Aux>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/my-orders" component={MyOrders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </Aux>
    );
  }
}

export default App;
