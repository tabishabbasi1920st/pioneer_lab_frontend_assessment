import {
  MainContainer,
  LeftContainer,
  RightContainer,
  CustomHeading2,
  CustomHeading3,
  CustomButton,
} from "../styles/HeaderStyle";

const Header = () => {
  const username = "Brookly Simmons";

  return (
    <MainContainer>
      <LeftContainer>
        <CustomHeading2>
          Hello, <span className="username">{username}&#x1F44F;</span>
        </CustomHeading2>
        <CustomHeading3>
          Welcome to Spot <span>Spot trading !</span>
        </CustomHeading3>
      </LeftContainer>
      <RightContainer>
        <CustomButton>Start Trading</CustomButton>
      </RightContainer>
    </MainContainer>
  );
};

export default Header;
