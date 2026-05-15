import React from 'react';

const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center px-4 py-20 mt-14">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img 
              src="/images/profile-photo.png"
              alt="Dheya"
              className="w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full object-cover border-4 border-dark-accent"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 flex items-center justify-center" style={{display: 'none'}}>
              <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                <span className="text-6xl text-dark-muted">👤</span>
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-dark-text">Hi, I'm </span>
              <span className="gradient-text">Dheya</span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-dark-muted mb-6">
              Computer Science & AI Specialist
            </h2>
            <p className="text-lg md:text-xl text-dark-muted mb-8 max-w-2xl">
              Started in AI “just to see what the hype was about.”
              Now I’m far enough into it where I train models for fun and argue with my code at 2am.

              I’m a Computer Science student who’s gone from finding the min and max in a Python list to doing quantum imaging research with ICRAR using machine learning to push past the Rayleigh limit. I love turning impossible looking problems into clean, elegant solutions ... or at least into bugs sophisticated enough to look intentional.

              Always chasing the next challenge where AI, creativity, and “this probably shouldn’t work” somehow come together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="border border-dark-accent text-dark-accent px-6 py-3 rounded-lg hover:bg-dark-accent hover:text-white transition-colors duration-200">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
