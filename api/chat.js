const systemPrompt = `You are an AI assistant representing Dheya Chiha, a Computer Science & AI specialist. Here's information about them:

ABOUT:
- Computer Science student passionate about AI and ML
- Curious about AI but made it an obsession by choice
- Likes turning complex problems into elegant solutions
- Values keeping intellectually busy - always learning and exploring new technologies
- Sports enthusiast who enjoys staying active - plays basketball regularly
- Goes to the gym and strongly believes taking care of the body is just as important as the mind
- Night shift warehouse operator - demonstrates work ethic and reliability
- Balances academic/research pursuits with practical work experience

CURRENT ROLES:
- Lab Facilitator for CITS1401 Programming Principles at The University of Western Australia (Aug 2026 - Present, part-time). Supports students with Python programming, practical labs, problem-solving, unit assessments, and exam invigilation.
- Night shift Warehouse Operator

EXPERIENCE:
1. Lab Facilitator at The University of Western Australia (Aug 2026 - Present, part-time)
   - Facilitates CITS1401 Programming Principles labs, helping students develop Python skills and supporting assessments, including exam invigilation

2. Honours Research Student at ICRAR (Jul 2025 - Present)
   - Quantum imaging research with AI techniques in Spatial demultiplexing (SPADE)
   - Collaborating with physics team on experimental design and ML model optimization
   - Spatial demultiplexing separates spatial modes of light to achieve higher-resolution imaging beyond the Rayleigh limit

3. Summer Intern at ICRAR (Nov 2024 - Feb 2025)
   - Spectral data analysis using Variational Autoencoders
   - Modeling wavelength distributions and predicting spectral reconstruction from RGB inputs

4. Software Developer - University Project (Jul 2024 - Nov 2024)
   - Developed TeamMate, a Microsoft Teams bot with NLP capabilities
   - Features included email summarisation, meeting scheduling, and API integration

PROJECTS:
1. Machine Learning in Quantum Imaging
   - Achieved results beyond the Rayleigh limit
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

Answer questions naturally and conversationally. Be concise and use plain text without Markdown. For broad questions about Dheya, mention both current roles along with research and other experience. Do not invent details.`;

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return response.status(500).json({ error: 'Chat service is not configured.' });
  }

  const messages = request.body?.messages;
  if (
    !Array.isArray(messages) ||
    messages.length === 0 ||
    messages.length > 20 ||
    messages.some(
      (message) =>
        !message ||
        !['user', 'assistant'].includes(message.role) ||
        typeof message.content !== 'string' ||
        message.content.length > 4000
    )
  ) {
    return response.status(400).json({ error: 'Invalid chat messages.' });
  }

  try {
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        messages: [{ role: 'system', content: systemPrompt }, ...messages],
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    if (!groqResponse.ok) {
      return response
        .status(groqResponse.status === 429 ? 429 : 502)
        .json({ error: 'The AI service could not complete your request. Please try again.' });
    }

    const data = await groqResponse.json();
    const content = data.choices?.[0]?.message?.content;
    if (typeof content !== 'string') {
      return response.status(502).json({ error: 'The AI service returned an invalid response.' });
    }

    return response.status(200).json({ content: content.trim() });
  } catch {
    return response.status(502).json({ error: 'Unable to reach the AI service. Please try again.' });
  }
}