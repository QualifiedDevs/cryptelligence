import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

import { useWallet } from "@solana/wallet-adapter-react";
import useCandyMachine from "../hooks/useCandyMachine";

const WalletModalButton = styled((props) => {
  const { setVisible } = useWalletModal();

  const { connected } = useWallet();
  const { isSoldOut, mintStartDate, isMinting, startMint } = useCandyMachine();

  return (
    <Button
      variant="contained"
      onClick={() => setVisible(true)}
      disabled={connected}
      {...props}
    >
      {props.children}
    </Button>
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

@media screen and (max-width: 750px) {
  font-size: 1.4rem;
}
`;

export default WalletModalButton;
