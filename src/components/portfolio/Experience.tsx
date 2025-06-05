
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Assistente de TI',
      company: 'BNG Metalmecânica Ltda',
      period: 'Janeiro 2025 - Presente',
      location: 'Presente',
      activities: [
        'Infraestrutura e manutenção de sistemas',
        'Suporte técnico especializado',
        'Desenvolvimento de sistemas no-code/low-code',
        'Automação de processos empresariais',
        'Gestão de banco de dados',
        'Implementação de soluções tecnológicas inovadoras'
      ],
      color: 'border-neon-blue',
      bgColor: 'bg-neon-blue/5'
    }
  ];

  return (
    <div className="py-20 px-4 bg-dark-200/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-6">
            Experiência <span className="text-neon-purple neon-text">Profissional</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Minha jornada profissional construindo soluções tecnológicas inovadoras
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`cyber-border rounded-lg p-8 card-glow ${exp.bgColor} animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-2xl font-cyber font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-xl text-neon-blue neon-text font-semibold">
                      {exp.company}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="text-lg font-cyber font-bold text-neon-purple neon-text">
                    Principais Atividades
                  </h5>
                  <ul className="space-y-2">
                    {exp.activities.map((activity, actIndex) => (
                      <li
                        key={actIndex}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <ChevronRight size={16} className="text-neon-cyan mt-0.5 flex-shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="cyber-border rounded-lg p-6 inline-block">
            <p className="text-neon-blue neon-text font-cyber font-bold">
              + Mais projetos e experiências em desenvolvimento
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
