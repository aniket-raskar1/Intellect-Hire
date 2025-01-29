import React from 'react';
import Header from '../dashboard/_components/Header';
import { CheckCheck, Crown } from 'lucide-react';

function Upgrade() {
  return (
    <div>
      <Header />
      
      {/* Main Title */}
      <div className='mt-20 '>
        <h1 className='font-extrabold text-3xl lg:text-4xl text-gray-900 text-center leading-none'>
          Level Up Your Interview Game Today!
        </h1>
        <p className='text-sm text-gray-600 mt-6 text-center mx-4 sm:mx-10'>
          Unlock premium features and personalized insights designed to fast-track your success.
        </p>
      </div>
      
      {/* Premium Benefits Section */}

      <div className='flex flex-col justify-center items-center mt-20 gap-3 '>
        <h2 className=' text-xl font-bold'> <Crown  className='mx-2'/> Premium Features</h2>
        <div>
          <h3 className='text-gray-600 flex flex-row gap-2'><CheckCheck />Unlimited Interview Simulations</h3>
        </div>
        <div>
          <h3 className='text-gray-600 flex flex-row gap-2'><CheckCheck />AI-Powered Insights</h3>
        </div>
        <div>
          <h3 className='text-gray-600 flex flex-row gap-2'><CheckCheck />Real-Time Rating</h3>
        </div>
        <div>
          <h3 className='text-gray-600 flex flex-row gap-2'><CheckCheck />Industry-Specific Questions</h3>
        </div>
        <div>
          <h3 className='text-gray-600 flex flex-row gap-2'><CheckCheck />No Hidden Fees</h3>
        </div>

      </div>
      
      
    </div>
  );
}

export default Upgrade;
