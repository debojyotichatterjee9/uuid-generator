import logo from './logo.svg';
import classes from './App.module.css';

import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className={classes.App}>
      {/* <header className={classes["App-header"]}>
        <img src={logo} className={classes["App-logo"]} alt="logo" />
        <p>
          <code>Built with React</code>
        </p>
      </header> */}
      <Menu />
    </div>
  );
}

export default App;
