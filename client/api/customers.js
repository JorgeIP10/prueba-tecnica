import axios from 'axios';
import {API_CUSTOMERS_URL} from '../config';

export const getCustomersRequest = async () => axios.get(API_CUSTOMERS_URL);
export const createCustomerRequest = async (customer) => axios.post(API_CUSTOMERS_URL, customer);
export const getCustomerByDniRequest = async (dni) => axios.get(`${API_CUSTOMERS_URL}/dni/${dni}`);
export const getCustomerByNameRequest = async (name) => axios.get(`${API_CUSTOMERS_URL}/name/${name}`);