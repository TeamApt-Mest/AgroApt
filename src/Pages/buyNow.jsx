import React from "react";
import { CartProvider } from "react-use-cart";
import Page from "./marketplace/Buynow/Page";
import Cart from "./marketplace/Buynow/Cart";

const BuyNow = () => {
  return (
    <CartProvider>
      <Page />
      <Cart />
    </CartProvider>
  );
};

export default BuyNow;
