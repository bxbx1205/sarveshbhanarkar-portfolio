import React, { useState } from 'react';

const Navbar = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const resumePath = "/Sarvesh_Bhanarkar_Resume.pdf";

  
  const openResumeModal = () => {
    setIsResumeOpen(true);
  };

  const closeResumeModal = () => {
    setIsResumeOpen(false);
  };
  
  return (
    <>
      <nav className="bg-black w-full px-4 py-3 md:px-6 md:py-4 border-b border-green-400">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-green-400 text-lg md:text-2xl font-bold font-mono">
              Sarvesh Bhanarkar
            </h1>
            <p className="text-gray-400 text-xs md:text-base font-mono">
              Student/Developer
            </p>
          </div>
          
          <div>
            <button 
              onClick={openResumeModal}
              className="font-mono px-3 py-2 md:px-4 md:py-2 text-sm md:text-base bg-black text-green-400 border border-green-400 rounded hover:bg-green-400 hover:text-black transition-colors duration-300 flex items-center"
            >
              <span className="mr-1">Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      
      {isResumeOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg w-full max-w-4xl h-[90vh] flex flex-col relative">
            <div className="flex justify-between items-center p-4 border-b border-green-400">
              <h2 className="text-green-400 font-mono text-xl">Resume</h2>
              <button 
                onClick={closeResumeModal}
                className="text-green-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src={`${resumePath}#view=FitH`}
                title="Resume"
                className="w-full h-full"
              />
            </div>
            <div className="p-4 border-t border-green-400 flex justify-between">
              <span className="text-gray-400 font-mono text-sm">Viewing: Sarvesh Bhanarkar Resume</span>
              <a 
                href={resumePath} 
                download
                className="text-green-400 hover:text-white font-mono text-sm flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;