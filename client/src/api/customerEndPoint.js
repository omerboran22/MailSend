import axios from 'axios';

const apiEndpoint="http://100.25.182.232:5000/api/v1/customers";

export const fetchCustomer=async ()=>await axios.get(apiEndpoint);

export const createCustomer=async (custmr)=>await axios.post(apiEndpoint,custmr);


