import React, { useState } from 'react'
import axios from 'axios'
import EditForm from './forms/EditForm'
import { getErrands } from '../redux/actions'
import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'

const TaskCard = ({ errand, desc, id }) => {
  const server = 'http://localhost:4994'
  const [taskToEdit, setTaskToEdit] = useState({
    errand: '',
    errand_desc:''
  })
  const [errands, setErrands]=useState([])
  const history = useHistory()
  const [turn, setTurn] = useState(false)
  const dispatch =useDispatch()
  const handleClick = () => {
    setTurn(true)
    axios
      .get(`${server}/tasks/${id}`)
      .then(res => {
      setTaskToEdit(res.data)
      })
    .catch(err => console.log('Could Not Find the Id', err))
  }

  const handleDelete = e => {
    e.preventDefault()
    axios
					.delete(`${server}/tasks/${id}`)
					.then(() => {
						dispatch(getErrands())
						history.push('/')
					})
					.then((res) => {
						setErrands(res.data)
					})
					.catch((err) => console.log('There is an error', err))
}

  return (
    <section>

      {turn === true ? 
        <div>
          <EditForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} setTurn={setTurn} />
      </div>:
    <div>
      <button onClick={handleDelete}>X</button>
      <h1>{errand}</h1>
      <p>{desc}</p>
      <button onClick={handleClick}>Edit</button>
        </div>
      }
    </section>
  )
}

export default TaskCard
