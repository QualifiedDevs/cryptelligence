import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Logo = styled((props) => {
  return <Box component="img" {...props} src="/logo.svg" />;
})``;

export default Logo;
