import { useLanguage } from "../contextapi/LanguageProvider";
import { translations } from "../mockdatas/translations";

export default function Footer() {
  const { isTurkish } = useLanguage();

  return (
    <footer className="bg-gray-50 py-20 px-6 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Call to Action & Email */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8 max-w-md">
            {isTurkish ? translations.footer.cta.tr : translations.footer.cta.en}
          </h2>
          
          {/* Email and Links Row Container */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            {/* Email with Hand Emoji */}
            <div className="flex items-center gap-2">
              <span className="text-xl">👉</span>
              <a 
                href={`mailto:${translations.footer.email}`} 
                className="text-red-600 font-medium text-lg border-b border-red-600 hover:text-red-800 transition"
              >
                {translations.footer.email}
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Navigation Links */}
        <nav className="flex items-center gap-6 font-medium md:self-end md:mb-1">
          <a 
            href="#" 
            className="text-slate-900 hover:text-indigo-600 transition"
          >
            {isTurkish 
              ? translations.footer.links.personalBlog.tr 
              : translations.footer.links.personalBlog.en
            }
          </a>
          <a 
            href="#" 
            className="text-emerald-500 hover:text-emerald-700 transition"
          >
            {translations.footer.links.github}
          </a>
          <a 
            href="#" 
            className="text-sky-500 hover:text-sky-700 transition"
          >
            {translations.footer.links.linkedin}
          </a>
        </nav>

      </div>
    </footer>
  );
}