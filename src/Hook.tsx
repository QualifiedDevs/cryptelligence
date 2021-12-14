import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import Image from "next/image";
import bg from "../public/backgrounds/hook.jpg";

import Header from "../src/Header";

const Background = styled((props) => {
  return (
    <Box {...props}>
      <Image src={bg} layout="fill" objectFit="cover" objectPosition="center" />
    </Box>
  );
})`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Hook = styled((props) => {
  return (
    <>
      <Background />
      <Box {...props}>
        <Header />
        <Box className="contents">
          <Typography variant="h1" sx={{mt: 5}}>
            <b>Cryptelligence</b>
            <br />
            Society
          </Typography>
        </Box>
      </Box>
    </>
  );
})`
  height: 100vh;
  display: flex;
  flex-direction: column;
  .contents {
    flex-grow: 1;

    background: linear-gradient(
      0deg,
      rgba(6, 3, 9, 1) 0%,
      rgba(6, 3, 9, 0.19369754737832634) 35%,
      rgba(6, 3, 9, 0.2049020291710434) 65%,
      rgba(6, 3, 9, 1) 100%
    );

    h1 {
        text-align: center;
    }
  }
`;

export default Hook;
