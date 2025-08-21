'use client'

import React, { useEffect, useState } from 'react'

function Footer() {
  const [dateTime, setDateTime] = useState("2025-08-21 14:00:55")
  const userLogin = "bxbx1205";

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date().toLocaleString('sv-SE', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }).replace(' ', ' '))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="border-t border-green-400 p-3 md:p-4">
      <div className="flex flex-col md:flex-row justify-between items-center font-mono text-xs md:text-sm">
        <div className="text-green-400 mb-2 md:mb-0">{userLogin}@portfolio:~$</div>
        <div className="text-green-400">{dateTime}</div>
      </div>
    </footer>
  )
}

export default Footer