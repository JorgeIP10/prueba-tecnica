import axios from 'axios';
import {API_CUSTOMERS_URL} from '../config';

export const getCustomersRequest = async () => axios.get(API_CUSTOMERS_URL);
export const createCustomerRequest = async (customer) => axios.post(API_CUSTOMERS_URL, customer);