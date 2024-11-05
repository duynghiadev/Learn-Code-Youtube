import React, { useState } from 'react'
import Ads from '../Ads'

export interface PositionType {
  x: number
  y: number
}

function MouseTracker({ render }: { render: (value: PositionType) => JSX.Element }) {
  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 })
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    })
  }
  return (
    <div onMouseMove={handleMouseMove}>
      <p style={{ color: 'red' }}>Mouse Tracker</p>
      {render(position)}
    </div>
  )
}

export default React.memo(MouseTracker)
