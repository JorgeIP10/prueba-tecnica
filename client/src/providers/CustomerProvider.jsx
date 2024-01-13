import { useState } from "react";
import { CustomerContext } from "../contexts/CustomerContext";
import { getCustomersRequest, createCustomerRequest, getCustomerByDniRequest, getCustomerByNameRequest } from "../api/customers";

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
      return error;
    }
  };

  
  const createCustomer = async (customer) => {
    try {
      const result = await createCustomerRequest(customer);
      console.log('Customer has been created');
      return result;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const getCustomerByDni = async (dni) => {
    try {
      const result = await getCustomerByDniRequest(dni);
      console.log('Customer has been found');
      return result;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const getCustomerByName = async (name) => {
    try {
      const result = await getCustomerByNameRequest(name);
      console.log('Customer has been found');
      return result;
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  
  return (
    <CustomerContext.Provider
      value={{
        customers,
        getCustomers,
        createCustomer,
        getCustomerByDni,
        getCustomerByName,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}