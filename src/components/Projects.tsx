import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Machine Learning in Quantum Imaging",
      description: "Achieved results that allow us to go beyond the Rayleigh limit for the first time ever. Honours project collaborating closely with ICRAR and the physics team to design and conduct experiments for data acquisition. Exploring and evaluating different machine learning models to optimize image reconstruction and analysis.",
      tech: ["Python", "TensorFlow", "Quantum Computing", "ML"],
      type: "Research",
      media: {
        type: "image",
        src: "/images/quantum-imaging-heatmap.jpg",
        alt: "Quantum imaging heatmap showing model attention patterns and reconstruction accuracy"
      },
      links: {
        seminar: "https://youtu.be/Q2WYPjLRuyM?si=cIdKXoBQm9OR-9zo"
      }
    },
    {
      title: "House Price Prediction",
      description: "Machine learning project for predicting house prices using various regression models and feature engineering techniques to improve accuracy.",
      tech: ["Python", "Scikit-learn", "Pandas", "Data Analysis"],
      type: "ML Project",
      media: {
        type: "video",
        src: "/videos/house-price-prediction.mp4",
        poster: "/images/house-price-poster.png"
      },
      links: {
        github: "https://github.com/normalusernamee/australian-house-price-prediction"
      }
    },
    {
      title: "Human Detection with HOG + SVM",
      description: "Computer vision project using Histograms of Oriented Gradients and Support Vector Machines for human detection in images and video streams.",
      tech: ["Python", "OpenCV", "SVM", "Computer Vision"],
      type: "CV Project",
      media: {
        type: "video",
        src: "/videos/hog-demo.mp4",
        poster: "/images/hog.png"
      },
      links: {
        github: "#"
      }
    },
    {
      title: "SpyderWeb",
      description: "A live HTML/CSS editor site where users upload creative HTML and CSS designs to compete for a spot in the Hall of Fame! Users can create posts with live rendering, view other people's designs, and show appreciation by liking posts. Built with Flask backend and comprehensive testing using JUnit and Selenium.",
      tech: ["Flask", "HTML", "CSS", "JavaScript", "JUnit", "Selenium"],
      type: "Web App",
      media: {
        type: "video",
        src: "/videos/spyderweb-demo.mp4",
        poster: "/images/spyderweb-demo.png"
      },
      links: {
        github: "https://github.com/normalusernamee/CITS3403-GroupProject"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card hover:transform hover:scale-105 transition-all duration-300">
              {project.media && (
                <div className="mb-4">
                  {project.media.type === 'video' ? (
                    <video 
                      className="w-full h-48 object-contain rounded-lg bg-black"
                      poster={project.media.poster}
                      controls
                      muted
                      loop
                      ref={(el) => { if (el) el.playbackRate = 2.0; }}
                    >
                      <source src={project.media.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img 
                      src={project.media.src} 
                      alt={project.title}
                      className="w-full h-48 object-contain rounded-lg bg-dark-secondary"
                    />
                  )}
                </div>
              )}
              <div className="mb-4">
                <span className="text-sm text-dark-accent font-semibold">{project.type}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-dark-muted mb-4 text-justify">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-dark-accent/20 text-dark-accent rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.links.github && (
                  <a 
                    href={project.links.github} 
                    className="flex items-center space-x-2 text-dark-muted hover:text-dark-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                )}

                {project.links.seminar && (
                  <a 
                    href={project.links.seminar} 
                    className="flex items-center space-x-2 text-dark-muted hover:text-dark-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>Seminar</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
