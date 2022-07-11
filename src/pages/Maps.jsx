import React, { useEffect } from 'react'
import { useContext } from 'react'
import AppLevelContext from '../context/AppLevelContext'
import MapsList from '../components/Maps/MapsList'

function Maps() {

  const {fetchMaps} = useContext(AppLevelContext);

  useEffect(() => {
    fetchMaps();
  }, [])
  
  return (
    <div>
      <MapsList />
    </div>
  )
}

export default Maps