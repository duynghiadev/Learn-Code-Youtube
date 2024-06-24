import { useState } from 'react'
import Tasks from './Tasks'

const UseMemoHook = () => {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState(['Learn HTML', 'Learn CSS', 'Learn JavaScript'])

  const addOne = () => {
    setCount((count) => count + 1)
  }

  return (
    <div>
      <h3>This is useMemo Hook</h3>
      <h3>React Memo</h3>
      <Tasks tasks={tasks} />
      <hr />
      <div>
        Count: {count}
        <br />
        <button onClick={addOne}>+</button>
      </div>
    </div>
  )
}

export default UseMemoHook
