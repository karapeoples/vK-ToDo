import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getErrands } from '../redux/actions'
import TaskCard from './TaskCard'
import { Row, Col } from 'reactstrap'

const TaskList = () => {
 const tasks = useSelector(state => state.tasks)
 const dispatch = useDispatch()

  useEffect(() => {
  dispatch(getErrands())
}, [dispatch])


  return (
    <Row>
      {tasks.map((task, index) => {
        return (
									<Col lg='4' key={index}>
										<TaskCard errand={task.errand} desc={task.errand_desc} id={task.id} />
									</Col>
								)
      })}
    </Row>
  )
}

export default TaskList
