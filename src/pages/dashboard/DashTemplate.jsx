import React from 'react'
import DashHeader from './elements/DashHeader'
import VerticalNav from './navigation/VerticalNav'

const DashTemplate = ({children}) => {
  return (
    <div className='flex flex-row h-screen relative'>
        <VerticalNav />
        <div className={`bg-brand-bg-gray-one w-full min-h-screen overflow-auto pb-6 px-5 md:px-16`}>
            <DashHeader />
            {
                children
            }
        </div>
    </div>
  )
}

export default DashTemplate