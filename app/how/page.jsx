import React from 'react'
import Header from '../dashboard/_components/Header'

function page() {
  return (
    <div>
        <Header/>
        <div className="mt-20 bg-white flex flex-col items-center justify-center">
          <div className='text-3xl font-extrabold '>
            How It Works
          </div>
      <div className="max-w-3xl mt-36 text-center shadow-lg rounded-2xl p-10 border hover:shadow-blue-500/100 hover:border-pink-500">
        {/* <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          How It Works
        </h1> */}
        <p className="text-lg text-gray-600 mb-6">
          Follow these simple steps to get the best interview preparation experience:
        </p>
        <div className="bg-gray-100 p-6 rounded-xl shadow-md text-left">
          <ul className="text-gray-700 space-y-3">
            <li><span className="font-semibold text-gray-800">Step 1:</span> Enter your <b>Job Position</b>, <b>Description</b>, and <b>Experience Level</b>.</li>
            <li><span className="font-semibold text-gray-800">Step 2:</span> Answer <b>5 AI-Generated Interview Questions</b> (Voice Recording Enabled!).</li>
            <li><span className="font-semibold text-gray-800">Step 3:</span> Get an <b>Instant Rating</b>, <b>Correct Answers</b>, and <b>Personalized Feedback</b>.</li>
            <li><span className="font-semibold text-gray-800">Step 4:</span> Improve & Repeat – Become Interview-Ready in No Time!</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page