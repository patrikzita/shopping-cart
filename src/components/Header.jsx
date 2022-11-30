import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";
import { useContext } from "react";
import {
  ACTIONS,
  CartDispatchContext,
  CartStateContext,
} from "../contexts/cart";

function Header() {
  const { items } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);
  const handleCartButton = () => {
    dispatch({ type: ACTIONS.TOGGLE_CART_POPUP });
  };

  return (
    <header>
      <div className="nav-main">
        <div className="brand">
          <a href="#">
            <img className="logo" src="src/assets/img/logo.svg" alt="" />
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
            </a>
          </div>
          <div className="cart">
            <a onClick={() => handleCartButton()}>
              <ShoppingCartIcon />
            </a>
            {items.length > 0 ? (
              <span className="count">{items.length}</span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
