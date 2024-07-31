import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-8 flex justify-center bg-gray-900 border-b border-gray-700">
      <div className="w-4/5 max-w-2xl flex justify-between items-center">
        <div className="text-2xl text-cyan-400">
          Marco<span className="text-purple-400">@Juyo</span>
        </div>
        <nav>
        <ul className="flex space-x-4">
        <li>
          <a href="https://github.com/mjuyo" className="hover:text-pink-600">
            GitHub<span className="paren">()</span>;
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/marcojuyo/" className="hover:text-pink-600">
            LinkedIn<span className="paren">()</span>;
          </a>
        </li>
        <li>
          <a href="mailto:marco.juyo@gmail.com" className="hover:text-pink-600">
            Email<span className="paren">()</span>;
          </a>
        </li>
      </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
