import ComponentB from './componentB'
import '../../css/useContext.css'

const ComponentA = () => {
  return (
    <div
      className='component medium'
      style={{
        width: '500px',
        height: '500px',
        border: '1px solid red',
        padding: '1rem'
      }}
    >
      <h1>A</h1>
      <ComponentB />
    </div>
  )
}

export default ComponentA
