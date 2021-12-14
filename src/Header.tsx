import { styled } from "@mui/material/styles";
import { Container, Box, Button, Typography } from "@mui/material";

import Logo from "./Logo";
import MainMenu from "./MainMenu";
import SocialsMenu from "./SocialsMenu";

const BannerLogo = styled((props) => {
  return (
    <Box {...props}>
      <Logo className="logo"/>
      <Typography variant="h5">
        <b>Cryptelligence</b>
        <br />
        Society
      </Typography>
    </Box>
  );
})`
  display: flex;
  .logo {
    margin-right: 1em;
  }
`;

const Header = styled((props) => {
  return (
    <Box component="header" {...props}>
      <BannerLogo />
      <MainMenu />
      <Box className="wrapper-right">
        <Button>Coming Soon</Button>
        <SocialsMenu
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
`;

export default Header;
