import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [isTurkish, setIsTurkish] = useState(true);

  return (
    // Max-w-6xl and mx-auto here keeps the WHOLE navbar content aligned with your Hero/Profile
    <header className="flex flex-col py-4 px-6 md:px-12 max-w-6xl mx-auto w-full gap-4">

      {/* Top Row: Dark Mode + Language */}
      <div className="flex justify-end items-center gap-4 md:gap-6 text-xs md:text-sm">
        
        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className={`w-10 h-5 md:w-12 md:h-6 flex items-center rounded-full p-1 transition
              ${dark ? "bg-[#4731D3]" : "bg-gray-300"}
            `}
          >
            <div
              className={`bg-[#FFE86E] w-3 h-3 md:w-4 md:h-4 rounded-full shadow-md transform transition
                ${dark ? "translate-x-5 md:translate-x-6" : ""}
              `}
            />
          </button>
          <span className="font-bold text-gray-500 tracking-wider">DARK MODE</span>
        </div>

        <span className="text-gray-300">|</span>

        {/* Language Switch */}
        <button
          onClick={() => setIsTurkish(!isTurkish)}
         
        >
          {isTurkish ? (
            <span className="text-gray-500 font-medium"><span className="text-indigo-600 font-bold tracking-wider">TÜRKÇE</span>'YE GEÇ</span>
          ) : (
            <span className="text-gray-500 font-medium">SWITCH TO <span className="text-indigo-600 font-bold tracking-wider">ENGLISH</span></span>
          )}
        </button>
      </div>

      {/* Bottom Row: Logo and Nav Links */}
      <div className="flex justify-between items-center mt-4">
        
        {/* Logo */}
        <div className="shrink-0">
          <div className="w-12 h-12 flex items-center justify-center bg-[#EEEBFF] rounded-full text-[#7B61FF] font-bold text-xl rotate-[25deg]">
            A
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-2 md:gap-8">
          <button className="px-5 py-2 text-gray-500 font-medium rounded-lg hover:border hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50 transition text-sm md:text-base">
            Skills
          </button>

          <button className="px-5 py-2 text-gray-500 font-medium rounded-lg hover:border hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50 transition text-sm md:text-base">
            Projects
          </button>

          <button className="px-5 py-2 text-gray-500 font-medium rounded-lg hover:border hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50 transition text-sm md:text-base">
            Hire me
          </button>
        </nav>
      </div>
    </header>
  );
}