import axios from 'axios';

const apiEndpoint="http://localhost:5000/api/v1/user/login";

export const loginUser=async (user)=>await axios.post(apiEndpoint,user);


