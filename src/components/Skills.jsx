import { skillsData } from '../mockdatas/skillsData';

const Skills = () => {
  return (
    <section className="pt-16 px-6 max-w-6xl mx-auto bg-white dark:bg-gray-900 transition-colors">

      <h2 className="text-5xl font-bold mb-12
      text-slate-900 dark:text-white">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-10 pb-16
      border-b border-indigo-100 dark:border-gray-700">

        {skillsData.map((skill) => (
          <div key={skill.id} className="flex flex-col gap-4">

            <h3 className="text-3xl font-medium
            text-indigo-700 dark:text-indigo-400">
              {skill.name}
            </h3>

            <p className="text-sm leading-relaxed
            text-gray-500 dark:text-gray-300">
              {skill.description}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;