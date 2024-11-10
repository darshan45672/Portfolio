import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  h4 {
    color: black;
  }

  .timeline {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }

  .timeline-item {
    position: relative;
    margin: 20px 0;
    padding-left: 30px;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s forwards;
  }

  .timeline-item:nth-child(odd) {
    animation-delay: 0.2s;
  }

  .timeline-item:nth-child(even) {
    animation-delay: 0.4s;
  }

  .timeline-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 15px;
    height: 100%;
    width: 4px;
    background: black;
  }

  .timeline-content {
    background: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: background 0.3s;
  }

  .timeline-item:hover .timeline-content {
    background: #e0f7fa;
  }

  .company-logo {
    width: 50px;
    height: auto;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    text-align: center;
    color: var(--green);
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
    font-size:1em;
  }

  .hehe{
    font-size:0.8em;
  }

  b {
    font-size: 1.5rem;
  }

  p {
    margin: 5px 0;
    color: black;
  }

  ul {
    padding-left: 20px;
    margin: 5px 0 0;
  }

  li {
    list-style-type: disc;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .hard-skills {
      justify-content: center;
    }
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in-left {
  animation: slideInLeft 0.8s ease-out;
}

.slide-in-right {
  animation: slideInRight 0.8s ease-out;
}

.haha{
  font-size:0.8em;
}

`;
