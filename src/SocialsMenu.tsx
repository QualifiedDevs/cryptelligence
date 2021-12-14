import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import Link from "./Link";

import Image from "next/image";
import discord from "../public/social-icons/discord.svg";
import twitter from "../public/social-icons/twitter.svg";

const images = {
  discord,
  twitter,
};

const SocialIcon = styled((props) => {
  return (
    <Link href={props.href}>
      <Box component="li" {...props}>
        <Image src={props.src} layout="responsive" objectFit="contain" />
      </Box>
    </Link>
  );
})`
  width: 35px;
`;

const SocialsMenu = styled((props) => {
  // Map socials onto icons

  const items = [];

  let index = 0;
  for (const item in props.socials) {
    items[index++] = (
      //@ts-ignore (Fix typeerrors)
      <SocialIcon src={images[item]} href={props.socials[item]} key={index} />
    );
  }

  return (
    <Box component="nav" {...props}>
      <ul>{items}</ul>
    </Box>
  );
})`

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    a {
        margin: 0 .8em;
        &:first-child {
            margin-left: 0;
        }
        &:last-child {
           margin-right: 0;
        }
    }
}
`;

export default SocialsMenu;
