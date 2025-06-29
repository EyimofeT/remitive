import React from 'react'
import { NavLink } from 'react-router'

const PrimaryLink = ({text, link, bgColor, textColor, width, py, px}) => {
  return (
    <NavLink to={link || "/"} className={`cursor-pointer ${width || "w-full"} ${py || "py-3.5"} font-nunito my-4 ${px || "px-10"} font-bold text-lg rounded-sm ${bgColor || "bg-brand-orange"} ${textColor || "text-white"}`}>
        {text || "Continue"}
    </NavLink>
  )
}

export default PrimaryLink