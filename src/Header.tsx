import { styled } from "@mui/material/styles";
import { Container, Box, Button, Typography } from "@mui/material";

import Logo from "./Logo";
import MainMenu from "./MainMenu";
import SocialsMenu from "./SocialsMenu";

const BannerLogo = styled((props) => {
  return (
    <Box {...props}>
      <Logo />
      <Box>
        <Typography>Cryptelligence</Typography>
        <Typography>Society</Typography>
      </Box>
    </Box>
  );
})`
  display: flex;
  align-items: flex-end;
`;

const Header = styled((props) => {
  return (
    <Box component="header" {...props}>
      <BannerLogo />
      <MainMenu />
      <Box className="wrapper-right">
        <Button >Coming Soon</Button>
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
  height: 96px;
  background: rgb(6, 3, 9);

  .wrapper-right {
    display: flex;
    button {
      margin-right: 3rem;
    }
  }
`;

export default Header;
