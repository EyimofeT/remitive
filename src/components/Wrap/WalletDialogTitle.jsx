import React from 'react'

const WalletDialogTitle = ({header, text, hideBalance}) => {
  return (
    <div className='flex flex-col text-left gap-5'>
        <div className='text-center font-nunito'>
            <h1 className='text-brand-purple-one font-extrabold text-2xl'>{header || "Fund Wallet"}</h1>
            <p className='text-black/40'>{text || "Please select method to fund wallet with"}</p>
        </div>
        {
            hideBalance
            ||
            <div>
                <p className='text-black/70'>Available Bal: <span className='font-extrabold text-brand-gray-four'>₦20.00</span> </p>
            </div>
        }
    </div>
  )
}

export default WalletDialogTitle