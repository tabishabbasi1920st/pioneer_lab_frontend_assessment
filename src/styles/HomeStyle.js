import styled from "styled-components";

export const MainContainer = styled.div`
  /* border: 2px solid red; */
`;

export const ChartsCardContainer = styled.div`
  padding: 10px 0px 10px 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* border: 2px solid green; */
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

export const CustomContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomHeading = styled.h2`
  color: #fff;
`;

export const CustomPara = styled.p`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
