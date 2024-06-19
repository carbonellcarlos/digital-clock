import React from 'react'
import ClockDigit from './ClockDigit'

export default ({ style, number }) => (
  <div style={{ ...style, display: 'grid', gridTemplateColumns: 'auto auto' }}>
    <ClockDigit number={Math.floor(number / 10)} />
    <ClockDigit number={number % 10} />
  </div>
)
