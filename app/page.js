import React from "react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import Terminal from "./components/Terminal";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      {/* Main content container */}
      <main className="flex-1 flex p-8 relative">
        <div className="w-2/5 flex items-center justify-center">
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
        
        {/* Green vertical line at 40% from left */}
        <div className="absolute top-0 bottom-0 w-px bg-green-400" style={{ left: '40%' }}></div>
        
        {/* Right section - Terminal */}
        <div className="flex-1 pl-8">
          <Terminal />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-green-400 p-4">
        <div className="flex justify-between items-center font-mono text-sm">
          <div className="text-green-400">bxbx1205@portfolio:~$</div>
          <div className="text-green-400">2025-08-06 18:28:55</div>
        </div>
      </footer>
    </div>
  );
}