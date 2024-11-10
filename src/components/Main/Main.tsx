import Particles from "react-tsparticles"
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import js from '../../assets/js-icon.svg'
import ts from '../../assets/typescript-icon.svg'
import nodeIcon from '../../assets/node-icon.svg'
import vscode from '../../assets/vscode-icon.svg'
import { Skills } from "../skills/Skills";
import Experience from "../experience/Experience";

const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      },
      {
        name: "CSS",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      },
      {
        name: "JavaScript",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "React Js",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      },
      {
        name: "Redux",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
      },
      {
        name: "Bootstrap",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      },
      {
        name: "Tailwind CSS",
        image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "jQuery",
        image: "https://cdn.icon-icons.com/icons2/2415/PNG/512/jquery_plain_wordmark_logo_icon_146445.png",
      },
      {
        name: "Alpine JS",
        image: "https://www.markusantonwolf.com/topics/alpine-js/alpinejs-logo.svg",
      },
      {
        name: "Vue Js",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
      },
      {
        name: "Live Wire",
        image: "https://laravel-livewire.com/img/twitter.png",
      },
      {
        name: "Filament",
        image: "https://logowik.com/content/uploads/images/t_filament-laravel4896.logowik.com.webp",
      },
      {
        name: "Wordpress",
        image: "https://cdn.pixabay.com/photo/2016/11/09/08/58/wordpress-1810632_640.jpg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
      },
      {
        name: "PHP",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      },
      {
        name: "Laravel",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
      },
      {
        name: "Express Js",
        image: "https://w7.pngwing.com/pngs/545/451/png-transparent-node-js-express-js-javascript-solution-stack-web-application-others-angle-text-rectangle-thumbnail.png",
      },
      {
        name: "Python",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "dotnet",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg",
      },
      {
        name: "Django",
        image: "https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png",
      },
      {
        name: "MySQL",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "PostgreSQL",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      },
      {
        name: "Docker",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "AWS",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Azure",
        image: "https://swimburger.net/media/ppnn3pcl/azure.png",
      },
      {
        name: "TypeScript",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
    ],
  },
  {
    title: "Full Stack Frameworks",
    skills: [
      {
        name: "Laravel",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
      },
      {
        name: "Django",
        image: "https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png",
      },
      {
        name: "MERN Stack",
        image: "https://static-00.iconduck.com/assets.00/mern-icon-2048x2048-92sgvove.png",
      },
      {
        name: "Next Js",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg",
      }
    ],
  },
  {
    title: "Fundamental Languages",
    skills: [
      {
        name: "Python",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "JavaScript",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "Java",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "C++",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "C#",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      },
      {
        name: "PHP",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      },
      {
        name: "TypeScript",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
    ],
  }
];

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          "fullScreen": {
            "enable": true,
            "zIndex": 1
          },
          "detectRetina": true,
          "fpsLimit": 60,
          "interactivity": {
            "events": {
              "onClick": {
                "enable": true,
                "mode": "push"
              },
              "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                  "enable": false,
                  "force": 60,
                  "smooth": 10
                }
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 2,
              },
              "connect": {
                "distance": 80,
                "lineLinked": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 400,
                "lineLinked": {
                  "opacity": 1
                }
              },
              "push": {
                "quantity": 2
              },
              "remove": {
                "quantity": 2
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              }
            }
          },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "lineLinked": {
              "blink": false,
              "color": "#000",
              "consent": false,
              "distance": 150,
              "enable": false,
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "attract": {
                "enable": false,
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "bounce": false,
              "direction": "none",
              "enable": true,
              "outMode": "out",
              "random": false,
              "speed": 2,
              "straight": false
            },
            "number": {
              "density": {
                "enable": true,
                "area": 800
              },
              "limit": 20,
              "value": 15,
            },
            "opacity": {
              "animation": {
                "enable": true,
                "minimumValue": 0.2,
                "speed": 1,
                "sync": false
              },
              "random": true,
              "value": 1
            },
            "rotate": {
              "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
              },
              "direction": "random",
              "random": true,
              "value": 0
            },
            "shape": {
              "character": {
                "fill": false,
                "font": "Verdana",
                "style": "",
                "value": "*",
                "weight": "400"
              },
              "image": [
                {
                  "src": ts,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": js,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": nodeIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": vscode,
                  "width": 20,
                  "height": 20
                },
                ...skills.flatMap(category =>
                  category.skills.map(skill => ({
                    src: skill.image,
                    width: 20,
                    height: 20
                  }))
                )
              ],
              "polygon": {
                "sides": 5
              },
              "stroke": {
                "color": "#000000",
                "width": 0
              },
              "type": "image"
            },
            "size": {
              "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "sync": false
              },
              "random": false,
              "value": 16
            }
          },
          "polygon": {
            "draw": {
              "enable": false,
              "lineColor": "#ffffff",
              "lineWidth": 0.5
            },
            "move": {
              "radius": 10
            },
            "scale": 1,
            "url": ""
          },
          "background": {
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          }
        }}
      />
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}