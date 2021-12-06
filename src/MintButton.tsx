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
  -webkit-text-stroke: 2px ${({ theme }) => theme.palette.strokeSecondary.main};
  font-size: 2rem;
  font-weight: 900;

  display: grid;
  place-items: center;

  :disabled {
    -webkit-text-stroke-width: 0;
  }

  @media screen and (max-width: 750px) {
    font-size: 2rem;
  }
`;

export default MultiButton;
