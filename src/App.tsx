/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  ExternalLink, 
  ChevronDown, 
  Facebook,
  Linkedin,
  Github,
  Send,
  Code,
  Palette,
  Terminal,
  Cpu,
  Globe,
  Music,
  GraduationCap,
  Briefcase,
  Menu,
  X
} from 'lucide-react';
import { generatePortfolioContent } from './geminiService';

interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
}

interface Stat {
  label: string;
  value: number;
}

interface PortfolioData {
  summary: string;
  experiences: Experience[];
  hardSkills: string[];
  softSkills: string[];
  projects: Project[];
  contact?: {
    whatsapp: string;
    location: string;
    age: number;
  };
  stats?: Stat[];
}

export default function App() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const background = `
          WebDesigner a partir de cursos livres de CSS, Javascript, php, ajax, frameworks bootstrap e tailwind.
          Criação de sistema de pedidos https://pedebem.app.br/.
          Criação de bots com typebot.
          Experiência com MOODLE plataforma de EAD.
          Graduação: Licenciatura em Música.
          Extensão: Música na Igreja.
          Regente de coro de vozes.
          Magistério completo.
          Professor particular de instrumentos musicais: violão, teclado e flauta doce.
          Curso de Gerente de Projetos Online.
          Nome: Sergio Schultz.
          Whatsapp: 27 997894471.
          Idade: 46 anos.
          Moradia: Espírito Santo, Brasil.
        `;
        const content = await generatePortfolioContent("Sergio Schultz", background);
        setData(content);
      } catch (error) {
        console.error("Error fetching portfolio content:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-emerald-400 font-light tracking-widest text-sm uppercase"
        >
          Sintonizando Experiência...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#050505] text-white font-sans selection:bg-emerald-500 selection:text-black scroll-smooth overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'
      }`}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-light tracking-tighter text-emerald-400"
        >
          SERGIO SCHULTZ
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {['Sobre', 'Experiência', 'Projetos', 'Contato'].map((item, i) => (
            <motion.a 
              key={item} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              href={`#${item.toLowerCase()}`} 
              className="text-[11px] uppercase tracking-[0.2em] text-white/50 hover:text-emerald-400 transition-all"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-emerald-400 p-2 z-50"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={false}
        animate={isMenuOpen ? { x: 0 } : { x: '100%' }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed inset-0 bg-[#050505] z-[60] flex flex-col items-center justify-center gap-6 md:hidden"
      >
        <div className="flex flex-col items-center gap-2 w-full px-12">
          {['Sobre', 'Experiência', 'Projetos', 'Contato'].map((item, i) => (
            <motion.a 
              key={item} 
              initial={{ opacity: 0, y: 10 }}
              animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              whileTap={{ scale: 0.95 }}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="w-full py-5 text-center text-lg font-light uppercase tracking-[0.3em] text-emerald-400 border-b border-emerald-500/10 last:border-0"
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isMenuOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex gap-8"
        >
          <a href="https://www.facebook.com/Sergioschultzz" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-5 h-5 text-emerald-500/40 hover:text-emerald-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/sergio-schultz-48b779280/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 text-emerald-500/40 hover:text-emerald-400 transition-colors" />
          </a>
          <a href="https://github.com/schultz196" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 text-emerald-500/40 hover:text-emerald-400 transition-colors" />
          </a>
        </motion.div>

        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-8 right-6 text-emerald-400 p-2"
        >
          <X className="w-8 h-8" />
        </button>
      </motion.div>


      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-24 relative overflow-hidden pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-emerald-500/60 mb-4 block">Web Designer & Educador Musical</span>
            <h1 className="text-6xl md:text-[7vw] font-light leading-[0.9] tracking-tighter mb-8">
              Sergio <br />
              <span className="italic serif text-emerald-400/90">Schultz</span>
            </h1>
            <p className="max-w-xl text-lg text-white/60 font-light leading-relaxed mb-8 border-l-2 border-emerald-500/30 pl-6">
              {data?.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contato" 
                className="px-8 py-4 bg-emerald-500 text-black rounded-full text-xs uppercase tracking-widest font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
              >
                Vamos Conversar
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projetos" 
                className="px-8 py-4 border border-emerald-500/20 text-emerald-400 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-emerald-500/5 transition-all"
              >
                Ver Projetos
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full md:w-[400px] aspect-square"
          >
            <div className="absolute inset-0 border border-emerald-500/20 rounded-3xl rotate-6 -z-10" />
            <div className="absolute inset-0 border border-emerald-500/10 rounded-3xl -rotate-3 -z-10" />
            <div className="w-full h-full rounded-3xl overflow-hidden border border-emerald-500/30 bg-zinc-900 shadow-2xl shadow-emerald-500/10 group">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                alt="Sergio Schultz"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-5 h-5 text-emerald-500/50 animate-bounce" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 md:px-24 bg-[#080808]">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[11px] uppercase tracking-[0.3em] text-emerald-500/60 mb-8">Proficiência & Entrega</h2>
            <h3 className="text-4xl font-light tracking-tighter mb-8 text-white/90">
              O quanto posso <span className="text-emerald-400 italic serif">impactar</span> sua empresa?
            </h3>
            <p className="text-white/50 font-light leading-relaxed mb-12">
              Minha versatilidade permite atuar desde o design visual até a gestão estratégica de projetos, garantindo uma entrega técnica refinada e humanizada.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-3xl font-light text-emerald-400 mb-2">46</div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">Anos de Experiência</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-3xl font-light text-emerald-400 mb-2">100%</div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">Comprometimento</div>
              </div>
            </div>
          </motion.div>
          
          <div className="space-y-8">
            {data?.stats?.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-end mb-3">
                  <span className="text-xs uppercase tracking-widest text-white/70">{stat.label}</span>
                  <span className="text-xs font-mono text-emerald-400">{stat.value}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut", delay: 0.3 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 px-6 md:px-24 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-12">
              <Terminal className="w-5 h-5 text-emerald-400" />
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-emerald-500/60">Habilidades Técnicas</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {data?.hardSkills?.map((skill, index) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-2 rounded-xl border border-emerald-500/10 text-xs font-light hover:bg-emerald-500 hover:text-black transition-all cursor-default bg-emerald-500/5"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-12">
              <Palette className="w-5 h-5 text-emerald-400" />
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-emerald-500/60">Soft Skills</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {data?.softSkills?.map((skill, index) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-2 rounded-xl border border-white/10 text-xs font-light opacity-60 hover:opacity-100 transition-opacity"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiência" className="py-32 px-6 md:px-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full -z-10" />
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-[11px] uppercase tracking-[0.3em] text-emerald-500/60 mb-20"
        >
          Trajetória Profissional
        </motion.h2>
        <div className="space-y-24">
          {data?.experiences?.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="grid md:grid-cols-3 gap-8 group"
            >
              <div className="text-sm text-emerald-500/40 font-mono pt-2">{exp.period}</div>
              <div className="md:col-span-2">
                <h3 className="text-3xl font-light mb-2 group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
                <div className="text-white/30 mb-8 uppercase tracking-widest text-[10px] flex items-center gap-3">
                  <Briefcase className="w-3 h-3" />
                  {exp.company}
                </div>
                <ul className="space-y-6">
                  {exp.achievements?.map((ach, i) => (
                    <li key={i} className="text-white/60 font-light leading-relaxed flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/30 mt-2 shrink-0 group-hover:bg-emerald-500 transition-colors" /> 
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-32 px-6 md:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div>
            <h2 className="text-[11px] uppercase tracking-[0.3em] text-emerald-500/60 mb-8">Projetos em Destaque</h2>
            <h3 className="text-5xl font-light tracking-tighter">Soluções <span className="italic serif text-emerald-400">Digitais</span></h3>
          </div>
          <p className="max-w-xs text-white/40 text-sm font-light">
            Uma seleção de trabalhos que demonstram minha capacidade técnica e visão de produto.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {data?.projects?.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-white/5 border border-white/5 flex flex-col justify-between min-h-[400px] group hover:border-emerald-500/20 transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-light mb-4 group-hover:text-emerald-400 transition-colors">{project.name}</h3>
                <p className="text-white/50 font-light leading-relaxed mb-8">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span key={tech} className="text-[10px] uppercase tracking-widest text-emerald-500/40 border border-emerald-500/10 px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex justify-end mt-12">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.url || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-white/10 flex items-center gap-3 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  Ver Projeto <ExternalLink className="w-3 h-3" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-32 px-6 md:px-24 border-t border-white/10 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/5 to-transparent -z-10" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-emerald-500/60 mb-12">Vamos Conversar?</h2>
          <h3 className="text-5xl md:text-7xl font-light tracking-tighter mb-16 leading-tight">
            Pronto para levar seu <br /> <span className="text-emerald-400 italic serif">negócio</span> ao próximo nível?
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {data?.contact?.whatsapp && (
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/55${data.contact.whatsapp.replace(/\D/g, '')}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-10 py-5 bg-emerald-500 text-black rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-emerald-500/20"
              >
                <Send className="w-4 h-4" />
                WhatsApp
              </motion.a>
            )}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:contato@sergioschultz.com" 
              className="flex items-center gap-4 px-10 py-5 border border-emerald-500/20 text-emerald-400 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-emerald-500/5 transition-all"
            >
              <Mail className="w-4 h-4" /> Enviar Email
            </motion.a>
          </div>

          <div className="mt-20 flex justify-center gap-8">
            {[
              { id: 'facebook', url: 'https://www.facebook.com/Sergioschultzz' },
              { id: 'linkedin', url: 'https://www.linkedin.com/in/sergio-schultz-48b779280/' },
              { id: 'github', url: 'https://github.com/schultz196' }
            ].map((platform, i) => (
              <motion.a 
                key={platform.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                href={platform.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-5 rounded-2xl border border-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-all"
              >
                {platform.id === 'facebook' && <Facebook className="w-6 h-6 text-white/40 hover:text-emerald-400 transition-colors" />}
                {platform.id === 'linkedin' && <Linkedin className="w-6 h-6 text-white/40 hover:text-emerald-400 transition-colors" />}
                {platform.id === 'github' && <Github className="w-6 h-6 text-white/40 hover:text-emerald-400 transition-colors" />}
              </motion.a>
            ))}
          </div>

          {data?.contact?.location && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="mt-20 text-[10px] uppercase tracking-[0.4em] text-white/20"
            >
              {data.contact.location} • {data.contact.age} Anos
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] uppercase tracking-[0.3em]">
        <div>© 2024 SERGIO SCHULTZ • WEB DESIGNER & GESTOR</div>
        <div className="flex gap-8">
          <span className="hover:text-emerald-400 transition-colors cursor-default">Privacidade</span>
          <span className="hover:text-emerald-400 transition-colors cursor-default">Termos</span>
        </div>
      </footer>
    </div>
  );
}
