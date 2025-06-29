import React from 'react'

const AuthForm = ({ noImg, head, text, children}) => {
    return (
        <div className=''>
            <div className='flex flex-col text-left items-start pt-16 pb-8 gap-1.5'>
                {
                    noImg
                    ||
                   <p>
                    👋
                   </p>

                }
                <h2 className='font-extrabold text-4xl text-brand-purple-one'> 
                    {head || "Hi, Welcome Back!"}
                </h2>
                <p  className='font-semibold text-black/60'>
                    {text || "Sign in to get started"}
                </p>
            </div>
            {
                children
            }
        </div>
    )
}

export default AuthForm