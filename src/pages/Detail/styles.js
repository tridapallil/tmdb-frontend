import styled from 'styled-components';

export const Title = styled.strong`
  padding: 10px;
  font-size: 24px;
  color: #999;
  margin-top: 5px;
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  position: relative;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 30px;

  footer {
    margin-top: 30px;
    @media only screen and (min-width: 1050px) {
      display: flex;
    }
    justify-content: space-between;

    img {
      @media only screen and (min-width: 0px) {
        align-self: center;
        max-width: 100%;
        border-radius: 4px 4px 0 0px;
      }
      @media only screen and (min-width: 1050px) {
        max-width: 100%;
        max-height: 400px;
        border-radius: 4px 0 0 4px;
      }
      @media only screen and (min-width: 1200px) {
        max-width: 100%;
        max-height: 650px;
        border-radius: 4px 0 0 4px;
      }
    }
  }
`;

export const GenreTags = styled.ul`
  display: grid;
  @media only screen and (min-width: 460px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 650px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (min-width: 1700px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Tag = styled.li`
  border: 1px solid;
  text-align: center;
  margin-right: 6px;
  font-size: 12px;
  position: relative;
  border-radius: 14px;
  margin: 5px 5px 5px 5px;
  padding: 6px;
`;

export const DescriptionContainer = styled.div`
  padding: 10px;
  strong {
    @media only screen and (min-width: 250px) {
      font-size: 20px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 32px;
    }
  }

  p {
    color: #333;
    display: flex;
    align-self: flex-end;
    margin-left: 15px;
  }

  div {
    @media only screen and (min-width: 1050px) {
      margin-top: 3%;
    }
    > p {
      color: #999;
      margin-left: 15px;
    }

    > p {
      color: #999;
      padding: 5px;
      margin-left: 10px;
    }

    > div {
      color: #999;
      @media only screen and (min-width: 1050px) {
        position: absolute;
      }
      bottom: 8px;
      font-weight: bold;
      padding: 5px;

      > p {
        color: #999;
        margin-left: 10px;
      }
    }

    b {
      color: #999;
      @media only screen and (min-width: 1050px) {
        margin-top: 100px;
      }
      font-size: 20px;
    }
  }
`;
