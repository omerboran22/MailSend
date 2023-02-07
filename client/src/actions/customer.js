import * as types from "./types";
import * as api from '../api/customerEndPoint';

export const fetchCustomers= ()=>async(dispatch)=>{
  try {
    const {data} = await api.fetchCustomer();
    dispatch({
      type:types.FETCH_CUSTOMERS,
      payload:data
    })
  } catch (error){
    console.log(error)
  }
}

export const createCustomers= (customer)=> async(dispatch)=>{
  try {
    const {data} = await api.createCustomer(customer);
    dispatch({
      type:types.CREATE_CUSTOMERS,
      payload:data
    })
  } catch (error) {
    console.log(error)
  }
}