import { styled } from "@mui/material/styles";
import { Container, Box, Button, Typography } from "@mui/material";

import Logo from "./Logo";
import MainMenu from "./MainMenu";
import SocialsMenu from "./SocialsMenu";
import MenuButton from "./MenuButton"

const BannerLogo = styled((props) => {
  return (
    <Box {...props}>
      <Logo className="logo" />
      <Typography variant="h5">
        <b>Cryptelligence</b>
        <br />
        Society
      </Typography>
    </Box>
  );
})`
  display: flex;
  align-items: flex-start;
  font-size: 1.25rem;
  .logo {
    width: 2em;
    margin-right: 1em;
    height: 100%;
  }
  h5 {
    color: white;
    font-size: inherit;
    b {
      letter-spacing: .2em;
    }
  }
`;

const Header = styled((props) => {
  return (
    <Box component="header" {...props}>
      <BannerLogo className="banner-logo" />
      <MainMenu className="menu" />
      <Box className="wrapper-right">
        <Button>Coming Soon</Button>
        <SocialsMenu
          className="socials"
          socials={{
            discord: "",
            twitter: "",
          }}
        />
      </Box>
      <MenuButton className="menu-button"/>
    </Box>
  );
})`
  display: grid;
  grid-template-columns: 3fr 5fr 3fr;
  justify-items: center;
  align-items: center;
  height: 124px;
  background: rgb(6, 3, 9);

  .wrapper-right {
    display: flex;
    button {
      border-radius: 0 10px;
      margin-right: 3rem;
      font-family: relaxia;
    }
  }

  .menu-button {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    grid-template-columns: 1fr 1fr;
    height: 180px;

    .banner-logo {
      font-size: 1rem;
    }

    .wrapper-right {
    }

    .menu {
      grid-row: 2;
      grid-column: span 2;
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {

    height: 100px;

    display: flex;
    padding: 2rem 2rem 0 1rem;
    justify-content: space-between;
    
    .wrapper-right {
      display: none;
      button {
        display: none;
      }
    }

    .menu {
      display: none;
      grid-row: 3;
      grid-column: initial;
      font-size: 1.125rem;
    }

    .menu-button {
      display: initial;
      width: 40px;
      height: 40px;
    }
    

  }
`;

export default Header;
