import Header from "../components/Header";
import MarketOverview from "../components/MarketOverview";
import WalletBalance from "../components/WalletBalance";

const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", gap: "20px" }}>
        <MarketOverview />
        <WalletBalance />
      </div>
    </div>
  );
};

export default Home;
