import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "orange"
      }

    return (
        <>
            <nav className="host-nav">

                {/*inline styling and "end" prop to show IsActive route*/} 
                <NavLink to="/host end "style={({isActive}) => isActive ? activeStyle : null }>Dashboard</NavLink>
                <NavLink to="/host/income"style={({isActive}) => isActive ? activeStyle : null }>Income</NavLink>
                <NavLink to="/host/reviews"style={({isActive}) => isActive ? activeStyle : null }>Reviews</NavLink>
                <NavLink to="/host/vans"style={({isActive}) => isActive ? activeStyle : null }>Vans</NavLink>
                {/*<NavLink to="/host/vans/:id"style={({isActive}) => isActive ? activeStyle : null }>HostVanDetail</NavLink>*/}
            </nav>
            <Outlet />
        </>
    )
}