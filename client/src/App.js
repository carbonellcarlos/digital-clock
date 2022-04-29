import React, { useEffect, useState } from 'react'
import './App.css'
import ClockNumber from './components/ClockNumber'

const getTime = () => {
  const d = new Date()
  return [d.getHours(), d.getMinutes(), d.getSeconds()]
}

function App() {
  const [h, m, s] = getTime()
  const [hour, setHour] = useState(h)
  const [min, setMin] = useState(m)
  const [sec, setSec] = useState(s)
  useEffect(() => {
    const interval = setInterval(() => {
      const [h, m, s] = getTime()
      setHour(h)
      setMin(m)
      setSec(s)
    }, 1000)
    return () => clearInterval(interval)
  })

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {[hour, min, sec].map((x, i) => (
        <ClockNumber key={i} style={{ margin: '10px 20px' }} number={x} />
      ))}
    </div>
  )
}

export default App
