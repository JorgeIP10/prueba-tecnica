import { useState } from "react";
import { CustomerContext } from "../contexts/CustomerContext";
import { getCustomersRequest, createCustomerRequest } from "../../api/customers";

export function CustomerProvider({ children }) {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    try {
      const result = await getCustomersRequest();
      console.log('Customers have been obtained');
      setCustomers(result.data);
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  const createCustomer = async (customer) => {
    try {
      const result = await createCustomerRequest(customer);
      console.log('Customer has been created');
      return result;
    } catch (error) {
      console.error(error);
    }
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