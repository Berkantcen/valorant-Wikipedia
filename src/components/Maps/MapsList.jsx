import React, { useContext } from 'react'
import AppLevelContext from '../../context/AppLevelContext'
import MapsItem from './MapsItem'

import styles from '../../styles/MapsList.module.css'

function MapsList() {

    const {maps} = useContext(AppLevelContext);

    return (
        <div className={styles.mapsList}>
            {maps.map((map, idx) => {
                return <MapsItem map={map} key={idx} />
            })}
        </div>
    )
}

export default MapsList