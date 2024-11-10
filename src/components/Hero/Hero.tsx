import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/bg.png"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.png'
import Hello from '../../assets/Hello.gif'
import XIcon from '../../assets/x.png'

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Darshan Bhandary</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>CODER BY PROFESSION... ENTREPRENEUR BY PASSION...</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Currently a Student at AJIET Mangalore</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <a href="/resume.pdf" className="button" download>Resume</a>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/darshan-bhandary-b8691a249/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/darshan45672/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://twitter.com/Darshan_Bhandry"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={XIcon} alt="X" />
        </a>
        </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}