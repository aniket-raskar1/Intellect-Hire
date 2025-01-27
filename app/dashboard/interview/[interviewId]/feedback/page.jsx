"use client"
import { db } from '@/utils/db'
import { UserAnser } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { ChevronsUpDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
  



function Feedback({params}) {

    const [feedbackList , setFeedbackList]= useState([]);
    const router=useRouter();
    const [averageRating , setAverageRating] = useState(0);

    

    useEffect(()=>{
        GetFeedback();
    },[])

    const GetFeedback=async()=>{
        const result = await db.select()
        .from(UserAnser)
        .where(eq(UserAnser.mockIdRef,params.interviewId))
        .orderBy(UserAnser.id)

        console.log(result);
        setFeedbackList(result);

        if(result.length >0){
            const totalRating = result.reduce((acc , item) => acc + parseInt(item.rating),0);
            const avgRating = totalRating /result.length;
            setAverageRating(avgRating.toFixed(1));
        }
    }
  return (
    <div className='p-10'>

        {feedbackList?.length==0?
            <h2 className='font-bold text-2xl text-gray-600'>No Interview Reord found </h2>
            :
        <>
            <h2 className='text-3xl font-bold text-green-500'>Congradulation !</h2>
            <h2 className='font bold text-2xl'>Here is Your Interview Feedback</h2>
            <h2 className='text-primary text-lg my-3'>Your Overall Rating : <strong>{averageRating}/5</strong></h2>
            <h2 className='text-sm text-gray-500'>Find Below Interview quetion with correct answere, Your answere and feedback for improvement</h2>
            {feedbackList && feedbackList.map((item,index)=>(
                <Collapsible key={index}>
                <CollapsibleTrigger className='p-2 bg-secondary rounded-lg my-2 text-left flex justify-between border mt-10'>{item.quetion}<ChevronsUpDownIcon/> </CollapsibleTrigger>
                <CollapsibleContent>
                <div>
                    <h2 className='border my-2 p-2 rounded-lg'>
                        <strong> Rating :</strong> {item.rating}
                    </h2>
                    <h2 className='border my-2 p-2 rounded-lg bg-blue-50'>
                        <strong>Your Answere :</strong>{item.userAns}
                    </h2>
                    <h2 className='border my-2 p-2 rounded-lg bg-green-50'>
                        <strong>Correct Answere :</strong>{item.correctAns}
                    </h2>
                    <h2 className='border my-2 p-2 rounded-lg bg-blue-50'>
                        <strong>Feedback :</strong>{item.feedback}
                    </h2>
                    

                </div>
                </CollapsibleContent>
            </Collapsible>
        ))}
        </>
    }
        <Button  onClick={()=>router.replace('/dashboard')} className='mt-5'>Go Home</Button>
    </div>
  )
}

export default Feedback