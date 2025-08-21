"use client";

import React, { useState, useEffect, useRef } from "react";

const Terminal = () => {
  const [currentCommand, setCurrentCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [typingIndex, setTypingIndex] = useState(-1);
  const [typingProgress, setTypingProgress] = useState("");
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const typingSpeedRef = useRef(5); // Reference for typing speed to avoid re-renders

  const currentDate = "2025-08-21 13:58:18";
  const userLogin = "bxbx1205";

  // Initialize terminal with welcome message
  useEffect(() => {
    if (commandHistory.length === 0) {
      // Add welcome message to history immediately
      setCommandHistory([
        {
          command: "welcome",
          output: [
            "Hi, I'm Sarvesh Bhanarkar — Student & Developer.",
            "",
            "Welcome to my interactive AI-powered portfolio terminal!",
            "Type 'help' to see available commands."
          ],
          typing: true,
          typingComplete: false
        }
      ]);
    }
  }, []);

  // Optimized typewriter effect with better performance
  useEffect(() => {
    // Find first entry that needs typing
    const typingEntryIndex = commandHistory.findIndex(entry => entry.typing && !entry.typingComplete);
    
    if (typingEntryIndex >= 0) {
      setTypingIndex(typingEntryIndex);
      const entry = commandHistory[typingEntryIndex];
      const fullText = entry.output.join('\n');
      
      setIsTyping(true);
      setTypingProgress("");
      
      // Use a more efficient typing mechanism with requestAnimationFrame
      let charIndex = 0;
      let lastTimestamp = 0;
      
      const typeNextChar = (timestamp) => {
        if (!lastTimestamp) lastTimestamp = timestamp;
        
        // Calculate time elapsed
        const elapsed = timestamp - lastTimestamp;
        
        // Determine if we should type the next character based on elapsed time
        if (elapsed > typingSpeedRef.current) {
          if (charIndex < fullText.length) {
            setTypingProgress(prev => prev + fullText.charAt(charIndex));
            charIndex++;
            lastTimestamp = timestamp;
            
            // Vary typing speed randomly but keep it fast
            typingSpeedRef.current = Math.random() > 0.9 ? 30 : 5;
          } else {
            // Typing complete
            setCommandHistory(prev => {
              const updated = [...prev];
              updated[typingEntryIndex] = {
                ...updated[typingEntryIndex],
                typingComplete: true
              };
              return updated;
            });
            
            setIsTyping(false);
            setTypingProgress("");
            setTypingIndex(-1);
            
            // Focus input when done
            if (inputRef.current) {
              inputRef.current.focus();
            }
            return;
          }
        }
        
        // Continue animation loop
        requestAnimationFrame(typeNextChar);
      };
      
      // Start the animation loop
      requestAnimationFrame(typeNextChar);
    }
  }, [commandHistory]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => (!isTyping ? !prev : true));
    }, 530);
    return () => clearInterval(interval);
  }, [isTyping]);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [commandHistory, typingProgress]);

  useEffect(() => {
    if (inputRef.current && !isTyping) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  const commands = [
    "help",
    "about",
    "projects",
    "skills",
    "contact",
    "clear"
  ];

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output = [];

    switch (trimmedCmd) {
      case "help":
        output = [
          "AVAILABLE COMMANDS:",
          "──────────────────────────────────────────────────────────",
          "",
          "  about       → The story behind the code  ",
          "  projects    → What I've built so far",
          "  skills      → Technical expertise breakdown",
          "  contact     → Fire a message directly to me  ",
          "  clear       → Wipe the screen, start fresh  ",
          "",
          "TIP: Click on any command above to execute it"
        ];
        break;
      case "about":
        output = [
          "──────────────────────────────────────────────────────────",
          "                    SARVESH BHANARKAR",
          "──────────────────────────────────────────────────────────",
          "",
          "📍 Location:    Mumbai / Nagpur, Maharashtra",
          "🎓 Education:   Ramdeobaba University, Nagpur",
          "                Engineering in Computer Science '28",
          "",
          "💻 Role:        MERN Stack Developer",
          "🚀 Focus:       Turning ideas into fast, full-stack apps",
          "🌟 Club:        Member @TheCodeBreakers",
          "",
          "I craft code that performs well and looks good doing it.",
          "Always exploring new technologies and building useful tools."
        ];
        break;
      case "projects":
        output = [
          "──────────────────────────────────────────────────────────",
          "                    PROJECTS SHOWCASE",
          "──────────────────────────────────────────────────────────",
          "",
          "📁 profile-locker",
          "   JS app for secure profiles",
          "   https://github.com/bxbx1205/profile-locker",
          "",
          "📁 portfolio",
          "   My live portfolio (this terminal)",
          "   https://github.com/bxbx1205/portfolio",
          "",
          "📁 url-shortener",
          "   Custom URL shortening service",
          "   https://github.com/bxbx1205/url-shortener",
          "",
          "📁 passwordmanager",
          "   Encrypted local password tool",
          "   https://github.com/bxbx1205/passwordmanager",
          "",
          "📁 gitanalyser",
          "   Analyze repo metrics visually",
          "   https://github.com/bxbx1205/gitanalyser",
          "",
          "[TIP] Click on any GitHub link to view the source code"
        ];
        break;
      case "skills":
        output = [
          "──────────────────────────────────────────────────────────",
          "                  TECHNICAL EXPERTISE",
          "──────────────────────────────────────────────────────────",
          "",
          "🧩 LANGUAGES",
          "   JavaScript, TypeScript, Java, C/C++",
          "",
          "🎨 FRONTEND",
          "   React.js, Next.js, Tailwind CSS, Framer Motion",
          "",
          "⚙️ BACKEND",
          "   Node.js, Express.js, REST APIs, MERN Stack",
          "",
          "💾 DATABASES",
          "   MongoDB, MySQL",
          "",
          "🛠️ TOOLS",
          "   Git, VS Code, Postman, Linux CLI",
          "",
          "✨ UI/UX",
          "   Responsive designs, Clean layouts",
          "   Polaroid & Glassmorphism styles",
          "",
          "☁️ DEPLOYMENT",
          "   Vercel, Netlify",
          "",
          "🔧 OTHER SKILLS",
          "   Debugging, CLI scripting, Performance optimization"
        ];
        break;
      case "contact":
        output = [
          "──────────────────────────────────────────────────────────",
          "                   GET IN TOUCH",
          "──────────────────────────────────────────────────────────",
          "",
          "📧 Email:     srbhanarkar05@gmail.com",
          "",
          "🐱 GitHub:    @bxbx1205",
          "              https://github.com/bxbx1205",
          "",
          "🔗 LinkedIn:  Sarvesh Bhanarkar",
          "              https://www.linkedin.com/in/sarvesh-bhanarkar/",
          "",
          "💬 Discord:   averageboibxbx",
          "",
          "[STATUS] Currently open for collaboration",
          "[NOTE] Best way to reach me is via GitHub or LinkedIn"
        ];
        break;
      case "clear":
        setCommandHistory([]);
        setCurrentCommand("");
        return;
      default:
        output = [
          `Command not found: ${trimmedCmd}`,
          "",
          "Available commands:",
          "  help, about, projects, skills, contact, clear",
          "",
          "Type 'help' to see all available commands"
        ];
    }

    // Add command to history with typing effect
    setCommandHistory(prev => [
      ...prev, 
      { 
        command: cmd, 
        output: output,
        typing: true,
        typingComplete: false
      }
    ]);

    setCurrentCommand("");
    scrollToBottom();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isTyping) {
      if (currentCommand.trim()) {
        handleCommand(currentCommand);
      } else {
        scrollToBottom();
      }
    }
  };

  const handleCommandClick = (cmd) => {
    if (!isTyping) {
      handleCommand(cmd);
    }
  };

  // Make GitHub links clickable
  const renderOutput = (line) => {
    if (line.includes("https://github.com")) {
      const parts = line.split("https://");
      return (
        <>
          {parts[0]}
          <a 
            href={`https://${parts[1]}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-300 hover:text-green-100 hover:underline"
          >
            https://{parts[1]}
          </a>
        </>
      );
    }
    
    if (line.includes("https://www.linkedin.com")) {
      const parts = line.split("https://");
      return (
        <>
          {parts[0]}
          <a 
            href={`https://${parts[1]}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-300 hover:text-green-100 hover:underline"
          >
            https://{parts[1]}
          </a>
        </>
      );
    }

    return line;
  };

  return (
    <div className="bg-black text-green-400 font-mono text-sm h-full flex flex-col select-none relative">
      {/* Scanlines overlay effect */}
      <div className="absolute inset-0 pointer-events-none scanlines"></div>
      
      <div className="border-b border-green-500 p-2 sm:p-3 bg-gray-950 z-10">
        <div className="flex flex-wrap gap-1 text-xs" role="navigation">
          {commands.map((cmd, index) => (
            <React.Fragment key={cmd}>
              <span
                tabIndex={0}
                role="button"
                className="text-green-400 hover:text-green-300 hover:bg-green-900 px-1 py-0.5 rounded cursor-pointer transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-green-400"
                onClick={() => handleCommandClick(cmd)}
                onKeyDown={e => e.key === "Enter" && handleCommandClick(cmd)}
              >
                {cmd}
              </span>
              {index < commands.length - 1 && <span className="text-green-600"> | </span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div
        ref={terminalRef}
        className="px-3 py-2 sm:px-4 sm:py-3 overflow-y-auto cursor-text leading-relaxed z-10"
        style={{
          flexGrow: 1,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          height: "0px"
        }}
        onClick={() => !isTyping && inputRef.current?.focus()}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
            div::-webkit-scrollbar {
              display: none;
            }
            body {
              background: #000;
            }
            .terminal-text {
              text-shadow: 0 0 8px rgba(0, 255, 0, 0.4);
              letter-spacing: 0.5px;
            }
            .terminal-header {
              text-shadow: 0 0 12px rgba(0, 255, 0, 0.6);
            }
            @keyframes flicker {
              0% { opacity: 1; }
              3% { opacity: 0.8; }
              6% { opacity: 1; }
              7% { opacity: 0.6; }
              8% { opacity: 1; }
              9% { opacity: 0.8; }
              10% { opacity: 1; }
              30% { opacity: 1; }
              31% { opacity: 0.6; }
              32% { opacity: 1; }
              98% { opacity: 1; }
              99% { opacity: 0.8; }
              100% { opacity: 1; }
            }
            .flicker {
              animation: flicker 15s infinite step-start;
            }
            @keyframes scanlines {
              0% { background-position: 0 0; }
              100% { background-position: 0 100%; }
            }
            .scanlines {
              background: linear-gradient(
                to bottom,
                rgba(18, 16, 16, 0) 50%,
                rgba(0, 0, 0, 0.25) 50%
              );
              background-size: 100% 4px;
              z-index: 2;
              pointer-events: none;
              opacity: 0.15;
              animation: scanlines 8s linear infinite;
            }
            .command-enter {
              animation: fadeIn 0.3s ease-in;
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .command-line {
              margin-bottom: 8px;
              padding: 4px 0;
            }
            .welcome-message {
              border-bottom: 1px dotted rgba(0, 255, 0, 0.2);
              margin-bottom: 16px;
              padding-bottom: 12px;
            }
            .cursor-block {
              display: inline-block;
              width: 10px;
              height: 17px;
              margin-left: 1px;
              vertical-align: middle;
              background-color: #00ff00;
              box-shadow: 0 0 8px rgba(0, 255, 0, 0.8);
            }
            .typing-active {
              color: #4eff4e;
            }
            
            /* Mobile optimizations */
            @media (max-width: 640px) {
              .command-line {
                margin-bottom: 4px;
              }
              .welcome-message {
                margin-bottom: 8px;
                padding-bottom: 8px;
              }
              .terminal-text {
                font-size: 0.875rem;
              }
            }
          `
        }} />
        
        {commandHistory.map((entry, index) => (
          <div 
            key={index} 
            className={`command-line command-enter ${index === 0 && entry.command === "welcome" ? "welcome-message" : ""}`}
          >
            <div className="flex items-center">
              <span className="text-green-300 terminal-header">{userLogin}@portfolio:~$ </span>
              <span className="text-green-200 terminal-text">{entry.command}</span>
            </div>
            
            {/* For entries that are currently being typed */}
            {typingIndex === index && (
              <div className="pl-3 whitespace-pre-line terminal-text typing-active">
                {typingProgress}
              </div>
            )}
            
            {/* For entries that have completed typing */}
            {(typingIndex !== index || entry.typingComplete) && entry.output.map((line, lineIndex) => (
              <div 
                key={lineIndex} 
                className={`text-green-400 leading-relaxed terminal-text pl-3 ${!entry.typingComplete ? 'opacity-0' : ''}`}
              >
                {renderOutput(line)}
              </div>
            ))}
          </div>
        ))}
        
        {!isTyping && (
          <div className="flex items-center command-enter">
            <span className="text-green-300 terminal-header">{userLogin}@portfolio:~$ </span>
            <div className="relative flex-grow flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={currentCommand}
                onChange={e => setCurrentCommand(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-transparent text-green-200 outline-none border-none w-full font-mono caret-transparent terminal-text"
                autoFocus
                spellCheck={false}
                aria-label="Terminal input"
              />
              {showCursor && (
                <span className="cursor-block absolute" style={{ 
                  left: `${currentCommand.length * 8.4}px` 
                }}></span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;