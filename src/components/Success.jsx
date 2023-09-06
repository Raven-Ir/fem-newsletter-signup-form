import React from 'react'
import { ReactComponent as IconList } from '../assets/images/icon-list.svg'
import SignUp from './SignUp'
import App from '../App'


const Success = ({ email }) => {

  const handleClick = () => {
    
  }

  return (
    <>
      <div className="">
        <div className="flex w-[350px] h-[370px] bg-white p-2 rounded-3xl">
          <div className='m-6 bg-inherit'>
            <IconList width={46} height={46} className='bg-transparent mb-6'/>
            <p className='text-4xl text-[#242742] bg-transparent font-bold'>Thanks for subscribing!</p>
            <p className='text-[#242742] text-sm mt-4 mb-2 bg-white'>
              A confirmation email has been sent to <span className='font-bold bg-transparent text-[#36384e]'> { email } </span> . 
              Please open it and click the button inside to confirm your subscription.
            </p>   
          
            <button 
             className='w-[284px] h-12 rounded-lg bg-[#242742] text-white hover:bg-gradient-to-r from-[#ff577b] to-[#ff7300] mt-4'
             onClick={handleClick}
            > 
             Dismiss Message</button>
          </div>
         </div>
      </div>
    </>
  )
}

export default Success