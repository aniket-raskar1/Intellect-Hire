import React from 'react'
import Header from '../dashboard/_components/Header'
import { KeyIcon, KeyRound ,Brain, Swords, Bot } from 'lucide-react'

function Quetions() {
  return (
    <div>
        <Header/>
        <div >
          <h1 className='font-extrabold flex justify-center mt-20 lg:text-4xl text-gray-900 leading-none'> Master Every Question, Ace Every Interview!</h1>
          <p className='text-sm text-gray-600 mt-6 flex justify-center mx-10'>Discover how the right questions can shape your career. Whether you're preparing for a job, academic admissions, or a key project, our AI generates tailored interview scenarios just for you.</p>
          <h2 className='mt-36 text-2xl flex justify-center font-extrabold'><KeyRound className='m-3'/> Key Points</h2>
          <div className='lg:flex lg:justify-between mx-28 gap-7 sm:grid '>

            <div className='flex flex-col rounded-sm px-5 mt-8 py-10 border shadow-lg  hover:shadow-blue-600/100 hover:border-pink-500/100'>
              <h4 className='' ><Brain className='mb-2'/>Smart and Relevant Questions</h4>
              <h5 className='text-sm text-gray-600'>Receive AI-curated questions customized to your industry, role, and experience level.</h5>
            </div>

            <div className='flex flex-col rounded-sm px-5 mt-8 py-10 border shadow-lg  hover:shadow-blue-600/100 hover:border-pink-500/100'>
              <h4 className='' ><Swords className='mb-2'/> Challenge Yourself</h4>
              <h5 className='text-sm text-gray-600'>Prepare for common questions and curveballs that interviewers love to throw</h5>
            </div>

            <div className='flex flex-col rounded-sm px-5 mt-8 py-10 border shadow-lg  hover:shadow-blue-600/100 hover:border-pink-500/100'>
              <h4 className='' ><Bot className='mb-2'/>Unbiased AI Evaluation</h4>
              <h5 className='text-sm text-gray-600'>Our system listens and assesses your answers, giving you actionable feedback.</h5>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Quetions