export default function Hero() {
  return (
    <section className="px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

      {/* IMAGE */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
        <img
          src="./src/assets/Hero-image.png"
          className="rounded-2xl w-full max-w-[420px] shadow-lg"
        />
      </div>

      {/* TEXT */}
      <div className="order-2 lg:order-1">

        {/* Name */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-[2px] bg-indigo-500"></div>
          <p className="text-indigo-600 font-medium">Almila Su</p>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
          Creative thinker <br />
          Minimalism lover
        </h1>

        {/* Description */}
        <p className="text-gray-500 max-w-lg mb-8">
          Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable frontend products with
          great user experiences. Let’s shake hands with me.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 border border-indigo-600 active:bg-indigo-600 active:text-white text-gray-600 rounded-lg transition">
            Hire me
          </button>

          <button className="px-4 py-2 border border-indigo-600 active:bg-indigo-600 active:text-white text-gray-600 rounded-lg transition">
            Github
          </button>

          <button className="px-4 py-2 border border-indigo-600 active:bg-indigo-600 active:text-white text-gray-600 rounded-lg transition">
            Linkedin
          </button>
        </div>

      </div>

    </section>
  );
}