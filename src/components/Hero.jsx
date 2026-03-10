import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="mx-auto px-6 max-w-[75rem] md:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

      {/* IMAGE - Already centered via justify-center */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
        <img
          src="./src/assets/Hero-image.png"
          alt="Hero"
          className="rounded-2xl w-full max-w-[420px] shadow-lg"
        />
      </div>

      {/* TEXT SECTION */}
      <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start">

        {/* Name - Added justify-center for mobile */}
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 w-full">
          <div className="w-10 h-[2px] bg-indigo-500"></div>
          <p className="text-indigo-600 font-medium">Almila Su</p>
        </div>

        {/* Title - Added text-center for mobile */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6 text-center lg:text-left">
          Creative thinker <br />
          Minimalism lover
        </h1>

        {/* Description - Added text-center and mx-auto for mobile */}
        <p className="text-gray-500 max-w-lg mb-8 text-center lg:text-left mx-auto lg:mx-0">
          Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable frontend products with
          great user experiences. Let’s shake hands with me.
        </p>

        {/* Buttons - Added justify-center for mobile */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full">
          <button className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-800 hover:text-white transition">
            Hire me
          </button>
          <button className="flex items-center gap-2 px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-800 hover:text-white transition">
           <FaGithub className="text-xl" />Github
          </button>
          <button className="flex items-center gap-2 px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-800 hover:text-white transition">
           <FaLinkedin className="text-xl"/>
           Linkedin
          </button>
        </div>

      </div>
    </section>
  );
}