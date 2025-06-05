import { ExternalLink, Github, Code, Zap, Globe, Calculator, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'BNG Metalmecânica - Site Institucional',
      description: 'Site institucional completo para empresa metalmecânica com design moderno, seções sobre serviços, certificações e equipamentos. Interface responsiva e profissional.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Design Responsivo'],
      image: '/lovable-uploads/165ebcaa-f088-4e54-95d1-451558b017fa.png',
      liveUrl: 'https://bngnovo.netlify.app/',
      githubUrl: 'https://github.com/Morandi2707/BNG',
      featured: true,
      icon: Globe
    },
    {
      title: 'Calculadora de Investimentos com Dashboard',
      description: 'Aplicação interativa para cálculos de investimentos com dashboards visuais, gráficos de progressão e tabelas detalhadas. Interface intuitiva e moderna.',
      tech: ['React.js', 'JavaScript', 'Charts.js', 'CSS3'],
      image: '/lovable-uploads/c14048a2-c163-4a95-a2cb-86468185a08c.png',
      liveUrl: 'https://caluladora332.netlify.app/',
      githubUrl: 'https://github.com/Morandi2707/projetoCalculadoraInvestimentos',
      featured: false,
      icon: Calculator
    },
    {
      title: 'Rocket.Chat - Build Open Source',
      description: 'Implementação e configuração do Rocket.Chat com Docker. Plataforma de comunicação empresarial self-hosted com customizações específicas.',
      tech: ['Docker', 'Node.js', 'MongoDB', 'DevOps'],
      image: '/lovable-uploads/87763aff-42f4-479b-8156-1545229ceae3.png',
      liveUrl: '#',
      githubUrl: 'https://github.com/Morandi2707/Rocket.Chat',
      featured: false,
      icon: MessageSquare
    }
  ];

  return (
    <div className="py-20 px-4 bg-dark-200/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-6">
            Projetos & <span className="text-neon-pink neon-text">Demonstrações</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Showcases de soluções desenvolvidas com diferentes tecnologias e abordagens
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`cyber-border rounded-lg overflow-hidden card-glow animate-slide-up ${
                project.featured ? 'lg:grid lg:grid-cols-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`${project.featured ? '' : 'p-6'}`}>
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-300/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-neon-blue hover:bg-neon-blue/80 text-dark-300"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-300"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={16} className="mr-1" />
                        Código
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  {project.featured && <Zap className="text-neon-pink" size={20} />}
                  <project.icon className="text-neon-blue" size={20} />
                  <h3 className="text-xl font-cyber font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-dark-300 border border-neon-blue/30 rounded-full text-neon-blue text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-neon-blue hover:bg-neon-blue/80 text-dark-300"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Ver Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-300"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Código
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="cyber-border rounded-lg p-8 matrix-bg">
            <div className="space-y-4">
              <Code className="text-neon-blue mx-auto" size={48} />
              <h3 className="text-2xl font-cyber font-bold text-white">
                Mais Projetos <span className="text-neon-blue neon-text">em Breve</span>
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Constantemente desenvolvendo novas soluções e experimentando com 
                tecnologias emergentes. Acompanhe para ver os próximos lançamentos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
