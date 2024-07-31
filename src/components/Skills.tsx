import React, { useEffect, useState } from 'react';
import skillsData from '../skills.json'; // Adjust the path as needed

interface SkillsData {
  description: string;
  languagesFrameworks: string[];
  tools: string[];
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<SkillsData | null>(null);

  useEffect(() => {
    setSkills(skillsData);
  }, []);

  if (!skills) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-10 text-center">
      <h2 className="mb-4 text-2xl font-light text-cyan-400">Skills</h2>
      <p className="mb-4 text-gray-400">{skills.description}</p>
      <h3 className="text-xl font-light text-cyan-400">Languages/Frameworks</h3>
      <ul className="flex justify-center mt-4 space-x-2">
        {skills.languagesFrameworks.map((language) => (
          <li key={language} className="px-2 py-1 rounded bg-gray-800">
            {language}
          </li>
        ))}
      </ul>
      <h3 className="mt-6 text-xl font-light text-cyan-400">Tools</h3>
      <ul className="flex justify-center mt-4 space-x-2">
        {skills.tools.map((tool) => (
          <li key={tool} className="px-2 py-1 rounded bg-gray-800">
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
