import Navbar from "./components/Navbar";
import "./index.css";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <div>
          <h1 className="title">
            I help teams create beautiful, usable interfaces through thoughtful
            research, nimble design thinking, and hands-on collaboration.
          </h1>
          {/* <hr className="divider" />
        <p className="about">
          a full stack developer with a passion... <strong> CRAP! </strong> I'll
          just get to the point. I build software using the below technologies.
        </p>
        <p className="skills">ReactJs | Flutter | NodeJs</p> */}
          {/* <button className="more-button">that's it?</button> */}
          {/* <hr />
      <p className="about">
        I am nothing special, of this I am sure. I am a common man with common
        thoughts and I've led a common life. There are no monuments dedicated
        to me and my name will soon be forgotten, but I've loved another with
        all my heart and soul, and to me, this has always been enough
      </p>
      <p className="skills">- Nicholas Sparks</p> */}

          <p className="inprogress">
            Note: This website is still under active development and the UI is
            inspired from <a href="https://lukejones.me/">here</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
