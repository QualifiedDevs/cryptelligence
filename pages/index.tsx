import * as React from "react";
import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Header from "../src/Header";
import Hook from "../src/Hook";
import FAQ from "../src/FAQ";

import MultiButton from "../src/MultiButton";
import useCandyMachine from "../hooks/useCandyMachine";

import Countdown from "../src/Countdown";

const MockupsGif = styled((props) => {
  return <img {...props} />;
})`
  border: 8px solid white;
  background: white;

  &,
  img {
    border-radius: 8px;
  }
`;

const QuantityAvailable = styled((props) => {
  const { nftsData } = useCandyMachine();

  return (
    <Typography {...props} className="quantity">
      {nftsData.itemsRemaining}/{nftsData.itemsAvailable}
    </Typography>
  );
})``;

const MintBox = styled((props) => {
  return (
    <Container {...props}>
      <MockupsGif src="one-of-one-mockups.gif" />
      <MockupsGif src="random-mockups.gif" />
      <QuantityAvailable />
      <Countdown>
        <MultiButton />
      </Countdown>
    </Container>
  );
})`
  border: 8px solid white;
  border-radius: 25px;
  padding: 3rem;
  background-image: url(honey.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.2rem;
  grid-column-gap: 1.5rem;

  img {
    width: max(70%, 150px);
    margin: auto;
    border-radius: 25px;
  }

  .quantity {
    grid-row: 3/3;
    grid-column: span 2;
    width: fit-content;
    margin: auto;

    text-shadow: rgb(0, 0, 0) 4px 0px 0px, rgb(0, 0, 0) 3.87565px 0.989616px 0px,
      rgb(0, 0, 0) 3.51033px 1.9177px 0px, rgb(0, 0, 0) 2.92676px 2.72656px 0px,
      rgb(0, 0, 0) 2.16121px 3.36588px 0px, rgb(0, 0, 0) 1.26129px 3.79594px 0px,
      rgb(0, 0, 0) 0.282949px 3.98998px 0px,
      rgb(0, 0, 0) -0.712984px 3.93594px 0px,
      rgb(0, 0, 0) -1.66459px 3.63719px 0px,
      rgb(0, 0, 0) -2.51269px 3.11229px 0px,
      rgb(0, 0, 0) -3.20457px 2.39389px 0px,
      rgb(0, 0, 0) -3.69721px 1.52664px 0px,
      rgb(0, 0, 0) -3.95997px 0.56448px 0px,
      rgb(0, 0, 0) -3.97652px -0.432781px 0px,
      rgb(0, 0, 0) -3.74583px -1.40313px 0px,
      rgb(0, 0, 0) -3.28224px -2.28625px 0px,
      rgb(0, 0, 0) -2.61457px -3.02721px 0px,
      rgb(0, 0, 0) -1.78435px -3.57996px 0px,
      rgb(0, 0, 0) -0.843183px -3.91012px 0px,
      rgb(0, 0, 0) 0.150409px -3.99717px 0px,
      rgb(0, 0, 0) 1.13465px -3.8357px 0px,
      rgb(0, 0, 0) 2.04834px -3.43574px 0px,
      rgb(0, 0, 0) 2.83468px -2.82216px 0px,
      rgb(0, 0, 0) 3.44477px -2.03312px 0px,
      rgb(0, 0, 0) 3.84068px -1.11766px 0px,
      rgb(0, 0, 0) 3.9978px -0.132717px 0px;
    font-size: 2.5rem;
    font-weight: 400;
  }

  @media screen and (max-width: 750px) {
    padding: 1.5rem;
    .quantity {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 450px) {
    img {
      width: min(150px, 100%);
    }
  }
`;

export default styled((props) => {
  return (
    <Box {...props}>
      <img src="/forest.gif" className="bg-img" />
      <Header />
      <Box className="body">
        <Hook sx={{ mb: 10 }} />
        <Container maxWidth="md">
          <MintBox sx={{ mb: 10 }} />
          <FAQ sx={{ m: "auto", mb: 10 }} />
        </Container>
      </Box>
    </Box>
  );
})`
  position: relative;

  .bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    height: 100vh;
    z-index: -1;
    overflow: hidden;
  }

  .body {
    position: relative;
    overflow: hidden;
  }
`;
