
import { skillsData } from '../mockdatas/skillsData';

const Skills = () => {
  return (
    <section className="pt-16 px-6 bg-white max-w-6xl mx-auto">
    
      <h2 className="text-5xl font-bold text-slate-900 mb-12">
        Skills
      </h2>

      {/*skills yazan kısımın tamamını mockdata olarak yaptım*/ }
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-10 pb-16 border-b border-indigo-100">
        {skillsData.map((skill) => (
          <div key={skill.id} className="flex flex-col gap-4">
            <h3 className="text-3xl font-medium text-indigo-700">
              {skill.name}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;