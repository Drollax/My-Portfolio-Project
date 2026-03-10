
const Profile = () => {
  return (
    <section className="pt-10 py-5 px-6 max-w-6xl mx-auto">
      {/* Section Title */}
      <h2 className="text-5xl font-bold text-slate-900 mb-10">
        Profile
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 border-b border-indigo-100">
        
        {/* Left Column: Profile Details */}
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-medium text-indigo-700">
            Profile
          </h3>
          
          <div className="flex flex-col gap-4">
            {/* Detail Row 1 */}
            <div className="flex">
              <span className="font-bold text-slate-900 w-40 shrink-0">Doğum tarihi</span>
              <span className="text-slate-900">24.03.1996</span>
            </div>
            
            {/* Detail Row 2 */}
            <div className="flex">
              <span className="font-bold text-slate-900 w-40 shrink-0">İkamet Şehri</span>
              <span className="text-slate-900">Ankara</span>
            </div>

            {/* Detail Row 3 */}
            <div className="flex">
              <span className="font-bold text-slate-900 w-40 shrink-0">Eğitim Durumu</span>
              <span className="text-slate-900">
                Hacettepe Ünv. Biyoloji <br /> Lisans, 2016
              </span>
            </div>

            {/* Detail Row 4 */}
            <div className="flex">
              <span className="font-bold text-slate-900 w-40 shrink-0">Tercih Ettiği Rol</span>
              <span className="text-slate-900">Frontend, UI</span>
            </div>
          </div>
        </div>

        {/* Right Column: About Me */}
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-medium text-indigo-700">
            About Me
          </h3>
          <div className="flex flex-col gap-6 text-gray-500 text-sm leading-relaxed">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam 
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p>
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta 
              quod deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Profile;