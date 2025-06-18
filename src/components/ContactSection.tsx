import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-ai-gradient bg-clip-text text-transparent">
              Начните использовать
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Присоединяйтесь к миллионам разработчиков, которые уже используют
            ChatGPT API
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-ai-gradient rounded-full flex items-center justify-center mr-4">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white/70">api-support@openai.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-ai-gradient rounded-full flex items-center justify-center mr-4">
                    <Icon
                      name="MessageCircle"
                      size={20}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Чат поддержки</div>
                    <div className="text-white/70">Доступен 24/7</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-ai-gradient rounded-full flex items-center justify-center mr-4">
                    <Icon name="FileText" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Документация</div>
                    <div className="text-white/70">
                      Полное руководство по API
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-ai-gradient rounded-lg font-semibold text-white hover:scale-105 transition-transform ai-glow">
                  Получить API ключ
                </button>
                <button className="px-6 py-3 glass-effect rounded-lg font-semibold text-white hover:scale-105 transition-transform">
                  Читать документацию
                </button>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg">
              <h4 className="text-xl font-bold mb-6 text-center">
                Быстрый старт
              </h4>

              <div className="code-block mb-6">
                <div className="text-white/70 text-sm mb-2"># Установка</div>
                <code className="text-ai-blue">pip install openai</code>
              </div>

              <div className="code-block">
                <div className="text-white/70 text-sm mb-2">
                  # Пример использования
                </div>
                <code className="text-white text-sm">
                  <div>import openai</div>
                  <div className="mt-2">openai.api_key = "your-api-key"</div>
                  <div className="mt-2 text-ai-cyan">
                    response = openai.ChatCompletion.create(
                  </div>
                  <div className="ml-4 text-white/80">model="gpt-4",</div>
                  <div className="ml-4 text-white/80">messages=[...]</div>
                  <div className="text-ai-cyan">)</div>
                </code>
              </div>

              <div className="mt-6 p-4 bg-ai-purple/10 rounded-lg border border-ai-purple/20">
                <div className="flex items-center text-ai-purple text-sm">
                  <Icon name="Info" size={16} className="mr-2" />
                  Зарегистрируйтесь на platform.openai.com для получения API
                  ключа
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="glass-effect inline-block p-6 rounded-lg">
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-ai-purple">10M+</div>
                <div className="text-white/70 text-sm">Разработчиков</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ai-blue">1B+</div>
                <div className="text-white/70 text-sm">API вызовов</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ai-cyan">99.9%</div>
                <div className="text-white/70 text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
