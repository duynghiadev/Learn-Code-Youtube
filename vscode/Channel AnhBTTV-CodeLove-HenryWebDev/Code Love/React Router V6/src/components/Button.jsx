const Button = (props) => {
  const { onHandleIncrement } = props

  const handleIncrementFromChild = () => {
    onHandleIncrement()
  }

  return <button onClick={handleIncrementFromChild}>Increment</button>
}

export default Button
