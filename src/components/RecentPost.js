import {
  MainContainer,
  HeaderContainer,
  MiddleContainer,
  PostContainer,
  FooterContainer,
} from "../styles/RecentPostStyle";
import { MdOutlineVerified } from "react-icons/md";
import { BsChatFill, BsArrowDownUp } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const RecentPost = () => {
  return (
    <MainContainer>
      <HeaderContainer>
        <p>In recent posts</p>
      </HeaderContainer>
      <MiddleContainer>
        <PostContainer>
          <div className="tweet">
            <img src="https://res.cloudinary.com/dctfbwk0m/image/upload/v1711530828/recent_post_wzosgp.png" />

            <div className="head-container">
              <div className="first-container">
                <p className="name">Carbon Cell</p>
                <MdOutlineVerified color="#fff" />
                <p className="username">@carboncell.2h</p>
              </div>

              <div>
                <p className="highlight">
                  Carbon Cell: Pioneering Financial Solution for a Greener
                  Future!
                </p>
              </div>

              <div className="body">
                <p className="link">
                  Read more:
                  https://carboncell.medium.com/introducing-carbon-cell-d8b9dc18b6c7...
                </p>
                <p className="tweet-text">
                  In a world where decarbonization is paramount, Carbon Cell is
                  leading the charge to redefine #CarbonMarkets, Follow this
                  thread to learn how we're making sustainable... Show more
                </p>
              </div>
              <ul className="icons-container">
                <li>
                  <BsChatFill fontSize={".7em"} color="#5c6068" />
                  19
                </li>
                <li>
                  <BsArrowDownUp fontSize={".7em"} color="#5c6068" />
                  48
                </li>
                <li>
                  <FaRegHeart fontSize={".7em"} color="#5c6068" />
                  482
                </li>
                <li>
                  <FiLogOut
                    color="#5c6068"
                    fontSize={".7em"}
                    style={{ transform: "rotate(-90deg)" }}
                  />
                  36
                </li>
              </ul>
            </div>
          </div>
        </PostContainer>
      </MiddleContainer>
      <FooterContainer>
        <button>Follow us on x</button>
      </FooterContainer>
    </MainContainer>
  );
};

export default RecentPost;
