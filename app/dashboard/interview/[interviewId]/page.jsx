"use client";

import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';

function Interview({ params }) {
    const [interviewData, setInterviewData] = useState();
    const [webCampEnable, setWebCamEnabled] = useState(false);

    useEffect(() => {
        console.log(params.interviewId);
        GetInterviewdetails();
    }, []);

    const GetInterviewdetails = async () => {
        const result = await db.select().from(MockInterview)
            .where(eq(MockInterview.mockId, params.interviewId));
        setInterviewData(result[0]);
    };

    return (
        <div className='my-10  '>
            <h2 className='font-bold text-2xl'>Let's Get Started</h2>
            <div className='grid gird-cols-1 md:grid-cols-2 gap-10'>
                <div className='flex flex-col my-5 gap-5 '>
                    <div className='flex flex-col p-5  rounded-lg border gap-5'>
                        <h2 className='text-lg'>Job Position :{interviewData?.jobPosition}</h2>
                        <h2 className='text-lg'>Job Description :{interviewData?.jobDesc}</h2>
                        <h2 className='text-lg'>Job Experience :{interviewData?.jobExperience}</h2>
                    </div>
                    <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
                        <h2 className='flex gap-2 items-center text-yellow-300'><Lightbulb/><strong>Information</strong></h2>
                        <p className='my-3'>Enable Your Webcamp and Microphone to Start your AI Generated Mock Interview It has 5 quetions which you can answere and at last you will get the report on the basis of your answere NOTE: We never Record Your video , You can disable your web camp access at any time  </p>
                    </div>
                </div>
                <div>
                {webCampEnable ? (
                    <Webcam
                        onUserMedia={() => setWebCamEnabled(true)}
                        onUserMediaError={() => setWebCamEnabled(false)}
                        mirrored={true}
                        style={{
                            height: 300,
                            width: 300
                        }}
                    />
                ) : (
                    <>
                        <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-md border" />
                        <Button onClick={() => setWebCamEnabled(true)} className='w-full mt-2 hover:scale-105'>Enable Webcamp and Microphone</Button>
                    </>
                )}
            </div>
            </div>
            <div className='flex justify-end items-end'>
                <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
                    <Button>Start Interview</Button>
                </Link>
            </div>


            
        </div>
    );
}

export default Interview;
