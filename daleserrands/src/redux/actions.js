import axios from 'axios'
const server = 'https://stormy-shelf-32639.herokuapp.com'

export const GET_TASKS = 'GET_TASKS'
export const SET_ERR = 'SET_ERR'
export const ADD_TASKS = 'ADD_TASKS'
export const UPDATE_TASKS = 'UPDATE_TASKS'


export const getErrands = () => dispatch => {
  axios
			.get(`${server}/tasks`)
			.then((res) => {
				/* console.log(res.data) */
				dispatch({ type: GET_TASKS, payload: res.data })
			})
			.catch((err) => {
				console.log('You have found the error', err)
				dispatch({ type: SET_ERR, payload: 'Error Retrieving Tasks' })
			})
}

export const addErrands = (newTask) => (dispatch) => {
	axios
		.post(`${server}/tasks`, newTask)
		.then((res) => {
			dispatch({ type: ADD_TASKS, payload: res.data })
		})
    .catch((err) => {
			dispatch({ type: SET_ERR, payload: 'Error Adding Tasks' })
		})
}

export const editTasks = (taskToEdit) => (dispatch) => {
	axios
		.put(`${server}/tasks/${taskToEdit.id}`, taskToEdit)
		.then((res) => {
			dispatch({ type: UPDATE_TASKS, payload: res.data.body })
		})
		.catch((err) => {
			console.log('You have found the error', err)
			dispatch({ type: SET_ERR, payload: 'Error Adding Tasks' })
		})
}