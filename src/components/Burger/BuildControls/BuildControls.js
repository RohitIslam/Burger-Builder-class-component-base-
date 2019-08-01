import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(item => {
      return (
        <BuildControl
          key={item.label}
          label={item.label}
          added={() => props.ingredientsAdded(item.type)}
          removed={() => props.ingredientsRemoved(item.type)}
          disabled={props.disabled[item.type]}
        />
      );
    })}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW !!
    </button>
  </div>
);

export default BuildControls;
