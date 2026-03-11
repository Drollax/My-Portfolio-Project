


export default function Footer() {
  return (
    <footer className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Call to Action & Email */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8 max-w-md">
            Let’s work together on your next product.
          </h2>
          
          {/* Email and Links Row Container */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            {/* Email with Hand Emoji */}
            <div className="flex items-center gap-2">
              <span className="text-xl">👉</span>
              <a 
                href="mailto:almilasucode@gmail.com" 
                className="text-red-600 font-medium text-lg border-b border-red-600 hover:text-red-800 transition"
              >
                almilasucode@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Navigation Links (Now on the same line as the email) */}
        <nav className="flex items-center gap-6 font-medium md:self-end md:mb-1">
          <a href="#" className="text-slate-900 hover:text-indigo-600 transition">
            Personal Blog
          </a>
          <a href="#" className="text-emerald-500 hover:text-emerald-700 transition">
            Github
          </a>
          <a href="#" className="text-sky-500 hover:text-sky-700 transition">
            Linkedin
          </a>
        </nav>

      </div>
    </footer>
  );
}