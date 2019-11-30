import React from 'react'
import { Day } from './lib/day'

const App: React.FC = () => {
  const day = new Day()
  return (
    <div className="App">
      <header className="App-header">
        <p>pomodoro.ryan.org</p>
        <p>{day.world()}</p>
      </header>
    </div>
  )
}

export default App
