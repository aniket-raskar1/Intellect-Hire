import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { AtomIcon, Edit, Instagram, Linkedin, Share2, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      
        <Image src={'/grid.svg'} className="absolute z-[-10] w-full cursor-pointer" 
        width={1200} height={300} />
      
      <Header/>
     <section className=" z-50">
      <div>
      <h4 className="flex justify-center items-center mt-10 text-red-600 text-bold ">Beta Phase: Test Now and Be Part of the Innovation!</h4>

      </div>
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Your Personal AI Interview Coach</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Double your chances of landing that job offer

with our AI-powered interview prep</p>
        <div className="flex flex-col mb-8 mt-20 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get Started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>


          {/* Youtube Link Below  */}

            <a href="" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Watch video
            </a>  
            
        </div>
        <div>
          <h3 className="text-md text-gray-500">YouTube video will be available soon.</h3>
        </div>
        
    </div>
</section>
<section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
<h2 className="font-bold text-3xl">How it Works?</h2>
<h2 className="text-md text-gray-500">Give mock interview in just 3 simplar easy step</h2>

<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="block rounded-xl border bg-white
         border-gray-200 p-8 shadow-xl transition
         hover:border-pink-500/100 hover:shadow-blue-600/100"
        href="#"
      >
       <AtomIcon className='h-8 w-8'/>

        <h2 className="mt-4 text-xl font-bold text-black">Write promot for your form</h2>

        <p className="mt-1 text-sm text-gray-600">
        Tell us about your dream job! Simply input your job position, experience level, and skills, and we’ll generate customized interview questions tailored just for you.
        </p>
      </a>

      <a
        className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/100 hover:shadow-blue-600/100"
        href="#"
      >
      <Edit className='h-8 w-8'/>

        <h2 className="mt-4 text-xl font-bold text-black">Edit Your form </h2>

        <p className="mt-1 text-sm text-gray-600">
        Fine-tune the details! Whether it's technical or non-technical fields, you have complete control to modify your form for the perfect fit. Add your personal touch to create the most realistic interview experience.
        </p>
      </a>

      <a
        className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/100 hover:shadow-blue-500/100"
        href="#"
      >
      <Share2 className='h-8 w-8' />

        <h2 className="mt-4 text-xl font-bold text-black">Share & Start Accepting Responses</h2>

        <p className="mt-1 text-sm text-gray-600">
        Complete your mock interview and receive a detailed rating out of 5 and personalized feedback on areas to improve. Share your progress with others and get ready to ace any interview confidently!
        </p>
      </a>

    
    </div>

    <div className="mt-12 text-center">
      <a
        href="/sign-in"
        className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Get Started Today
      </a>
    </div>
    </section>
    <h1 className="flex justify-center text-3xl font-extrabold mt-10 ">Lets Connect!</h1>
    <h2 className="flex justify-center text-md text-gray-600">follow Me on Socials</h2>
    <div className="flex justify-center text-2xl font-bold text-gray-600 mt-10 mb-20">

    <a href="https://www.instagram.com/a.n.i.k.e.t_099/" target="_blank" rel="noopener noreferrer">
        <Instagram size={30}  className=" mx-4 hover:scale-105" />
    </a>

    <a href="https://x.com/partic1e0" target="_blank" rel="noopener noreferrer">
      <TwitterIcon className="mx-4 hover:scale-105" size={30}/>
    </a>

    <a href="www.linkedin.com/in/aniket-raskar-86a26b296" target="_blank" rel="noopener noreferrer">
      <Linkedin className="mx-4 hover:scale-105" size={30}/>
    </a>

    </div>
  </div>
 

  );
}