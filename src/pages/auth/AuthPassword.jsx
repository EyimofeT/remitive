import React, { useState } from 'react'

const AuthPassword= ({name, id, label, value, type}) => {

    const [show, setShow] = useState(false)

  return (
    <fieldset className='flex flex-col items-start gap-1 w-full'>
        <label htmlFor={id} className='font-semibold text-black/60'>{label || "Password"}</label>
        <div className='relative w-full'>
            <input type={show ? "text" : "password"} name={name} id={id} value={value} className={`z-0 bg-brand-gray-one/30 pr-4 border border-brand-gray-one/30 rounded-sm px-2 py-1 w-full`} />
            <button type='button' onClick={()=>setShow(prev => !prev)} className='cursor-pointer z-10 absolute top-1/2 -translate-y-1/2 right-2 w-fit'>
                <svg className='z-10' width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9369 7.64062C12.9369 8.33682 12.6604 9.0045 12.1681 9.49678C11.6758 9.98906 11.0081 10.2656 10.3119 10.2656C9.61574 10.2656 8.94806 9.98906 8.45578 9.49678C7.9635 9.0045 7.68694 8.33682 7.68694 7.64062C7.68694 6.94443 7.9635 6.27675 8.45578 5.78447C8.94806 5.29219 9.61574 5.01562 10.3119 5.01562C11.0081 5.01562 11.6758 5.29219 12.1681 5.78447C12.6604 6.27675 12.9369 6.94443 12.9369 7.64062ZM0.135374 7.03594C2.35725 2.35547 5.71584 0 10.2182 0C14.7229 0 18.0791 2.35547 20.301 7.03828C20.3901 7.22699 20.4363 7.4331 20.4363 7.6418C20.4363 7.85049 20.3901 8.0566 20.301 8.24531C18.0791 12.9258 14.7205 15.2812 10.2182 15.2812C5.7135 15.2812 2.35725 12.9258 0.135374 8.24297C-0.0450954 7.86328 -0.0450954 7.42266 0.135374 7.03594ZM10.3119 11.7656C12.5901 11.7656 14.4369 9.91875 14.4369 7.64062C14.4369 5.3625 12.5901 3.51562 10.3119 3.51562C8.03381 3.51562 6.18694 5.3625 6.18694 7.64062C6.18694 9.91875 8.03381 11.7656 10.3119 11.7656Z" fill="#4D2E46"/>
                </svg>
                <div className={`bg-brand-purple -rotate-45 font-medium h-6 w-0.5 absolute top-1/2 -translate-y-1/2 translate-x-1/2 right-1/2 z-20 ${!show ? "opacity-100" : "opacity-0"}`}></div>
            </button>
        </div>
    </fieldset>
  )
}

export default AuthPassword