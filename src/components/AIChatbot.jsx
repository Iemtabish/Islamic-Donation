import { useState, useRef, useEffect } from "react";
import {
  getAIResponse,
  getQuickSuggestions,
  getProductRecommendations,
} from "../services/aiService";
import { Link } from "react-router-dom";

function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
     role: 'assistant',
content: 'Assalamu Alaikum! 🕌 Welcome to Aliff Foundation! I\'m your AI Islamic Learning Assistant. I can help with:\n\n• Islamic education questions\n• Quran & Hadith guidance\n• Parenting tips for Islamic upbringing\n• Resource recommendations\n\nHow can I assist you today?',

      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const suggestions = getQuickSuggestions();

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async (messageText = input) => {
    if (!messageText.trim() || loading) return;

    const userMessage = {
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setShowSuggestions(false);

    try {
      // Get AI response
      const conversationHistory = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const aiResponse = await getAIResponse(messageText, conversationHistory);

      // Get product recommendations
      const recommendations = getProductRecommendations(messageText);

      const assistantMessage = {
        role: "assistant",
        content: aiResponse,
        recommendations: recommendations.length > 0 ? recommendations : null,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "🕌 I apologize, but I encountered an error. Please try again.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    sendMessage(suggestion);
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Assalamu Alaikum! 🕌 How can I help you today?",
        timestamp: new Date(),
      },
    ]);
    setShowSuggestions(true);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="AI Assistant"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <>
            <span className="text-2xl">🤖</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
              AI
            </span>
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl border-2 border-green-200 z-50 flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 via-green-700 to-teal-600 p-4 text-white relative overflow-hidden">
            {/* Islamic pattern background */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L0 20L20 40L40 20z' fill='%23ffffff'/%3E%3C/svg%3E")`,
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>

            <div className="relative flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <span className="text-2xl">🤖</span>
                  Islamic AI Assistant
                </h3>
                <p className="text-xs text-green-100">
                  Powered by Aliff Foundation
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={clearChat}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  title="Clear chat"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] ${
                    msg.role === "user" ? "order-1" : "order-2"
                  }`}
                >
                  <div
                    className={`p-4 rounded-2xl shadow-md ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-br-none"
                        : "bg-white text-gray-800 border-2 border-green-100 rounded-bl-none"
                    }`}
                  >
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">
                      {msg.content}
                    </div>

                    {/* Product Recommendations */}
                    {msg.recommendations && (
                      <div className="mt-4 pt-4 border-t border-green-200">
                        <p className="text-xs font-semibold text-green-700 mb-2">
                          📚 Recommended Resources:
                        </p>
                        {msg.recommendations.map((rec, idx) => (
                          <Link
                            key={idx}
                            to={rec.link}
                            className="block mb-2 p-2 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                          >
                            <p className="text-xs font-semibold text-green-800">
                              {rec.title}
                            </p>
                            <p className="text-xs text-gray-600">
                              {rec.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-1 px-2">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border-2 border-green-100 p-4 rounded-2xl rounded-bl-none shadow-md">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-green-600 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-green-600 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {showSuggestions && messages.length === 1 && (
            <div className="px-4 py-2 bg-green-50 border-t border-green-100">
              <p className="text-xs font-semibold text-green-700 mb-2">
                💡 Try asking:
              </p>
              <div className="space-y-1">
                {suggestions.slice(0, 3).map((suggestion, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left text-xs p-2 bg-white hover:bg-green-100 text-gray-700 rounded-lg transition-colors border border-green-200"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t-2 border-green-100 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                disabled={loading}
                className="flex-1 px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm disabled:bg-gray-100"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold"
              >
                {loading ? "..." : "📤"}
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-2 text-center">
              🔒 Powered by AI • Islamic guidance from authentic sources
            </p>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default AIChatbot;
