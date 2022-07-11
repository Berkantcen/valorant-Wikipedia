import React, { useContext, useEffect } from 'react'
import AppLevelContext from '../context/AppLevelContext'
import WeaponsList from '../components/Weapons/WeaponsList';

function Weapons() {

  const {fetchWeapons} = useContext(AppLevelContext);

  useEffect(() => {
    fetchWeapons();

  }, [])

  return (
    <div>
      <WeaponsList />
    </div>
  )
}

export default Weapons