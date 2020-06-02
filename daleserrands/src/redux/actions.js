import axios from 'axios'
const server = 'http://localhost:4994'

export const GET_TASKS = 'GET_TASKS'
export const SET_ERR = 'SET_ERR'



export const getErrands = () => dispatch => {
  axios
			.get(`${server}/tasks`)
			.then((res) => {
				console.log(res.data)
				dispatch({ type: GET_TASKS, payload: res.data })
			})
			.catch((err) => {
				console.log('You have found the error', err)
				dispatch({ type: SET_ERR, payload: 'Error Retrieving Tasks' })
			})
}

