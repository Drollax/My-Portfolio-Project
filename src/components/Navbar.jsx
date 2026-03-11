// Navbar.jsx
import { useTheme } from "../contextapi/ThemeProvider";
import { useLanguage } from "../contextapi/LanguageProvider";
import { translations } from "../mockdatas/translations";

export default function Navbar() {
  const { dark, toggleDark } = useTheme();
  const { isTurkish, toggleLanguage } = useLanguage();

  return (
    <header className="flex flex-col py-4 px-6 md:px-12 max-w-6xl mx-auto w-full gap-4 transition-colors">

      {/* Top Row */}
      <div className="flex justify-end items-center gap-4 md:gap-6 text-xs md:text-sm">

        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
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

          <span className="font-bold tracking-wider text-gray-500 dark:text-gray-300">
            {translations.navbar.darkMode[isTurkish ? "tr" : "en"]}
          </span>
        </div>

        {/* Separator */}
        <span className="text-gray-300 dark:text-gray-600">|</span>

        {/* Language Switch */}
        <button onClick={toggleLanguage} className="font-medium text-gray-500 dark:text-gray-300">
          <span className="text-indigo-600 font-bold tracking-wider">
            {isTurkish 
              ? translations.navbar.languageToggle1.tr 
              : translations.navbar.languageToggle1.en
            }
          </span>{" "}
          {isTurkish 
            ? translations.navbar.languageToggle2.tr 
            : translations.navbar.languageToggle2.en
          }
        </button>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between items-center mt-4">

        {/* Logo / Profile Pic */}
        <div className="shrink-0">
          <div className="w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl rotate-[25deg]
            bg-[#EEEBFF] text-[#7B61FF]
            dark:bg-indigo-900 dark:text-indigo-300 transition-colors"
          >
            A
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-2 md:gap-8">
          <button className="px-5 py-2 font-medium rounded-lg transition text-sm md:text-base
            text-gray-600 dark:text-gray-300
            hover:border hover:border-indigo-600
            hover:text-indigo-600
            hover:bg-indigo-50
            dark:hover:bg-indigo-900/40"
          >
            {translations.navbar.navLinks.skills[isTurkish ? "tr" : "en"]}
          </button>

          <button className="px-5 py-2 font-medium rounded-lg transition text-sm md:text-base
            text-gray-600 dark:text-gray-300
            hover:border hover:border-indigo-600
            hover:text-indigo-600
            hover:bg-indigo-50
            dark:hover:bg-indigo-900/40"
          >
            {translations.navbar.navLinks.projects[isTurkish ? "tr" : "en"]}
          </button>

          <button className="px-5 py-2 font-medium rounded-lg transition text-sm md:text-base
            text-gray-600 dark:text-gray-300
            hover:border hover:border-indigo-600
            hover:text-indigo-600
            hover:bg-indigo-50
            dark:hover:bg-indigo-900/40"
          >
            {translations.navbar.navLinks.hireMe[isTurkish ? "tr" : "en"]}
          </button>
        </nav>
      </div>
    </header>
  );
}