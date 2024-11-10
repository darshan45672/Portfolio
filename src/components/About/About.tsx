import { Container } from "./styles";
import nextIcon from "../../assets/nextjs-icon.svg";
import laravelIcon from "../../assets/laravel.png";
import jsIcon from "../../assets/js-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import astroIcon from "../../assets/astro.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi, I am Darshan Bhandary! Welcome to my creative world where coding meets passion. I'm a Developer who thrives on transforming unique ideas into immersive digital experiences.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Professionally, I specialize in Software Development, focusing on both Web Design and Development. I enjoy the challenge of crafting seamless, user-friendly interfaces and backend systems that bring visions to life.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Whether it’s a complex web app or an innovative digital project, I bring enthusiasm, expertise, and a commitment to quality to every collaboration.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Key Technologies I Work With:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={laravelIcon} alt="Laravel" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={astroIcon} alt="Astro" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={nextIcon} alt="NextJS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={typescriptIcon} alt="TypeScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Container>
  )
}