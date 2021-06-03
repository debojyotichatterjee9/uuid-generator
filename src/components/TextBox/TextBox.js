import React from "react";
import classes from "./TextBox.module.css"

const TextBox = props => {
    return(
        <div className="mt-4">
            <input 
            className={`${classes.textbox} form-control`}
            value={props.val}/>
        </div>
    );
}

export default TextBox;