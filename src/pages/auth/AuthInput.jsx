import React from 'react'

const AuthInput = ({name, id, label, value, type, handleChange}) => {
  return (
    <fieldset className='flex flex-col items-start gap-1 w-full'>
        <label htmlFor={id} className='font-semibold text-black/60'>{label || "Email Address"}</label>
        <input onChange={handleChange} type={type || "text"} name={name} id={id} value={value} className={`bg-brand-gray-one/30 border border-brand-gray-one/30 rounded-sm px-2 py-2 w-full`} />
    </fieldset>
  )
}

export default AuthInput