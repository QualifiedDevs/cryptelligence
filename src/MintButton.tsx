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
  color: white;
  text-shadow: rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 1.75517px 0.958851px 0px,
    rgb(0, 0, 0) 1.0806px 1.68294px 0px, rgb(0, 0, 0) 0.141474px 1.99499px 0px,
    rgb(0, 0, 0) -0.832294px 1.81859px 0px,
    rgb(0, 0, 0) -1.60229px 1.19694px 0px, rgb(0, 0, 0) -1.97999px 0.28224px 0px,
    rgb(0, 0, 0) -1.87291px -0.701566px 0px,
    rgb(0, 0, 0) -1.30729px -1.51361px 0px,
    rgb(0, 0, 0) -0.421592px -1.95506px 0px,
    rgb(0, 0, 0) 0.567324px -1.91785px 0px,
    rgb(0, 0, 0) 1.41734px -1.41108px 0px,
    rgb(0, 0, 0) 1.92034px -0.558831px 0px;
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
    background: #b9ffff;
  }
`;

export default MultiButton;
