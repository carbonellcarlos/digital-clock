import React from 'react'

export default ({ angle }) => (
  <div
    className="clock-hand"
    style={{ transform: `translate(0, -50%) rotate(${angle}deg)` }}
  ></div>
)
