import styled from "styled-components";

export const MainContainer = styled.div`
  /* border: 2px solid red; */
  height: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* max-width: 300px; */
  padding: 10px 5px 10px 5px;
  background-color: #171717;
  border-radius: 10px;
  @media (min-width:768px){
    width:49.4%;
  }
  @media (min-width: 1025px) {
    width: 26.6%;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid #2f2f2f;
  margin-top: 10px;

  p {
    color: #fff;
    border-bottom: 1px solid #2f2f2f;
    text-align: center;
    padding-bottom: 5px;
    font-size: 16px;
  }
`;

export const FooterContainer = styled.div`
  border-top: 2px solid #2f2f2f;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const CustomButton = styled.button`
  height: 40px;
  width: 110px;
  border: none;
  border-radius: 2px;
  background-color: #2ab42a;
  color: #fff;
  cursor: pointer;
`;
