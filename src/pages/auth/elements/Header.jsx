import React from 'react'
import Remitive from "../../../assets/LogoColour.svg"
import { NavLink } from 'react-router'

const Header = ({logo, text, action, link}) => {
  return (
    <div className='flex flex-col md:flex-row gap-10 justify-between md:items-center w-full'>
        <img src={Remitive} className='w-fit' />
        <div className='flex flex-row gap-1 flex-wrap justify-end'>
            <p className='whitespace-nowrap'>{text || "Not registered yet?"}</p>
            <NavLink to={link || "../signup"} className={"text-brand-orange underline underline-offset-1"}>
                {action || "Create an Account"}
            </NavLink>
        </div>
    </div>
  )
}

export default Header