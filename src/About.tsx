import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import Image from "next/image";
import mockups from "../public/mockups.gif";

const MockupsGif = styled((props) => {
  return (
    <Box {...props}>
      <Image
        src={mockups}
        layout="fill"
        objectFit="contain"
        objectPosition="center"
      />
    </Box>
  );
})`
  width: 100%;
  height: 100%;
  position: relative;
`;

const About = styled((props) => {
  return (
    <Box {...props}>
      <Container className="container">
        <Box className="text-wrapper">
          <Typography variant="h2">
            About
            <br />
            Cryptelligence
          </Typography>
          <Typography>
            Cryptelligence Society is a limited collection of 10101 NFT avatars
            inspired by cyberpunk, sci-fi and pop culture.
          </Typography>
          <Typography>
            Each avatar is an entirely unique NFT randomly generated from over
            300 traits and stored on the Ethereum blockchain.
          </Typography>
          <Typography>
            The aim of the collection is to give each owner a truly visually
            differentiated avatar, while allowing the community to participate
            in the entertaining universe of Cryptelligence.
          </Typography>
        </Box>
        <MockupsGif />
      </Container>
    </Box>
  );
})`
  padding: 2rem 0 8rem;

  background: rgb(6, 3, 9);
  .container {
    display: grid;
    grid-template-columns: 3fr 3fr;
    grid-column-gap: 5rem;

    h2 {
      margin-bottom: 5rem;
    }

    p {
        margin-bottom: 2rem;
    }
  }
`;

export default About;
