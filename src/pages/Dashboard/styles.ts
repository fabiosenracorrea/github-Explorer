import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 30px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`

  max-width: 700px;
  display: flex;
  align-items: center;
  margin-top: 40px;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    border: none;
    color: #3a3a3a;
    border: 2px solid white;

    ${(props) => props.hasError && css`
      border-color: #c53030;
    `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    height: 70px;
    width: 120px;
    background-color: #04D361;
    border: none;
    border-radius: 0 5px 5px 0;
    color: white;
    font-weight: 700;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#04D361')};
    }
  }
`;

export const ApiError = styled.span`
  display: block;
  color: #c53030;
  margin: 8px 0 0 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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

    img {
      width: 64px;
      border-radius: 100%;
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
