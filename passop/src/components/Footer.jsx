import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center bottom-0 w-full'>
        <div className='logo font-bold text-white text-2xl'>
            <span className='text-green-700'> &lt;/ </span>
                Pass
            <span className='text-green-700'>Op/&gt;</span>
        </div>
        <div className='flex'>
            Created with 💖 by Myst-Coder
        </div>
    </div>    
  )
}

export default Footer