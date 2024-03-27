import styled from "styled-components";

export const MainContainer = styled.div`
  /* border: 2px solid red; */
  height: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #171717;
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px;

  .top-container {
    color: #fff;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 2px solid #2f2f2f;
    padding-bottom: 10px;
    align-items: center;
  }

  button {
    width: 30px;
    height: 30px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
