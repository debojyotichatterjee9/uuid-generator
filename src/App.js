import logo from './logo.svg';
import classes from './App.module.css';

import Menu from './components/Menu/Menu';
import TextBox from './components/TextBox/TextBox';
import ActionButton from './components/ActionButton/ActionButton';

import { v4 as uuidv4 } from "uuid";

function App() {
  const uuidGenerateHandler = () => {
    console.log(uuidv4());
  }
  return (
    <div className={classes.App}>
      {/* <header className={classes["App-header"]}>
        <img src={logo} className={classes["App-logo"]} alt="logo" />
        <p>
          <code>Built with React</code>
        </p>
      </header> */}
      <Menu />
      <TextBox />
      <ActionButton 
      name="Regnerate" 
      onRegenrate={uuidGenerateHandler}/>
      <ActionButton name="Copy" />
    </div>
  );
}

export default App;
