import React from "react";
import classes from "./ActionButton.module.css"

const ActionButton = props => {
    return(
        <React.Fragment>
        <button 
        className={props.bsClasses}
        onClick={props.onRegenrate}>{props.name ? props.name : "New Button"}</button>
        </React.Fragment>
    );
}

export default ActionButton;