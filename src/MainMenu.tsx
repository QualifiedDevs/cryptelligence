import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Link from "./Link";

const MenuItem = styled((props) => {
  return (
    <Box component="li" {...props}>
      <Link
        href={props.href}
        color="#ffffff"
        underline="none"
        activeClassName="active"
      >
        {props.children}
      </Link>
    </Box>
  );
})`
  .active {
    font-weight: bold;
  }
  a {
    transition: color 0.15s;
    :hover {
      color: #0077ff;
    }
  }
`;

const MainMenu = styled((props) => {
  return (
    <Box component="nav" {...props}>
      <ul>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/lore/1">Lore</MenuItem>
        <MenuItem href="/rarity">Rarity</MenuItem>
        <MenuItem href="/whitepaper">Whitepaper</MenuItem>
        <MenuItem href="/faq">FAQ</MenuItem>
      </ul>
    </Box>
  );
})`
  ul {
    list-style-type: none;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    li {
      margin: 0 1em;
      &:first-of-type {
        margin-left: 0;
      }
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

//  Does grid or flex work better here? It needs column gap. Check responsive grids...

export default MainMenu;
