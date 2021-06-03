import React from "react";
import classes from "./ActionButton.module.css"

const ActionButton = props => {
    const buttonClickHandler = () => {
        props.onClick()
    }
    return(
        <React.Fragment>
        <button 
        className={props.bsClasses}
        onClick={buttonClickHandler}>{props.name ? props.name : "New Button"}</button>
        </React.Fragment>
    );
}

export default ActionButton;