import { projectsData } from "../mockdatas/projectsData"

const Projects = () => {
  return (
    <section className="pt-10 px-6 max-w-6xl mx-auto w-full">
      {/* Section Title */}
      <h2 className="text-5xl font-bold text-slate-900 mb-12">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12">
        {projectsData.map((project) => (
          <div key={project.id} className="flex flex-col gap-5">
            
            {/* Project Image */}
            <div className="rounded-xl overflow-hidden shadow-sm max-w-6xl">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-500 text-indigo-700">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Category Tags (Nested Map) */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-1 border border-indigo-600 rounded-md text-indigo-600 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex justify-between items-center mt-2">
              <a 
                href={project.github} 
                className="text-indigo-600 font-medium underline hover:text-indigo-800 transition"
              >
                Github
              </a>
              <a 
                href={project.viewSite} 
                className="text-indigo-600 font-medium underline hover:text-indigo-800 transition"
              >
                View Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;