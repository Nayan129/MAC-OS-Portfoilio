import "./dock.scss";

const Dock = ({ windowsState, setWindowsState }) => {
  return (
    <footer className="dock">
      {/* GitHub */}
      <div
        onClick={() => setWindowsState((state) => ({ ...state, github: true }))}
        className="icon github"
      >
        <img src="/doc-icons/github.svg" alt="GitHub" />
      </div>

      {/* Notes */}
      <div
        onClick={() => setWindowsState((state) => ({ ...state, note: true }))}
        className="icon note"
      >
        <img src="/doc-icons/note.svg" alt="Notes" />
      </div>

      {/* Resume */}
      <div
        onClick={() => setWindowsState((state) => ({ ...state, resume: true }))}
        className="icon pdf"
      >
        <img src="/doc-icons/pdf.svg" alt="Resume" />
      </div>

      {/* Calendar */}
      <div
        onClick={() => window.open("https://calendar.google.com/", "_blank")}
        className="icon calender"
      >
        <img src="/doc-icons/calender.svg" alt="Calendar" />
      </div>

      {/* Spotify */}
      <div
        onClick={() =>
          setWindowsState((state) => ({ ...state, spotify: true }))
        }
        className="icon spotify"
      >
        <img src="/doc-icons/spotify.svg" alt="Spotify" />
      </div>

      <div
        onClick={() => {
          window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=nayanbhusari02@gmail.com",
            "_blank",
          );
        }}
        className="icon mail"
      >
        <img src="/doc-icons/mail.svg" alt="" />
      </div>

      <div
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/nayan-bhusari-4618282b6/",
            "_blank",
          )
        }
        className="icon link"
      >
        <img src="/doc-icons/link.svg" alt="LinkedIn" />
      </div>

      <div
        onClick={() => setWindowsState((state) => ({ ...state, cli: true }))}
        className="icon cli"
      >
        <img src="/doc-icons/cli.svg" alt="Terminal" />
      </div>
    </footer>
  );
};

export default Dock;
