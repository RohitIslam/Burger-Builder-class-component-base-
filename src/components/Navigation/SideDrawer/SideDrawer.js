import React from "react";

import classes from "./SideDrawer.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = props => {
  let attachedClasses = [];

  // if (props.open) {
  //     attachedClasses = [classes.SideDrawer, classes.Open];
  // }

  props.open
    ? (attachedClasses = [classes.SideDrawer, classes.Open])
    : (attachedClasses = [classes.SideDrawer, classes.Close]);

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.close} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
