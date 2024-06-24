import Button from './Button'
import ButtonDecrement from './ButtonDecrement.'
import CounterShow from './CounterShow'

const Counter = () => {
  return (
    <div>
      <CounterShow />
      <div>
        <Button />
        <ButtonDecrement />
      </div>
    </div>
  )
}

export default Counter
