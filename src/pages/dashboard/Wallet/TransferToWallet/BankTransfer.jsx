import { PinInput } from '@mantine/core'
import React from 'react'
import { useState } from 'react'
import PrimaryButton from '../../../../components/buttons/PrimaryButton'
import Dialog from '../../../../components/Wrap/Dialog'
import WalletDialogTitle from '../../../../components/Wrap/WalletDialogTitle'

const BankTransfer = ({handleContinue}) => {

    const details = [
        {
            header:"Account Number",
            text:"0212344556"
        },
        {
            header:"Bank Name",
            text:"Isioma Ekwemuka"
        },
        {
            header:"Reference No",
            text:"01566GHTJKKJHGHB87989765"
        },
    ]

    
  return (
    <Dialog maxWidth={"max-w-lg"} position={"mx-auto"}>
        <WalletDialogTitle hideBalance header={"Bank Transfer"} text={"Do a bank transfer to this Remitive account using the reference number. A code would be generated to continue your process"} />

        <div className={`flex flex-col pt-5 gap-8`}>

            <div className='text-left'>
                {
                    details.map((detail, idx) => {
                        return <div className='grid grid-cols-3 text-sm md:text-base gap-2'>
                            <p key={idx} className={`text-black/70 py-1`}>{detail.header}:</p>
                            <p className='col-span-2 break-words py-1 text-brand-purple-two font-semibold'>{detail.text}</p>
                        </div>
                    })
                }
            </div>

            <PrimaryButton handleClick={handleContinue} text={"Enter Code"} fontSize={"text-2xl"} />

        </div>

    </Dialog>
  )
}

export default BankTransfer