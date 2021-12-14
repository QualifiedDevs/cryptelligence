import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

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
  width: 300px;
  height: 300px;
  position: relative;
`;

const About = styled((props) => {
  return (
    <Box {...props}>
      <Typography variant="h2">About Cryptelligence</Typography>
      <Typography>
        Cryptelligence Society is a limited collection of 10101 NFT avatars
        inspired by cyberpunk, sci-fi and pop culture.
      </Typography>
      <Typography>
        Each avatar is an entirely unique NFT randomly generated from over 300
        traits and stored on the Ethereum blockchain.
      </Typography>
      <Typography>
        The aim of the collection is to give each owner a truly visually
        differentiated avatar, while allowing the community to participate in
        the entertaining universe of Cryptelligence.
      </Typography>
    </Box>
  );
})``;

export default About;
