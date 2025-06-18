import Icon from "@/components/ui/icon";

const StatsSection = () => {
  const stats = [
    {
      icon: "Users",
      number: "100M+",
      label: "Активных пользователей",
      color: "text-ai-purple",
    },
    {
      icon: "MessageSquare",
      number: "10B+",
      label: "Сообщений обработано",
      color: "text-ai-blue",
    },
    {
      icon: "Globe",
      number: "180+",
      label: "Стран используют",
      color: "text-ai-cyan",
    },
    {
      icon: "Code",
      number: "50+",
      label: "Языков программирования",
      color: "text-ai-purple",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-ai-gradient bg-clip-text text-transparent">
              ChatGPT в цифрах
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Миллионы людей по всему миру уже используют ChatGPT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-lg text-center hover:scale-105 transition-all duration-300 ai-glow"
            >
              <div
                className={`w-16 h-16 bg-ai-gradient rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <Icon
                  name={stat.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-effect p-8 rounded-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Рост популярности</h3>
            <p className="text-white/80">
              ChatGPT стал самым быстрорастущим приложением в истории
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <div className="text-lg font-semibold">5 дней</div>
              <div className="text-white/70 text-sm">
                до 1 млн пользователей
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-lg font-semibold">2 месяца</div>
              <div className="text-white/70 text-sm">
                до 100 млн пользователей
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌟</div>
              <div className="text-lg font-semibold">1 год</div>
              <div className="text-white/70 text-sm">революция в ИИ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
