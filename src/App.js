import React, {useState} from "react";
import logo from './logo.svg';
import classes from './App.module.css';

import Menu from './components/Menu/Menu';
import TextBox from './components/TextBox/TextBox';
import ActionButton from './components/ActionButton/ActionButton';

import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputState, setInputState] = useState(uuidv4())
  const uuidGenerateHandler = () => {
    console.log(uuidv4());
  }
  return (
    <div className={`${classes.App} container ${classes.container}`}>
      {/* <header className={classes["App-header"]}>
        <img src={logo} className={classes["App-logo"]} alt="logo" />
        <p>
          <code>Built with React</code>
        </p>
      </header> */}
      <Menu />
      <TextBox val={inputState}/>
      <div className="d-flex justify-content-evenly mt-4">
        <ActionButton
          name="Regnerate"
          bsClasses="btn-lg btn btn-dark"
          onRegenrate={uuidGenerateHandler} />
        <ActionButton 
        name="Copy"
        bsClasses="btn-lg btn-dark" />
      </div>
    </div>
  );
}

export default App;
