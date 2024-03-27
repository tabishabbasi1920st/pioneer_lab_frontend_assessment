import styled from "styled-components";

export const MainContainer = styled.header`
  /* border: 2px solid red; */
  margin-top: 15px;
  @media (min-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LeftContainer = styled.div``;

export const RightContainer = styled.div`
  margin-top: 5px;
`;

export const CustomHeading2 = styled.h2`
  color: #fff;

  .username {
    color: #77a955;
  }
`;

export const CustomHeading3 = styled.h3`
  color: #fff;

  .username {
    color: #77a955;
  }
`;

export const CustomButton = styled.button`
  height: 40px;
  width: 110px;
  border: none;
  background-color: #2ab42a;
  color: #fff;
  font-weight: 500;
  border-radius: 2px;
  cursor: pointer;
  &:hover{
    background-color: #2aacb4;
  }
`;
