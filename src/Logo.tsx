import { styled } from "@mui/material/styles";

export default styled((props) => {
  return <img src="logo.png" {...props}/>
})`
    width: min(100%, 800px);
`;