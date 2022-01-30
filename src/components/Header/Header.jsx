import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from '../../styles/Header.module.css'
// ASSETS
import Logo from '../../assets/img/logo.png'

const Header = () => {
  const location = useLocation()
  const currentPage = useRef(location.pathname.slice(1))
  const [page, setPage] = useState(currentPage.current)

  useEffect(() => {
    if (location.pathname !== '/') {
      currentPage.current = location.pathname.slice(1)
    } else {
      currentPage.current = 'home'
    }
    setPage(currentPage.current)
  }, [location])

  return (
    <header>
      <div className={styles.brand}>
        <Link to='/'>
          <img src={Logo} alt='logo' />
          <h1>VALORANT WIKI</h1>
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link
              to='/weapons'
              className={page === 'weapons' ? styles.activeNav : styles.navLink}
            >
              Weapons
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to='/agents'
              className={page === 'agents' ? styles.activeNav : styles.navLink}
            >
              Agents
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to='/maps'
              className={page === 'maps' ? styles.activeNav : styles.navLink}
            >
              Maps
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
