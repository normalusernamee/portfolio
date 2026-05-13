import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <Header />
      <Chatbot />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
