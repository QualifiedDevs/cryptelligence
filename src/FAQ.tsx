import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Link from "./Link";

const Item = styled((props) => {
  return (
    <div {...props}>
      <Typography variant="h4">{props.question}</Typography>
      <Typography variant="body1">{props.desc}</Typography>
    </div>
  );
})`
  margin: 0.5rem 0;
  p {
    font-size: 1.2rem;
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
            Visit: <Link href="https://discord.gg/g7gt5BnR5A">Discord</Link> /{" "}
            <Link href="https://twitter.com/QualifiedDevs">Twitter</Link>
          </>
        }
      />
    </Box>
  );
})`
  border: 4px solid white;
  width: 100%;
  padding: 2rem;

  @media screen and (max-width: 750px) {
    h3 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;
