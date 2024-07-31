import React, { useState } from 'react';
import BasicInformation from './components/BasicInformation';
import Skills from './components/Skills';
import Resources from './components/Resources';
import DeveloperSetup from './components/DeveloperSetup';
import Footer from './components/Footer';
import Header from './components/Header';
import Work from './components/Work';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>('about');

  const renderSection = () => {
    switch (selectedSection) {
      case 'about':
        return <BasicInformation />;
      case 'projects':
        return <Work />;
      case 'skills':
        return <Skills />;
      case 'resources':
        return <Resources />;
      case 'devSetup':
        return <DeveloperSetup />;
      default:
        return <BasicInformation />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <div className="flex flex-1 justify-center w-3/4">
        <Sidebar setSelectedSection={setSelectedSection} />
        <div className="flex justify-center w-4/5">
          <main className="p-8 max-w-3xl w-full mx-auto grow">
            {renderSection()}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
