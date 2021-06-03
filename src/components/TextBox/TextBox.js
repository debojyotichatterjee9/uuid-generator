import React from "react";
import classes from "./TextBox.module.css"

const TextBox = props => {
    
    const inputChangeHandler = event => {
        console.log(event.target.value)
        props.onChange(event.target.value)
    }
    return(
        <div className="mt-4">
            {props.label && <label>{props.label}</label>}
            <input 
            type="text"
            className={`${classes.textbox} form-control`}
            value={props.val}
            readOnly={props.readonly}
            onChange={inputChangeHandler}/>
        </div>
    );
}

export default TextBox;