import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "MessageSquareText",
      title: "Естественные диалоги",
      description:
        "ChatGPT понимает контекст и ведёт естественные беседы на любые темы",
    },
    {
      icon: "FileText",
      title: "Генерация контента",
      description:
        "Создание статей, описаний, сценариев и любого другого текстового контента",
    },
    {
      icon: "Calculator",
      title: "Решение задач",
      description:
        "Математические вычисления, логические задачи и аналитическое мышление",
    },
    {
      icon: "Code",
      title: "Программирование",
      description:
        "Написание, отладка и объяснение кода на множестве языков программирования",
    },
    {
      icon: "Languages",
      title: "Переводы",
      description: "Высококачественные переводы между множеством языков мира",
    },
    {
      icon: "PenTool",
      title: "Творчество",
      description:
        "Создание стихов, рассказов, идей для проектов и креативных решений",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-ai-gradient bg-clip-text text-transparent">
              Возможности ChatGPT
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Универсальный ИИ-помощник для решения широкого спектра задач
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-lg hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-ai-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <Icon
                    name={feature.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-effect p-8 rounded-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Модели и возможности</h3>
            <p className="text-white/80">
              Различные модели ChatGPT для разных задач и требований
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/30 p-6 rounded-lg border border-ai-purple/20">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-ai-purple">GPT-3.5</div>
                <div className="text-sm text-white/70">Turbo</div>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-ai-purple mr-2"
                  />
                  Быстрые ответы
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-ai-purple mr-2"
                  />
                  4K токенов контекста
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-ai-purple mr-2"
                  />
                  Экономичное использование
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/30 p-6 rounded-lg border border-ai-blue/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-ai-blue text-white text-xs px-2 py-1 rounded-bl">
                Популярный
              </div>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-ai-blue">GPT-4</div>
                <div className="text-sm text-white/70">Advanced</div>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-ai-blue mr-2" />
                  Расширенное понимание
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-ai-blue mr-2" />
                  8K токенов контекста
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-ai-blue mr-2" />
                  Высокая точность
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/30 p-6 rounded-lg border border-ai-cyan/20">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-ai-cyan">GPT-4</div>
                <div className="text-sm text-white/70">32K</div>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-ai-cyan mr-2" />
                  Длинный контекст
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-ai-cyan mr-2" />
                  32K токенов
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-ai-cyan mr-2" />
                  Комплексные задачи
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
