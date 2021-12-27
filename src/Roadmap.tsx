import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import Image from "next/image";
import bg from "../public/backgrounds/roadmap.jpg";
import roadmapItem from "../public/vector-images/roadmap-item.svg";

const Background = styled((props) => {
  return (
    <Box {...props}>
      <Image src={bg} layout="fill" objectFit="cover" objectPosition="center" />
    </Box>
  );
})`
  background: ${({ theme }) => theme.palette.background.default};
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Item = styled((props) => {
  return (
    <Box {...props} className={`${props.className} item`}>
      <Box className="bg">
        <Image src={roadmapItem} layout="fill" objectFit="cover" />
      </Box>
      <Typography variant="h5" component="h4" sx={{ mb: 2 }}>
        {props.milestone}
      </Typography>
      {props.children}
    </Box>
  );
})`
  position: relative;
  padding: 1.5em;

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
  }

  p {
    margin-left: 2em;
    &::before {
      content: "-";
    }
    margin-bottom: 0.2em;
    :last-of-type {
      margin-bottom: 0em;
    }
  }
`;

/*
  TODO: Add stage to left of each
*/
const RoadmapContent = styled((props) => {
  const items = props.children.map((item: JSX.Element, index: number) => {
    return (
      <Box key={index + 1} className="stage-wrapper">
        <Typography variant="h6" className="stage-label">Stage {index + 1}</Typography>
        {item}
      </Box>
    );
  });
  return <Box {...props}>{items}</Box>;
})`
  .stage-wrapper {
    display: flex;

    .stage-label {
      margin-top: 1em;
      white-space: nowrap;
      margin-right: .8em;
    }

    .item {
      width: 100%;
      min-height: 150px;
      margin-bottom: 2em;
    }
  }
`;

const Roadmap = styled((props) => {
  return (
    <Box {...props} sx={{ pb: 8 }}>
      <Background />
      <Container sx={{ pt: 8 }} {...props}>
        <Typography variant="h2">Roadmap</Typography>
        <Typography variant="h4">Further Augmentations</Typography>
        <RoadmapContent sx={{ mt: 15 }}>
          <Item milestone="Main Launch">
            <Typography>
              10K collection release. Cryptoborgs form a society. Cryptelligence
              begins and we'll start here.
            </Typography>
          </Item>
          <Item milestone="Expansions">
            <Typography>
              Cryptoborgs have gone too far playing with augmentations. The
              Unhumans is the first expansion.
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
              Cryptelligence appears in the physical world. Why not wear it on
              your back?
            </Typography>
          </Item>
          <Item milestone="Metaverse">
            <Typography>
              Follow the signs and enter the Cryptelligence club - a virtual
              world to share with fellow Cryptoborgs.
            </Typography>
          </Item>
          <Item milestone="Entertainment">
            <Typography>
              Our vision is to create an immersive experience around the
              Cryptelligence universe. short films, video games, comic books -
              all in a dream.
            </Typography>
          </Item>
        </RoadmapContent>
      </Container>
    </Box>
  );
})`
  position: relative;
`;

export default Roadmap;
