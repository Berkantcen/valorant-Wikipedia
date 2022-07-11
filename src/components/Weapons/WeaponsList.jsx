import React, { useContext } from 'react'
import WeaponsItem from './WeaponsItem';
import AppLevelContext from '../../context/AppLevelContext'
import styles from '../../styles/WeaponList.module.css'

function WeaponsList() {

    const { weapons } = useContext(AppLevelContext);

    return (
        <div className={styles.weaponList}>
            {weapons.map((weapon, idx) => {
                return <WeaponsItem weapon={weapon} key={idx} />
            })}
        </div>
    )
}

export default WeaponsList