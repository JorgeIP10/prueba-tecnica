import { useState } from "react";
import { CustomerContext } from "../contexts/CustomerContext";

export function CustomerProvider({ children }) {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    console.log('Getting customers');
  };

  const createCustomer = async (customer) => {
    setCustomers([...customers, customer]);
    console.log('The customer has been created.');
  };

  return (
    <CustomerContext.Provider
      value={{
        customers,
        getCustomers,
        createCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}