import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>

           {/*//NavLink allows us to style using className or inline prop 
            //Add to the NavLink component: className={({isActive}) => isActive ? "my-link" : null } */} 
            <NavLink className="site-logo" to="/">#VanLife</NavLink>
            <nav>
                <NavLink to="/host">Host</NavLink>
                <NavLink 
          to="/about"
          className={({isActive}) => isActive ? "my-link" : null }
        >
          About
        </NavLink>

                <NavLink to="/vans">Vans</NavLink>
            </nav>
        </header>
    )
}