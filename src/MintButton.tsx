import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { useWallet } from "@solana/wallet-adapter-react";
import useCandyMachine from "../hooks/useCandyMachine";

/*
 * Connect Wallet
 * Connect Wallet Hover + Anim
 * Mint Enabled
 * Mint Enabled Hover + Anim
 * Mint Disabled
 * Mint Loading
 * Countdown
 */

const MultiButton = styled((props) => {
  const { connected } = useWallet();
  const { isSoldOut, mintStartDate, isMinting, startMint } = useCandyMachine();

  return (
    <LoadingButton
      variant="contained"
      onClick={startMint}
      disabled={!connected || isMinting || isSoldOut}
      loading={isMinting}
      {...props}
    >
      {!isSoldOut ? props.children : "Sold Out"}
    </LoadingButton>
  );
})`
color: black;
-webkit-text-stroke: 2.2px white;
font-size: 1.6rem;
font-weight: 900;

display: grid;
place-items: center;

border: 6px solid black;
border-radius: 20px;

width: 13rem;
height: 5rem;

@media screen and (max-width: 750px) {
  font-size: 1.4rem;
}

:disabled {
  -webkit-text-stroke-width: 0px;
  background: #b9ffff;
}
`;

export default MultiButton;
