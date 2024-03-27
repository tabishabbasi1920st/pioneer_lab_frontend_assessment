import styled from "styled-components";

export const MainContainer = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 350px;
  background-color: #171717;
  border-radius: 10px;
  padding: 10px 5px 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* max-width: 400px; */
  @media (min-width: 1025px) {
    width: 44.5%;
  }
`;

export const HeaderContainer = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 5px;
  padding-bottom: 15px;
  border-bottom: 2px solid #2f2f2f;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 10px;

  p {
    color: #fff;
  }

  ul {
    /* border: 2px solid red; */
    display: flex;
    gap: 5px;
  }

  ul li {
    color: #626262;
    font-size: 14px;
  }

  .selected {
    color: #fff;
  }
`;

export const FooterContainer = styled.div`
  border-top: 1px solid #2f2f2f;
  /* border: 2px solid red; */
  padding-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #555555;
  }

  button {
    height: 40px;
    width: 80px;
    border: none;
    background-color: #2ab42a;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
`;
