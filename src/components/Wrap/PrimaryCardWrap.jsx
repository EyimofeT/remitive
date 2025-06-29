import React from 'react'

const PrimaryCardWrap = ({title, children}) => {
  return (
    <div className={`rounded-3xl bg-white py-6 px-9 lg:py-4 lg:px-6`}>
        <p className={`text-xl font-semibold text-brand-purple-two text-left pb-7 lg:pb-5`}>{title || "Wallet Balance"}</p>
        {children}
    </div>
  )
}

export default PrimaryCardWrap