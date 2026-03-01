import {defineStore} from 'pinia';

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
  contact: {
    whatsapp: string;
    location: string;
    age: number;
  };
  stats: Stat[];
}

export const usePortfolioStore = defineStore('portfolio', {
  state: (): {portfolio: PortfolioData} => ({
    portfolio: {
      summary:
      
        'Desenvolvedor Web com experiência em HTML, CSS, JavaScript, PHP e Tailwind, atuando na criação de sistemas e interfaces modernas. Experiência na implementação e gestão de ambientes Moodle para EAD e na criação do sistema de pedidos PedeBem, focando em soluções digitais modernas e eficientes para o mercado online. ' + 'Formação em Educação e Música como base complementar à atuação tecnológica.'
        ,
      experiences: [
        {
          company: 'Autônomo / Consultoria Tech',
          role: 'Web Designer e Desenvolvedor',
          period: 'Longa data',
          achievements: [
            'Desenvolvimento de interfaces modernas utilizando CSS, Javascript, Bootstrap e Tailwind.',
            'Implementação de funcionalidades dinâmicas e integração de sistemas com PHP e Ajax.',
            'Criação e manutenção do sistema de pedidos PedeBem, otimizando o fluxo de vendas online.',
          ],
        },
        {
          company: 'Instituições de Ensino e EAD',
          role: 'Especialista em Moodle e Gestor de Projetos Online',
          period: 'Contínuo',
          achievements: [
            'Configuração e administração técnica da plataforma Moodle para ambientes virtuais de aprendizagem.',
            'Aplicação de metodologias de Gerência de Projetos Online para estruturação de cursos e fluxos de trabalho.',
            'Desenvolvimento de assistentes virtuais e automação de atendimento via Typebot.',
          ],
        },
        {
          company: 'Atuação Eclesiástica e Musical',
          role: 'Especialista em Música e Regência',
          period: 'Contínuo',
          achievements: [
            'Atuação especializada em Música na Igreja, unindo teoria musical e extensão prática.',
            'Regente de coro de vozes.',
            'Aplicação de conhecimentos avançados de Licenciatura em Música para o desenvolvimento de grupos vocais.',
          ],
        },
        {
          company: 'Educação Particular',
          role: 'Professor de Instrumentos Musicais',
          period: 'Contínuo',
          achievements: [
            'Instrução técnica personalizada em Violão, Teclado e Flauta Doce.',
            'Aplicação de didática baseada na formação em Magistério para diferentes faixas etárias.',
            'Desenvolvimento de material pedagógico para ensino teórico e prático.',
          ],
        },
      ],
      hardSkills: ['CSS', 'JavaScript', 'PHP', 'Ajax', 'Bootstrap', 'Tailwind', 'Typebot', 'Moodle', 'Gerência de Projetos Online'],
      softSkills: ['Comunicação empática', 'Didática', 'Organização', 'Gestão de tempo', 'Escuta ativa', 'Criatividade'],
      projects: [
        {
          name: 'PedeBem',
          description: 'Sistema de pedidos customizado desenvolvido para agilizar processos comerciais e interação com o cliente.',
          technologies: ['PHP', 'Javascript', 'CSS', 'Bootstrap'],
          url: 'https://pedebem.app.br/',
        },
        {
          name: 'Automações Inteligentes',
          description: 'Desenvolvimento de bots de atendimento e triagem utilizando a plataforma Typebot para otimização de leads.',
          technologies: ['Typebot', 'API Integration', 'Logic Flow'],
          url: 'N/A',
        },
      ],
      contact: {
        whatsapp: '27 997894471',
        location: 'Espírito Santo, Brasil',
        age: 46,
      },
      stats: [
        {label: 'Web Design', value: 92},
        {label: 'Gestão de Projetos', value: 86},
        {label: 'EAD/Moodle', value: 88},
        {label: 'Desenvolvimento PHP', value: 80},
      ],
    },
  }),
});
