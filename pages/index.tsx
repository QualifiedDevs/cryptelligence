import * as React from "react";
import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Header from "../src/Header";
import Hook from "../src/Hook";
import FAQ from "../src/FAQ";

import MultiButton from "../src/MultiButton";
import useCandyMachine from "../hooks/useCandyMachine";

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
      <MultiButton />
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
    -webkit-text-stroke: 2px
      ${({ theme }) => theme.palette.strokeSecondary.main};
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
      width: min(150px, 100%)
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