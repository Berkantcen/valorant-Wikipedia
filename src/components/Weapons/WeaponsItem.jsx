import React from 'react'
import styles from '../../styles/Weapon.module.css'

function WeaponsItem({ weapon }) {

    const string = weapon.category;
    return (
        <div className={styles.weaponCard}>
            <h1>{weapon.displayName}</h1>
            <img src={weapon.displayIcon} className={styles.img}></img>
            <p className={styles.weaponRole}>{string.slice(21)}</p>
            
        </div>
    )
}

export default WeaponsItem