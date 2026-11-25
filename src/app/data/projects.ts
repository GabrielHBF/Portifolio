export interface ProjectCaseStudy {
  name: string;
  category: string;
  repository: string;
  overview: string;
  problem: string;
  approach: string;
  implementation: string[];
  technologies: string[];
  architecture: string[];
}

export const projects: ProjectCaseStudy[] = [
  {
    name: 'Management.AiConversation',
    category: 'PERSONAL PROJECT / AI ENGINEERING',
    repository: 'https://github.com/GabrielHBF/Management.AiConversation',
    overview:
      'Repositório público voltado a aplicações de conversação com IA. A solução está organizada em projetos separados para API, Application, Domain, Infrastructure e CrossCutting.',
    problem:
      'Explorar como capacidades de agentes de IA podem ser integradas a uma aplicação backend estruturada.',
    approach:
      'A API registra a configuração de serviços, integrações HTTP, MongoDB, plugins do Kernel e agentes antes de mapear os controllers.',
    implementation: [
      'Inicialização e composição de dependências em ASP.NET Core.',
      'Projetos distintos para API, aplicação, domínio, infraestrutura e preocupações transversais.',
      'Configuração de agentes e plugins do Kernel no fluxo de inicialização.',
      'Prompts incluídos como recursos da aplicação.',
    ],
    technologies: [
      '.NET 10',
      'ASP.NET Core',
      'Semantic Kernel Agents.Core',
      'MongoDB.Driver',
      'MediatR integration',
    ],
    architecture: [
      'API → Application → Domain',
      'API → CrossCutting',
      'Infrastructure → Application',
      'Semantic Kernel Agents e MongoDB na Infrastructure',
    ],
  },
];
