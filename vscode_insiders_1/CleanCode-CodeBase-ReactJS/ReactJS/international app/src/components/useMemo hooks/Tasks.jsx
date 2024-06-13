import { memo } from 'react'

const Tasks = ({ tasks }) => {
  console.log('rendering...')

  return (
    <div>
      <h3>Tasks</h3>
      {tasks.map((task, index) => {
        return <p key={index}>{task}</p>
      })}
    </div>
  )
}

export default memo(Tasks)
