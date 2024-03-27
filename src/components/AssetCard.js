import { MainContainer } from "../styles/AssetCardStyle";
import { TbArrowCurveLeft } from "react-icons/tb";
import { TbArrowCurveRight } from "react-icons/tb";
import { CiCircleInfo } from "react-icons/ci";

const AssetCard = ({ eachCard }) => {
  const { name, image, para, price, fluctuation, buttonColor, infoIcon } =
    eachCard;

  console.log(fluctuation.slice(0, 1));

  return (
    <MainContainer>
      <div className="wrapper-container">
        <div className="img-name-container">
          <img src={image} />
          <p className="name">{name}</p>
        </div>
        <p className="para">{para}</p>
        <div className="price-and-fluc-container">
          <p className="price">{price}</p>
          <p className="fluctuation">
            {fluctuation}
            {fluctuation.slice(0, 1) === "+" ? (
              <TbArrowCurveRight style={{ transform: "rotate(45deg)" }} />
            ) : (
              <TbArrowCurveLeft style={{ transform: "rotate(-115deg)" }} />
            )}
          </p>
        </div>
        <div className="btns-container">
          {<CiCircleInfo color={buttonColor} fontSize={20} />}
          <button style={{ backgroundColor: buttonColor }}>Trade</button>
        </div>
      </div>
    </MainContainer>
  );
};

export default AssetCard;
