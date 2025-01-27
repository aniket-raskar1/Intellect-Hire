"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { v4 as uuidv4 } from 'uuid';
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { MockInterview } from "@/utils/schema";
import { useRouter } from "next/navigation";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const { user } = useUser(); // Corrected access to user
  const router =useRouter();
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperience);

    
    const InputPrompt = 
    'Job position: ' + jobPosition + ', Job Description: ' + jobDesc + ', Years of Experience: ' + jobExperience + '. Based on the job position, job description, and years of experience, provide 5 interview questions along with their answers in JSON format. The JSON should only contain "question" and "answer" fields for each entry.';
  

    const result = await ChatSession.sendMessage(InputPrompt);
    const rawJsonResp = result.response.text();

    // Clean up the response by removing unwanted characters
    const cleanedJsonResp = rawJsonResp
      .replace(/```json/g, '')  // Remove "```json" from the start
      .replace(/```/g, '')      // Remove "```" from the end
      .trim();                 // Trim any leading or trailing whitespace

    console.log("Cleaned JSON Response:", cleanedJsonResp);

    try {
      const parsedResponse = JSON.parse(cleanedJsonResp);  // Try parsing the cleaned response
      console.log("Parsed JSON Response:", parsedResponse);
      setJsonResponse(parsedResponse);

      if (parsedResponse) {
        const resp = await db.insert(MockInterview).values({
          mockId: uuidv4(),
          jsonMockResp: cleanedJsonResp,
          jobPosition,
          jobDesc,
          jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress || "Unknown User", // Ensure fallback for user email
          createdAt: moment().format("DD-MM-YYYY"),  // Properly format the date
        }).returning({ mockId: MockInterview.mockId });
        
        console.log("Inserted Id:", resp);
        if(resp){
            setOpenDialog(false);
            router.push('/dashboard/interview/'+resp[0]?.mockId)
        }
      } else {
        console.error("Error: Empty JSON response");
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }

    setLoading(false);
  };

  return (
    <div>
      <div
        className="p-10 border rounded-lg hover:scale-105 hover:shadow-lg cursor-pointer transition-all bg-secondary"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-3xl text-center">+</h2>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Tell us more about your Job interview</DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2 className="text-gray-500">
                    Add details about job position, work experience, and years of experience
                  </h2>
                  <div className="mt-7 my-3">
                    <label>Job Role/Position</label>
                    <Input
                      placeholder="Ex: Full stack Developer"
                      required
                      onChange={(event) => setJobPosition(event.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label>Job Description </label>
                    <Textarea
                      placeholder="Ex: React, Angular, NextJs"
                      required
                      onChange={(event) => setJobDesc(event.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label>Years Of Experience </label>
                    <Input
                      type="number"
                      placeholder="2"
                      min="0"
                      max="60"
                      required
                      onChange={(event) => setJobExperience(event.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-end rounded-md gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" /> Generating
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
