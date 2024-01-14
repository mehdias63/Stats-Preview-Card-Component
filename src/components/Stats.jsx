import React from 'react'

export default function Stats() {
  return (
    <div className='w-[20.4375rem] h-[48.75rem] px-4 bg-[#1B1937] py-12 rounded-lg font-inter '>
        <div>
            <img src='./public/images/image-header-mobile.jpg' className='rounded-t-lg'/>
        </div>
        <div>
            <h1 className='font-bold text-[1.75rem] p-4 text-center leading-8 mt-2'>Get<span className='text-[#AB5CDB]'> insights</span> that help your business grow.</h1>
            <p className='font-normal text-[0.9375rem] p-4 text-center leading-[1.5625rem] mb-4 opacity-60'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
            <div className='flex flex-col justify-center items-center gap-6 text-center'>
                <div>
                <h1 className='font-bold text-2xl'>10k+</h1>
                <p className='font-lexend font-normal opacity-60 leading-[1.5625rem] text-xs'>Companies</p>
                </div>
                <div>
                <h1 className='font-bold text-2xl'>314</h1>
                <p className='font-lexend font-normal opacity-60 leading-[1.5625rem] text-xs'>Templates</p>
                </div>
                <div>
                <h1 className='font-bold text-2xl'>12M+</h1>
                <p className='font-lexend font-normal opacity-60 leading-[1.5625rem] text-xs'>Queries</p>
                </div>
            </div>
        </div>
    </div>
  )
}
