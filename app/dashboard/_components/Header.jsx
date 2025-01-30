"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const { isSignedIn } = useUser(); // Check user authentication state
  const router = useRouter(); // Next.js router instance

  return (
    <div className="flex p-4 items-center justify-between shadow-2xl rounded-full bg-secondary">
      <img src={"/logo1.png"} width={150} height={120} alt="Logo" />

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6">
        <li
          onClick={() => router.push("/dashboard")}
          className="hover:text-primary hover:font-bold transition-all cursor-pointer"
        >
          Dashboard
        </li>
        <li
          onClick={() => router.push("/quetions")}
          className="hover:text-primary hover:font-bold transition-all cursor-pointer"
        >
          Questions
        </li>
        <li
          onClick={() => router.push("/upgrade")}
          className="hover:text-primary hover:font-bold transition-all cursor-pointer"
        >
          Upgrade
        </li>
        <li
          onClick={() => router.push("/how")}
          className="hover:text-primary hover:font-bold transition-all cursor-pointer"
        >
          How it Works
        </li>
      </ul>

      {/* Conditional Rendering for Auth Buttons or User Button */}
      <div className="flex gap-3">
        {isSignedIn ? (
          <UserButton />
        ) : (
          <>
            {/* Sign In Button */}
            <button
              className="bg-primary text-white px-4 py-2 rounded-full hover:shadow-lg transition-all"
              onClick={() => router.push("/dashboard")} // Navigate to dashboard on sign in
            >
              Sign In
            </button>
            {/* Sign Up Button */}
            <button
              className="bg-primary text-white px-4 py-2 rounded-full hover:shadow-lg transition-all"
              onClick={() => router.push("/dashboard")} // Navigate to dashboard on sign up
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
