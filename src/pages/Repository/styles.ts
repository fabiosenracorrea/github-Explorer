import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 350px) {
    flex-direction: column;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    font-size: 120%;
    transition: color 0.2s;

    @media (max-width: 350px) {
      margin-top: 10px;
    }


    &:hover {
      color: #666;
    }

    svg {
      margin-right: 8px;
    }
  }
`;

export const RepositoryInfo = styled.div`
  margin-top: 40px;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    @media (max-width: 700px) {
      flex-direction: column;
    }

    img {
      width: 120px;
      border-radius: 100%;

      @media (max-width: 700px) {
        margin-bottom: 12px;
      }
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 30px;
        color: #3d3d4d;
        display: block;

        @media (max-width: 700px) {
          text-align: center;
        }
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;

    @media (max-width: 700px) {
      justify-content: center;
    }

    li {
      list-style: none;

      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        font-size: 80%;
        color: #6c6c80;
      }
  }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background-color: white;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 10px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong: {
        font-size: 20px;
        color: #3D3D4D;
      }

      P {
        font-size: 18px;
        color: #a8abb3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
