import React from 'react'
import ClockHand from './ClockHand'

export default ({ angle1, angle2 }) => (
  <div className="clock-piece">
    <ClockHand angle={angle1} />
    <ClockHand angle={angle2} />
  </div>
)
