import { customersInstance } from "./axiosInstances";

export const getCustomersRequest = async () => customersInstance.get('/');
export const createCustomerRequest = async (customer) => customersInstance.post('/', customer);
export const getCustomerByDniRequest = async (dni) => customersInstance.get(`/dni/${dni}`);
export const getCustomerByNameRequest = async (name) => customersInstance.get(`/name/${name}`);