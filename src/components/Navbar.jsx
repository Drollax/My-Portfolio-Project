import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [isTurkish, setIsTurkish] = useState(true);

  return (
    <header className="flex flex-col py-4 px-6 gap-2">

      {/* Üst satır: Dark Mode + Dil switch */}
      <div className="flex justify-end items-center gap-6 mr-[50px]">
        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className={`w-12 h-5 flex items-center rounded-full p-1 transition
              ${dark ? "bg-[#4731D3]" : "bg-gray-300"}
            `}
          >
            <div
              className={`bg-[#FFE86E] w-4 h-4 rounded-full shadow-md transform transition
                ${dark ? "translate-x-6" : ""}
              `}
            />
          </button>
          <span className="text-sm font-medium">DARK MODE</span>
        </div>

                <span>|</span>
        {/* Language Switch */}
        <button
          onClick={() => setIsTurkish(!isTurkish)}
          className="text-indigo-600 font-medium"
        >
          {isTurkish ? "İngilizce'ye Geç" : "Türkçe'ye Geç"}
        </button>
      </div>

      {/* Alt satır: Logo ve nav */}
      <div className="flex justify-between items-center mt-[20px]">
        {/* Logo */}
        <div className="font-bold text-xl ml-[20px]">
        <span className="w-12 h-12 items-center justify-center inline-flex rotate-25 bg-[#EEEBFF] rounded-full text-[#7B61FF]">A</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-[60px] mr-[50px]">
  <button className="px-4 py-2 border border-transparent hover:border-indigo-600 active:bg-indigo-600 active:text-white text-gray-600 rounded-lg transition">
    Skills
  </button>

  <button className="px-4 py-2 border border-transparent hover:border-indigo-600 active:bg-indigo-600 active:text-white text-gray-600 rounded-lg transition">
    Projects
  </button>

  <button className="px-4 py-2 border border-transparent hover:border-indigo-600 active:bg-indigo-600 active:text-white text-indigo-600 rounded-lg transition">
    Hire me
  </button>
</nav>
      </div>
    </header>
  );
}