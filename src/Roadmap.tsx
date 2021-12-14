import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import Image from "next/image";
import bg from "../public/backgrounds/roadmap.jpg";

const Background = styled((props) => {
  return (
    <Box {...props}>
      <Image src={bg} layout="fill" objectFit="cover" objectPosition="center" />
    </Box>
  );
})`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Item = styled((props) => {
  return (
    <Box {...props}>
      <Typography variant="h4">{props.milestone}</Typography>
      {props.children}
    </Box>
  );
})`
  background: #15161d;
`;

const RoadmapContent = styled((props) => {
  return (
    <Box {...props}>
      <Item milestone="Main Launch">
        <Typography>
          10K collection release. Cryptoborgs form a society. Cryptelligence
          begins and we'll start here.
        </Typography>
      </Item>
      <Item milestone="Expansions">
        <Typography>
          Cryptoborgs have gone too far playing with augmentations. The Unhumans
          is the first expansion.
        </Typography>
        <Typography>
          Every Cryptoborg needs a pet companion. A limited expansion in the
          growing Cryptelligence universe.
        </Typography>
      </Item>
      <Item milestone="Partnerships & Merch">
        <Typography>
          We have exciting plans create unique partnerships with likeminded
          brands and artists.
        </Typography>
        <Typography>
          Cryptelligence appears in the physical world. Why not wear it on your
          back?
        </Typography>
      </Item>
      <Item milestone="Metaverse">
        <Typography>
          Follow the signs and enter the Cryptelligence club - a virtual world
          to share with fellow Cryptoborgs.
        </Typography>
      </Item>
      <Item milestone="Entertainment">
        <Typography>
          Our vision is to create an immersive experience around the
          Cryptelligence universe. short films, video games, comic books - all
          in a dream.
        </Typography>
      </Item>
    </Box>
  );
})``;

const Roadmap = styled((props) => {
  return (
    <Box {...props}>
      <Background />
      <Typography variant="h2">Roadmap</Typography>
      <Typography variant="h4">Further Augmentations</Typography>
      <RoadmapContent />
    </Box>
  );
})`
  position: relative;
  height: 800px;
`;

export default Roadmap;
