import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const AppLevelContext = React.createContext()
const API = 'https://valorant-api.com/v1'

export const AppLevelProvider = ({ children }) => {
  const [agents, setAgents] = useState([])
  const [maps, setMaps] = useState([])
  const [weapons, setWeapons] = useState([])

  const fetchAgents = async () => {
    const response = await axios.get(`${API}/agents?isPlayableCharacter=true`)
    setAgents(response.data.data)
  }

  return (
    <AppLevelContext.Provider
      value={{
        agents,
        maps,
        weapons,
        fetchAgents,
        setMaps,
        setWeapons,
        setAgents,
      }}
    >
      {children}
    </AppLevelContext.Provider>
  )
}

export default AppLevelContext
