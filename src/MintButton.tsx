import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export default styled((props) => {
  return (
    <Button variant="contained" {...props}>
      Coming Soon
    </Button>
  );
})`
  color: white;
  -webkit-text-stroke: 2px ${({ theme }) => theme.palette.strokeSecondary.main};
  font-size:1.5rem;
  font-weight: 900;
`;
