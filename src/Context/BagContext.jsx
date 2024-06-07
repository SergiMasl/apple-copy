import { createContext, useState } from "react";

const BagContext = createContext();

export function BagProvider({ children }) {
  const [lastAddedProduct, setLastAddedProduct] = useState({});
  const [items, setItems] = useState([]);

  return (
    <BagContext.Provider
      value={{ lastAddedProduct, setLastAddedProduct, items, setItems }}
    >
      {children}
    </BagContext.Provider>
  );
}

export default BagContext;
