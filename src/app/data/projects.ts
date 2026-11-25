export interface ProjectCaseStudy {
  name: string;
  category: string;
  repository: string;
  image?: {
    url: string;
    alt: string;
  };
  resourceLink?: {
    label: string;
    url: string;
  };
  overview: string;
  problem: string;
  approach: string;
  implementation: string[];
  technologies: string[];
  architecture: string[];
  codeSample?: {
    fileName: string;
    label: string;
    content: string;
  };
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
    codeSample: {
      fileName: 'Program.cs',
      label: 'APPLICATION STARTUP',
      content: `builder.Services
  .AddProblemDetails()
  .AddHttpClients(applicationSettings)
  .AddMongo(applicationSettings.MongoSettings)
  .AddKernelPlugins(applicationSettings)
  .AddMediator()
  .AddAgents()
  .AddControllers();

app.MapControllers();`,
    },
    architecture: [
      'API → Application → Domain',
      'API → CrossCutting',
      'Infrastructure → Application',
      'Semantic Kernel Agents e MongoDB na Infrastructure',
    ],
  },
  {
    name: 'HelpWaiter',
    category: 'OPEN-SOURCE LIBRARY / .NET',
    repository: 'https://github.com/GabrielHBF/HelpWaiter',
    image: {
      url: 'projects/helpwaiter.png',
      alt: 'Ícone do repositório HelpWaiter',
    },
    resourceLink: {
      label: 'NuGet 1.1.2',
      url: 'https://www.nuget.org/packages/HelpWaiter',
    },
    overview:
      'Biblioteca .NET para organizar comandos e consultas no estilo CQRS, com uma API de dispatch inspirada no padrão Mediator.',
    problem:
      'Separar o envio de comandos, consultas e notificações da implementação dos respectivos handlers.',
    approach:
      'A abstração IWaiter despacha comandos e consultas para handlers registrados. A extensão AddWaiter descobre handlers nos assemblies informados e os registra na injeção de dependência.',
    implementation: [
      'API IWaiter com operações distintas para comandos, consultas e notificações.',
      'Registro de handlers por varredura dos assemblies informados.',
      'Executores de handlers compilados e armazenados em cache.',
    ],
    technologies: [
      'C#',
      '.NET 10',
      'CQRS',
      'Mediator pattern',
      'Microsoft.Extensions.DependencyInjection.Abstractions 10.0.9',
    ],
    architecture: [
      'Commands e queries separados',
      'Dispatch pela abstração IWaiter',
      'Handlers registrados via dependency injection',
    ],
  },
  {
    name: 'HelpDanfe',
    category: 'OPEN-SOURCE LIBRARY / DOCUMENT PROCESSING',
    repository: 'https://github.com/GabrielHBF/HelpDanfe',
    image: {
      url: 'projects/helpdanfe.png',
      alt: 'Ícone do repositório HelpDanfe',
    },
    resourceLink: {
      label: 'NuGet 1.0.2',
      url: 'https://www.nuget.org/packages/HelpDanfe',
    },
    overview:
      'Biblioteca .NET para extrair dados de documentos DANFE/NF-e em PDF e XML, incluindo informações de empresas, notas, produtos e tributos.',
    problem:
      'Disponibilizar campos de documentos fiscais PDF e XML para processamento em aplicações .NET.',
    approach:
      'O serviço de extração lê o texto do PDF com PdfPig e trata XML com XDocument e mapeadores.',
    implementation: [
      'Extração de texto de PDF usando PdfPig.',
      'Leitura e mapeamento de dados XML com XDocument.',
      'Organização do processamento em serviço de extração e mapeadores.',
    ],
    technologies: [
      'C#',
      '.NET 10',
      'PdfPig 0.1.15',
      'System.Xml.Linq',
      'Microsoft.AspNetCore.Http.Features 5.0.17',
    ],
    architecture: [
      'PDF → PdfPig → extração de texto',
      'XML → XDocument → mapeadores',
      'Serviço de extração de documentos',
    ],
  },
];
