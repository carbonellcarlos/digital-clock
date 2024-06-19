import React from 'react'
import ClockHand from './ClockHand'

export default ({ angle1, angle2 }) => (
  <div className="circle" style={{ backgroundColor: '#AAA' }}>
    <div
      className="circle"
      style={{ backgroundColor: '#FFF', width: '96%', position: 'relative' }}
    >
      <ClockHand angle={angle1} />
      <ClockHand angle={angle2} />
    </div>
  </div>
)
