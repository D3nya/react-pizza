import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Logo from "../components/Logo";
import Search from "../components/Search";
import CartInfo from "../components/CartInfo";

import { useAppSelector } from "../hooks/useRedux";
import { selectCart } from "../store/cart/cartSelectors";

const Header: React.FC = () => {
  const location = useLocation();
  const cart = useAppSelector(selectCart);
  const isMounted = React.useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cart.items);
      localStorage.setItem("pizzaCart", json);
    }

    isMounted.current = true;
  }, [cart.items]);

  const totalPizza = cart.items.reduce((sum, pizza) => sum + pizza.count, 0);

  const isHomePage = location.pathname === "/";
  const isCartPage = location.pathname === "/cart";

  return (
    <nav className="header">
      <Logo className="header__logo" />
      {isHomePage && <Search className="header__search" />}
      {!isCartPage && (
        <CartInfo
          className="header__cart-info"
          totalPizza={totalPizza}
          totalPrice={cart.price}
        />
      )}
    </nav>
  );
};

export default Header;
