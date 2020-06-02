import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addErrands, getErrands } from '../../redux/actions'
import {useHistory} from 'react-router-dom'

const AddForm = () => {
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState({
    errand: '',
    errand_desc: '',
  })
  const history = useHistory()

  const onSubmit = e => {
    e.preventDefault()
    dispatch(addErrands(newTask))
    setTimeout(() => {
      dispatch(getErrands())
      history.push('/')
    }, 1500)
  }

  const onChange = e => {
    setNewTask({
      ...newTask, [e.target.name]: e.target.value
    })
  }

  return (
			<form onSubmit={onSubmit}>
				<input
					type='text'
					name='errand'
					value={newTask.errand}
					placeholder='What is the Title of your New Errand'
					onChange={onChange}
				/>
				<input
					type='text'
					name='errand_desc'
					value={newTask.errand_desc}
					placeholder='Add Details Here'
					onChange={onChange}
				/>
				<button>Enter Errand</button>
			</form>
		)
}

export default AddForm
