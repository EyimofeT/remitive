import React from 'react'
import { NavLink, useLocation } from 'react-router'

const NavItem = ({id, icon, activeIcon, name, link}) => {

    const location = useLocation()

  return (
    <NavLink id={id} to={link} className={({isActive} ) => (isActive  ? ` rounded-l-sm bg-brand-white-one flex flex-row gap-5 items-center px-7 py-2.5 w-full` : `hover:bg-white/20 hover:rounded-l-sm text-white flex flex-row gap-5 items-center px-7 py-2.5 w-full`)}>
        {
            location.pathname == link
            ?
            <div>
                {activeIcon}
            </div>
            :
            <div>
                {icon}
            </div>
        }
        {name || "Name"}
    </NavLink>
  )
}

export default NavItem