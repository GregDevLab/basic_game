import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {

    const activeLink = ({ isActive }) => (`${s.link} ${isActive && s.active}`)

    return (
        <nav className={s.nav}>
            <ul className={s.nav_container}>
                <li>
                    <NavLink to='/' className={activeLink}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/master-mind' className={activeLink}>Master Mind</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar