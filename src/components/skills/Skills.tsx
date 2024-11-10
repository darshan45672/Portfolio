import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components'

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

const Container = styled.section`
  margin-top: 12rem;
  padding: 0 2rem;
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
  font-size: 3rem;
  color: var(--green);
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

const CategoryContainer = styled.div`
  background-color: var(--bg-secondary);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const CategoryTitle = styled.h3`
  font-size: 2rem;
  color: var(--green);
  margin-bottom: 1.5rem;
  text-align: center;
`

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1.5rem;
  justify-items: center;
`

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const SkillImage = styled.img`
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.5rem;
`

const SkillName = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-color);
`

export function Skills() {
  return (
    <Container id='skills'>
      <Title>My Skills</Title>
      <ScrollAnimation animateIn="slideInUp">
        <SkillsGrid>
          {skills.map((category) => (
            <CategoryContainer key={category.title}>
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsContainer>
                {category.skills.map((skill) => (
                  <SkillItem key={skill.name}>
                    <SkillImage src={skill.image} alt={skill.name} />
                    <SkillName>{skill.name}</SkillName>
                  </SkillItem>
                ))}
              </SkillsContainer>
            </CategoryContainer>
          ))}
        </SkillsGrid>
      </ScrollAnimation>
    </Container>
  )
}