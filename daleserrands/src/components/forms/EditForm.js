import React from 'react'
import { useDispatch } from 'react-redux'
import { getErrands, editTasks } from '../../redux/actions'


const EditForm = ({ taskToEdit, setTaskToEdit, setTurn }) => {
	const dispatch = useDispatch()

	const handleSubmit = e => {
		e.persist()
		dispatch(editTasks(taskToEdit))
		setTurn(false)
		dispatch(getErrands())
	}

	const onChange = e => {
		setTaskToEdit({
			...taskToEdit, [e.target.name]:e.target.value
		})
	}

  return (
			<form onSubmit={handleSubmit} className='editForm'>
				<input type='text' name='errand' value={taskToEdit.errand} onChange={onChange} />
				<textarea type='text' name='errand_desc' value={taskToEdit.errand_desc} onChange={onChange} />
				<button>Submit Changes</button>
			<button onChange={() => { setTurn(false) }}>Cancel</button>
			</form>
		)
}

export default EditForm
