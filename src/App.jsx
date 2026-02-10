import { useState } from "react";
import "./app.scss";
import Dock from "./Components/Dock";
import Nav from "./Components/Navbar";
import Github from "./Components/windows/Github";
import Note from "./Components/windows/Note";
import Resume from "./Components/windows/Resume";
import Spotify from "./Components/windows/Spotify";
import Cli from "./Components/windows/Cli";

function App() {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      {windowsState.github && (
        <Github windowName="github" setWindowsState={setWindowsState} />
      )}
      {windowsState.note && (
        <Note windowName="note" setWindowsState={setWindowsState} />
      )}
      {windowsState.resume && (
        <Resume windowName="resume" setWindowsState={setWindowsState} />
      )}
      {windowsState.spotify && (
        <Spotify windowName="spotify" setWindowsState={setWindowsState} />
      )}
      {windowsState.cli && (
        <Cli windowName="cli" setWindowsState={setWindowsState} />
      )}
    </main>
  );
}

export default App;
