import { useState } from "react";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-ai-gradient rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-ai-gradient bg-clip-text text-transparent">
              ChatGPT API
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white/80 hover:text-white transition-colors"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-white transition-colors"
            >
              О ChatGPT
            </a>
            <a
              href="#features"
              className="text-white/80 hover:text-white transition-colors"
            >
              Возможности
            </a>
            <a
              href="#api"
              className="text-white/80 hover:text-white transition-colors"
            >
              API
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-white transition-colors"
            >
              Контакты
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <Icon name="Menu" size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <a
                href="#home"
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                О ChatGPT
              </a>
              <a
                href="#features"
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                Возможности
              </a>
              <a
                href="#api"
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                API
              </a>
              <a
                href="#contact"
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                Контакты
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
