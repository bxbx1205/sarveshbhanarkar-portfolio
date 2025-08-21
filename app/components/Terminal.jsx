"use client";

import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Initialize with welcome message
  useEffect(() => {
    const welcomeText = `bxbx@portfolio:~$ welcome
Hi, I'm Sarvesh Bhanarkar, a Student & Developer.

Welcome to my interactive 'AI powered' portfolio terminal!
Type 'help' to see available commands.`;
    
    typeText(welcomeText, () => {
      setCommandHistory([{
        command: 'welcome',
        output: [
          "Hi, I'm Sarvesh Bhanarkar, a Student & Developer.",
          "",
          "Welcome to my interactive 'AI powered' portfolio terminal!",
          "Type 'help' to see available commands."
        ]
      }]);
      setDisplayedText('');
    });
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTyping) {
        setShowCursor(prev => !prev);
      } else {
        setShowCursor(true);
      }
    }, 530);
    return () => clearInterval(interval);
  }, [isTyping]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory, displayedText]);

  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current && !isTyping) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  const commands = [
    'help', 'about', 'projects', 'skills', 'experience', 
    'contact', 'education', 'clear'
  ];

  const typeText = (text, callback, speed = 35) => {
    setIsTyping(true);
    setShowCursor(true);
    setDisplayedText('');
    let i = 0;
    
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        if (callback) callback();
      }
    }, speed);
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output = [];

    switch (trimmedCmd) {
      case 'help':
        output = [
          '',
          'COMMAND         DESCRIPTION',
          '──────────────────────────────────────',
          'help            Show this help message',
          'about           About Sarvesh Bhanarkar',
          'projects        View my projects',
          'skills          Technical skills',
          'experience      Work experience',
          'contact         Contact information',
          'education       Educational background',
          'clear           Clear terminal screen',
          '',
          'TIP: Click commands above to execute them',
          ''
        ];
        break;
      case 'about':
        output = [
          '',
          '👨‍💻 Student & Developer',
          '🎯 Passionate about technology',
          '🚀 Building innovative projects',
          '📍 Location: India',
          '💼 Status: AFK (Away From Keyboard)',
          '',
          '"Code is poetry written in logic"',
          'Always excited to learn and collaborate!',
          ''
        ];
        break;
      case 'projects':
        output = [
          '',
          '🌐 Interactive Portfolio Terminal',
          '🎨 3D Profile Card Component',
          '⚛️  React & Next.js Applications',
          '🤖 AI-powered tools',
          '📱 Responsive web applications',
          '',
          '[STATUS] More exciting projects in development...',
          '[TIP] Visit my GitHub for source code',
          ''
        ];
        break;
      case 'skills':
        output = [
          '',
          'FRONTEND',
          '├─ React.js / Next.js      ████████',
          '├─ JavaScript / TypeScript ███████',
          '├─ HTML5 / CSS3            ████████',
          '└─ Tailwind CSS            ██████',
          '',
          'BACKEND',
          '├─ Node.js                 ██████',
          '├─ Python                  █████',
          '└─ API Development         ██████',
          '',
          'TOOLS & OTHERS',
          '├─ Git / GitHub            ████████',
          '├─ VS Code                 ████████',
          '└─ Terminal / CLI          ███████',
          '',
          '[LEARNING] AI/ML, Cloud Technologies',
          ''
        ];
        break;
      case 'contact':
        output = [
          '',
          '📧 Email: Available via GitHub',
          '🐱 GitHub: @sarveshbhanarkar',
          '👤 Username: bxbx1205',
          '💬 Status: Open for collaboration',
          '',
          '[NOTICE] Best way to reach me is through GitHub',
          '[AVAILABILITY] Currently available for projects',
          ''
        ];
        break;
      case 'experience':
        output = [
          '',
          '🎓 Student Developer',
          '   ├─ Self-taught programming',
          '   ├─ Building personal projects',
          '   └─ Learning latest technologies',
          '',
          '💼 Freelance Projects',
          '   ├─ Web development',
          '   ├─ UI/UX design',
          '   └─ Problem solving',
          '',
          '[FOCUS] Building strong foundation in full-stack development',
          ''
        ];
        break;
      case 'education':
        output = [
          '',
          '🎓 Currently Studying',
          '   ├─ Computer Science fundamentals',
          '   ├─ Software Development',
          '   └─ Modern web technologies',
          '',
          '📚 Self-Learning',
          '   ├─ Online courses & tutorials',
          '   ├─ Documentation reading',
          '   └─ Hands-on project building',
          '',
          '[PHILOSOPHY] Learning by doing and building',
          ''
        ];
        break;
      case 'clear':
        setCommandHistory([]);
        setCurrentCommand('');
        setDisplayedText('');
        return;
      case 'whoami':
        output = [
          'bxbx1205',
          ''
        ];
        break;
      case 'pwd':
        output = [
          '/home/bxbx1205/portfolio',
          ''
        ];
        break;
      case 'ls':
        output = [
          'projects/  skills/  experience/  contact/  about.txt',
          ''
        ];
        break;
      default:
        output = [
          `bash: ${trimmedCmd}: command not found`,
          '',
          'Did you mean one of these?',
          `  ${commands.filter(cmd => cmd.includes(trimmedCmd.charAt(0))).slice(0, 3).join(', ')}`,
          '',
          "Type 'help' to see all available commands",
          ''
        ];
    }

    setCommandHistory(prev => [...prev, {
      command: cmd,
      output: output
    }]);
    setCurrentCommand('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isTyping) {
      if (currentCommand.trim()) {
        handleCommand(currentCommand);
      } else {
        setCommandHistory(prev => [...prev, { command: '', output: [] }]);
      }
    }
  };

  const handleCommandClick = (cmd) => {
    if (!isTyping) {
      setCurrentCommand(cmd);
      setTimeout(() => handleCommand(cmd), 100);
    }
  };

  return (
    <div className="bg-black text-green-400 font-mono text-sm h-full flex flex-col">
      {/* Command Menu Bar */}
      <div className="border-b border-green-500 p-3 bg-gray-950">
        <div className="flex flex-wrap gap-1 text-xs">
          {commands.map((cmd, index) => (
            <React.Fragment key={cmd}>
              <span 
                className="text-green-400 hover:text-green-300 hover:bg-green-900 px-1 py-0.5 rounded cursor-pointer transition-all duration-200"
                onClick={() => handleCommandClick(cmd)}
              >
                {cmd}
              </span>
              {index < commands.length - 1 && (
                <span className="text-green-600"> | </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="flex-1 px-4 py-2 overflow-auto cursor-text leading-relaxed"
        onClick={() => !isTyping && inputRef.current?.focus()}
      >
        {/* Typing Display */}
        {displayedText && (
          <div className="mb-2 whitespace-pre-line">
            {displayedText}
          </div>
        )}

        {/* Command History */}
        {commandHistory.map((entry, index) => (
          <div key={index} className="mb-1">
            <div className="flex items-center mb-1">
              <span className="text-blue-400">bxbx@portfolio:~$ </span>
              <span className="text-green-300">{entry.command}</span>
            </div>
            {entry.output.map((line, lineIndex) => (
              <div key={lineIndex} className="text-green-400 leading-relaxed">
                {line}
              </div>
            ))}
          </div>
        ))}

        {/* Current Command Line */}
        {!isTyping && (
          <div className="flex items-center">
            <span className="text-blue-400">bxbx@portfolio:~$ </span>
            <input
              ref={inputRef}
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-transparent text-green-300 outline-none border-none flex-1 font-mono caret-green-400"
              autoFocus
              spellCheck={false}
            />
            <span className={`w-2 h-4 bg-green-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;