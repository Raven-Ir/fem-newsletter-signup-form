import React from 'react';
import SignUp from './components/SignUp';
import Success from './components/Success'
import { useState } from 'react';

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [emailEntered, setEmailEntered] = useState('');
  
  const signedUp = (signed, email) => {
    setIsSignedUp(signed);
    setEmailEntered(email);
  }

  return (
    <div className='grid grid-cols-1 items-center h-screen w-full'>

      <div className='flex flex-col items-center'>
        {isSignedUp ? <Success email = { emailEntered }/> : <SignUp signedUp={ signedUp }/>}
        <div className='p-2 text-white'>
         Challenge by <a className='hover:text-[#ff6257]' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
         Coded by <a className='hover:text-[#ff6257]' href="https://github.com/Raven-Ir">Eirini Tipidou</a>.
        </div>
      </div>

    </div>
  );
}

export default App;
