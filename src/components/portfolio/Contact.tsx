import { useState } from 'react';
import { Mail, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornarei em breve!",
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'eduardomorandi48@gmail.com',
      link: 'mailto:eduardomorandi48@gmail.com',
      color: 'text-neon-blue'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Eduardo Antonio Morandi',
      link: 'https://www.linkedin.com/in/eduardo-antonio-morandi-4a6857321/',
      color: 'text-neon-purple'
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-6">
            Vamos <span className="text-neon-blue neon-text">Conversar</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Pronto para transformar suas ideias em realidade? Entre em contato e vamos 
            construir algo incrível juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8 animate-slide-up">
            <div className="cyber-border rounded-lg p-8 card-glow">
              <h3 className="text-2xl font-cyber font-bold text-white mb-6">
                Informações de <span className="text-neon-purple neon-text">Contato</span>
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-dark-200/50 hover:bg-dark-200 transition-colors group"
                  >
                    <div className={`p-3 rounded-full bg-dark-300 ${info.color} group-hover:scale-110 transition-transform`}>
                      <info.icon size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="cyber-border rounded-lg p-8 matrix-bg">
              <h4 className="text-xl font-cyber font-bold text-neon-cyan neon-text mb-4">
                Disponibilidade
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Atualmente aberto para novas oportunidades e projetos freelance. 
                Respondo a todas as mensagens em até 24 horas.
              </p>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="cyber-border rounded-lg p-8 card-glow space-y-6">
              <h3 className="text-2xl font-cyber font-bold text-white mb-6">
                Enviar <span className="text-neon-blue neon-text">Mensagem</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-dark-200 border-neon-blue/30 text-white placeholder-gray-500 focus:border-neon-blue"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-dark-200 border-neon-blue/30 text-white placeholder-gray-500 focus:border-neon-blue"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-dark-200 border-neon-blue/30 text-white placeholder-gray-500 focus:border-neon-blue resize-none"
                    placeholder="Conte-me sobre seu projeto ou como posso ajudá-lo..."
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white py-3 text-lg font-medium transition-all duration-300 animate-glow"
              >
                <Send size={20} className="mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-neon-blue/30 text-center">
          <p className="text-gray-400">
            © 2025 Eduardo Antonio Morandi. Desenvolvido com{' '}
            <span className="text-neon-blue neon-text">tecnologia</span> e{' '}
            <span className="text-neon-purple neon-text">paixão</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
