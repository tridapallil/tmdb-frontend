import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';

export const MovieEmpty = styled.div.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  h1 {
    text-align: center;
    margin-top: 20%;
    color: #999;
  }
  text-align: center;
  ${props =>
    props.loading &&
    css`
      svg {
        margin-top: 20%;
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const MovieList = styled.ul`
  display: grid;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  grid-gap: 10px;
  list-style: none;
  padding: 40px;
  margin-left: 5%;
  margin-right: 5%;

  h1 {
    display: flex;
  }

  li {
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 10%;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 0px;

    img {
      align-self: center;
      max-width: 100%;
      border-radius: 4px 4px 0 0;
      max-height: 620px;
    }

    > span {
      flex: 1;
      font-size: 13px;
      padding: 10px;
      color: #999;
      text-align: left;
    }

    p {
      color: #999;
      padding: 10px;
      text-align: right;
    }

    > button {
      background: #00d27b;
      align-self: flex-end;
      color: #fff;
      height: 35px;
      width: 80px;
      top: -3%;
      position: relative;
      border: 0;
      border-radius: 20px;
      overflow: hidden;
      margin-top: auto;
      margin-right: 10px;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#00d27b')};
      }

      span {
        flex: 1;
        font-size: 12px;
        padding: 10px;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

export const Title = styled.strong`
  padding: 10px;
  font-size: 24px;
  line-height: 20px;
  color: #999;
  margin-top: 5px;
`;
