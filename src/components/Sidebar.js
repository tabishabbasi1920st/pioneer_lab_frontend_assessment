import { useState } from "react";
import {
  MainContainer,
  Main,
  SidebarContainer,
  Section,
  CustomNavLink,
  HamMenuICon,
  HomeIcon,
  OrganizationIcon,
  TradeIcon,
  IconContainer,
  IconName,
  SearchContainer,
  SearchButton,
  SearchIcon,
  CustomInput,
  TopContainer,
  Logo,
  HamButton,
} from "../styles/SidebarStyle";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    path: "/Organization",
    name: "Organization",
    icon: <OrganizationIcon />,
  },
  {
    path: "/Trade",
    name: "Trade",
    icon: <TradeIcon />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <MainContainer>
      <SidebarContainer isOpen={isOpen}>
        <TopContainer>
          <Logo
            isOpen={isOpen}
            src="https://res.cloudinary.com/dctfbwk0m/image/upload/v1711506569/pioneer_lab_icon_xfks3s.png"
          />
          <HamButton
            onClick={handleToggleSidebar}
            title={isOpen ? "Close Sidebar" : "Open Sidebar"}
          >
            <HamMenuICon />
          </HamButton>
        </TopContainer>
        <SearchContainer>
          <SearchButton>
            <SearchIcon />
          </SearchButton>
          <CustomInput placeholder="Search" />
        </SearchContainer>
        <Section>
          {routes.map((route) => (
            <CustomNavLink
              to={route.path}
              key={route.name}
              activeClassName="active"
            >
              <IconContainer>{route.icon}</IconContainer>
              <IconName isOpen={isOpen}>{route.name}</IconName>
            </CustomNavLink>
          ))}
        </Section>
      </SidebarContainer>
      <Main>{children}</Main>
    </MainContainer>
  );
};

export default Sidebar;
