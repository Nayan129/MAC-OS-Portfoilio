import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
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

1. Portfolio Website
   - macOS-inspired portfolio with terminal interface
   - Tech: React, SCSS, Vite

2. Employee management system 
   - user management system using react
   - Tech:React, tailwind , apis

3. Spotify Clone
   - music app clone
   - Tech: React, spotify api, tailwind

4. Productivity Dashboard
   - Daily planning web app
   - Tech: HTML, CSS, JavaScript

Type 'github' to view my repositories.
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

GitHub:   github.com/nayanbhusari
LinkedIn: linkedin.com/in/nayanbhusari

Open to internships and entry-level full-stack or frontend roles.
      `,
    },

    // New GitHub command added
    github: {
      description: "Show my GitHub repositories",
      usage: "github",
      fn: async () => {
        try {
          const res = await fetch(
            "https://api.github.com/users/Nayan129/repos",
          );
          const data = await res.json();

          const topRepos = data
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 5);

          let output = "Top GitHub Repositories:\n\n";

          topRepos.forEach((repo, index) => {
            output += `${index + 1}. ${repo.name}\n`;
            output += `   Stars: ${repo.stargazers_count}\n`;
            output += `   Language: ${repo.language || "N/A"}\n`;
            output += `   Link: ${repo.html_url}\n\n`;
          });

          return output;
        } catch (error) {
          return "Error fetching GitHub data.";
        }
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
