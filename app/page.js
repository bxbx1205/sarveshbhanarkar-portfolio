"use client";

import React from "react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import Terminal from "./components/Terminal";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col lg:flex-row relative">
      
        <div className="w-full lg:hidden px-3 py-2 mb-2">
          <div className="h-[30vh] sm:h-[35vh] md:h-[40vh] overflow-hidden">
            <Terminal />
          </div>
        </div>

   
        <div className="lg:hidden w-full h-px bg-green-400 mb-4"></div>

     
        <div className="w-full lg:w-[40%] flex-shrink-0 py-2">
          <div className="w-full h-full flex items-center justify-center lg:justify-start px-3 sm:px-4 md:px-6">
            <div className="w-[90%] max-w-[320px] sm:max-w-[280px] lg:ml-[15%] xl:ml-[20%]">
              <ProfileCard
                name="Sarvesh Bhanarkar"
                title="Student/Developer"
                handle="sarveshbhanarkar"
                status="AFK"
                contactText="IDK"
                avatarUrl="/avatar.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
              />
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block absolute top-0 bottom-0 left-[40%] w-px bg-green-400"></div>
        
    
        <div className="hidden lg:block lg:w-[60%] p-3 sm:p-4 md:p-6">
          <div className="w-full h-full overflow-hidden">
            <Terminal />
          </div>
        </div>
      </main>

      <Footer className="mt-auto" />
      <SpeedInsights/>
    </div>
    
  );
}