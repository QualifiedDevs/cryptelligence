import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import Image from "next/image";

const Avatar = styled((props) => {
  return (
    <Box {...props}>
      <Box className="image-wrapper">
        <Image src={props.src} layout="fill" objectFit="contain" />
      </Box>
      <Typography variant="h5">{props.name}</Typography>
    </Box>
  );
})`
  .image-wrapper {
    position: relative;
    width: 250px;
    height: 250px;
  }
`;

const Carousel = styled((props) => {
  return (
    <Box {...props}>
      <Avatar src="/mockups/heist.jpg" name="CryptoOriginal" />
      <Avatar src="/mockups/sword.jpg" name="Engineer" />
      <Avatar src="/mockups/android.jpg" name="Android" />
      <Avatar src="/mockups/cryptoscum.jpg" name="Cryptoscum" />
      <Avatar src="/mockups/laser.jpg" name="Vr Surfer" />
    </Box>
  );
})`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const Avatars = styled((props) => {
  return (
    <Box {...props}>
      <Typography variant="h2">Avatars</Typography>
      <Typography variant="h4">
        Unique Combinations | 7 Classes | 300+ Traits
      </Typography>
      <Carousel />
    </Box>
  );
})`
  background: #0d0b1c;
`;

export default Avatars;
