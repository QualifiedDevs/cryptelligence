import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import Logo from "./Logo";
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
    b {
      letter-spacing: 0.15em;
      font-weight: 300;
    }
  }
`;

const Footer = styled((props) => {
  return (
    <Box component="footer" {...props}>
      <BannerLogo sx={{ mt: 2, mb: 3 }} />
      <SocialsMenu
        socials={{
          discord: "",
          twitter: "",
        }}
        sx={{mb: 4}}
      />
      <Typography color="#433d47">
        Copyright @ 2021 Cryptelligence. All rights reserved.
      </Typography>
    </Box>
  );
})`
  padding: 2rem;
  background: #060408;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Footer;
