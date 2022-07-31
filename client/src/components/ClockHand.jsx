import React from 'react'

export default ({ angle }) => (
  <div className={`clock-hand clock-hand-${angle || 0}`} />
)
