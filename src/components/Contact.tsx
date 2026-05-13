import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-dark-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 gradient-text">Get In Touch</h2>
        <p className="text-xl text-dark-muted mb-8">
          I'm always interested in hearing about new opportunities and collaborations.
          Feel free to reach out if you'd like to connect!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a 
            href="mailto:dheya19@hotmail.com" 
            className="flex items-center space-x-2 btn-primary"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </a>
          
          <a 
            href="https://github.com/normalusernamee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border border-dark-accent text-dark-accent px-6 py-3 rounded-lg hover:bg-dark-accent hover:text-white transition-colors duration-200"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/dheya-chiha-416a7a269" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border border-dark-accent text-dark-accent px-6 py-3 rounded-lg hover:bg-dark-accent hover:text-white transition-colors duration-200"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
        
        <div className="text-dark-muted">
          <p>© 2026 Built by Dheya. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
