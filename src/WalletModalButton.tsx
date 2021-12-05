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
  color: white;
  -webkit-text-stroke: 2px ${({ theme }) => theme.palette.strokeSecondary.main};
  font-size: 2.5rem;
  font-weight: 900;

  display: grid;
  place-items: center;

  ${({ disabled }) => {
    if (!disabled) return;
    return `

  `;
  }}

  @media screen and (max-width: 750px) {
    font-size: 2rem;
  }
`;

export default WalletModalButton;
