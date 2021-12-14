import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import Image from "next/image";

const Avatar = styled((props) => {
  return (
    <Box {...props}>
      <Box sx={{mb: 2}} className="image-wrapper">
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

  h5 {
      color: ${({theme}) => theme.palette.text.secondary};
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
      <Container className="container">
        <Typography variant="h2">Avatars</Typography>
        <Typography variant="h4" sx={{ mb: 6 }}>
          Unique Combinations | 7 Classes | 300+ Traits
        </Typography>
      </Container>
      <Container maxWidth="xl">
        <Carousel />
      </Container>
    </Box>
  );
})`
  padding: 2rem 0 5rem;
  background: #0d0b1c;

  .container {
  }
`;

export default Avatars;
