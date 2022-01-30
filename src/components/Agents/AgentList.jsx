import React from 'react'
import { useContext } from 'react'
import AppLevelContext from '../../context/AppLevelContext'
import AgentItem from './AgentItem'
import styles from '../../styles/AgentList.module.css'

const AgentList = () => {
  const { agents } = useContext(AppLevelContext)
  return (
    <div className={styles.agentList}>
      {agents.map((agent, idx) => (
        <AgentItem agent={agent} key={idx} />
      ))}
    </div>
  )
}

export default AgentList
