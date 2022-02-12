import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import Image from "next/image";

import logoBanner from "@public/logo-banner.svg";
import logoText from "@public/logo-text.svg";

const LogoBanner = styled((props) => {
  return (
    <Box {...props}>
      <Image
        src={logoBanner}
        layout="responsive"
        objectFit="contain"
        objectPosition={"center"}
      />
    </Box>
  );
})`
  width: 400px;
  position: relative;
`;

const LogoText = styled((props) => {
  return (
    <Box {...props}>
      <Image
        src={logoText}
        layout="responsive"
        objectFit="contain"
        objectPosition={"center"}
      />
    </Box>
  );
})`
  width: 200px;
  position: relative;
`;

export { LogoBanner, LogoText };
