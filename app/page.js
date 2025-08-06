import React from "react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      {/* Main content container - left section centered */}
      <main className="flex-1 flex p-8 relative">
        <div className="w-2/5 flex items-center justify-center">
          <ProfileCard
            name="Sarvesh Bhanarkar"
            title="Student/Developer"
            handle="sarveshbhanarkar"
            status="AFK"
            contactText="IDK" // this will be ignored/unused
            avatarUrl="/avatar.png" // ✅ fixed path
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
          />
        </div>
        
        {/* Green vertical line at 40% from left */}
        <div className="absolute top-0 bottom-0 w-px bg-green-400" style={{ left: '40%' }}></div>
        
        {/* Right section */}
        <div className="flex-1"></div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}