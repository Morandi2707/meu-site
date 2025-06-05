
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Experience from '@/components/portfolio/Experience';
import Certifications from '@/components/portfolio/Certifications';
import Projects from '@/components/portfolio/Projects';
import Contact from '@/components/portfolio/Contact';
import Navigation from '@/components/portfolio/Navigation';
import MatrixBackground from '@/components/portfolio/MatrixBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-300 text-white relative overflow-hidden">
      <MatrixBackground />
      <Navigation />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about" className="relative z-10">
        <About />
      </section>
      
      <section id="experience" className="relative z-10">
        <Experience />
      </section>
      
      <section id="certifications" className="relative z-10">
        <Certifications />
      </section>
      
      <section id="projects" className="relative z-10">
        <Projects />
      </section>
      
      <section id="contact" className="relative z-10">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
