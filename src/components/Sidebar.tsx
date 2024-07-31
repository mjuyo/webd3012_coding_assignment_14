import React from 'react';

interface SidebarProps {
  setSelectedSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setSelectedSection }) => {
  return (
    <nav className="bg-gray-900 w-64 p-4 ml-80">
      <ul className="flex flex-col space-y-6 mt-20">
        <li><button onClick={() => setSelectedSection('about')} className="w-full text-2xl text-left hover:text-pink-600 transition duration-300">About</button></li>
        <li><button onClick={() => setSelectedSection('projects')} className="w-full text-2xl text-left hover:text-pink-600 transition duration-300">Projects</button></li>
        <li><button onClick={() => setSelectedSection('skills')} className="w-full text-2xl text-left hover:text-pink-600 transition duration-300">Skills</button></li>
        <li><button onClick={() => setSelectedSection('resources')} className="w-full text-2xl text-left hover:text-pink-600 transition duration-300">Resources</button></li>
        <li><button onClick={() => setSelectedSection('devSetup')} className="w-full text-2xl text-left hover:text-pink-600 transition duration-300">Dev Setup</button></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
