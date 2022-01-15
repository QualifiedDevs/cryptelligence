import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import Image from "next/image";
import logo from "../public/vector-images/logo.svg"

const Logo = styled((props) => {
  return <Box {...props}>
    <Image src={logo} layout="fill" objectFit="contain" objectPosition="center" />
  </Box>;
})`
position: relative;
`;

export default Logo;