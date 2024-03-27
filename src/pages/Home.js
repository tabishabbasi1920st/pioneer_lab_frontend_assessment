import Header from "../components/Header";
import MarketOverview from "../components/MarketOverview";
import WalletBalance from "../components/WalletBalance";
import RecentPost from "../components/RecentPost";
import Assets from "../components/Assets";
import { FaAngleDown } from "react-icons/fa";

import {
  MainContainer,
  ChartsCardContainer,
  CustomHeading,
  CustomContainer,
  CustomPara,
} from "../styles/HomeStyle";

const Home = () => {
  return (
    <MainContainer>
      <Header />
      <ChartsCardContainer>
        <MarketOverview />
        <WalletBalance />
        <RecentPost />
      </ChartsCardContainer>
      <CustomContainer>
        <CustomHeading>Assets</CustomHeading>
        <CustomPara style={{ fontSize: "20px" }}>
          Today <FaAngleDown />
        </CustomPara>
      </CustomContainer>
      <Assets />
    </MainContainer>
  );
};

export default Home;
