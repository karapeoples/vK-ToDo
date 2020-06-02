import React from 'react'

const TaskCard = ({errand, desc, id}) => {
  return (
    <div>
      <h1>{errand}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default TaskCard
