'use client'

import React, { useEffect, useState } from 'react'

function Footer() {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Format the date time in YYYY-MM-DD HH:MM:SS format
  const formattedDateTime = dateTime.toLocaleString('sv-SE', { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  })

  return (
    <footer className="border-t border-green-400 p-4">
      <div className="flex justify-between items-center font-mono text-sm">
        <div className="text-green-400">bxbx1205@portfolio:~$</div>
        <div className="text-green-400">{formattedDateTime}</div>
      </div>
    </footer>
  )
}

export default Footer