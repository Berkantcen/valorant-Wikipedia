import React, { useEffect } from 'react'
import { useContext } from 'react'
import AgentList from '../components/Agents/AgentList';
import AppLevelContext from '../context/AppLevelContext'

function Agents() {
  const {fetchAgents} = useContext(AppLevelContext);

  useEffect(() => {
    fetchAgents();
  }, [])

  return (
    <div>
      <AgentList />
    </div>
  )
}

export default Agents