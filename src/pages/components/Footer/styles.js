import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;
`;

export const PageButton = styled.span`
  border: solid 1px #00d27b;
  color: #00d27b;
  padding: 5px 5px 5px 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Page = styled.span`
  border: solid 1px #00d27b;
  background-color: #00d27b;
  color: #fff;
  padding: 5px 5px 5px 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const ChangePage = styled.span`
  font-weight: bold;
  color: #00d27b;
  cursor: pointer;
  > a {
    font-weight: bold;
    color: #00d27b;
  }
`;

export const Content = styled.div`
  height: 64px;
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
  align-content: center;
  text-align: center;
`;
