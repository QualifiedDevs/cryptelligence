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
      {/* <div className="overlay" /> */}
      <Swiper
        centeredSlides
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        slidesPerView="auto"
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
  position: relative;
  overflow: hidden;
  width: 1400px;

  .swiper {
    padding-top: 1rem;
  }

  .swiper-slide {
    width: fit-content;
  }

  background: linear-gradient(
    90deg,
    rgba(13, 11, 28, 1) 0%,
    rgba(13, 11, 28, 0) 20%,
    rgba(13, 11, 28, 0) 80%,
    rgba(13, 11, 28, 1) 100%
  );

  .swiper-slide {
    .avatar {
      .image-wrapper {
        transition: transform .3s;
      }
      h5 {
        transition: text-shadow 1s;
      }
    }
  }

  .swiper-slide-active {
    .avatar {
      .image-wrapper {
        transform: scale(1.1, 1.1);
      }
      h5 {
        text-shadow: 0px 0px 8px rgba(151, 255, 255, 100%);
      }
    }
  }

  .overlay {
    z-index: 2;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: linear-gradient(
      90deg,
      rgba(13, 11, 28, 1) 0%,
      rgba(13, 11, 28, 0) 20%,
      rgba(13, 11, 28, 0) 80%,
      rgba(13, 11, 28, 1) 100%
    );
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    width: 850px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 690px;
    .avatar {
      .image-wrapper {
        width: 200px;
        height: 200px;
      }
      h5 {
        font-size: 1.2rem;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 310px;
    .avatar {
      .image-wrapper {
        width: 250px;
        height: 250px;
      }
      h5 {
        font-size: 1.6rem;
      }
    }
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
