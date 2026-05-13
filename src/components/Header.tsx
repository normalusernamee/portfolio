import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-dark-bg/95 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold gradient-text">Dheya.C</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <a href="https://github.com/normalusernamee" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/dheya-chiha-416a7a269" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
