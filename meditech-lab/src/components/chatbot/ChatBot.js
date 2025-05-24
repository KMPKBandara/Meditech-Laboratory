/*"use client";
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
*/
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

const faq = {
  // Greetings
  hi: "Hello! Welcome to Meditech Laboratory. I'm here to help you with all your lab service needs. How can I assist you today?",
  hello:
    "Hi there! Thank you for choosing Meditech Laboratory. Feel free to ask me about our services, locations, or test reports.",

  // Services and Tests
  "what tests do you offer?":
    "We offer a comprehensive range of laboratory tests including:\n\n• Blood Tests (CBC, Lipid Profile, Liver Function, Kidney Function)\n• Urine Tests (Complete Urine Analysis, Microalbumin)\n• COVID-19 Tests (RT-PCR, Rapid Antigen)\n• Diabetes Tests (HbA1c, Fasting Glucose, OGTT)\n• Thyroid Function Tests\n• Cardiac Markers\n• Hormone Tests\n• Pregnancy Tests\n• STD Screening\n• Cancer Markers\n\nFor a complete test listing, please visit our website or contact any of our branches.",

  "blood tests":
    "Our blood test services include:\n\n• Complete Blood Count (CBC)\n• Lipid Profile\n• Liver Function Tests (LFT)\n• Kidney Function Tests (KFT)\n• Blood Sugar Tests\n• Thyroid Function Tests\n• Vitamin D, B12 Tests\n• Iron Studies\n• Cardiac Risk Assessment\n\nAll blood tests are processed with state-of-the-art equipment ensuring accurate results.",

  "covid test":
    "We offer comprehensive COVID-19 testing:\n\n• RT-PCR Test (Gold standard, results in 24 hours)\n• Rapid Antigen Test (Results in 30 minutes)\n• COVID-19 Antibody Test\n\nAll tests follow WHO guidelines. Home collection available for PCR tests.",

  "diabetes test":
    "Our diabetes screening includes:\n\n• Fasting Blood Sugar\n• Random Blood Sugar\n• HbA1c (3-month average)\n• Oral Glucose Tolerance Test (OGTT)\n• Urine Glucose\n\nRegular monitoring packages available for diabetic patients.",

  // Report Related
  "how do i download my report?":
    "To download your test report:\n\n1. Visit our website's 'Report Download' section\n2. Enter your Reference Number (found on your receipt)\n3. Enter your Passcode (usually your mobile number)\n4. Click 'Download Report'\n\nIf you face any issues, contact our customer support at 0771-234-567.",

  "when will my report be ready?":
    "Report delivery times:\n\n• Routine Tests: 24-48 hours\n• COVID-19 RT-PCR: 24 hours\n• COVID-19 Rapid Test: 30 minutes\n• Special Tests: 3-5 working days\n• Biopsy Reports: 7-10 working days\n\nYou'll receive an SMS notification when your report is ready.",

  "report not ready":
    "If your report is delayed:\n\n1. Check if the expected time has passed\n2. Verify your reference number\n3. Contact the branch where you gave the sample\n4. Our team will provide you with an update\n\nSome complex tests may take additional time for accuracy.",

  // Branches and Locations
  "branch locations":
    "Meditech Laboratory has 4 main branches:\n\n🏥 **Balangoda Branch**\n📍 123 Main Street, Balangoda\n📞 045-222-8888\n\n🏥 **Ratnapura Branch**\n📍 456 Gem City Road, Ratnapura\n📞 045-333-9999\n\n🏥 **Kalawana Branch**\n📍 789 Hill Country Ave, Kalawana\n📞 045-444-0000\n\n🏥 **Welimada Branch**\n📍 321 Uva Province St, Welimada\n📞 045-555-1111",

  "balangoda branch":
    "**Balangoda Branch Details:**\n\n📍 Address: 123 Main Street, Balangoda 70100\n📞 Phone: 045-222-8888\n⏰ Hours: Monday-Saturday 7:00 AM - 7:00 PM\n🏠 Home Collection: Available\n\n**Collecting Centers:**\n• Balangoda Hospital Collection Point\n• Pelmadulla Health Center\n• Embilipitiya Sub-branch\n• Kuruwita Collection Point",

  "ratnapura branch":
    "**Ratnapura Branch Details:**\n\n📍 Address: 456 Gem City Road, Ratnapura 70000\n📞 Phone: 045-333-9999\n⏰ Hours: Monday-Saturday 6:30 AM - 8:00 PM\n🏠 Home Collection: Available\n\n**Collecting Centers:**\n• Ratnapura General Hospital\n• Eheliyagoda Health Center\n• Avissawella Sub-branch\n• Kiriella Collection Point\n• Godakawela Health Unit",

  "kalawana branch":
    "**Kalawana Branch Details:**\n\n📍 Address: 789 Hill Country Avenue, Kalawana 70450\n📞 Phone: 045-444-0000\n⏰ Hours: Monday-Saturday 7:30 AM - 6:30 PM\n🏠 Home Collection: Available\n\n**Collecting Centers:**\n• Kalawana District Hospital\n• Palindanuwara Health Center\n• Kolonna Collection Point\n• Nivitigala Health Unit",

  "welimada branch":
    "**Welimada Branch Details:**\n\n📍 Address: 321 Uva Province Street, Welimada 90200\n📞 Phone: 045-555-1111\n⏰ Hours: Monday-Saturday 7:00 AM - 7:00 PM\n🏠 Home Collection: Available\n\n**Collecting Centers:**\n• Welimada Base Hospital\n• Bandarawela Collection Point\n• Haputale Health Center\n• Diyatalawa Medical Unit\n• Ella Tourist Collection Point",

  // Opening Hours
  "opening hours":
    "Our operating hours:\n\n🕐 **Main Branches:**\nMonday - Saturday: 6:30 AM - 8:00 PM\nSunday: 8:00 AM - 2:00 PM (Emergency only)\n\n🕐 **Collection Centers:**\nMonday - Saturday: 7:00 AM - 6:00 PM\nSunday: Closed\n\n⚡ **24/7 Emergency Services** available at Ratnapura branch.",

  "sunday hours":
    "Sunday Services:\n\n• Main branches: Emergency services only (8:00 AM - 2:00 PM)\n• Collection centers: Closed\n• Home collection: Available for urgent cases\n• Ratnapura branch: 24/7 emergency services\n\nFor Sunday appointments, call ahead to confirm availability.",

  // Home Collection
  "home collection":
    "**Home Sample Collection Service:**\n\n✅ Available in all branch areas\n🚗 Free service for orders above Rs. 2,000\n⏰ Time slots: 7:00 AM - 5:00 PM\n📅 Advance booking required\n💳 Payment: Cash or online\n\n**To book:**\n1. Call your nearest branch\n2. Provide your address and preferred time\n3. Our trained phlebotomist will visit\n\n**Service areas:** 15km radius from each branch.",

  "home collection charges":
    "Home Collection Charges:\n\n• Orders above Rs. 2,000: FREE\n• Orders Rs. 1,000-2,000: Rs. 300\n• Orders below Rs. 1,000: Rs. 500\n• Emergency home visits: Rs. 800\n• Sunday/Holiday visits: Rs. 1,000\n\nCharges may vary based on distance from branch.",

  // Pricing and Packages
  "test prices":
    "We offer competitive pricing for all tests:\n\n💰 **Popular Test Packages:**\n• Basic Health Checkup: Rs. 3,500\n• Comprehensive Health Package: Rs. 8,500\n• Diabetes Monitoring: Rs. 2,200\n• Lipid Profile: Rs. 1,800\n• Thyroid Package: Rs. 2,800\n\nFor detailed pricing, visit our website or contact any branch.",

  "health packages":
    "**Comprehensive Health Packages:**\n\n🩺 **Basic Package (Rs. 3,500):**\n• CBC, Blood Sugar, Lipid Profile, Liver Function\n\n🩺 **Premium Package (Rs. 8,500):**\n• 35+ tests including cardiac markers, vitamins\n\n🩺 **Executive Package (Rs. 12,000):**\n• 50+ tests + ECG + consultation\n\n🩺 **Senior Citizen Package (Rs. 6,500):**\n• Age-specific health screening\n\nAll packages include free home collection.",

  // Contact Information
  contact:
    "**Contact Meditech Laboratory:**\n\n📞 **Customer Support:** 0771-234-567\n📧 **Email:** support@meditechlab.lk\n🌐 **Website:** www.meditechlab.lk\n💬 **WhatsApp:** 0771-234-567\n\n**Head Office:**\n📍 Ratnapura Branch\n📞 045-333-9999\n\n**Emergency Hotline:** 0771-999-888 (24/7)",

  "customer support":
    "Our customer support team is here to help:\n\n📞 **Phone:** 0771-234-567 (24/7)\n📧 **Email:** support@meditechlab.lk\n💬 **WhatsApp:** 0771-234-567\n⏰ **Live Chat:** 8:00 AM - 8:00 PM\n\n**For urgent queries:**\n📞 Emergency Hotline: 0771-999-888\n\nOur team responds within 30 minutes during business hours.",

  // Payment and Insurance
  "payment methods":
    "We accept multiple payment options:\n\n💳 **Accepted Payments:**\n• Cash\n• Credit/Debit Cards (Visa, Master)\n• Bank Transfers\n• Mobile Payments (eZ Cash, mCash)\n• Insurance Claims\n\n💡 **Easy Payment Plans:**\n• Corporate account facilities\n• Monthly billing for regular customers\n• Online payment portal available",

  insurance:
    "Insurance and Corporate Services:\n\n🏥 **Accepted Insurance:**\n• National Insurance Trust Fund\n• Ceylinco Healthcare\n• AIA Insurance\n• Allianz Healthcare\n• Union Assurance\n\n🏢 **Corporate Packages:**\n• Employee health screening\n• Bulk testing discounts\n• On-site collection services\n• Customized health packages",

  // Quality and Accreditation
  quality:
    "Quality Assurance at Meditech Laboratory:\n\n🏆 **Certifications:**\n• ISO 15189:2012 Certified\n• College of American Pathologists (CAP) Accredited\n• Sri Lanka Accreditation Board (SLAB) Approved\n\n✅ **Quality Features:**\n• State-of-the-art equipment\n• Trained laboratory technicians\n• Regular quality control checks\n• Quick turnaround times\n• Accurate and reliable results",

  // Emergency Services
  emergency:
    "Emergency Laboratory Services:\n\n🚨 **24/7 Emergency Services:**\n• Available at Ratnapura branch\n• Critical test processing\n• Emergency home collection\n• Immediate result delivery\n\n**Emergency Contact:** 0771-999-888\n\n**Services include:**\n• Cardiac markers\n• Emergency blood work\n• Toxicology screening\n• Urgent COVID-19 testing",

  // Common Closings
  "thank you":
    "You're very welcome! Thank you for choosing Meditech Laboratory. If you have any more questions about our services, don't hesitate to ask. We're here to serve you better! 😊",
  thanks:
    "My pleasure! Meditech Laboratory is committed to providing you with the best service. Feel free to reach out anytime you need assistance with lab services or have questions.",
  bye: "Goodbye! Thank you for contacting Meditech Laboratory. Have a wonderful day, and remember - we're here whenever you need reliable lab services! 👋",
  goodbye:
    "Take care! Thank you for choosing Meditech Laboratory. We look forward to serving you again soon. Stay healthy! 🌟",
};

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
