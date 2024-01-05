import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import './App.css'

const MyCustomContextMenu = ({ targetId, options, classes }) => {
  const [contextData, setContextData] = useState({ visible: false, posX: 0, posY: 0 })
  const contextRef = useRef(null)

  console.log(`contextData: ${contextData}`)
  console.log('contextRef: ', contextRef)

  useEffect(() => {
    const contextMenuEventHandler = (event) => {
      const targetElement = document.getElementById(targetId)
      console.log('targetElement div: ', targetElement)

      console.log(
        `targetElement: ${targetElement}, event.target: ${
          event.target
        }, targetElement.contains(event.target): ${targetElement.contains(event.target)}`
      )

      console.log(`contextRef.current: ${contextRef.current}`)
      console.log(
        `!contextRef.current.contains(event.target): ${!contextRef.current.contains(event.target)}`
      )

      if (targetElement && targetElement.contains(event.target)) {
        event.preventDefault()
        setContextData({ visible: true, posX: event.clientX, posY: event.clientY })
      } else if (contextRef.current && !contextRef.current.contains(event.target)) {
        setContextData({ ...contextData, visible: false })
      }
    }

    const offClickHandler = (event) => {
      if (contextRef.current && !contextRef.current.contains(event.target)) {
        setContextData({ ...contextData, visible: false })
      }
    }

    document.addEventListener('contextmenu', contextMenuEventHandler)
    document.addEventListener('click', offClickHandler)

    return () => {
      document.removeEventListener('contextmenu', contextMenuEventHandler)
      document.removeEventListener('click', offClickHandler)
    }
  }, [contextData, targetId])

  useLayoutEffect(() => {
    if (contextData.posX + contextRef.current?.offsetWidth > window.innerWidth) {
      setContextData({ ...contextData, posX: contextData.posX - contextRef.current?.offsetWidth })
    }
    if (contextData.posY + contextRef.current?.offsetHeight > window.innerHeight) {
      setContextData({ ...contextData, posY: contextData.posY - contextRef.current?.offsetHeight })
    }
  }, [contextData])

  return (
    <div
      ref={contextRef}
      className='contextMenu'
      style={{
        display: `${contextData.visible ? 'block' : 'none'}`,
        left: contextData.posX,
        top: contextData.posY
      }}
    >
      <div className={`optionsList ${classes?.listWrapper}`}>
        {options.map((option) => (
          <li key={option} className={`optionListItem ${classes?.listItem}`}>
            {option}
          </li>
        ))}
      </div>
    </div>
  )
}

export default MyCustomContextMenu
