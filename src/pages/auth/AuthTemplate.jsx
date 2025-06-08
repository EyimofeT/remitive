import React from 'react'
import Image from "./../../assets/AuthImage.svg"
import Header from './elements/Header'

const AuthTemplate = ({headerLogo, headerText, headerAction, headerlink, children}) => {
  return (
    <div className='font-nunito grid grid-cols-5 h-screen'>
        <div className='col-span-5 lg:col-span-3 py-16 px-5 md:px-10 lg:px-32'> 
            <Header logo={headerLogo} text={headerText} action={headerAction} link={headerlink} />
            {children}
        </div>
        <div className='hidden lg:block lg:col-span-2'>
            <img src={Image} />
        </div>
    </div>
  )
}

export default AuthTemplate