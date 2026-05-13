import React from 'react';

const Skills = () => {
  const skills = {
    "Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    "Computer Vision": ["OpenCV", "Image Processing", "HOG", "SVM", "Deep Learning"],
    "Programming": ["Python", "JavaScript", "TypeScript", "React", "HTML/CSS"],
    "Tools & Technologies": ["Git", "Docker", "Node.js", "Vite", "Tailwind CSS"]
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="card">
              <h3 className="text-xl font-bold text-dark-accent mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-dark-accent/20 text-dark-accent rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
