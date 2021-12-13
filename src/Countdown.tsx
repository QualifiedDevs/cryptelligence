import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import useCandyMachine from "../hooks/useCandyMachine";

import ReactCountdown from "react-countdown";
import { getSecondsInDay } from "@mui/lab/internal/pickers/time-utils";

const textShadow =
  "rgb(0, 0, 0) 4px 0px 0px, rgb(0, 0, 0) 3.87565px 0.989616px 0px,rgb(0, 0, 0) 3.51033px 1.9177px 0px, rgb(0, 0, 0) 2.92676px 2.72656px 0px,rgb(0, 0, 0) 2.16121px 3.36588px 0px, rgb(0, 0, 0) 1.26129px 3.79594px 0px,rgb(0, 0, 0) 0.282949px 3.98998px 0px,rgb(0, 0, 0) -0.712984px 3.93594px 0px,rgb(0, 0, 0) -1.66459px 3.63719px 0px,rgb(0, 0, 0) -2.51269px 3.11229px 0px,rgb(0, 0, 0) -3.20457px 2.39389px 0px,rgb(0, 0, 0) -3.69721px 1.52664px 0px,rgb(0, 0, 0) -3.95997px 0.56448px 0px,rgb(0, 0, 0) -3.97652px -0.432781px 0px,rgb(0, 0, 0) -3.74583px -1.40313px 0px,rgb(0, 0, 0) -3.28224px -2.28625px 0px,rgb(0, 0, 0) -2.61457px -3.02721px 0px,rgb(0, 0, 0) -1.78435px -3.57996px 0px,rgb(0, 0, 0) -0.843183px -3.91012px 0px,rgb(0, 0, 0) 0.150409px -3.99717px 0px,rgb(0, 0, 0) 1.13465px -3.8357px 0px,rgb(0, 0, 0) 2.04834px -3.43574px 0px,rgb(0, 0, 0) 2.83468px -2.82216px 0px,rgb(0, 0, 0) 3.44477px -2.03312px 0px,rgb(0, 0, 0) 3.84068px -1.11766px 0px,rgb(0, 0, 0) 3.9978px -0.132717px 0px;";

const renderer: React.FC<{
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
  props: any;
}> = (props) => {
  //Hours, minutes, seconds, completed
  const { hours, minutes, seconds, completed } = props;
  console.log(props.children);
  return completed ? (
    <>{props.props.children}</>
  ) : (
    <Typography variant="h4" sx={{ gridRow: "4/4", gridColumn: "span 2", textAlign: "center", textShadow }} {...props}>
      {`${hours}:${minutes}:${seconds}`}
    </Typography>
  );
};

const Countdown = styled((props) => {
  const { mintStartDate } = useCandyMachine();
  return (
    <ReactCountdown renderer={renderer} date={mintStartDate} autoStart={true} {...props} />
  );
})`
text-align: center;
  grid-row: 4/4;
  grid-column: span 2;
  margin: auto;
`;

export default Countdown;
