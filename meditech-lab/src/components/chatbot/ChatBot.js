"use client";
import React, { useState, useRef, useEffect } from "react";

const faq = {
  hi: "Hello! How can I assist you with Meditech Laboratory today?",
  hello:
    "Hi there! Feel free to ask me about our lab services or opening hours.",
  "how do i download my report?":
    "You can download your report by entering your reference number and passcode on the 'Report Download' page.",
  "what tests do you offer?":
    "We offer blood tests, urine tests, COVID-19 tests, and more. Check our 'Test Listing' page for details.",
  "what are the opening hours?":
    "We are open from 8 AM to 6 PM, Monday to Friday.",
  "how can i contact customer support?":
    "You can contact us at support@meditechlab.com or call 123-456-7890.",
  "thank you": "You're welcome! If you have more questions, just ask.",
  thanks: "Glad to help! Let me know if you need anything else.",
  bye: "Goodbye! Have a great day.",
  "what is the address?":
    "Our lab is located at 123 Meditech Street, Cityville.",
  "do you provide home sample collection?":
    "Yes, we offer home sample collection services. Please contact customer support to schedule.",
  "how long does a test report take?":
    "Most test reports are ready within 24-48 hours after sample collection.",
};

// Popular questions to show as buttons (keys must match faq keys, lowercase)
const popularQuestions = [
  "hi",
  "how do i download my report?",
  "what tests do you offer?",
  "what are the opening hours?",
  "how can i contact customer support?",
];

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! How can I help you today? Ask me about our lab services.",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((msgs) => [...msgs, { from: "user", text }]);

    // Find answer or fallback message
    const answer =
      faq[text.trim().toLowerCase()] ||
      "Sorry, I don't understand. Please ask another question.";

    // Add bot answer with delay for UX
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { from: "bot", text: answer }]);
    }, 600);

    setInput("");
  };

  const handleSend = () => {
    sendMessage(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-xl shadow-lg bg-white flex flex-col h-[500px]">
      {/* Popular Questions */}
      <div className="mb-3">
        <h3 className="font-semibold text-gray-700 mb-2">Popular Questions:</h3>
        <div className="flex flex-wrap gap-2">
          {popularQuestions.map((q) => (
            <button
              key={q}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition"
              onClick={() => sendMessage(q)}
              aria-label={`Ask: ${q}`}
            >
              {q.charAt(0).toUpperCase() + q.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div
        className="flex-1 overflow-y-auto border rounded-lg p-3 mb-3 bg-gray-50 flex flex-col space-y-2"
        aria-live="polite"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[80%] px-4 py-2 rounded-lg break-words whitespace-pre-line
              ${
                msg.from === "bot"
                  ? "bg-gray-200 text-gray-900 self-start"
                  : "bg-blue-600 text-white self-end"
              }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input and Send Button */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex gap-2"
        aria-label="Send message form"
      >
        <input
          type="text"
          className="flex-grow border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Chat input"
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          aria-label="Send message"
        >
          Send
        </button>
      </form>
    </div>
  );
}
