import React, { useState } from 'react'
import DashTemplate from '../DashTemplate'
import DebitCard from './FundingWallet/DebitCard'
import FundAccount from './FundingWallet/FundAccount'
import FundVerification from './FundingWallet/FundVerification'
import FundWallet from './FundWallet'
import InnerWallet from './InnerWallet'
import BankTransfer from './TransferToWallet/BankTransfer'
import TrfVerification from './TransferToWallet/TrfVerification'

const Wallet = () => {

  const [funding, setFunding] = useState(false)
  const [fundingMethod, setFundingMethod] = useState("card")
  const [currentFundStep, setCurrentFundStep] = useState(0)
  const [currentTransferStep, setCurrentTransferStep] = useState(0)

  const fundingSteps = [
    {
      step:1,
      id:"debit",
      element:<DebitCard handleContinue={()=>setCurrentFundStep(2)} />
    },
    {
      step:2,
      id:"fund",
      element:<FundAccount handleContinue={()=>setCurrentFundStep(3)} />
    },
    {
      step:3,
      id:"verify",
      element:<FundVerification handleContinue={""} />
    },
  ]
  const transferSteps = [
    {
      step:1,
      id:"bankDetails",
      element:<BankTransfer handleContinue={()=>setCurrentTransferStep(2)} />
    },
    {
      step:2,
      id:"verify",
      element:<TrfVerification handleContinue={""} />
    },
  ]

  return (
    <DashTemplate>
      
      {
        !funding
        ?
         <InnerWallet handleFund={()=>setFunding(true)} /> 
        :
      <div className='flex flex-col gap-4 w-full'>

        <button onClick={() => fundingMethod == "card" && currentFundStep > 0 ? setCurrentFundStep(current => current -  1) : currentTransferStep > 0 ? setCurrentTransferStep(current => current -  1) : setFunding(false)} className='cursor-pointer' title='Go Back'>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="23" fill="white" fill-opacity="0.6"/>
            <circle cx="24" cy="24" r="23.5" stroke="#BFBFBF" stroke-opacity="0.3"/>
            <path d="M33.414 22.707H18.828L24.121 17.414L22.707 16L15 23.707L22.707 31.414L24.121 30L18.828 24.707H33.414V22.707Z" fill="#4D2E46" fill-opacity="0.41"/>
            <path d="M24.8281 17.4141L20.0352 22.207H33.9141V25.207H20.0352L24.8281 30L22.707 32.1211L14.293 23.707L22.707 15.293L24.8281 17.4141Z" stroke="#BFBFBF" stroke-opacity="0.3"/>
          </svg>
          <span className='sr-only'>Go Back</span>
        </button>

        {/* {currentFundStep} */}
        {/* {fundingMethod}
        {currentTransferStep} */}
        {(funding && currentFundStep == 0 && currentTransferStep == 0) && <FundWallet handleContinue={()=>{fundingMethod == "card" ? setCurrentFundStep(1) : setCurrentTransferStep(1)}} setFundingMethod={setFundingMethod} fundingMethod={fundingMethod} />}
        {fundingMethod == "card" && currentFundStep > 0 && fundingSteps[currentFundStep - 1].element}
        {fundingMethod == "transfer" && currentTransferStep > 0 && transferSteps[currentTransferStep - 1].element}

      </div>
       }
    </DashTemplate>
  )
}

export default Wallet