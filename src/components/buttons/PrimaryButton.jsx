import React from 'react'

const PrimaryButton = ({type, text, handleClick, bgColor, textColor, width, py, px}) => {
  return (
    <button onClick={handleClick} type={type || "button"} className={` ${width || "w-full"} ${py || "py-3.5"} font-nunito my-4 ${px || "px-10"} font-bold text-lg rounded-sm ${bgColor || "bg-brand-orange"} ${textColor || "text-white"}`}>
        {text || "Submit"}
    </button>
  )
}

export default PrimaryButton