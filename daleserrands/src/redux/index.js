import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { GET_TASKS, SET_ERR, ADD_TASKS, UPDATE_TASKS } from './actions'


const initialState = {
	tasks: [],
	error: '',
}


const reducer = (state=initialState, action)=>{
  switch (action.type) {
			case GET_TASKS:
				return {
					...state,
					tasks: action.payload,
				}
			case SET_ERR:
				return {
					...state,
					error: action.payload,
				}
			case ADD_TASKS:
				return {
					...state,
					tasks: [...state.tasks, action.payload],
				}
    case UPDATE_TASKS:
      const newTasksArray = state.tasks.filter(task => task.id !== action.payload.id)
      return {
        ...state,
        tasks: [...newTasksArray, action.payload],
      };

			default:
				return state
		}
  
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log('THIS IS GLOBAL STATE!', store.getState()));
export default store;