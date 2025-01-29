import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({interview}) {
  const router = useRouter();
  const onSave=()=>{
    router.push('/dashboard/interview/'+interview.mockId);
  }
  const onFeedbackPress=()=>{
    router.push('/dashboard/interview/'+interview.mockId+'/feedback')
  }
  return (
    <div className='border shadow-sm rounded-md p-3 hover:border-primary hover:scale-105'>
      <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
      <h2 className='text-sm text-gray-500'>{interview.jobExperience} Years of Experience</h2>
      <h2 className='text-sm text-gray-400'>Created At {interview.createdAt}</h2>
      <div className='flex justify-between mt-2 gap-5'>
        <Button variant="outline" onClick={onFeedbackPress}>Feedback</Button>
        <Button onClick={onSave}>Start</Button>

      </div>
    </div>
  )
}

export default InterviewItemCard