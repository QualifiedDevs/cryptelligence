import { styled } from "@mui/material/styles";
import { Container, Box, Button, Typography } from "@mui/material";

import Logo from "./Logo";
import MainMenu from "./MainMenu";
import SocialsMenu from "./SocialsMenu";

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
    </Box>
  );
})`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

    grid-template-columns: 1fr;
    
    .wrapper-right {
      button {
        display: none;
      }
    }

    .menu {
      grid-row: 3;
      grid-column: initial;
      font-size: 1.125rem;
    }

  }
`;

export default Header;
