import React, { useEffect, useState } from 'react';
import projectsData from '../projects.json'; // Adjust the path as needed

interface Project {
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  techList: string[];
}

const Work: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section id="projects" className="my-8">
      <h2 className="text-2xl text-cyan-400 mb-4">Projects</h2>
      {projects.map((project) => (
        <div key={project.title} className="project bg-gray-800 p-6 mb-6 rounded-lg border border-gray-700 shadow-md">
          <h3 className="text-xl text-cyan-400 mb-2">{project.title}</h3>
          <p className="text-white mb-4">{project.description}</p>
          <p>
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="project-link text-cyan-400 font-bold transition duration-300 hover:text-pink-400">Visit Project</a>
            {' | '}
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link text-cyan-400 font-bold transition duration-300 hover:text-pink-400">View Code</a>
          </p>
          <ul className="flex space-x-2 mt-4">
            {project.techList.map(tech => <li key={tech} className="px-2 py-1 bg-gray-900 rounded">{tech}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Work;
