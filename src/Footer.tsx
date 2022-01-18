import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import Logo from "./Logo";
import SocialsMenu from "./SocialsMenu";

import {LogoBanner} from "./Branding"

const Footer = styled((props) => {
  return (
    <Box component="footer" {...props}>
      <LogoBanner sx={{ mt: 2, mb: 3 }} />
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
  text-align: center;
`;

export default Footer;
