import styled from "styled-components";
import { NavLink } from "react-router-dom";

// icons..
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { GoOrganization } from "react-icons/go";
import { RiArrowUpDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

export const MainContainer = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  /* border: 2px solid red; */
  display: flex;
  padding: 5px;
  gap: 10px;

  background-color: #0b0b0b;
`;

export const SidebarContainer = styled.div`
  background-color: #1a1e1c;
  width: ${(props) => (props.isOpen ? "200px" : "51px")};
  min-height: 100%;
  max-height: 100vh;
  transition: all .1s ease-in-out;
  border-radius: 5px;
  flex-shrink: 0;
  /* display: none; */
`;

export const TopContainer = styled.div`
  margin: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const Logo = styled.img`
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const HamButton = styled.button`
  font-size: 22px;
  background: transparent;
  color: #fff;
  border: none;
  margin-left: 5px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  margin: 8px;
  display: flex;
  gap: 5px;
  background-color: #333333;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const SearchButton = styled.button`
  margin-left: 8px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  color: #fff;
  border: none;
`;

export const SearchIcon = styled(FaSearch)``;

export const CustomInput = styled.input`
  height: 100%;
  flex-grow: 1;
  width: 100%;
  border: none;
  background: transparent;
  padding: 10px;
  color: #bcbcbc;
  outline: none;
  font-size: 16px;
`;

export const Main = styled.main`
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  /* border:2px solid red; */
`;

export const Section = styled.section`
  padding: 10px;
  /* border: 2px solid green; */
`;

export const CustomNavLink = styled(NavLink)`
  display: flex;
  padding: 5px;
  gap: 15px;
  align-items: center;
  color: #fff;

  &.${(props) => props.activeClassName} {
    color: green;
    font-weight: bold;
  }

  &.${(props) => props.activeClassName} > svg {
    color: green;
  }
`;

export const IconContainer = styled.div`
  font-size: 20px;
`;

export const HamMenuICon = styled(GiHamburgerMenu)``;
export const HomeIcon = styled(FaHome)``;
export const OrganizationIcon = styled(GoOrganization)``;
export const TradeIcon = styled(RiArrowUpDownLine)``;

export const IconName = styled.p`
  font-weight: 400;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
