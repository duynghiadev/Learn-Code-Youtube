import ComponentC from './componentC'

const ComponentB = () => {
  return (
    <div
      className='component small'
      style={{
        width: '400px',
        height: '350px',
        border: '1px solid red',
        padding: '1rem'
      }}
    >
      <h1>B</h1>
      <ComponentC />
    </div>
  )
}

export default ComponentB
