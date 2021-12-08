import { Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import Link from "./Link";

const SocialIcon = styled((props) => {
  return (
    <Link href={props.href} className="social-icon">
      <img {...props} />
    </Link>
  );
})`
  width: 2.5rem;
`;

const SocialsMenu = styled((props) => {
  return (
    <Box {...props}>
      <SocialIcon src="discord.svg" href="https://discord.gg/g7gt5BnR5A" />
      <SocialIcon src="twitter.svg" href="https://twitter.com/QualifiedDevs" />
    </Box>
  );
})`
  margin: auto 1rem auto auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;

  @media screen and (max-width: 600px) {
    .social-icon img {
      width: 1.8rem;
    }
    grid-column-gap: .5rem;
  }
`;

export default styled((props) => {
  return (
    <Container maxWidth="false" {...props}>
      <SocialsMenu />
    </Container>
  );
})`
  position: absolute;
  width: 100%;
  height: 5rem;
  display: flex;
  padding: 0;
  z-index: 1;
`;
