import Icon from "@/components/ui/icon";

const TechSpecs = () => {
  const specs = [
    {
      icon: "Cpu",
      title: "GPT-4 Модель",
      description: "Самая продвинутая языковая модель",
      value: "175B параметров",
    },
    {
      icon: "Gauge",
      title: "Скорость ответа",
      description: "Оптимизированная обработка запросов",
      value: "< 2 секунды",
    },
    {
      icon: "Globe",
      title: "API Запросы",
      description: "Максимальная пропускная способность",
      value: "1M+ в минуту",
    },
    {
      icon: "Languages",
      title: "Языки",
      description: "Поддержка множественных языков",
      value: "100+ языков",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-ai-gradient bg-clip-text text-transparent">
              Технические характеристики
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            ChatGPT API предоставляет мощные возможности для создания
            интеллектуальных приложений нового поколения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-lg hover:scale-105 transition-all duration-300 ai-glow"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-ai-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={spec.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{spec.title}</h3>
                <p className="text-white/70 text-sm mb-4">{spec.description}</p>
                <div className="text-2xl font-bold bg-ai-gradient bg-clip-text text-transparent">
                  {spec.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-effect p-8 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Архитектура системы</h3>
              <p className="text-white/80 mb-6">
                ChatGPT построен на основе трансформерной архитектуры с
                многослойной системой внимания, обеспечивающей понимание
                контекста и генерацию качественных ответов.
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-ai-purple mr-2"
                  />
                  Transformer архитектура
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-ai-purple mr-2"
                  />
                  Механизм внимания
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-ai-purple mr-2"
                  />
                  Обучение с подкреплением
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="w-48 h-48 bg-ai-gradient rounded-full flex items-center justify-center mx-auto animate-pulse-glow">
                  <Icon name="Network" size={80} className="text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-ai-blue rounded-full flex items-center justify-center animate-float">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
