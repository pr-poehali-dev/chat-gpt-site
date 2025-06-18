import { useState } from "react";
import Icon from "@/components/ui/icon";

const ChatDemo = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Привет! Я ChatGPT, ваш ИИ-помощник. Чем могу помочь?",
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const exampleQuestions = [
    "Объясни квантовую физику простыми словами",
    "Напиши стихотворение про космос",
    "Помоги с написанием кода на Python",
    "Расскажи интересный факт",
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      role: "user" as const,
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Симуляция ответа ChatGPT
    setTimeout(() => {
      const responses = [
        "Это отличный вопрос! ChatGPT может помочь с анализом данных, написанием кода, объяснением сложных концепций и многим другим.",
        "Интересная задача! Я могу предложить несколько подходов к решению этой проблемы...",
        "Давайте разберем это пошагово. Сначала важно понять основные принципы...",
        "Отлично! Вот что я могу предложить по этому вопросу...",
      ];

      const botMessage = {
        role: "assistant" as const,
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleExampleClick = (question: string) => {
    setInputMessage(question);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-ai-gradient bg-clip-text text-transparent">
              Попробуйте ChatGPT
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Интерактивная демонстрация возможностей ChatGPT
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-lg overflow-hidden">
            {/* Chat Header */}
            <div className="bg-slate-900/50 p-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-ai-gradient rounded-full flex items-center justify-center">
                  <Icon name="Bot" size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">ChatGPT</div>
                  <div className="text-xs text-white/70 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Онлайн
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.role === "user"
                        ? "bg-ai-gradient text-white"
                        : "bg-slate-800/50 text-white/90"
                    }`}
                  >
                    <div className="text-sm">{message.content}</div>
                    <div className="text-xs opacity-70 mt-1">
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800/50 text-white/90 max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-ai-purple rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-ai-blue rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-ai-cyan rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                      <span className="text-xs text-white/70">Печатает...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Example Questions */}
            <div className="p-4 border-t border-white/10">
              <div className="mb-3">
                <div className="text-sm text-white/70 mb-2">
                  Примеры вопросов:
                </div>
                <div className="flex flex-wrap gap-2">
                  {exampleQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleExampleClick(question)}
                      className="text-xs bg-slate-800/50 hover:bg-slate-700/50 px-3 py-1 rounded-full text-white/80 hover:text-white transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Field */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Напишите ваше сообщение..."
                  className="flex-1 bg-slate-800/50 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-ai-purple"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="px-4 py-2 bg-ai-gradient rounded-lg text-white hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Icon name="Send" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
