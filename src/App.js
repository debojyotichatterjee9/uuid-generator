import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import classes from './App.module.css';

import Menu from './components/Menu/Menu';
import TextBox from './components/TextBox/TextBox';
import ActionButton from './components/ActionButton/ActionButton';

import { v1, v3, v4, v5, NIL, validate } from "uuid";
import copy from "copy-to-clipboard";

function App() {
  const [inputState, setInputState] = useState(v4());
  const [inputType, setInputType] = useState("four");
  const [name, setname] = useState("Change Me!");
  const [nameSpace, setnameSpace] = useState(v4());
  const [nameSpaceError, setNameSpaceError] = useState(false)

  const uuidTypeChangeHandler = type => {
    setInputType(type)
    uuidGenerateHandler(type)
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
        setInputState(v1(v1options));
        break;
      case "three":
        if (nameSpaceError) {
          setnameSpace(v4());
          setNameSpaceError(false);
        }
        if (!nameSpaceError) {
          setInputState(v3(name, nameSpace));
        }
        break;
      case "four":
        setInputState(v4());
        break;
      case "five":
        if (nameSpaceError) {
          setnameSpace(v4());
          setNameSpaceError(false);
        }
        if (!nameSpaceError) {
          setInputState(v5(name, nameSpace));
        }
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
    if (validate(newValue)) {
      setNameSpaceError(false)
      setnameSpace(newValue);
    }
    else {
      setnameSpace(newValue);
      setNameSpaceError(true)
    }
  }
  const copyUuidHandler = () => {
    copy(inputState);
  }

  useEffect(() => {
    if (!nameSpaceError) {
      uuidGenerateHandler(inputType)
    }
  }, [name, nameSpace, nameSpaceError, inputType]);
  return (
    <div className={`${classes.App} container ${classes.container}`}>
      <header className={classes["App-header"]}>
        {/* <img src={logo} className={classes["App-logo"]} alt="logo" /> */}
        <h1><span className="badge bg-secondary">UUID Generator</span></h1>
      </header>
      <Menu
        onUuidTypeChange={uuidTypeChangeHandler} />
      {inputType === "three" || inputType === "five"
        ?
        <div className="d-flex justify-content-evenly">
          <TextBox
            val={name}
            label="Name"
            errorFlag={false}
            readonly={false}
            onChange={nameChangeHandler} />
          <TextBox
            val={nameSpace}
            label="Namespace"
            errorFlag={nameSpaceError}
            readonly={false}
            onChange={nameSpaceChangeHandler} />
        </div>
        :
        null
      }
      <TextBox
        val={inputState}
        // label="UUID"
        errorFlag={false}
        readonly={"readonly"} />
      <div className="d-flex justify-content-evenly mt-4">
        <ActionButton
          name="Regenerate"
          bsClasses="btn-lg btn btn-dark"
          onClick={uuidGenerateHandler} />
        <ActionButton
          name="Copy"
          bsClasses="btn-lg btn-dark"
          onClick={copyUuidHandler} />
      </div>
    </div>
  );
}

export default App;
