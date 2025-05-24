import './App.css';
// HTML and CSS heavily assisted by Figma and the AutoHTML plugin.
function App() {
  return (
    <div className="App">
      <div className="window">
        <div className="frame-view">
          {/* HOME/INTRO PAGE */}
          <div className="home-page">
            <div className="rectangle-behind-img"></div>
            <img className="image-headshot" src="/images/Headshot.JPG" alt="Madeleinne's Headshot"/>
            <div className="intro-text">
              <div className="my-name-is">Hello, I'm Madeleinne!</div>
              <div className="ima-sw">I'm a software engineer.</div>
            </div>        
          </div>
          {/* EDUCATION */}
          <div className="education">
            <div className="rectangle-behind-grad-img"></div>
            <img className="image-grad-photo" src="/images/2025Sign.JPG" alt="Madeleinne standing in front of a 2025 sign"/>
            <div className="education-text-content">
              <div className="asu-alumna">
                <div className="asu-introduction">
                  I am a proud Arizona State University (ASU) Alumna. It is with
                  great joy that I can provide the following skills to my next
                  project, including but not limited to:{" "}
                </div>
              </div>
              <div className="frame-skills-encompassing">
                <div className="frame-toptext">
                  <div className="frame-web">
                    <img className="web-design" src="/images/web-design0.png"/>
                    <div className="web-development">Web Development </div>
                  </div>
                  <div className="frame-data">
                    <img
                      className="database-administrator"
                      src="/images/database-administrator0.png"
                    />
                    <div className="database-management-firebase-sql">
                      Database Management (Firebase, SQL){" "}
                    </div>
                  </div>
                  <div className="frame-ai">
                    <img
                      className="artificial-intelligence"
                      src="/images/artificial-intelligence0.png"
                    />
                    <div className="text-ai-desc">
                      Experience working with AI LLMs (Gemini API){" "}
                    </div>
                  </div>
                </div>
                <div className="frame-lowertext">
                  <div className="frame-ml">
                    <img className="graph" src="/images/graph0.png" />
                    <div className="text-ml-desc">
                      Training Machine Learning models on Data{" "}
                    </div>
                  </div>
                  <div className="frame-agile">
                    <img className="timesheet" src="/images/timesheet0.png" />
                    <div className="text-scrum-desc">
                      Experience with Scrum / Agile practices{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-26">
                <img className="resume" src="/images/resume0.png" />
                <div className="resume-button">
                  Want to learn more? Click here to download a copy of my
                  resume!{" "}
                </div>
              </div>
            </div>
          </div>
          {/* EXPERIENCE */}
          <div className="projects">
            <div className="frame-11">
              <div className="frame-8">
                <div className="capstone">Capstone </div>
                <img className="vector-1" src="vector-10.svg" />
              </div>
              <div className="frame-10">
                <div className="sase-web-committee-member">
                  SASE Web Committee Member{" "}
                </div>
                <img className="vector-2" src="vector-20.svg" />
              </div>
              <div className="frame-9">
                <div className="training-a-naive-bayes-ml-model">
                  Training a Naive-Bayes ML Model{" "}
                </div>
                <img className="vector-3" src="vector-30.svg" />
              </div>
            </div>
            <div className="frame-12">
              <div className="projects-and-experience">
                Projects and Experience{" "}
              </div>
            </div>
          </div>
          {/* CONTACT */}
          <section className="contact">
            <div className="contact-header">
              <h2 className="contact-title">Contact Information</h2>
              <p className="contact-subtitle">Let’s get in touch!</p>
            </div>
            <div className="contact-cards">
              <div className="contact-card">
                <img src="/images/email0.png" alt="Email icon" className="contact-icon" />
                <h3>Email</h3>
                <a href="mailto:madeleinne.tan@gmail.com" className="contact-link">madeleinne.tan@gmail.com</a>
              </div>
              <div className="contact-card">
                <img src="/images/linked-in0.png" alt="LinkedIn icon" className="contact-icon" />
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/madeleinne-tan/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  linkedin.com/in/madeleinne-tan
                </a>
              </div>
              <div className="contact-card">
                <img src="/images/git-hub0.png" alt="GitHub icon" className="contact-icon" />
                <h3>GitHub</h3>
                <a href="https://github.com/MDTea" target="_blank" rel="noopener noreferrer" className="contact-link">
                  github.com/MDTea
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <nav className="navbar">
        <div className="nav-item">Home</div>
        <div className="nav-item">Education</div>
        <div className="nav-item">Experience</div>
        <div className="nav-item">Contact</div>
      </nav>
    </div>
  );
}

export default App;
