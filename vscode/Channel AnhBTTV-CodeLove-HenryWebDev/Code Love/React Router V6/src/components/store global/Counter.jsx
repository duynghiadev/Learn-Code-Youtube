import Button from './Button'
import ButtonDecrement from './ButtonDecrement.'
import CounterShow from './CounterShow'

const Counter = (props) => {
  const { callbackForceRender } = props

  return (
    <div>
      <CounterShow />
      <div>
        <Button callbackForceRender={callbackForceRender} />
        <ButtonDecrement callbackForceRender={callbackForceRender} />
      </div>
    </div>
  )
}

export default Counter
