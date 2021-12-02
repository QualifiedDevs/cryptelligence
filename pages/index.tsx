import * as React from "react";
import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Header from "../src/Header";
import Hook from "../src/Hook";
import FAQ from "../src/FAQ";

import MintButton from "../src/MintButton";

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
  return (
    <Typography {...props} className="quantity">
      1111/1111
    </Typography>
  );
})`

`;

const MintBox = styled((props) => {
  return (
    <Container {...props}>
      <MockupsGif src="one-of-one-mockups.gif" />
      <MockupsGif src="random-mockups.gif" />
      <QuantityAvailable />
      <MintButton />
    </Container>
  );
})`
  border: 8px solid white;
  border-radius: 8px;
  padding: 3rem;
  background-image: url(honey.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.2rem;

  img {
    width: 80%;
    margin: auto;
  }

  button {
    grid-row: 4/4;
    grid-column: span 2;
    width: 20%;
    margin: auto;
  }

  .quantity {
    grid-row: 3/3;
    grid-column: span 2;
    width: fit-content;
    margin: auto;
    -webkit-text-stroke: 2px ${({ theme }) => theme.palette.strokeSecondary.main};
    font-size: 1.8rem;
    font-weight: 900;
  }
`;

export default styled((props) => {
  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{ w: "100%", mb: 10 }}
      {...props}
    >
      <Header />
      <Hook sx={{ mb: 10 }} />
      <MintBox sx={{ mb: 10 }} />
      <FAQ sx={{ m: "auto" }} />
    </Container>
  );
})``;

//deploy