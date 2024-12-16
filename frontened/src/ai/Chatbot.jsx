import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setIsLoading(true);
      setInput('');

      try {
        const response = await axios.post(
          'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',
          JSON.stringify({ inputs: input }),
          {
            headers: {
              Authorization: `Bearer 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`,
              'Content-Type': 'application/json',
            },
          }
        );

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response.data[0]?.generated_text || 'Sorry, I did not understand that.', sender: 'bot' },
        ]);
      } catch (error) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Sorry, there was an issue with the response.', sender: 'bot' },
        ]);
      }

      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-9 right-9 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-lg transform transition hover:scale-105 hover:shadow-xl z-50"
      >
        Chatbot
      </button>

      {isModalOpen && (
        <div className="fixed bottom-8 right-8 w-80 bg-white rounded-lg shadow-2xl transform transition-all scale-100 z-50">
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-t-lg">
            <h3 className="text-white font-semibold">Chat with Bot</h3>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-white text-lg font-bold hover:text-gray-200"
            >
              &times;
            </button>
          </div>

          <div className="chatbox max-h-60 overflow-y-auto p-4 bg-gray-100">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`my-2 p-3 rounded-lg max-w-xs ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white self-end ml-auto'
                    : 'bg-gray-200 text-gray-800 self-start mr-auto'
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            ))}
            {isLoading && (
              <div className="loading flex items-center space-x-2 mt-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>

          <div className="flex items-center px-4 py-3 border-t border-gray-300">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-grow p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              onClick={handleSend}
              className="ml-3 p-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:shadow-md transform transition hover:scale-105"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
