import { MainContainer } from "../styles/AssetsStyle";
import AssetCard from "../components/AssetCard";

const cardsData = [
  {
    name: "NBST",
    image:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1711537665/nbst_ywebnx.png",
    para: "Nature Based Solution",
    price: "0.72$",
    fluctuation: "+11.01%",
    buttonColor: "#1b9a59",
  },
  {
    name: "EFT",
    image:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1711537686/eft_x8dsjx.png",
    para: "Energy Efficiency Token",
    price: "0.36$",
    fluctuation: "+9.15%",
    buttonColor: "#9fff9d",
  },
  {
    name: "WPCT",
    image:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1711537694/wpct_hg7d0e.png",
    para: "Waste Management and Plastic credits Token",
    price: "1.20",
    fluctuation: "+11.01%",
    buttonColor: "#77f534",
  },
  {
    name: "RET",
    image:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1711537700/ret_at2qoc.png",
    para: "Renewable Energy Token",
    price: "0.46$",
    fluctuation: "-0.56%",
    buttonColor: "#eed70a",
  },
  {
    name: "WET",
    image:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1711538439/wet_pdr4mv.png",
    para: "Water Token",
    price: "0.48$",
    fluctuation: "-1.48%",
    buttonColor: "#03c3ff",
  },
];

const Assets = () => {
  return (
    <MainContainer>
      {cardsData.map((eachCard) => (
        <AssetCard key={eachCard.name} eachCard={eachCard} />
      ))}
    </MainContainer>
  );
};

export default Assets;
