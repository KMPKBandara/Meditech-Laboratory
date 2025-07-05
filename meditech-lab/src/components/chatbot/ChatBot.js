"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  MessageCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  FileText,
  TestTube,
  Calendar,
  Home,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import faq from "../../assets/data/faqData";

// Categorized popular questions for better UX
const questionCategories = [
  {
    title: "Quick Start",
    icon: <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />,
    questions: ["hi", "branch locations", "opening hours", "contact"],
  },
  {
    title: "Services",
    icon: <TestTube className="w-3 h-3 sm:w-4 sm:h-4" />,
    questions: [
      "what tests do you offer?",
      "health packages",
      "test prices",
      "home collection",
    ],
  },
  {
    title: "Reports",
    icon: <FileText className="w-3 h-3 sm:w-4 sm:h-4" />,
    questions: [
      "how do i download my report?",
      "when will my report be ready?",
      "report not ready",
    ],
  },
  {
    title: "Locations",
    icon: <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />,
    questions: [
      "balangoda branch",
      "ratnapura branch",
      "kalawana branch",
      "welimada branch",
    ],
  },
];

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Welcome to Meditech Laboratory! 🧪\n\nI'm your virtual assistant, ready to help you with:\n• Test information and pricing\n• Branch locations and hours\n• Report downloads\n• Home collection services\n\nHow can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [showCategories, setShowCategories] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-hide categories after first interaction on mobile
  useEffect(() => {
    if (messages.length > 1) {
      const timer = setTimeout(() => setShowCategories(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [messages.length]);

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      from: "user",
      text: text.trim(),
      timestamp: new Date(),
    };

    setMessages((msgs) => [...msgs, userMessage]);
    setIsTyping(true);

    // Hide categories after user interaction
    setShowCategories(false);

    // Find answer with partial matching for better UX
    let answer = faq[text.trim().toLowerCase()];

    if (!answer) {
      // Try partial matching for better user experience
      const lowerText = text.toLowerCase();
      const matchedKey = Object.keys(faq).find(
        (key) => lowerText.includes(key) || key.includes(lowerText)
      );

      if (matchedKey) {
        answer = faq[matchedKey];
      } else {
        answer =
          "I apologize, but I don't have information about that specific query. Here's what I can help you with:\n\n• Laboratory tests and services\n• Branch locations and hours\n• Report downloads and status\n• Home collection services\n• Pricing and packages\n\nPlease try asking about any of these topics, or contact our customer support at 0771-234-567 for personalized assistance.";
      }
    }

    setTimeout(() => {
      setIsTyping(false);
      const botMessage = {
        from: "bot",
        text: answer,
        timestamp: new Date(),
      };
      setMessages((msgs) => [...msgs, botMessage]);
    }, 1200);

    setInput("");

    // Focus input on mobile after sending
    if (window.innerWidth <= 768) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleSend = () => {
    sendMessage(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const scrollCategories = (direction) => {
    const container = document.getElementById("categories-container");
    const scrollAmount = 200;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-blue-50 to-white max-w-full">
      {/* Header - Mobile optimized */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sm:p-4 rounded-t-xl flex-shrink-0">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <TestTube className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-sm sm:text-lg truncate">
              Meditech Laboratory
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm truncate">
              Your Health, Our Priority
            </p>
          </div>
          {/* Toggle categories button on mobile */}
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="sm:hidden text-blue-100 hover:text-white p-1 rounded"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick Action Categories - Collapsible on mobile */}
      {showCategories && (
        <div className="p-2 sm:p-3 bg-white border-b flex-shrink-0">
          {/* Category Tabs */}
          <div className="relative">
            <div className="flex items-center">
              <button
                onClick={() => scrollCategories("left")}
                className="sm:hidden flex-shrink-0 p-1 text-gray-400 hover:text-gray-600"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div
                id="categories-container"
                className="flex space-x-1 sm:space-x-2 overflow-x-auto scrollbar-hide flex-1"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {questionCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`flex items-center space-x-1 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all flex-shrink-0 ${
                      activeCategory === index
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category.icon}
                    <span className="hidden sm:inline">{category.title}</span>
                    <span className="sm:hidden">
                      {category.title.split(" ")[0]}
                    </span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => scrollCategories("right")}
                className="sm:hidden flex-shrink-0 p-1 text-gray-400 hover:text-gray-600"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Questions - Mobile optimized grid */}
          <div className="mt-2 sm:mt-3 grid grid-cols-2 sm:flex sm:flex-wrap gap-1 sm:gap-2">
            {questionCategories[activeCategory].questions.map((question) => (
              <button
                key={question}
                className="bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm hover:bg-blue-100 transition-colors border border-blue-200 truncate text-center"
                onClick={() => sendMessage(question)}
                title={question.charAt(0).toUpperCase() + question.slice(1)}
              >
                {question.length > 15 && window.innerWidth <= 640
                  ? question.substring(0, 12) + "..."
                  : question.charAt(0).toUpperCase() + question.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages Area - Mobile optimized */}
      <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-3 sm:space-y-4 min-h-0">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.from === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[90%] sm:max-w-[85%] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-sm ${
                msg.from === "bot"
                  ? "bg-white text-gray-800 border border-gray-200"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
              }`}
            >
              <div className="whitespace-pre-line text-xs sm:text-sm leading-relaxed break-words">
                {msg.text}
              </div>
              <div
                className={`text-xs mt-1 sm:mt-2 ${
                  msg.from === "bot" ? "text-gray-500" : "text-blue-100"
                }`}
              >
                {formatTime(msg.timestamp)}
              </div>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-sm border border-gray-200">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area - Mobile optimized */}
      <div className="p-2 sm:p-4 bg-white border-t flex-shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex space-x-2"
        >
          <input
            ref={inputRef}
            type="text"
            className="flex-1 border border-gray-300 rounded-full px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
            placeholder="Ask about lab services..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </form>
        <div className="text-center mt-2">
          <p className="text-xs text-gray-500">
            Powered by Meditech Laboratory • Available 24/7
          </p>
        </div>
      </div>
    </div>
  );
}
