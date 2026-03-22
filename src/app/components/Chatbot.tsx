import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const quickActions = [
  { label: "Find an artisan", query: "find artisan" },
  { label: "Book a workshop", query: "book workshop" },
  { label: "Apply for apprenticeship", query: "apply apprenticeship" },
  { label: "View impact", query: "view impact" },
];

const botResponses: Record<string, string> = {
  "find artisan": "I can help you find the perfect artisan! Visit our Artisans page where you can filter by craft (leather, zellige, wood carving, pottery, metal working, textile weaving) and location. Each artisan has a detailed profile with their story and specialties. Would you like to know more about a specific craft?",
  "book workshop": "Great choice! Our workshops are 2-4 hour immersive experiences where you create your own handmade treasure. Visit the Workshops page to see all available experiences. Prices range from 350-550 MAD. Each workshop is led by a master artisan in their actual workshop. Ready to book?",
  "apply apprenticeship": "Wonderful! Our apprenticeship programs range from 6-12 months and lead to professional certification. You'll learn from master artisans and gain marketable skills. Visit the Apprenticeships page to explore programs by craft and skill level. We welcome youth aged 16-30. What craft interests you most?",
  "view impact": "Silsila has made incredible impact! We've supported 52+ artisans, trained 127+ youth, and delivered 318+ cultural experiences. Visit our Impact page to see detailed metrics, growth charts, and stories from our community. We're preserving 12 traditional crafts while generating sustainable income!",
  "default": "I'm here to help you navigate Silsila! I can assist with finding artisans, booking workshops, applying for apprenticeships, or learning about our impact. What would you like to know?",
  "hello": "مرحبا! Welcome to Silsila! 👋 I'm your guide to connecting with Morocco's master artisans. How can I help you today?",
  "help": "I can help you with:\n\n🧑‍🎨 Finding and connecting with artisans\n📅 Booking cultural workshops\n🎓 Applying for apprenticeship programs\n📊 Learning about our impact\n🌍 Information about Silsila Corners\n\nWhat interests you most?",
  "craft": "We preserve and teach 12 traditional Moroccan crafts:\n\n• Leather Working (Tanning & Dyeing)\n• Zellige (Tile Mosaic)\n• Wood Carving (Mashrabiya)\n• Pottery & Ceramics\n• Metal Working (Copper & Brass)\n• Textile Weaving\n\nWhich craft would you like to explore?",
  "price": "Workshop prices range from 350-550 MAD depending on duration (2-4 hours) and complexity. All materials and tools are included. You'll take home what you create! Apprenticeships are often subsidized or free, with potential to earn income during training.",
  "location": "We have Silsila Corners (physical workshop spaces) in:\n\n📍 Fez Medina - Tala'a Kebira\n📍 Marrakech - Souk des Teinturiers\n📍 Rabat - Oudayas Kasbah\n\nMost workshops and apprenticeships take place in the medinas where artisans work.",
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "مرحبا! Welcome to Silsila! 👋 I'm here to help you discover Moroccan craftsmanship. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Check for specific keywords
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("مرحبا")) {
      return botResponses.hello;
    }
    if (lowerMessage.includes("help") || lowerMessage.includes("what can you do")) {
      return botResponses.help;
    }
    if (lowerMessage.includes("craft") || lowerMessage.includes("skills")) {
      return botResponses.craft;
    }
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("how much")) {
      return botResponses.price;
    }
    if (lowerMessage.includes("location") || lowerMessage.includes("where") || lowerMessage.includes("corner")) {
      return botResponses.location;
    }
    if (lowerMessage.includes("artisan") || lowerMessage.includes("maâlem") || lowerMessage.includes("find")) {
      return botResponses["find artisan"];
    }
    if (lowerMessage.includes("workshop") || lowerMessage.includes("experience") || lowerMessage.includes("book")) {
      return botResponses["book workshop"];
    }
    if (lowerMessage.includes("apprentice") || lowerMessage.includes("learn") || lowerMessage.includes("training") || lowerMessage.includes("apply")) {
      return botResponses["apply apprenticeship"];
    }
    if (lowerMessage.includes("impact") || lowerMessage.includes("stats") || lowerMessage.includes("numbers")) {
      return botResponses["view impact"];
    }

    return botResponses.default;
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Add bot response after a short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(messageText),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const handleQuickAction = (query: string) => {
    handleSendMessage(query);
  };

  return (
    <>
      {/* Chat Bubble */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-amber-500/50 transition-shadow"
          >
            <MessageCircle className="w-7 h-7" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">Silsila Assistant</h3>
                  <p className="text-xs opacity-90">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white"
                        : "bg-white border border-gray-200 text-gray-800"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length <= 2 && (
              <div className="p-4 bg-white border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2">Quick actions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => handleQuickAction(action.query)}
                      className="text-xs bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full hover:bg-amber-100 transition-colors border border-amber-200"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-full focus:border-amber-500 focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!inputValue.trim()}
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
