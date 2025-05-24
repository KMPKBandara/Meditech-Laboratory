/*"use client";

import React, { useState } from "react";
import ChatBot from "@/components/chatbot/ChatBot";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        
        {!open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z"
            />
          </svg>
        ) : (
          // Close (X) icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      
      {open && (
        <div className="fixed bottom-20 right-6 w-80 max-w-xs h-[520px] shadow-lg rounded-xl overflow-hidden z-50 bg-white">
          <ChatBot />
        </div>
      )}
    </>
  );
}
*/
"use client";
import React, { useState, useEffect } from "react";
import { MessageCircle, X, Minimize2, Maximize2, Phone } from "lucide-react";
import ChatBot from "@/components/chatbot/ChatBot";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Show notification periodically when chat is closed
  useEffect(() => {
    if (!open) {
      const interval = setInterval(() => {
        setHasNewMessage(true);
        setUnreadCount((prev) => prev + 1);

        // Auto-hide notification after 5 seconds
        setTimeout(() => {
          setHasNewMessage(false);
        }, 5000);
      }, 45000); // Show every 45 seconds (less frequent on mobile)

      return () => clearInterval(interval);
    } else {
      setHasNewMessage(false);
      setUnreadCount(0);
    }
  }, [open]);

  const handleToggle = () => {
    setOpen(!open);
    if (!open) {
      setHasNewMessage(false);
      setUnreadCount(0);
    }
  };

  const handleMinimize = () => {
    setMinimized(!minimized);
  };

  // Get responsive dimensions
  const getChatDimensions = () => {
    if (isMobile) {
      return {
        width: "w-full",
        height: minimized ? "h-14" : "h-full",
        maxHeight: "max-h-screen",
        position: "fixed inset-0",
        zIndex: "z-50",
      };
    } else {
      return {
        width: "w-96",
        height: minimized ? "h-16" : "h-[600px]",
        maxHeight: "max-h-[80vh]",
        position: "fixed bottom-20 right-6",
        zIndex: "z-50",
      };
    }
  };

  const dimensions = getChatDimensions();

  return (
    <>
      {/* Chat Widget Container */}
      {open && (
        <>
          {/* Mobile Overlay */}
          {isMobile && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={handleToggle}
            />
          )}

          <div
            className={`${dimensions.position} ${dimensions.width} ${
              dimensions.height
            } ${dimensions.maxHeight} ${
              dimensions.zIndex
            } bg-white transition-all duration-300 ${
              isMobile
                ? "rounded-t-xl"
                : "rounded-xl shadow-2xl border border-gray-200"
            }`}
            style={{
              boxShadow: isMobile
                ? "none"
                : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sm:p-3 flex items-center justify-between flex-shrink-0 rounded-t-xl">
              <div className="flex items-center space-x-2 min-w-0 flex-1">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                <span className="font-semibold text-sm truncate">
                  Meditech Lab Assistant
                </span>
                {!isMobile && !minimized && (
                  <span className="text-xs text-blue-100 hidden sm:inline">
                    Online
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                {/* Quick Call Button on Mobile */}
                {isMobile && (
                  <a
                    href="tel:0771234567"
                    className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
                    aria-label="Call us"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                )}

                {/* Minimize button (hide on mobile) */}
                {!isMobile && (
                  <button
                    onClick={handleMinimize}
                    className="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded transition-colors"
                    aria-label={minimized ? "Maximize chat" : "Minimize chat"}
                  >
                    {minimized ? (
                      <Maximize2 className="w-4 h-4" />
                    ) : (
                      <Minimize2 className="w-4 h-4" />
                    )}
                  </button>
                )}

                <button
                  onClick={handleToggle}
                  className="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            {!minimized && (
              <div className="h-full flex flex-col">
                <ChatBot />
              </div>
            )}

            {/* Minimized State */}
            {minimized && !isMobile && (
              <div className="p-3 flex items-center justify-between">
                <span className="text-sm text-gray-600">Chat minimized</span>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Online</span>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Floating Action Button */}
      <div
        className={`fixed z-50 ${
          isMobile ? "bottom-4 right-4" : "bottom-6 right-6"
        }`}
      >
        {/* Notification Badge */}
        {hasNewMessage && !open && (
          <div
            className={`absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce ${
              isMobile ? "w-5 h-5" : "w-6 h-6"
            }`}
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </div>
        )}

        {/* Help Tooltip - Only on desktop */}
        {!open && hasNewMessage && !isMobile && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 max-w-xs animate-fadeIn border border-gray-200">
            <div className="text-sm text-gray-800 font-medium">
              Need help with lab services?
            </div>
            <div className="text-xs text-blue-600 mt-1">
              Click to chat with our assistant
            </div>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
          </div>
        )}

        {/* Mobile Help Banner */}
        {!open && hasNewMessage && isMobile && (
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 whitespace-nowrap animate-fadeIn border border-gray-200">
            <div className="text-xs text-gray-800 font-medium">
              Lab services help available
            </div>
            <div className="absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
          </div>
        )}

        {/* Main Chat Button */}
        <button
          onClick={handleToggle}
          className={`flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
            isMobile ? "w-12 h-12" : "w-14 h-14"
          } rounded-full ${
            open
              ? "bg-gray-600 hover:bg-gray-700"
              : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
          }`}
          aria-label={open ? "Close chat" : "Open chat"}
        >
          {open ? (
            <X className={`text-white ${isMobile ? "w-6 h-6" : "w-7 h-7"}`} />
          ) : (
            <MessageCircle
              className={`text-white ${isMobile ? "w-6 h-6" : "w-7 h-7"}`}
            />
          )}
        </button>

        {/* Pulse Animation for New Messages */}
        {hasNewMessage && !open && (
          <div
            className={`absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75 ${
              isMobile ? "w-12 h-12" : "w-14 h-14"
            }`}
          ></div>
        )}
      </div>

      {/* Quick Action Buttons - Mobile Only */}
      {isMobile && !open && (
        <div className="fixed bottom-20 right-4 z-40 flex flex-col space-y-2">
          {/* Quick Call Button */}
          <a
            href="tel:0771234567"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all"
            aria-label="Call Meditech Lab"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        /* Hide scrollbar but keep functionality */
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Ensure mobile viewport */
        @media (max-width: 768px) {
          .chat-mobile-full {
            width: 100vw !important;
            height: 100vh !important;
            max-height: 100vh !important;
          }
        }

        /* Touch targets for mobile */
        @media (max-width: 768px) {
          button {
            min-height: 44px;
            min-width: 44px;
          }
        }

        /* Safe area padding for mobile devices with notches */
        @supports (padding-top: env(safe-area-inset-top)) {
          .mobile-safe-area {
            padding-top: env(safe-area-inset-top);
            padding-bottom: env(safe-area-inset-bottom);
            padding-left: env(safe-area-inset-left);
            padding-right: env(safe-area-inset-right);
          }
        }
      `}</style>
    </>
  );
}
