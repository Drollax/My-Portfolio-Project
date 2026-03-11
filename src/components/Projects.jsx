import { projectsData } from "../mockdatas/projectsData";

const Projects = () => {
  return (
    <section className="pt-10 pb-30 px-6 max-w-6xl mx-auto w-full transition-colors">

      {/* Section Title */}
      <h2 className="text-5xl font-bold mb-12
      text-slate-900 dark:text-white">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12">
        {projectsData.map((project) => (
          <div key={project.id} className="flex flex-col gap-5">

            {/* Project Image */}
            <div className="rounded-xl overflow-hidden shadow-sm dark:shadow-black/40">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-medium
            text-indigo-700 dark:text-indigo-400">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed
            text-gray-500 dark:text-gray-300">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1 border rounded-md text-xs font-medium
                  border-indigo-600 text-indigo-600
                  dark:border-indigo-400 dark:text-indigo-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex justify-between items-center mt-2">

              <a
                href={project.github}
                className="font-medium underline transition
                text-indigo-600 hover:text-indigo-800
                dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Github
              </a>

              <a
                href={project.viewSite}
                className="font-medium underline transition
                text-indigo-600 hover:text-indigo-800
                dark:text-indigo-400 dark:hover:text-indigo-300"
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