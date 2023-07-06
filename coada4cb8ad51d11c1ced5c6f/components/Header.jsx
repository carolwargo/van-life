import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>

           {/*//NavLink allows us to style using className or inline prop 
            //Add to the NavLink component: className={({isActive}) => isActive ? "my-link" : null } */} 
            <NavLink className="site-logo" to="/">#VanLife</NavLink>

            <nav>
                <NavLink to="/host"className={({isActive}) => isActive ? "active-link" : null }>Host</NavLink>
                
                <NavLink to="/about"className={({isActive}) => isActive ? "active-link" : null }>About</NavLink>

                <NavLink to="/vans"className={({isActive}) => isActive ? "active-link" : null }>Vans</NavLink>
                
            </nav>
        </header>
    )
}