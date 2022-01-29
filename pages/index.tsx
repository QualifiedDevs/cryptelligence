//@ts-nocheck


import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import Hook from "../src/Hook";
import About from "../src/About";
import Avatars from "../src/Avatars";
import Roadmap from "../src/Roadmap";
import Traits from "../src/Traits";
import Footer from "../src/Footer";
import FAQ from "@src/FAQ"
import Team from "@src/Team"

const index = styled(({traits, ...props}) => {
  return (
    <Box {...props}>
      <Hook />
      <About id="about" />
      <Avatars id="avatars" />
      <Roadmap id="roadmap" />
      <Traits traits={traits}/>
      <Team />
      <FAQ />
      <Footer />
    </Box>
  );
})`
  postiion: relative;
`;

export default index;

import getTraitPaths from "@src/getTraitPaths"

export async function getStaticProps() {
  return {props: {traits: getTraitPaths()}}
}