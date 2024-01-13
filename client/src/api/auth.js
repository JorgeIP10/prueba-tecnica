import { authInstance } from './axiosInstances';

export const loginRequest = async (user) => authInstance.post('login', user);
export const verifyTokenRequest = async () => authInstance.get('verify');
export const logoutRequest = async () => authInstance.post('logout');