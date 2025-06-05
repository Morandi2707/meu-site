
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Certificação JavaScript',
      institution: 'Plataforma Online',
      year: '2024',
      description: 'Fundamentos avançados de JavaScript ES6+',
      color: 'border-neon-blue'
    },
    {
      title: 'Algoritmos e Lógica de Programação',
      institution: 'Curso Especializado',
      year: '2024',
      description: 'Estruturas de dados e algoritmos eficientes',
      color: 'border-neon-purple'
    },
    {
      title: 'React.js Avançado',
      institution: 'Plataforma Online',
      year: '2024',
      description: 'Desenvolvimento de aplicações modernas com React',
      color: 'border-neon-cyan'
    },
    {
      title: 'Docker & Containerização',
      institution: 'Curso Técnico',
      year: '2024',
      description: 'Deploy e gerenciamento de aplicações containerizadas',
      color: 'border-neon-pink'
    },
    {
      title: 'Python para Desenvolvimento',
      institution: 'Instituição Online',
      year: '2024',
      description: 'Programação backend e automação com Python',
      color: 'border-neon-blue'
    },
    {
      title: 'No-Code/Low-Code Solutions',
      institution: 'Plataforma Especializada',
      year: '2024',
      description: 'Desenvolvimento rápido sem código tradicional',
      color: 'border-neon-purple'
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-6">
            Certificações & <span className="text-neon-cyan neon-text">Treinamentos</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Constante evolução através de cursos e certificações em tecnologias de ponta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`cyber-border rounded-lg p-6 card-glow animate-slide-up hover:scale-105 transition-transform duration-300`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="bg-dark-200 p-3 rounded-full">
                    <Award className="text-neon-blue" size={24} />
                  </div>
                  <ExternalLink className="text-gray-400 hover:text-neon-blue transition-colors cursor-pointer" size={20} />
                </div>

                <div>
                  <h3 className="text-xl font-cyber font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-neon-blue font-semibold">
                    {cert.institution}
                  </p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={16} />
                  <span className="text-sm">{cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="cyber-border rounded-lg p-8 matrix-bg">
            <div className="space-y-4">
              <Award className="text-neon-blue mx-auto" size={48} />
              <h3 className="text-2xl font-cyber font-bold text-white">
                Aprendizado <span className="text-neon-blue neon-text">Contínuo</span>
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Sempre em busca de novas tecnologias e metodologias para entregar 
                soluções mais eficientes e inovadoras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
