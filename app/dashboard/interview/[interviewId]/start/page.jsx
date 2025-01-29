"use client";

import QuetionsSection from '@/app/dashboard/interview/[interviewId]/start/_component/QuetionsSection';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import RecordAnswereSection from './_component/RecordAnswereSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

function StartInterview({params}) {

    const [interviewData,setInterviewData]=useState();
    const[mockInterviewQuetion,setMockInterviewQuetion]=useState();
    const [activeQuetionIndex,setActiveQuetionIndex]=useState(0);
    useEffect(()=>{
        GetInterviewdetails();
    },[]); 

    const GetInterviewdetails = async () => {
            const result = await db.select().from(MockInterview)
                .where(eq(MockInterview.mockId, params.interviewId));
            const jsonMockResp=JSON.parse(result[0].jsonMockResp);
            console.log(jsonMockResp)
            setMockInterviewQuetion(jsonMockResp);
            setInterviewData(result[0]);
        };

  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* Quetions  */}
            <QuetionsSection 
            mockInterviewQuetion={mockInterviewQuetion}
            activeQuetionIndex={activeQuetionIndex}
            />
            {/* Video and audio Component */}
            <RecordAnswereSection mockInterviewQuetion={mockInterviewQuetion} activeQuetionIndex={activeQuetionIndex} interviewData={interviewData}/>
        </div>
        <div className='flex justify-start gap-5'>
            {activeQuetionIndex>0 && 
            <Button onClick={()=>setActiveQuetionIndex(activeQuetionIndex-1)} > <ArrowBigLeft/> Previous Quetion</Button>}
            {activeQuetionIndex!=mockInterviewQuetion?.length-1 && 
            <Button onClick={()=>setActiveQuetionIndex(activeQuetionIndex+1)}>Next Quetion <ArrowBigRight/> </Button>}
            {activeQuetionIndex==mockInterviewQuetion?.length-1 && 
            <Link href={'/dashboard/interview/'+interviewData?.mockId+"/feedback"}>
                <Button>End Interview</Button>
            </Link>
}
        </div>
    </div>
  )
}

export default StartInterview