import React, {useState, useEffect} from "react";
import classes from "./ActionButton.module.css"

const ActionButton = props => {
    const [classValues, setClassValues] = useState(props.bsClasses);
    const [buttonText, setButtonText] = useState(props.name ? props.name : "New Button")
    const buttonClickHandler = () => {
        props.onClick()
        setClassValues("btn-lg btn-success");
        setButtonText(prevState => {
            if(prevState === "Regenerate") {
                return("Regenerated!")
            }
            else if(prevState === "Copy") {
                return("Copied!")
            }
            else {
                return(prevState)
            }
        })
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setClassValues(props.bsClasses);
            setButtonText(props.name);
        }, 500);

        return () => {
            clearTimeout(timer)
        }
    }, [classValues]);
    return(
        <React.Fragment>
        <button 
        className={classValues}
        onClick={buttonClickHandler}
        disabled={false}>{buttonText}</button>
        </React.Fragment>
    );
}

export default ActionButton;