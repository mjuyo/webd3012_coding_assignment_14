import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 text-center bg-gray-800 border-t border-gray-700">
      © {currentYear} Marco Juyo. All rights reserved.
    </footer>
  );
};

export default Footer;
