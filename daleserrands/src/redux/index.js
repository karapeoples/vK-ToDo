import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { GET_TASKS, SET_ERR } from './actions'


const initialState = {
	tasks: [],
	error: '',
}


const reducer = (state=initialState, action)=>{
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    case SET_ERR:
      return {
        ...state,
        error: action.payload
    };
    
    default:
      return state; 
  }
  
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log('THIS IS GLOBAL STATE!', store.getState()));
export default store;