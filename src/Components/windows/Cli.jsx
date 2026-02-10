import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import projects from "../../assets/github.json";
import "./cli.scss";

const Cli = ({ windowName, setWindowsState }) => {
  const welcomeMessage = `
╔════════════════════════════════════════════════════════╗
║                                                        ║
║     Welcome to Nayan Bhusari's Portfolio Terminal!     ║
║                                                        ║
╚════════════════════════════════════════════════════════╝

Type 'help' to see all available commands.
  `;

  const commands = {
    about: {
      description: "Learn about me and my background",
      usage: "about",
      fn: () => `
Hi! I'm Nayan Bhusari, a passionate full-stack developer from India.
I enjoy building responsive and interactive web applications.

I work with:
  - Frontend: React, HTML, CSS, JavaScript, Tailwind
  - Backend: Node.js, Express, MongoDB (CRUD APIs)
  - Tools: Git, GitHub, SASS, Vite

Currently expanding my backend skills while building full-stack projects.
      `,
    },

    projects: {
      description: "View my recent projects",
      usage: "projects",
      fn: () => `
Recent Projects:

1. macOS Portfolio (React)
2. Employee Management System
3. Spotify Clone
4. Productivity Dashboard
5. Cohort-2 Practice Repository

Type 'github' to view project links.
      `,
    },

    skills: {
      description: "Check out my technical skills",
      usage: "skills",
      fn: () => `
Technical Skills:

Frontend:
  • React, Tailwind CSS
  • HTML5, CSS3, SCSS
  • JavaScript (ES6+)
  • Responsive Design

Backend:
  • Node.js, Express.js
  • MongoDB, Mongoose
  • REST APIs (CRUD)

Tools:
  • Git & GitHub
  • Vite
  • Postman
      `,
    },

    experience: {
      description: "View my experience",
      usage: "experience",
      fn: () => `
Experience:

Frontend Developer Intern (2024 – 2025)
  - Built responsive UI using React
  - Worked on real-world web projects
  - Improved component structure and performance

Currently:
  - Learning backend with Node.js, Express, MongoDB
  - Building full-stack CRUD applications
      `,
    },

    contact: {
      description: "Get my contact information",
      usage: "contact",
      fn: () => `
Contact:

Email: nayanbhusari02@gmail.com
Location: India

GitHub:   github.com/Nayan129
LinkedIn: linkedin.com/in/nayan-bhusari-4618282b6

Open to internships and entry-level full-stack or frontend roles.
      `,
    },

    github: {
      description: "View my main GitHub projects",
      usage: "github",
      fn: () => {
        let output = "Featured GitHub Projects:\n\n";

        projects.forEach((project, index) => {
          output += `${index + 1}. ${project.title}\n`;
          output += `   Repo: ${project.repolink}\n`;

          if (project.demolink) {
            output += `   Live: ${project.demolink}\n`;
          }

          output += "\n";
        });

        return output;
      },
    },

    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel="nayanbhusari:~$"
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
