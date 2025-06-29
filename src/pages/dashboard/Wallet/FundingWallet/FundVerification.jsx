import { PinInput } from '@mantine/core'
import React from 'react'
import { useState } from 'react'
import PrimaryButton from '../../../../components/buttons/PrimaryButton'
import Dialog from '../../../../components/Wrap/Dialog'
import WalletDialogTitle from '../../../../components/Wrap/WalletDialogTitle'

const FundVerification = ({handleContinue}) => {
    const [otp, setOtp] = useState("")

    
  return (
    <Dialog maxWidth={"max-w-lg"} position={"mx-auto"}>
        <WalletDialogTitle hideBalance header={"Verification"} text={"Please input PIN to continue"} />

        <div className={`flex flex-col pt-5 gap-5`}>

        <div className="flex items-center justify-center py-12">
            <PinInput inputMode="numeric" onComplete={(value)=>setOtp(value)} oneTimeCode aria-label="One time code" placeholder="" size="xl" styles={{input:{border:"#6A7A914D 1px solid", fontWeight:"unset"}}} className="email-code font-nunito font-medium" />
        </div>

            <PrimaryButton handleClick={handleContinue} text={"Fund Wallet"} fontSize={"text-2xl"} />

        </div>

    </Dialog>
  )
}

export default FundVerification