import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import Hook from "../src/Hook";
import About from "../src/About";
import Avatars from "../src/Avatars";
import Roadmap from "../src/Roadmap";
import Footer from "../src/Footer";

const index = styled((props) => {
  return (
    <Box {...props}>
      <Hook />
      <About id="about" />
      <Avatars id="avatars"/>
      <Roadmap id="roadmap" />
      <Footer />
    </Box>
  );
})`
  postiion: relative;
`;

export default index;
