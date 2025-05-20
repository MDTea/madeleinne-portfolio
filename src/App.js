import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'/>
      <link rel="stylesheet" href="App.css"></link>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <nav className="navbar">
        this is a nav bar
      </nav>
      <header className="Portfolio-Header">
        hello there this is a font test
      </header>
      <div className="div-body">
        this is div 1
        <div className="div-body">
          this is div 2
        </div>
      </div>
    </div>

  );
}

export default App;
