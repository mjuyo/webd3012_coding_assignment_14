import React, { useEffect, useState } from 'react';
import setupData from '../developerSetup.json'; // Adjust the path as needed

interface SetupContent {
  extensions?: string[];
  themes?: string[];
  settings?: string[];
  applications?: string[];
  customization?: string[];
  aliases?: string[];
  fonts?: string[];
  features?: string[];
}

interface SetupData {
  vscode: {
    content: SetupContent;
  };
  terminal: {
    content: SetupContent;
  };
  font: {
    content: SetupContent;
  };
}

const DeveloperSetup: React.FC = () => {
  const [setup, setSetup] = useState<SetupData | null>(null);

  useEffect(() => {
    setSetup(setupData);
  }, []);

  if (!setup) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-10 text-center">
      <h2 className="mb-4 text-2xl font-light text-cyan-400">Developer Setup</h2>
      <div className="my-8">
        <h3 className="text-xl font-light text-cyan-400">VSCode Setup</h3>
        {Object.entries(setup.vscode.content).map(([key, value]) => (
          <div key={key} className="mt-4 flex flex-wrap justify-center items-center">
            <h4 className="text-lg font-light text-cyan-400 capitalize mr-2">{key}</h4>
            <ul className="flex justify-center mt-2 space-x-2">
              {(value as string[]).map((item) => (
                <li key={item} className="px-2 py-1 rounded bg-gray-800">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="my-8">
        <h3 className="text-xl font-light text-cyan-400">Terminal Setup</h3>
        {Object.entries(setup.terminal.content).map(([key, value]) => (
          <div key={key} className="mt-4 flex flex-wrap justify-center items-center">
            <h4 className="text-lg font-light text-cyan-400 capitalize mr-2">{key}</h4>
            <ul className="flex justify-center mt-2 space-x-2">
              {(value as string[]).map((item) => (
                <li key={item} className="px-2 py-1 rounded bg-gray-800">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="my-8">
        <h3 className="text-xl font-light text-cyan-400">Preferred Editor Font</h3>
        {Object.entries(setup.font.content).map(([key, value]) => (
          <div key={key} className="mt-4 flex flex-wrap justify-center items-center">
            <h4 className="text-lg font-light text-cyan-400 capitalize mr-2">{key}</h4>
            <ul className="flex justify-center mt-2 space-x-2">
              {(value as string[]).map((item) => (
                <li key={item} className="px-2 py-1 rounded bg-gray-800">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperSetup;
