import React, { useEffect, useState } from 'react'
import { Day } from './lib/day'

import { withAuthenticator } from 'aws-amplify-react'
import { Auth, API, graphqlOperation } from 'aws-amplify'

const App: React.FC = () => {
  const [username, setUsername] = useState('')
  const [pomodoros, setPomodoros] = useState([])

  const day = new Day()

  const ListPomodoros = `
  query {
    listPomodoros {
      items {
        id
        name
        description
      }
    }
  }`

  interface pomodoroData {
    data: {
      listPomodoros: {
        items: []
      }
    }
  }

  interface pomoItem {
    id: string
    name: string
    description: string
  }

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser()
    // console.log(JSON.stringify(userInfo.attributes))
    setUsername(userInfo.attributes.email)
  }

  useEffect(() => {
    fetchUser()
  }, [username])

  useEffect(() => {
    const fetchPomodoros = async () => {
      try {
        const pomodoroData = (await API.graphql(graphqlOperation(ListPomodoros))) as pomodoroData
        console.log(JSON.stringify(pomodoroData))
        setPomodoros(pomodoroData.data.listPomodoros.items)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPomodoros()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>pomodoro.ryan.org</p>
        <p>{day.world()}</p>
        <p>User: {username}</p>
        <h2>Pomodoros</h2>
        {pomodoros.map((pomo: pomoItem, index) => (
          <div key={index}>
            <p>id: {pomo.id}</p>
            <p>name: {pomo.name}</p>
            <p>description: {pomo.description}</p>
          </div>
        ))}
      </header>
    </div>
  )
}

export default withAuthenticator(App)
