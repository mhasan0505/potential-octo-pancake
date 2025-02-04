// import { useState } from "react";
import PropTypes from "prop-types";
// import { product } from "../data/products";
import { useState } from "react";
import StoreContext from "./storeContext";

const StoreContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({});
  // const url = "http://localhost:7000";

  // const AddToCart = (id) => {
  //   if (!cartItem[id]) {
  //     setCartItem((prev) => ({ ...prev, [id]: 1 }));
  //   } else {
  //     setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  //   }
  // };

  // const removeFromCart = (id) => {
  //   setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  // };

  // const contextValue = {};

  return (
    <StoreContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </StoreContext.Provider>
  );
};
StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreContextProvider;
