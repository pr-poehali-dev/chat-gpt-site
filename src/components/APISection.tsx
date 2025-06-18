import { useState } from "react";
import Icon from "@/components/ui/icon";

const APISection = () => {
  const [activeExample, setActiveExample] = useState(0);

  const examples = [
    {
      title: "Базовый запрос",
      description: "Простой пример отправки сообщения в ChatGPT API",
      code: `const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    {
      role: "user",
      content: "Объясни квантовую физику простыми словами"
    }
  ],
  max_tokens: 150,
  temperature: 0.7
});

console.log(response.choices[0].message.content);`,
    },
    {
      title: "Стриминг ответов",
      description: "Получение ответа в реальном времени",
      code: `const stream = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [{ role: "user", content: "Расскажи про ИИ" }],
  stream: true,
});

for await (const chunk of stream) {
  const content = chunk.choices[0]?.delta?.content;
  if (content) {
    process.stdout.write(content);
  }
}`,
    },
    {
      title: "Функциональные вызовы",
      description: "Использование функций с ChatGPT API",
      code: `const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    { role: "user", content: "Какая погода в Москве?" }
  ],
  functions: [
    {
      name: "get_weather",
      description: "Получить текущую погоду в городе",
      parameters: {
        type: "object",
        properties: {
          location: { type: "string" }
        }
      }
    }
  ]
});`,
    },
  ];

  return (
    <section id="api" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-ai-gradient bg-clip-text text-transparent">
              API интеграция
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Простые и мощные инструменты для интеграции ChatGPT в ваши
            приложения
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => setActiveExample(index)}
              className={`glass-effect p-6 rounded-lg text-left transition-all duration-300 hover:scale-105 ${
                activeExample === index ? "ring-2 ring-ai-purple ai-glow" : ""
              }`}
            >
              <div className="flex items-center mb-3">
                <Icon name="Code2" size={24} className="text-ai-purple mr-3" />
                <h3 className="text-lg font-semibold">{example.title}</h3>
              </div>
              <p className="text-white/70 text-sm">{example.description}</p>
            </button>
          ))}
        </div>

        <div className="glass-effect rounded-lg overflow-hidden">
          <div className="bg-slate-900/50 p-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-white/70 ml-4 font-mono text-sm">
                  {examples[activeExample].title
                    .toLowerCase()
                    .replace(" ", "_")}
                  .js
                </span>
              </div>
              <button className="text-white/70 hover:text-white">
                <Icon name="Copy" size={16} />
              </button>
            </div>
          </div>
          <div className="p-6">
            <pre className="text-sm text-white/90 font-mono overflow-x-auto">
              <code>{examples[activeExample].code}</code>
            </pre>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="glass-effect p-6 rounded-lg text-center">
            <Icon
              name="Shield"
              size={32}
              className="text-ai-purple mb-4 mx-auto"
            />
            <h3 className="text-lg font-semibold mb-2">Безопасность</h3>
            <p className="text-white/70 text-sm">
              Аутентификация через API ключи и контроль доступа
            </p>
          </div>

          <div className="glass-effect p-6 rounded-lg text-center">
            <Icon
              name="BarChart3"
              size={32}
              className="text-ai-blue mb-4 mx-auto"
            />
            <h3 className="text-lg font-semibold mb-2">Мониторинг</h3>
            <p className="text-white/70 text-sm">
              Детальная аналитика использования и производительности
            </p>
          </div>

          <div className="glass-effect p-6 rounded-lg text-center">
            <Icon
              name="Headphones"
              size={32}
              className="text-ai-cyan mb-4 mx-auto"
            />
            <h3 className="text-lg font-semibold mb-2">Поддержка 24/7</h3>
            <p className="text-white/70 text-sm">
              Техническая поддержка и документация для разработчиков
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APISection;
