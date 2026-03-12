// Hero.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../contextapi/LanguageProvider";
import { translations } from "../mockdatas/translations";

export default function Hero() {
  const { isTurkish } = useLanguage();

  return (
    <section className="mx-auto px-6 max-w-[75rem] md:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 transition-colors">

      {/* IMAGE */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
        <img
          src="/assets/Hero-image.png"
          alt="Hero"
          className="rounded-2xl w-full max-w-[420px] shadow-lg dark:shadow-black/40"
        />
      </div>

      {/* TEXT */}
      <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start">

        {/* Name */}
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 w-full">
          <div className="w-10 h-[2px] bg-indigo-500"></div>
          <p className="text-indigo-600 dark:text-indigo-400 font-medium">
            {translations.hero.name}
          </p>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center lg:text-left
        text-gray-800 dark:text-white">
          {translations.hero.title[isTurkish ? "tr" : "en"].split("\n").map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </h1>

        {/* Description */}
        <p className="max-w-lg mb-8 text-center lg:text-left mx-auto lg:mx-0
        text-gray-500 dark:text-gray-300">
          {translations.hero.description[isTurkish ? "tr" : "en"]}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full">

          <button className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg transition
          hover:bg-indigo-600 hover:text-white
          dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white">
            {translations.hero.buttons.hireMe[isTurkish ? "tr" : "en"]}
          </button>

          <button className="flex items-center gap-2 px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg transition
          hover:bg-indigo-600 hover:text-white
          dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white">
            <FaGithub className="text-xl" />
            {translations.hero.buttons.github}
          </button>

          <button className="flex items-center gap-2 px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg transition
          hover:bg-indigo-600 hover:text-white
          dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white">
            <FaLinkedin className="text-xl" />
            {translations.hero.buttons.linkedin}
          </button>

        </div>
      </div>
    </section>
  );
}