import Button from './Button'
import CounterShow from './CounterShow'

const Counter = (props) => {
  const { counter, onHandleIncrement } = props

  return (
    <div>
      <CounterShow counter={counter} />
      <div>
        <Button onHandleIncrement={onHandleIncrement} />
      </div>
    </div>
  )
}

export default Counter
