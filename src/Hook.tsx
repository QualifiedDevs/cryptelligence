import { ButtonBase, Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import Logo from "./Logo";

const LearnMoreButton = styled((props) => {
  return (
    <ButtonBase href="#faq" color="learnButton" {...props}>
      Learn More
    </ButtonBase>
  );
})`
  border: 3px solid rgb(245, 156, 6);
  border-radius: 12px;
  padding: 0.4rem 1.2rem;
  font-size: 1.2rem;
  font-weight: 900rem;
  @media screen and (max-width: 750px) {
    font-size: 1rem;
  }

    text-shadow: rgb(245, 156, 6) 2px 0px 0px,
    rgb(245, 156, 6) 1.75517px 0.958851px 0px,
    rgb(245, 156, 6) 1.0806px 1.68294px 0px,
    rgb(245, 156, 6) 0.141474px 1.99499px 0px,
    rgb(245, 156, 6) -0.832294px 1.81859px 0px,
    rgb(245, 156, 6) -1.60229px 1.19694px 0px,
    rgb(245, 156, 6) -1.97999px 0.28224px 0px,
    rgb(245, 156, 6) -1.87291px -0.701566px 0px,
    rgb(245, 156, 6) -1.30729px -1.51361px 0px,
    rgb(245, 156, 6) -0.421592px -1.95506px 0px,
    rgb(245, 156, 6) 0.567324px -1.91785px 0px,
    rgb(245, 156, 6) 1.41734px -1.41108px 0px,
    rgb(245, 156, 6) 1.92034px -0.558831px 0px;
`;

const LearnMoreIcon = styled((props) => {
  return <img src="arrows-icon.svg" {...props} />;
})`
  width: 2rem;
`;

const LearnMore = styled((props) => {
  return (
    <Box {...props}>
      <LearnMoreButton sx={{ mb: 1 }} />
      <LearnMoreIcon />
    </Box>
  );
})`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default styled((props) => {
  return (
    <Container maxWidth="lg" sx={{ pt: "22vh" }} {...props} id="hook">
      <Logo sx={{ mb: 3 }} />
      <Typography variant="h6" sx={{ mb: 5 }}>
        1111 Teddy Bears Club Collection From Solana Forest With Love
      </Typography>
      <LearnMore />
    </Container>
  );
})`
  position: relative;
  width: 100%;
  height: 100vh;

  h6 {
    font-size: 1.6rem;
    font-weight: 800;
    text-align: center;
    text-shadow: rgb(245, 156, 6) 2px 0px 0px,
      rgb(245, 156, 6) 1.75517px 0.958851px 0px,
      rgb(245, 156, 6) 1.0806px 1.68294px 0px,
      rgb(245, 156, 6) 0.141474px 1.99499px 0px,
      rgb(245, 156, 6) -0.832294px 1.81859px 0px,
      rgb(245, 156, 6) -1.60229px 1.19694px 0px,
      rgb(245, 156, 6) -1.97999px 0.28224px 0px,
      rgb(245, 156, 6) -1.87291px -0.701566px 0px,
      rgb(245, 156, 6) -1.30729px -1.51361px 0px,
      rgb(245, 156, 6) -0.421592px -1.95506px 0px,
      rgb(245, 156, 6) 0.567324px -1.91785px 0px,
      rgb(245, 156, 6) 1.41734px -1.41108px 0px,
      rgb(245, 156, 6) 1.92034px -0.558831px 0px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 750px) {
    h6 {
      font-size: 1.2rem;
    }
  }
`;
