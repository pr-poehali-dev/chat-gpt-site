import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="animate-float mb-8">
          <div className="w-20 h-20 bg-ai-gradient rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <Icon name="Brain" size={40} className="text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-ai-gradient bg-clip-text text-transparent">
            ChatGPT API
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto animate-fade-in">
          Революционная технология искусственного интеллекта для интеграции в
          ваши приложения и сервисы
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <button className="px-8 py-4 bg-ai-gradient rounded-lg font-semibold text-white hover:scale-105 transition-transform ai-glow">
            Начать разработку
          </button>
          <button className="px-8 py-4 glass-effect rounded-lg font-semibold text-white hover:scale-105 transition-transform">
            Документация API
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-effect p-6 rounded-lg hover:scale-105 transition-transform">
            <Icon
              name="MessageSquare"
              size={32}
              className="text-ai-purple mb-4 mx-auto"
            />
            <h3 className="text-lg font-semibold mb-2">Чат-интерфейс</h3>
            <p className="text-white/70 text-sm">Интеграция разговорного ИИ</p>
          </div>

          <div className="glass-effect p-6 rounded-lg hover:scale-105 transition-transform">
            <Icon name="Code" size={32} className="text-ai-blue mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">API интеграция</h3>
            <p className="text-white/70 text-sm">
              Простое подключение к вашим системам
            </p>
          </div>

          <div className="glass-effect p-6 rounded-lg hover:scale-105 transition-transform">
            <Icon name="Zap" size={32} className="text-ai-cyan mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Высокая скорость</h3>
            <p className="text-white/70 text-sm">Мгновенные ответы ИИ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
