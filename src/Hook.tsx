import { ButtonBase, Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import Logo from "./Logo";

const LearnMoreButton = styled((props) => {
  return (
    <ButtonBase href="#faq" {...props}>
      Learn More
    </ButtonBase>
  );
})`
  border: 3px solid ${({ theme }) => theme.palette.strokePrimary.main};
  border-radius: 4px;
  padding: 0.4rem 1.2rem;
  font-size: 1.2rem;
  font-weight: 900rem;
  @media screen and (max-width: 750px) {
    font-size: 1rem;
  }
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
  -webkit-text-stroke: 1.8px ${({ theme }) => theme.palette.strokePrimary.main};
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
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  -webkit-text-stroke: 2px ${({ theme }) => theme.palette.strokePrimary.main};

  @media screen and (max-width: 750px) {
    h6 {
      font-size: 1.2rem;
    }
  }
`;
