import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import classes from './App.module.css';

import Menu from './components/Menu/Menu';
import TextBox from './components/TextBox/TextBox';
import ActionButton from './components/ActionButton/ActionButton';

import { v1, v3, v4, v5, NIL } from "uuid";
import copy from "copy-to-clipboard";

function App() {
  const [inputState, setInputState] = useState(v4());
  const [inputType, setInputType] = useState("four");
  const [name, setname] = useState("Change Me!");
  const [nameSpace, setnameSpace] = useState(v4());

  const uuidTypeChangeHandler = type => {
    setInputType(type)
    uuidGenerateHandler(type)
    console.log(type)

  }
  const uuidGenerateHandler = (type = inputType) => {
    switch (type) {
      case "one":
        const v1options = {
          node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
          clockseq: 0x1234,
          msecs: new Date().getTime(),
          nsecs: Math.floor(1000 + Math.random() * 9000),
        };
        console.log(v1options)
        setInputState(v1(v1options));
        break;
      case "three":
        setInputState(v3(name, nameSpace));
        break;
      case "four":
        setInputState(v4());
        break;
      case "five":
        setInputState(v5(name, nameSpace));
        break;
      default:
        setInputState(NIL);
        break;
    }
  }
  const nameChangeHandler = (newValue) => {
    setname(newValue);
  }
  const nameSpaceChangeHandler = (newValue) => {
    setnameSpace(newValue);
  }
  const copyUuidHandler = () => {
    copy(inputState);
  }

  useEffect(() => {
    uuidGenerateHandler(inputType)
  }, [name, nameSpace])
  return (
    <div className={`${classes.App} container ${classes.container}`}>
      {/* <header className={classes["App-header"]}>
        <img src={logo} className={classes["App-logo"]} alt="logo" />
        <p>
          <code>Built with React</code>
        </p>
      </header> */}
      <Menu
        onUuidTypeChange={uuidTypeChangeHandler} />
      {inputType === "three" || inputType === "five"
        ?
        <div className="d-flex justify-content-evenly">
          <TextBox
            val={name}
            readonly={false}
            onChange={nameChangeHandler} />
          <TextBox
            val={nameSpace}
            readonly={false}
            onChange={nameSpaceChangeHandler} />
        </div>
        :
        null
      }
      <TextBox val={inputState} readonly={"readonly"} />
      <div className="d-flex justify-content-evenly mt-4">
        <ActionButton
          name="Regnerate"
          bsClasses="btn-lg btn btn-dark"
          onClick={uuidGenerateHandler} />
        <ActionButton
          name="Copy"
          bsClasses="btn-lg btn-dark" 
          onClick={copyUuidHandler}/>
      </div>
    </div>
  );
}

export default App;
