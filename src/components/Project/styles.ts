import styled from 'styled-components';

export const Container = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: #f5f5f5;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 3rem;
    color: #23ce6b;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .project {
    background: #1e1e1e;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s, box-shadow 0.3s;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7);
    }

    header {
      padding: 2rem;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .buttons {
      display: flex;
      flex-direction: column;
    }

    .body {
      padding: 1.5rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    h3 {
      font-size: 1.6rem;
      margin: 0.5rem 0;
      color: #f5f5f5;
    }

    p {
      font-size: 1em;
      color: #ccc;
      line-height: 1.6;
      margin-bottom: 1rem;
      flex-grow: 1;
    }

    footer {
      padding: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      .github-button {
        position: absolute;
        left: 1rem;
        display: flex;
        align-items: center;

        a {
          color: #23ce6b;
          text-decoration: none;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.2s;

          &:hover {
            color: #1a9d50;
          }
        }
      }

      .live-demo-button {
        position: absolute;
        right: 1rem;
        display: flex;
        align-items: center;

        a {
          color: #23ce6b;
          text-decoration: none;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.2s;

          &:hover {
            color: #1a9d50;
          }
        }
      }

      .tech-list {
        list-style: none;
        padding: 0;
        display: flex;
        font-size: 0.5rem;
        flex-wrap: wrap;
        margin: 0;
      }
    }
  }

  @media(max-width: 960px) {
    .projects {
      grid-template-columns: 1fr;
    }

    h2 {
      font-size: 2.5rem;
    }
  }

  @media(max-width: 600px) {
    .project {
      padding: 1rem;
    }
  }
`;
