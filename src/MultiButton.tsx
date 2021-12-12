import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import { useWallet } from "@solana/wallet-adapter-react";
import useCandyMachine from "../hooks/useCandyMachine";

import Countdown from "./Countdown";
import WalletModalButton from "./WalletModalButton";
import MintButton from "./MintButton";

/*
 * Connect Wallet
 * Connect Wallet Hover + Anim
 * Mint Enabled
 * Mint Enabled Hover + Anim
 * Mint Disabled
 * Mint Loading
 * Countdown
 */

//

const MultiButton = styled((props) => {
  const { connected } = useWallet();
  const { isSoldOut, mintStartDate, isMinting } = useCandyMachine();

  return (
    <Box {...props}>
      {!connected ? (
        <WalletModalButton>
          Connect
          <br />
          Wallet
        </WalletModalButton>
      ) : !isSoldOut ? (
        <MintButton>Mint</MintButton>
      ) : (
        <Typography variant="h4">Sold Out</Typography>
      )}
    </Box>
  );
})`
  grid-row: 4/4;
  grid-column: span 2;
  margin: auto;
  h4 {
    color: white;
    font-size: 3em;
    font-weight: bold;
    text-shadow: rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 1.75517px 0.958851px 0px,
      rgb(0, 0, 0) 1.0806px 1.68294px 0px, rgb(0, 0, 0) 0.141474px 1.99499px 0px,
      rgb(0, 0, 0) -0.832294px 1.81859px 0px,
      rgb(0, 0, 0) -1.60229px 1.19694px 0px,
      rgb(0, 0, 0) -1.97999px 0.28224px 0px,
      rgb(0, 0, 0) -1.87291px -0.701566px 0px,
      rgb(0, 0, 0) -1.30729px -1.51361px 0px,
      rgb(0, 0, 0) -0.421592px -1.95506px 0px,
      rgb(0, 0, 0) 0.567324px -1.91785px 0px,
      rgb(0, 0, 0) 1.41734px -1.41108px 0px,
      rgb(0, 0, 0) 1.92034px -0.558831px 0px;
  }
`;

export default MultiButton;
