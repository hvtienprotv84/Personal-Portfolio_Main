// "use client"
import React from 'react'
import { useTheme } from "next-themes";


export const ButtonToggle = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button 
        className="px-4 py-2 mt-[-10px] bg-gray-800 text-white dark:text-red-500 rounded"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    )
}

export default ButtonToggle;