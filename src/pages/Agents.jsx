import React from 'react'
import { useContext, useEffect } from 'react'
import AgentList from '../components/Agents/AgentList'
// CONTEXT
import AppLevelContext from '../context/AppLevelContext'
// COMPONENTS

const Agents = () => {
  const { fetchAgents } = useContext(AppLevelContext)

  useEffect(() => {
    fetchAgents()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <AgentList />
    </>
  )
}

export default Agents
