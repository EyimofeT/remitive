import React from 'react'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import Dialog from '../../../components/Wrap/Dialog'
import WalletDialogTitle from '../../../components/Wrap/WalletDialogTitle'

const FundWallet = ({handleContinue, fundingMethod, setFundingMethod}) => {

    let isMethod;

    const fundingOptions = [
        {
            id:"card",
            icon:<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.1875 8.59375C17.1875 8.38655 17.2698 8.18784 17.4163 8.04132C17.5628 7.89481 17.7615 7.8125 17.9688 7.8125H21.0938C21.301 7.8125 21.4997 7.89481 21.6462 8.04132C21.7927 8.18784 21.875 8.38655 21.875 8.59375V10.1562C21.875 10.3635 21.7927 10.5622 21.6462 10.7087C21.4997 10.8552 21.301 10.9375 21.0938 10.9375H17.9688C17.7615 10.9375 17.5628 10.8552 17.4163 10.7087C17.2698 10.5622 17.1875 10.3635 17.1875 10.1562V8.59375Z" fill="#808080"/>
            <path d="M3.125 3.125C2.2962 3.125 1.50134 3.45424 0.915291 4.04029C0.32924 4.62634 0 5.4212 0 6.25L0 18.75C0 19.5788 0.32924 20.3737 0.915291 20.9597C1.50134 21.5458 2.2962 21.875 3.125 21.875H21.875C22.7038 21.875 23.4987 21.5458 24.0847 20.9597C24.6708 20.3737 25 19.5788 25 18.75V6.25C25 5.4212 24.6708 4.62634 24.0847 4.04029C23.4987 3.45424 22.7038 3.125 21.875 3.125H3.125ZM23.4375 6.25V14.0625H1.5625V6.25C1.5625 5.8356 1.72712 5.43817 2.02015 5.14515C2.31317 4.85212 2.7106 4.6875 3.125 4.6875H21.875C22.2894 4.6875 22.6868 4.85212 22.9799 5.14515C23.2729 5.43817 23.4375 5.8356 23.4375 6.25ZM21.875 20.3125H3.125C2.7106 20.3125 2.31317 20.1479 2.02015 19.8549C1.72712 19.5618 1.5625 19.1644 1.5625 18.75V17.1875H23.4375V18.75C23.4375 19.1644 23.2729 19.5618 22.9799 19.8549C22.6868 20.1479 22.2894 20.3125 21.875 20.3125Z" fill="#808080"/>
            </svg>,
            activeIcon:<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.1875 8.59375C17.1875 8.38655 17.2698 8.18784 17.4163 8.04132C17.5628 7.89481 17.7615 7.8125 17.9688 7.8125H21.0938C21.301 7.8125 21.4997 7.89481 21.6462 8.04132C21.7927 8.18784 21.875 8.38655 21.875 8.59375V10.1562C21.875 10.3635 21.7927 10.5622 21.6462 10.7087C21.4997 10.8552 21.301 10.9375 21.0938 10.9375H17.9688C17.7615 10.9375 17.5628 10.8552 17.4163 10.7087C17.2698 10.5622 17.1875 10.3635 17.1875 10.1562V8.59375Z" fill="#DE8A59"/>
            <path d="M3.125 3.125C2.2962 3.125 1.50134 3.45424 0.915291 4.04029C0.32924 4.62634 0 5.4212 0 6.25L0 18.75C0 19.5788 0.32924 20.3737 0.915291 20.9597C1.50134 21.5458 2.2962 21.875 3.125 21.875H21.875C22.7038 21.875 23.4987 21.5458 24.0847 20.9597C24.6708 20.3737 25 19.5788 25 18.75V6.25C25 5.4212 24.6708 4.62634 24.0847 4.04029C23.4987 3.45424 22.7038 3.125 21.875 3.125H3.125ZM23.4375 6.25V14.0625H1.5625V6.25C1.5625 5.8356 1.72712 5.43817 2.02015 5.14515C2.31317 4.85212 2.7106 4.6875 3.125 4.6875H21.875C22.2894 4.6875 22.6868 4.85212 22.9799 5.14515C23.2729 5.43817 23.4375 5.8356 23.4375 6.25ZM21.875 20.3125H3.125C2.7106 20.3125 2.31317 20.1479 2.02015 19.8549C1.72712 19.5618 1.5625 19.1644 1.5625 18.75V17.1875H23.4375V18.75C23.4375 19.1644 23.2729 19.5618 22.9799 19.8549C22.6868 20.1479 22.2894 20.3125 21.875 20.3125Z" fill="#DE8A59"/>
            </svg>,
            header:"Debit Card",
            text:"Directly debit from your debit card",


        },
        {
            id:"transfer",
            icon:<svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.25 12.5V8.75H20V6.25L25 10.625L20 15V12.5H16.25ZM15 4.625V6.25H0V4.625L7.5 0L15 4.625ZM6.25 7.5H8.75V13.75H6.25V7.5ZM1.25 7.5H3.75V13.75H1.25V7.5ZM13.75 7.5V10.625L11.25 12.875V7.5H13.75ZM8.875 15L8.125 15.625L10.25 17.5H0V15H8.875ZM18.75 13.75V17.5H15V20L10 15.625L15 11.25V13.75H18.75Z" fill="#808080"/>
            </svg>,
            activeIcon:<svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.25 12.5V8.75H20V6.25L25 10.625L20 15V12.5H16.25ZM15 4.625V6.25H0V4.625L7.5 0L15 4.625ZM6.25 7.5H8.75V13.75H6.25V7.5ZM1.25 7.5H3.75V13.75H1.25V7.5ZM13.75 7.5V10.625L11.25 12.875V7.5H13.75ZM8.875 15L8.125 15.625L10.25 17.5H0V15H8.875ZM18.75 13.75V17.5H15V20L10 15.625L15 11.25V13.75H18.75Z" fill="#DE8A59"/>
            </svg>,
            header:"Manual Bank Transfer",
            text:"Do a bank transfer to the provided bank account details",


        },
    ]
    
  return (
    <Dialog maxWidth={"max-w-lg"} position={"mx-auto"}>
        <WalletDialogTitle />

        <div className={`flex flex-col pt-5 gap-5`}>

            {fundingOptions.map((option, idx) => {
                isMethod = option.id == fundingMethod
                return <div onClick={()=>setFundingMethod(option.id)} key={idx} className={`cursor-pointer rounded-sm border-1  ${isMethod ? "border-brand-orange/50 py-4" : "border-brand-gray-five/30"} py-5 px-4 flex flex-row gap-5 justify-between items-center`}>

                    <div className={`p-3 flex item-center justify-center rounded-full h-fit ${isMethod ? "bg-brand-orange/5" : "bg-brand-gray-eight"}`}>
                        {isMethod ? option.activeIcon : option.icon}
                    </div>

                    <div className={`text-left`}>
                        <p className={`font-semibold ${isMethod ? "text-brand-orange" : "text-brand-gray-six"}`}>{option.header}</p>
                        <p className={`text-sm text-brand-gray-seven`}>{option.text}</p>
                    </div>

                    <div>
                        <svg className={`w-6 h-6 transition-all duration-300 ease-in-out ${isMethod ? "opacity-100" : "opacity-0"}`} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 25C5.59625 25 0 19.4037 0 12.5C0 5.59625 5.59625 0 12.5 0C19.4037 0 25 5.59625 25 12.5C25 19.4037 19.4037 25 12.5 25ZM11.2537 17.5L20.0912 8.66125L18.3237 6.89375L11.2537 13.965L7.7175 10.4288L5.95 12.1962L11.2537 17.5Z" fill="#DE8A59"/>
                        </svg>
                    </div>


                </div>
            })}

            <PrimaryButton handleClick={handleContinue} text={"Continue"} fontSize={"text-2xl"} />

        </div>

    </Dialog>
  )
}

export default FundWallet