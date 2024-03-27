import styled from "styled-components";

export const MainContainer = styled.li`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 576px) {
    width: 49%;
  }
  @media (min-width: 1024px) {
    width: 24.2%;
  }
  @media (min-width: 1200px) {
    width: 19.3%;
  }

  .wrapper-container {
    background-color: #171717;
    /* border: 2px solid blue; */
    margin-top: 10px;
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .img-name-container {
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .name {
    color: #fff;
  }

  .para {
    color: #fff;
  }

  .price-and-fluc-container {
    /* border: 2px solid green; */
    display: flex;
    justify-content: space-between;
    /* margin-top: auto; */
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .price {
    color: #fff;
  }

  .fluctuation {
    color: #fff;
  }

  .btns-container {
    /* border: 2px solid black; */
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    height: 40px;
    width: 100px;
    border: none;
    border-radius: 2px;
    font-weight: 500;
    cursor: pointer;
  }
`;
