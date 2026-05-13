import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hi! I\'m Dheya\'s AI assistant. Ask me anything about their projects, experience, or skills!',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const systemPrompt = `You are an AI assistant representing Dheya Chiha, a Computer Science & AI specialist. Here's information about them:

ABOUT:
- Computer Science student passionate about AI and ML
- Curious about AI but made it an obsession by choice
- Likes turning complex problems into elegant solutions
- Values keeping intellectually busy - always learning and exploring new technologies
- Sports enthusiast who enjoys staying active
- Night shift warehouse operator - demonstrates work ethic and not afraid of hard work
- Balances academic/research pursuits with practical work experience

CURRENT ROLE:
- Night shift Warehouse Operator - showing strong work ethic and reliability

EXPERIENCE:
1. Honours Research Student at ICRAR (Jul 2025 - Present)
   - Quantum imaging research with AI techniques in Spatial demultiplexing (SPADE)
   - Collaborating with physics team on experimental design and ML model optimization
   - Spatial demultiplexing: A technique that separates spatial modes of light to achieve higher resolution imaging beyond the Rayleigh limit

2. Summer Intern at ICRAR (Nov 2024 - Feb 2025)
   - Spectral data analysis using Variational Autoencoders
   - Modeling wavelength distributions and predicting spectral reconstruction from RGB inputs

3. Software Developer - University Project (Jul 2024 - Nov 2024)
   - Developed TeamMate, a Microsoft Teams bot with NLP capabilities
   - Features: email summarisation, meeting scheduling, API integration

PROJECTS:
1. Machine Learning in Quantum Imaging
   - Achieved results beyond the Rayleigh limit for the first time
   - Tech: Python, TensorFlow, Quantum Computing, ML

2. House Price Prediction
   - ML project using regression models and feature engineering
   - Tech: Python, Scikit-learn, Pandas, Data Analysis

3. Human Detection with HOG + SVM
   - Computer vision using Histograms of Oriented Gradients and SVMs
   - Tech: Python, OpenCV, SVM, Computer Vision

SKILLS:
- Machine Learning: TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy
- Computer Vision: OpenCV, Image Processing, HOG, SVM, Deep Learning
- Programming: Python, JavaScript, TypeScript, React, HTML/CSS
- Tools: Git, Docker, Node.js, Vite, Tailwind CSS

ABOUT SPATIAL MODE DEMULTIPLEXING (SPADE):
Spatial mode demultiplexing is a quantum imaging technique that separates different spatial modes of light to achieve imaging resolution beyond the classical Rayleigh limit. It's a cutting-edge method in quantum optics that Dheya is researching at ICRAR for improved image reconstruction and analysis.

Answer questions naturally and conversationally. Be friendly and enthusiastic about their work. Mention their work ethic and how they balance intense academic research with practical warehouse work.`;

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'mistral',
          prompt: `${systemPrompt}\n\nConversation history:\n${messages
            .map((msg) => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
            .join('\n')}\n\nUser: ${inputValue}\n\nAssistant:`,
          stream: false,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(
          'Ollama server is not running. Please start it with: ollama serve'
        );
      }

      const data = await response.json();

      if (data.response) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.response.trim(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content:
          error instanceof Error
            ? error.message
            : 'Error: Make sure Ollama is running. Start it with: ollama serve',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-dark-accent hover:bg-blue-600 text-white rounded-full p-4 shadow-lg z-40 transition-all duration-300 hover:scale-110"
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-dark-secondary border border-gray-800 rounded-lg shadow-2xl z-40 flex flex-col">
          {/* Header */}
          <div className="bg-dark-accent p-4 rounded-t-lg">
            <h3 className="text-white font-bold">Dheya's Assistant</h3>
            <p className="text-blue-100 text-sm">Ask me anything!</p>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs rounded-lg p-3 ${
                    msg.role === 'user'
                      ? 'bg-dark-accent text-white rounded-br-none'
                      : 'bg-gray-700 text-gray-100 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-gray-100 rounded-lg rounded-bl-none p-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-800 p-4 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me something..."
              className="flex-1 bg-gray-700 text-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-dark-accent"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="bg-dark-accent hover:bg-blue-600 disabled:bg-gray-600 text-white rounded px-3 py-2 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
