
import { Code, Server, Database, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend',
      description: 'JavaScript, React.js, HTML5, CSS3, Responsive Design',
      color: 'text-neon-blue'
    },
    {
      icon: Server,
      title: 'Backend',
      description: 'Python, Node.js, API Development, Docker',
      color: 'text-neon-purple'
    },
    {
      icon: Database,
      title: 'Database',
      description: 'SQL, NoSQL, Database Design, Data Management',
      color: 'text-neon-cyan'
    },
    {
      icon: Zap,
      title: 'No-Code/Low-Code',
      description: 'Automação, Integrações, Soluções Rápidas',
      color: 'text-neon-pink'
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-6">
            <span className="text-neon-blue neon-text">Sobre</span> Mim
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor especializado em soluções criativas e eficientes, com experiência 
            em tecnologias modernas e uma paixão por transformar problemas complexos em 
            soluções elegantes e funcionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="cyber-border rounded-lg p-6 card-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center space-y-4">
                <div className={`inline-flex p-3 rounded-full bg-dark-200 ${skill.color}`}>
                  <skill.icon size={24} />
                </div>
                
                <h3 className="text-xl font-cyber font-bold text-white">
                  {skill.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 cyber-border rounded-lg p-8 matrix-bg">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-cyber font-bold text-neon-blue neon-text">
              Minha Filosofia
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              Acredito que a tecnologia deve ser uma ferramenta para simplificar e melhorar 
              a vida das pessoas. Cada linha de código que escrevo é pensada para criar 
              experiências intuitivas, performáticas e que realmente agreguem valor aos usuários.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
