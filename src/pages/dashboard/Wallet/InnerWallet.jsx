import React from 'react'
import AddButton from '../../../components/buttons/AddButton'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import PrimaryCardWrap from '../../../components/Wrap/PrimaryCardWrap'
import EmptyTable from '../elements/EmptyTable'

const InnerWallet = ({handleFund}) => {
  return (
    <div className={`py-8`}>
        <div className={`grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-14`}>
            <PrimaryCardWrap key={"walletBalance"}>
                <div className={`flex flex-col gap-4`}>
                    <div className='flex flex-row'>
                        <div className='flex flex-row gap-5 items-center'>
                            <div className='p-3 flex item-center border-1 border-brand-gray-three justify-center rounded-full h-fit'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.7776 8.33328H17.2221V4.99995C17.2221 4.8526 17.1635 4.7113 17.0593 4.60711C16.9552 4.50292 16.8138 4.44439 16.6665 4.44439H3.33317C3.20162 4.44654 3.07357 4.40193 2.97184 4.3185C2.8701 4.23508 2.80127 4.11826 2.77761 3.98883V3.78883C2.80127 3.65941 2.8701 3.54259 2.97184 3.45917C3.07357 3.37574 3.20162 3.33113 3.33317 3.33328H16.4332C16.5805 3.33328 16.7218 3.27475 16.826 3.17056C16.9302 3.06637 16.9887 2.92507 16.9887 2.77772C16.9887 2.63038 16.9302 2.48907 16.826 2.38489C16.7218 2.2807 16.5805 2.22217 16.4332 2.22217H3.33317C2.89114 2.22217 2.46721 2.39776 2.15465 2.71032C1.84209 3.02288 1.6665 3.44681 1.6665 3.88883C1.6626 3.95544 1.6626 4.02222 1.6665 4.08883V15.5166C1.66868 15.8157 1.72976 16.1115 1.84625 16.387C1.96273 16.6625 2.13235 16.9124 2.34541 17.1224C2.55847 17.3323 2.8108 17.4983 3.088 17.6107C3.36519 17.7232 3.66182 17.7799 3.96094 17.7777H16.6665C16.8138 17.7777 16.9552 17.7192 17.0593 17.615C17.1635 17.5108 17.2221 17.3695 17.2221 17.2222V13.8888H17.7776C17.925 13.8888 18.0663 13.8303 18.1704 13.7261C18.2746 13.6219 18.3332 13.4806 18.3332 13.3333V8.88883C18.3332 8.74149 18.2746 8.60018 18.1704 8.496C18.0663 8.39181 17.925 8.33328 17.7776 8.33328ZM16.1109 16.6666H3.96094C3.65194 16.6696 3.35427 16.5504 3.13266 16.3351C2.91106 16.1197 2.78345 15.8256 2.77761 15.5166V5.48883C2.95794 5.54109 3.14559 5.56361 3.33317 5.5555H16.1109V8.33328H12.2221C11.4853 8.33328 10.7788 8.62594 10.2579 9.14687C9.73693 9.66781 9.44428 10.3743 9.44428 11.1111C9.44428 11.8478 9.73693 12.5543 10.2579 13.0752C10.7788 13.5962 11.4853 13.8888 12.2221 13.8888H16.1109V16.6666ZM17.2221 12.7777H12.2221C11.78 12.7777 11.3561 12.6021 11.0435 12.2896C10.731 11.977 10.5554 11.5531 10.5554 11.1111C10.5554 10.669 10.731 10.2451 11.0435 9.93254C11.3561 9.61998 11.78 9.44439 12.2221 9.44439H17.2221V12.7777Z" fill="#532A48"/>
                                    <path d="M12.7835 11.9445C13.2438 11.9445 13.6169 11.5714 13.6169 11.1112C13.6169 10.6509 13.2438 10.2778 12.7835 10.2778C12.3233 10.2778 11.9502 10.6509 11.9502 11.1112C11.9502 11.5714 12.3233 11.9445 12.7835 11.9445Z" fill="#532A48"/>
                                </svg>
                            </div>

                            <div className='flex flex-col pr-5 text-left'>
                                <p className={`text-brand-purple-two/70 font-semibold`}>Available Balance</p>
                                <p className={`text-xl font-semibold text-black`}>₦0.00</p>
                            </div>

                        </div>
                    </div>
                    <div className={`self-center`}>
                        <PrimaryButton handleClick={handleFund} text={"Fund Wallet"} width={"w-fit"} />
                    </div>
                </div>
            </PrimaryCardWrap>
            <PrimaryCardWrap key={"savedCards"} title="Saved Cards" >
                <div className='flex flex-col min-h-36 justify-between gap-10 items-center'>
                    <div className=' pt-12'>
                        <p className='text-center font-semibold text-black/70'>
                        Add your card to ease funding your wallet  
                        </p>
                    </div>
                    <div>
                        <AddButton />
                    </div>
                </div>
            </PrimaryCardWrap>
        </div>

        <div className={`py-10`}>
            <PrimaryCardWrap title={"Recent Activities"}>
                <div className='py-20 lg:pb-32'>
                <EmptyTable />
                </div>
            </PrimaryCardWrap>
        </div>

    </div>
  )
}

export default InnerWallet