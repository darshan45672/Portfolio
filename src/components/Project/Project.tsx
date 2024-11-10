import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { projects } from "./projects";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <ScrollAnimation key={project.id} animateIn="flipInX">
            <div className="project">
              <header>
                <img
                  src={project.image}
                  alt={project.title}
                  width="50"
                />
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  {project.tags.map((tag, index) => (
                    <span key={index}>
                      <b>{tag}</b>
                      {index === project.tags.length - 1 ? '.' : ', '}
                    </span>
                  ))}
                </p>
              </div>
              <footer>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {project.webapp && (
                  <a href={project.webapp} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
