import { useState } from 'react'
import './App.css'

const ColorBox = ({ item, className }) => {
  console.log('ColorBox re-render', item)

  return (
    <div
      style={{
        width: '60px',
        height: '30px',
        margin: '10px',
        background: item
      }}
      className={className}
    >
      <p style={{ textAlign: 'center' }}>{item}</p>
    </div>
  )
}

function App() {
  const [colors, setColors] = useState(['red', 'blue', 'green', 'yellow'])
  const [wrapWidthDiv, setWrapWidthDiv] = useState(true)

  const justReRender = () => {
    // setColors([...colors])
    setWrapWidthDiv(!wrapWidthDiv)
  }

  console.log('App re-render')

  return (
    <div
      style={{
        width: '100%',
        gap: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      Happy Coding!
      <button onClick={justReRender}>Re-render</button>
      {wrapWidthDiv ? (
        <div>
          {colors.map((item, index) => (
            <ColorBox key={index} item={item} className={'class ' + new Date().getTime()} />
          ))}
        </div>
      ) : (
        <span>
          {colors.map((item, index) => (
            <ColorBox key={index} item={item} />
          ))}
        </span>
      )}
    </div>
  )
}

export default App
