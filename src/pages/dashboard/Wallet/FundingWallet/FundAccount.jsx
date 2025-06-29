import React from 'react'
import { useState } from 'react'
import PrimaryButton from '../../../../components/buttons/PrimaryButton'
import Dialog from '../../../../components/Wrap/Dialog'
import WalletDialogTitle from '../../../../components/Wrap/WalletDialogTitle'
import AuthInput from '../../../auth/AuthInput'

const FundAccount = ({handleContinue}) => {
    const [input, setInput] = useState("");

    const formatNumber = (value) => {
      // Remove any non-digit characters (except dot if needed)
      const numericValue = value.replace(/,/g, "");
      if (isNaN(Number(numericValue))) return input; // Ignore non-numeric input
  
      return Number(numericValue).toLocaleString();
    };
  
    const handleChange = (e) => {
      const raw = e.target.value.replace(/,/g, "");
      setInput(formatNumber(raw));
    };

    const removeCommas = (input) => {
        return input.replace(/,/g, "");  //remove commas and get raw numbers
    }
  

    
  return (
    <Dialog maxWidth={"max-w-lg"} position={"mx-auto"}>
        <WalletDialogTitle header={"Fund Account"} text={"Please input how much you to fund wallet with"} />

        <div className={`flex flex-col pt-5 gap-5`}>

            <div className='w-7/10 py-5 mx-auto'>
                <AuthInput handleChange={handleChange} value={input} label={" "} name={"amount"} type={"text"} />
            </div>

            <PrimaryButton handleClick={handleContinue} text={"Continue"} fontSize={"text-2xl"} />

        </div>

    </Dialog>
  )
}

export default FundAccount