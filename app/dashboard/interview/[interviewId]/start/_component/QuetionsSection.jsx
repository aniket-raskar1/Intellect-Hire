
import { Lightbulb } from 'lucide-react';
import React from 'react';

function QuestionsSection({ mockInterviewQuetion ,activeQuetionIndex}) {
  return mockInterviewQuetion&&(
    <div className="p-5 border rounded-lg my-10">
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5'>
        {mockInterviewQuetion &&
          mockInterviewQuetion.map((question, index) => (
            <h2 className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer ${activeQuetionIndex==index &&'bg-violet-600 text-white'}`}>Quetions #{index+1}</h2>
          ))}
      </div>
      <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuetion[activeQuetionIndex]?.question}</h2>
      <div className='border rounded-lg p-5 bg-blue-200 mt-20'>
        <h2 className='flex gap-2 items-center'>
          <Lightbulb/>
          <strong>Note:</strong>
        </h2>
        <h2 className='text-sm my-2'>{process.env.NEXT_PUBLIC_QUETION_NOTE}</h2>
      </div>
    </div>
  );
}

export default QuestionsSection;
