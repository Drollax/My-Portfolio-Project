const Profile = () => {
  return (
    <section className="pt-10 py-5 px-6 max-w-6xl mx-auto transition-colors">

      {/* Section Title */}
      <h2 className="text-5xl font-bold mb-10
      text-slate-900 dark:text-white">
        Profile
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16
      border-b border-indigo-100 dark:border-gray-700">

        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-medium
          text-indigo-700 dark:text-indigo-400">
            Profile
          </h3>

          <div className="flex flex-col gap-4">

            <div className="flex">
              <span className="font-bold w-40 shrink-0
              text-slate-900 dark:text-gray-200">
                Doğum tarihi
              </span>
              <span className="text-slate-900 dark:text-gray-300">
                24.03.1996
              </span>
            </div>

            <div className="flex">
              <span className="font-bold w-40 shrink-0
              text-slate-900 dark:text-gray-200">
                İkamet Şehri
              </span>
              <span className="text-slate-900 dark:text-gray-300">
                Ankara
              </span>
            </div>

            <div className="flex">
              <span className="font-bold w-40 shrink-0
              text-slate-900 dark:text-gray-200">
                Eğitim Durumu
              </span>
              <span className="text-slate-900 dark:text-gray-300">
                Hacettepe Ünv. Biyoloji <br /> Lisans, 2016
              </span>
            </div>

            <div className="flex">
              <span className="font-bold w-40 shrink-0
              text-slate-900 dark:text-gray-200">
                Tercih Ettiği Rol
              </span>
              <span className="text-slate-900 dark:text-gray-300">
                Frontend, UI
              </span>
            </div>

          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-medium
          text-indigo-700 dark:text-indigo-400">
            About Me
          </h3>

          <div className="flex flex-col gap-6 text-sm leading-relaxed
          text-gray-500 dark:text-gray-300">

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>

            <p>
              Minima accusamus ratione soluta aperiam sit voluptate? Dicta
              quod deserunt quam temporibus cumque magnam!
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Profile;