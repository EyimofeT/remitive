import React from 'react'

const Dialog = ({maxWidth, position, children}) => {
  return (
    <div className={`w-full drop-shadow-[box-shadow: 4px 4px 20px 0px #4D2E4608] bg-white rounded-2xl pt-12 pb-12 lg:pb-16 px-5 lg:px-16 ${maxWidth || ""} ${position || ""}`}>
        {children}
    </div>
  )
}

export default Dialog