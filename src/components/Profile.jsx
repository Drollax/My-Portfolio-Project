// Profile.jsx
import { useLanguage } from "../contextapi/LanguageProvider";
import { translations } from "../mockdatas/translations";

const Profile = () => {
  const { isTurkish } = useLanguage();

  return (
    <section className="pt-10 py-5 px-6 max-w-6xl mx-auto transition-colors">

      {/* Section Title */}
      <h2 className="text-5xl font-bold mb-10 text-slate-900 dark:text-white">
        {translations.profile.sectionTitle[isTurkish ? "tr" : "en"]}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 border-b border-indigo-100 dark:border-gray-700">

        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-medium text-indigo-700 dark:text-indigo-400">
            {translations.profile.leftColumnTitle[isTurkish ? "tr" : "en"]}
          </h3>

          <div className="flex flex-col gap-4">

            <div className="flex">
              <span className="font-bold w-40 shrink-0 text-slate-900 dark:text-gray-200">
                {translations.profile.details.birthDate[isTurkish ? "tr" : "en"]}
              </span>
              <span className="text-slate-900 dark:text-gray-300">
                24.03.1996
              </span>
            </div>

            <div className="flex">
              <span className="font-bold w-40 shrink-0 text-slate-900 dark:text-gray-200">
                {translations.profile.details.city[isTurkish ? "tr" : "en"]}
              </span>
              <span className="text-slate-900 dark:text-gray-300">
                Ankara
              </span>
            </div>

            <div className="flex">
              <span className="font-bold w-40 shrink-0 text-slate-900 dark:text-gray-200">
                {translations.profile.details.education[isTurkish ? "tr" : "en"]}
              </span>
              <span className="text-slate-900 dark:text-gray-300">
                Hacettepe Ünv. Biyoloji <br /> Lisans, 2016
              </span>
            </div>

            <div className="flex">
              <span className="font-bold w-40 shrink-0 text-slate-900 dark:text-gray-200">
                {translations.profile.details.preferredRole[isTurkish ? "tr" : "en"]}
              </span>
              <span className="text-slate-900 dark:text-gray-300">
                Frontend, UI
              </span>
            </div>

          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-medium text-indigo-700 dark:text-indigo-400">
            {translations.profile.rightColumnTitle[isTurkish ? "tr" : "en"]}
          </h3>

          <div className="flex flex-col gap-6 text-sm leading-relaxed text-gray-500 dark:text-gray-300">
            {translations.profile.aboutText[isTurkish ? "tr" : "en"].map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Profile;