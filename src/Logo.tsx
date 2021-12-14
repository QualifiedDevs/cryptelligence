import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Logo = styled((props) => {
  return <Box component="img" className="logo" src="/logo.svg" {...props} />;
})`
  width: 50px;
`;

export default Logo;
