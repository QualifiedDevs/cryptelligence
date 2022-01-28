import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import Image from "next/image";

//Manually import and format all traits from another file so they are static

const Trait = styled(({ src, metadata, ...props }) => {
  return (
    <Box {...props}>
      <Image src={src} />
    </Box>
  );
})``;

const Traits = styled((props) => {

    console.log(props.apple)

  return (
    <Box {...props}>
      <Container maxWidth="lg"></Container>
    </Box>
  );
})`
  background: ${({ theme }) => theme.palette.background.default};
  background: black;

  .MuiContainer-root {
    background: red;
  }
`;

export default Traits;