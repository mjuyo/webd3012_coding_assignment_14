import React, { useEffect, useState } from 'react';
import resourcesData from '../resources.json'; // Adjust the path as needed

interface Resource {
  title: string;
  image: string;
  summary: string;
  link: string;
}

const Resources: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    setResources(resourcesData);
  }, []);

  return (
    <section id="resources" className="my-8">
      <h2 className="text-2xl text-cyan-400 mb-4">Resources</h2>
      {resources.map((resource) => (
        <div key={resource.title} className="project bg-gray-800 p-6 mb-6 rounded-lg border border-gray-700 shadow-md flex items-center">
          <img className="size-16 mr-4 object-contain" src={resource.image} alt={resource.title} />
          <div>
            <h3 className="text-xl text-cyan-400 mb-2">{resource.title}</h3>
            <p className="text-gray-400 mb-4">{resource.summary}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-bold transition duration-300 hover:text-pink-400">Learn More</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Resources;
