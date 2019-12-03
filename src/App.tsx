import React, { useEffect, useState } from 'react'
import { Day } from './lib/day'

import { withAuthenticator } from 'aws-amplify-react'
import { Auth } from 'aws-amplify'

const App: React.FC = () => {
  const day = new Day()

  const [username, setUsername] = useState('')

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser()
    // console.log(JSON.stringify(userInfo.attributes))
    setUsername(userInfo.attributes.email)
  }

  useEffect(() => {
    fetchUser()
  }, [username])

  return (
    <div className="App">
      <header className="App-header">
        <p>pomodoro.ryan.org</p>
        <p>{day.world()}</p>
        <p>User: {username}</p>
      </header>
    </div>
  )
}

export default withAuthenticator(App)
