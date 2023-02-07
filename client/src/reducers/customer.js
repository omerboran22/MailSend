import * as types from "../actions/types";

const initialState={
  customers:[]
};

const customerReducer = ( state=initialState , action)=>{
switch (action.type) {
  case types.FETCH_CUSTOMERS:
    return {
      ...state,
      customers:action.payload
    }
  case types.CREATE_CUSTOMERS:
    return {
      ...state,
      customers:[...state.customers,action.payload]
    }
  default:
    return {...state};
}
}

export default customerReducer;
