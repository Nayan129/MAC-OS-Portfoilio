import githubData from "../../assets/github.json";
import MacWindow from "./MacWindow";
import "./github.scss";

const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repolink: "",
    demolink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />

      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>

      <div className="tags">
        {data.tags.map((tag) => (
          <p className="tag" key={tag}>
            {tag}
          </p>
        ))}
      </div>

      <div className="urls">
        <a href={data.repolink} target="_blank" rel="noreferrer">
          Repository
        </a>

        {data.demolink && (
          <a href={data.demolink} target="_blank" rel="noreferrer">
            Demo link
          </a>
        )}
      </div>
    </div>
  );
};

const Github = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cards">
        {githubData.map((project) => (
          <GitCard key={project.id} data={project} />
        ))}
      </div>
    </MacWindow>
  );
};

export default Github;
