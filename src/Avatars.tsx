import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import Image from "next/image";

const Avatar = styled((props) => {
  return (
    <Box {...props} className={`${props.className} avatar`}>
      <Box sx={{ mb: 2 }} className="image-wrapper">
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
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

const Carousel = styled((props) => {
  return (
    <Box {...props} className={`${props.className} carousel`}>
      <Avatar src="/mockups/heist.jpg" name="CryptoOriginal" />
      <Avatar src="/mockups/sword.jpg" name="Engineer" />
      <Avatar src="/mockups/android.jpg" name="Android" />
      <Avatar src="/mockups/cryptoscum.jpg" name="Cryptoscum" />
      <Avatar src="/mockups/laser.jpg" name="Vr Surfer" />
    </Box>
  );
})`
overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;

  .avatar {
    margin: 0 0.75rem;
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    .avatar {
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    .avatar {

    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    .avatar {

    }
  }
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
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Carousel />
      </Box>
    </Box>
  );
})`
  padding: 2rem 0 5rem;
  background: #0d0b1c;

  .container {
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    h2 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1rem;
    }
    img {
    }
  }
`;

export default Avatars;
