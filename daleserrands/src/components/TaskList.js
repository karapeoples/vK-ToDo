import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getErrands } from '../redux/actions'
import TaskCard from './TaskCard'

const TaskList = () => {
 const tasks = useSelector(state => state.tasks)
 const dispatch = useDispatch()

  useEffect(() => {
  dispatch(getErrands())
}, [dispatch])


  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <div key={index}>
            <TaskCard errand={task.errand} desc={task.errand_desc} id={task.id}/>
          </div>
        )
      })}
    </div>
  )
}

export default TaskList
