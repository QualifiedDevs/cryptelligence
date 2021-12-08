import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Link from "./Link";

const Item = styled((props) => {
  return (
    <Box {...props} className={`${props.className} item`}>
      <Typography variant="h4">{props.question}</Typography>
      <Typography variant="body1">{props.desc}</Typography>
    </Box>
  );
})`
  p {
    padding-left: 1rem;
    ::before {
      content: "-";
    }
  }
`;

export default styled((props) => {
  return (
    <Box {...props} id="faq">
      <Typography variant="h3">FAQ</Typography>
      <Item question="When mint?" desc="Stealth mint" />
      <Item question="How much supply?" desc="1111" />
      <Item
        question="Wat are our marketplaces?"
        desc="We will be applying to magic eden immediately after our sale is done"
      />
      <Item
        question="Where can we see rarity?"
        desc="We will be applying to moon rank immediately after our sale is done"
      />
      <Item question="What is the mint price?" desc="tba" />
      <Item
        question="What is the official twitter/discord?"
        desc={
          <>
            Visit: <Link href="https://discord.gg/g7gt5BnR5A" underline="none" >Discord</Link> /{" "}
            <Link href="https://twitter.com/QualifiedDevs" underline="none" >Twitter</Link>
          </>
        }
      />
    </Box>
  );
})`
  border: 4px solid white;
  width: 100%;
  padding: 3rem;

  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  h4 {
    font-size: 1.5rem;
    margin-bottom: .2rem;
  }
  p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 750px) {
    h3 {
      font-size: 1.6rem;
    }
    h4 {
      font-size: 1.2rem;
    }
    p {
      font-size: .8rem;
    }
    padding: 1.5rem;
  }

  @media screen and (max-width: 450px) {
    h3 {
      font-size: 1.2rem;
    }
    h4 {
      font-size: 1rem;
    }
    p {
      font-size: .6rem;
    }
    padding: 1rem;
  }
`;
