
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['JavaScript', 'React.js', 'Python', 'Docker', 'No-Code'];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-cyber font-bold">
            <span className="text-white">Eduardo A.</span>{' '}
            <span className="text-neon-blue neon-text">Morandi</span>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl font-tech text-gray-300">
            <span>Desenvolvedor Full-Stack & </span>
            <span className="text-neon-purple neon-text">{text}</span>
            <span className="animate-pulse">|</span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Especialista em soluções criativas e eficientes, transformando ideias em 
          realidade digital através de tecnologias modernas e inovação.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection('about')}
            className="cyber-border bg-transparent text-neon-blue border-neon-blue hover:bg-neon-blue hover:text-dark-300 px-8 py-3 text-lg font-medium transition-all duration-300"
          >
            Ver Currículo
          </Button>
          
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-neon-purple hover:bg-neon-purple/80 text-white px-8 py-3 text-lg font-medium transition-all duration-300 animate-glow"
          >
            Contato
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            size={32} 
            className="text-neon-blue cursor-pointer hover:text-neon-purple transition-colors"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
