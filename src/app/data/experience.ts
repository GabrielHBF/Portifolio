export interface EngineeringPractice {
  number: string;
  title: string;
  focus: string;
  details: string[];
  tags: string[];
}

export const engineeringPractice: EngineeringPractice[] = [
  {
    number: '01',
    title: 'APIs & backend',
    focus:
      'Construção de serviços com ASP.NET Core, contratos REST e regras de negócio organizadas.',
    details: [
      'Implementação de APIs e componentes backend.',
      'Middleware para propagação de JWT entre integrações.',
      'Análise e correção de problemas em produção.',
    ],
    tags: ['C#', 'ASP.NET Core', 'REST'],
  },
  {
    number: '02',
    title: 'Integração & dados',
    focus:
      'Comunicação entre serviços e acesso a dados com atenção aos limites de cada componente.',
    details: [
      'Integração de microsserviços por APIs e mensageria.',
      'Filtros dinâmicos com Specification Pattern.',
      'Consultas MongoDB e Aggregation Pipelines.',
    ],
    tags: ['Microservices', 'MongoDB', 'Patterns'],
  },
  {
    number: '03',
    title: 'IA aplicada',
    focus: 'Orquestração de modelos e ferramentas em aplicações conectadas a sistemas backend.',
    details: [
      'Construção de agentes utilizando OpenAI Agents.',
      'Orquestração de ferramentas com Semantic Kernel.',
      'Integração de soluções de IA a aplicações backend.',
    ],
    tags: ['LLMs', 'Agents', 'Semantic Kernel'],
  },
];
