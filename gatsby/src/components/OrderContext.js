import React, { useState } from 'react';

// Create a order context
const OrderContext = React.createContext();

export function OrderProvider({ children }) {
  // Stick state in here
  const [order, setOrder] = useState([]);
  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  );
}
export default OrderContext;
