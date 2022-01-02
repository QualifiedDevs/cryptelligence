import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";

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
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Avatar src="/mockups/android.jpg" name="Android" />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar src="/mockups/cryptoscum.jpg" name="CryptoScum" />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar src="/mockups/cyborg.jpg" name="Cyborg" />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar src="/mockups/heist.jpg" name="Bandit" />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar src="/mockups/laser.jpg" name="VR Surfer" />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar src="/mockups/sword.jpg" name="Samurai" />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar src="/mockups/technomancer.jpg" name="Technomancer" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
})`
  overflow: hidden;
  
  ${({ theme }) => theme.breakpoints.down("lg")} {
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
  }
`;

/*
  * CAROUSEL INSTRUCTION

Swipeable (FUCKING HOW)
Must be Infinite
When between selections, snap back to nearest image
Responsively grow/shrink to fill available space.
To meet these criteria, ideally I'm using a responsive grid on top of a scrollable div.
The keyframe of an animation for each image depends on scroll position.
There must be momentum for scrolling.
Auto-scroll is simple.
To snap, after scrolling has been performed check to see which is nearest. We can use modulus to find snap positions.

Questions:
How am I going to handle infinite? Probably grid-column reordering. Yup that makes sense. How do I determine the center?
How do I make it swipeable?
How do I keep momentum on scroll?
How do I 

*/

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
