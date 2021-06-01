import React, { useState } from 'react'
import axios from 'axios'
import EditForm from './forms/EditForm'
import { getErrands } from '../redux/actions'
import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {Button, Card, CardBody, CardTitle, CardHeader} from 'reactstrap'


const TaskCard = ({ errand, desc, id }) => {
	//const server = 'http://localhost:4994'
	const server = 'https://stormy-shelf-32639.herokuapp.com'
	const [taskToEdit, setTaskToEdit] = useState({
		errand: '',
		errand_desc: '',
	})
	const [errands, setErrands] = useState([])
	const history = useHistory()
	const [turn, setTurn] = useState(false)
	const dispatch = useDispatch()
	const handleClick = () => {
		setTurn(true)
		axios
			.get(`${server}/tasks/${id}`)
			.then((res) => {
				setTaskToEdit(res.data)
			})
			.catch((err) => console.log('Could Not Find the Id', err))
	}

	const handleDelete = (e) => {
		e.preventDefault()
		axios
			.delete(`${server}/tasks/${id}`)
			.then((res) => {
				dispatch(getErrands())
				history.push('/')
			})
			.catch((err) => console.log('There is an error', err))
	}

	return (
		<section>
			{turn === true ? (
				<div>
					<EditForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} setTurn={setTurn} />
				</div>
			) : (
          <Card  style={{ margin: '1%'}}>
          <CardHeader className='card-head'>
          <CardTitle className='errand-title'>{errand}</CardTitle>
              <Button className='del-btn' size='sm' color='danger' onClick={handleDelete}>X</Button>
            </CardHeader>

            <CardBody className='card-body'>
              <p>{desc}</p>
            <Button size='sm' className='edit-btn' onClick={handleClick}>Edit</Button>
              </CardBody>

				</Card>
			)}
		</section>
	)
}

export default TaskCard
