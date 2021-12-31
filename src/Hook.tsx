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
  height: 100%;
  overflow: hidden;

  ${({theme}) => theme.breakpoints.down("sm")} {
  top: 50px;
  height: 500px;
  }
`;

const Hook = styled((props) => {
  return (
    <Box {...props} id="hook">
      <Header />
      <Background />
      <Box className="contents">
        <Typography variant="h1" sx={{ mt: 5 }}>
          <b>Cryptelligence</b>
          <br />
          Society
        </Typography>
      </Box>
    </Box>
  );
})`
  height: 100vh;
  display: flex;
  flex-direction: column;
  .contents {
    padding-top: 1rem;
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
      b {
        font-weight: 400;
        letter-spacing: .2em;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    h1 {
      font-size: 3.6rem;
    }
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    h1 {
      font-size: 2.7rem;
    }
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    height: 500px;
    .contents {
      h1 {
        font-size: 1.8rem;
      }
    }
  }
  ${({ theme }) => theme.breakpoints.down("sx")} {
    h1 {
      font-size: 1.3rem;
    }
  }
`;

export default Hook;
