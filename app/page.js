"use client";

import React from "react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import Terminal from "./components/Terminal";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Navbar stays at top for all screen sizes */}
      <Navbar />

      {/* Main content container */}
      <main className="flex-1 flex flex-col lg:flex-row p-4 md:p-6 relative">
        {/* Terminal on top for mobile, on right for desktop */}
        <div className="w-full lg:hidden mb-6">
          <div className="h-[60vh] md:h-[50vh] overflow-hidden">
            <Terminal />
          </div>
        </div>

        {/* Green horizontal line for mobile - between terminal and card */}
        <div className="lg:hidden w-full h-px bg-green-400 mb-6"></div>

        {/* ProfileCard - full width on mobile, 40% on desktop */}
        <div className="w-full lg:w-2/5 flex items-center justify-center">
          <div className="w-full max-w-[280px] mx-auto">
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
        
        {/* Green vertical line at 40% from left - only visible on desktop */}
        <div className="hidden lg:block absolute top-0 bottom-0 w-px bg-green-400" style={{ left: '40%' }}></div>
        
        {/* Terminal - hidden on mobile (shown above), visible on desktop right */}
        <div className="hidden lg:flex lg:flex-1 pl-6">
          <div className="w-full h-full overflow-hidden">
            <Terminal />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}