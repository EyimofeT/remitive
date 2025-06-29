import { PinInput } from '@mantine/core'
import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router'
import PrimaryButton from '../../../../components/buttons/PrimaryButton'
import Dialog from '../../../../components/Wrap/Dialog'
import WalletDialogTitle from '../../../../components/Wrap/WalletDialogTitle'

const TrfVerification = ({handleContinue}) => {
    const [otp, setOtp] = useState("")

    
  return (
    <Dialog maxWidth={"max-w-lg"} position={"mx-auto"}>
        <WalletDialogTitle hideBalance header={"Transfer Verification"} text={"Input the code sent to you upon payment"} />

        <div className={`flex flex-col pt-5 gap-5`}>

            <div className="flex items-center justify-center py-12">
                <PinInput inputMode="numeric" onComplete={(value)=>setOtp(value)} oneTimeCode aria-label="One time code" placeholder="" size="xl" styles={{input:{border:"#6A7A914D 1px solid", fontWeight:"unset"}}} className="email-code font-nunito font-medium" />
            </div>
            
            <div>
                <PrimaryButton handleClick={handleContinue} text={"Fund Wallet"} fontSize={"text-2xl"} />
                <p className={`text-sm text-brand-gray-seven`}>Didn't receive Code? <NavLink className='text-brand-orange font-semibold'>Contact Help</NavLink></p>
            </div>
        </div>

    </Dialog>
  )
}

export default TrfVerification