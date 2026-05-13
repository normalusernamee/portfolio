import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Honours Research Student",
      company: "ICRAR",
      duration: "Jul 2025 - Present",
      description: "Quantum imaging research with AI techniques in SPADE demultiplexing. Collaborating with physics team on experimental design and ML model optimization for image reconstruction."
    },
    {
      title: "Summer Intern",
      company: "ICRAR",
      duration: "Nov 2024 - Feb 2025",
      description: "Spectral data analysis using Variational Autoencoders to model wavelength distributions and predict spectral reconstruction from RGB inputs."
    },
    {
      title: "Software Developer",
      company: "University Project",
      duration: "Jul 2024 - Nov 2024",
      description: "Developed TeamMate, a Microsoft Teams bot with NLP capabilities for email summarisation, meeting scheduling, and API integration."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-8">
              <div className="flex-shrink-0 w-40 text-right">
                <p className="text-xs text-dark-muted font-medium leading-tight">{exp.duration}</p>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-dark-text mb-1">{exp.title}</h3>
                <p className="text-sm text-dark-accent font-medium mb-2">{exp.company}</p>
                <p className="text-sm text-dark-muted">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
