import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-item">Home</div>
        <div className="nav-item">Education</div>
        <div className="nav-item">Experience</div>
        <div className="nav-item">Contact</div>
      </nav>
      <div className="Introduction">
        <div className="rectangle-behind-img"></div>
        <img className="image" src="/images/Headshot.JPG" alt="Madeleinne's Headshot"/>
        <div className="intro-text">
          <div className="my-name-is">Hello, I'm Madeleinne!</div>
          <div className="ima-sw">I'm a software engineer.</div>
        </div>        
      </div>
    </div>

  );
}

export default App;
