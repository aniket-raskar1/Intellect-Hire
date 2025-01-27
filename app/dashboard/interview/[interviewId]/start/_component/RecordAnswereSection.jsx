"use client"

import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { ChatSession } from '@/utils/GeminiAIModal'
import { UserAnser } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { Mic } from 'lucide-react'
import moment from 'moment'
import { flightRouterStateSchema } from 'next/dist/server/app-render/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import useSpeechToText from 'react-hook-speech-to-text'
import Webcam from 'react-webcam'
import { toast } from 'sonner'

function RecordAnswereSection({mockInterviewQuetion , activeQuetionIndex, interviewData}) {

  const [userAnswere, setUserAnswere] = useState('');
  const {user} = useUser();
  const [loading,setLoading]=useState(false);

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });
  
  useEffect(() => {
    results.forEach((result) => {
      setUserAnswere((prevAns) => prevAns + (result?.transcript || ''));
    });
  }, [results]);

  useEffect(()=>{
    if(!isRecording && userAnswere.length>10)
    {
      UpdateUserAnswer();
    }

  },[userAnswere])

  const StartStopRecording=async()=>{
    if(isRecording){
      
      stopSpeechToText()
    }
    else{
      startSpeechToText();
    }
  }

  const UpdateUserAnswer=async()=>{

    console.log(userAnswere)
    setLoading(true)
    const feedbackPrompt="Quetion"+mockInterviewQuetion[activeQuetionIndex]?.question+",User Anwere"+userAnswere+"Depends on quetion and user answere for the given interview quetion "+"please give us rating for answere and feedback of area of imporvement if any"+
      "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field"
      
      const result= await ChatSession.sendMessage(feedbackPrompt);

      const mockJsonResp = (result.response.text()).replace('```json','').replace('```','');

      console.log(mockJsonResp)

      const jsonFeedBackResp=JSON.parse(mockJsonResp);

      const resp =await db.insert(UserAnser).values(
        {
          mockIdRef:interviewData?.mockId,
          quetion:mockInterviewQuetion[activeQuetionIndex]?.question,
          correctAns:mockInterviewQuetion[activeQuetionIndex]?.mockJsonResp,
          userAns:userAnswere,
          feedback:jsonFeedBackResp?.feedback,
          rating:jsonFeedBackResp?.rating,
          userEmail:user?.primaryEmailAddress?.emailAddress,
          createdAt:moment().format('DD-MM-yyyy'),
        })
        if(resp)
        {
          toast('User Answer Recorded Successfully')
          setUserAnswere('');
          setResults([]);
        }
        setResults([]);
        setLoading(false);
  }
  
  return (
    <div className='flex items-center justify-center flex-col'>
        <div className='flex flex-col justify-center items-center gap-10 rounded-lg p-5 mt-20'>
          <Image src={'/webcam.png'} width={200} height={200} className='absolute'/>
          <Webcam 
          mirrored={true}
          style={{
            height:300,
            width:'100%',
            zIndex:10,
          }}
          />
        </div>
        <Button className="my-10" onClick={StartStopRecording}>
          {isRecording ? (
            <h2 className='text-red-500 flex gap-2'>
              <Mic /> Stop Recording
            </h2>
          ) : (
            'Record Answer'
          )}
        </Button>
        

        
    </div>
  )
}

export default RecordAnswereSection