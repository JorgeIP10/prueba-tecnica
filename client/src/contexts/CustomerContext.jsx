import {createContext, useContext} from "react";

export const CustomerContext = createContext();

export const useCustomers = () => {
  const context = useContext(CustomerContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};