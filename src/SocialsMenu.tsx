import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import Link from "./Link"

const SocialIcon = styled((props) => {
    return <Link href={props.href}>
        <img {...props}/>
    </Link>;
  })``;

export default styled((props) => {
  return <Box {...props}>
      <SocialIcon src="discord.svg" href="https://discord.gg/g7gt5BnR5A"/>
      <SocialIcon src="twitter.svg" href="https://twitter.com/QualifiedDevs"/>
  </Box>;
})``;