import { ButtonBase, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { getThemeProps } from "@mui/system";

import Logo from "./Logo";
import theme from "./theme";

const LearnMoreButton = styled((props) => {
  return (
    <ButtonBase href="#faq" {...props}>
      Learn More
    </ButtonBase>
  );
})`
  border: 3px solid ${({ theme }) => theme.palette.strokePrimary.main};
  border-radius: 4px;
  padding: 0.1rem 0.8rem;
`;

const LearnMoreIcon = styled((props) => {
  return <img src="arrows-icon.svg" {...props} />;
})`
  width: 2rem;
`;

const LearnMore = styled((props) => {
  return (
    <div {...props}>
      <LearnMoreButton sx={{mb: 1}}/>
      <LearnMoreIcon />
    </div>
  );
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-text-stroke: 1px ${({ theme }) => theme.palette.strokePrimary.main};
`;

export default styled((props) => {
  return (
    <Container maxWidth="false" sx={{pt: 35}} {...props} id="hook">
      <Logo sx={{mb: 3}}/>
      <Typography variant="h6" sx={{mb: 5}}>
        1111 Teddy Bears Club Collection From Solana Forest With Love
      </Typography>
      <LearnMore />
    </Container>
  );
})`
  width: 100%;
  height: 100vh;

  background-image: url(forest.gif);
  background-repeat: no-repeat;

  h6 {
    font-size: "1.6rem";
    font-weight: 800;
    text-align: center;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  -webkit-text-stroke: 1px ${({ theme }) => theme.palette.strokePrimary.main};
`;
