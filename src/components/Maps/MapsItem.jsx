import React from 'react'
import styles from '../../styles/Maps.module.css'

function MapsItem({ map }) {
    return (
        <div className={styles.mapsCard}>
            <h1>{map.displayName}</h1>
            <img src={map.splash} className={styles.img}/>
            <p><b>Coordinates:</b> {map.coordinates}</p>
        </div>

    )
}

export default MapsItem