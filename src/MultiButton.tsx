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
        <WalletModalButton>Connect<br/>Wallet</WalletModalButton>
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
    -webkit-text-stroke: 1px black;
  }
`;

export default MultiButton;