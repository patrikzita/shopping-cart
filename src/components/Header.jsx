import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";

function Header() {
  return (
    <header>
      <div className="nav-main">
        <div className="brand">
          <a href="#">
            <img src="src/assets/img/logo.svg" alt="" />
          </a>
        </div>
        <div className="search">
          <input
            type="search"
            placeholder="Search for your Pokemon"
            className="search-keyword"
          />
          <button className="search-button">
            <SearchIcon />
          </button>
        </div>
        <div className="right-bar">
          <div className="login">
            <a href="">
              <AccountCircleIcon />
              <Typography>Sign in / Register</Typography>
            </a>
          </div>
          <div className="cart">
            <a href="">
              <ShoppingCartIcon />
              <Typography>My Cart</Typography>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
