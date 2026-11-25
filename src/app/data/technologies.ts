export interface TechnologyGroup {
  label: string;
  description: string;
  items: string[];
}

export const technologyGroups: TechnologyGroup[] = [
  {
    label: 'Backend',
    description: 'Serviços, contratos e aplicações.',
    items: ['C#', '.NET', 'ASP.NET Core', 'REST APIs'],
  },
  {
    label: 'Architecture',
    description: 'Estrutura e comunicação de sistemas.',
    items: ['Clean Architecture', 'CQRS', 'MediatR', 'Design Patterns', 'Microservices'],
  },
  {
    label: 'AI engineering',
    description: 'Modelos, agentes e recuperação de contexto.',
    items: ['OpenAI', 'OpenAI Agents', 'Semantic Kernel', 'RAG', 'LLMs', 'Embeddings'],
  },
  {
    label: 'Data',
    description: 'Persistência relacional e documental.',
    items: ['SQL Server', 'MongoDB', 'MySQL'],
  },
  {
    label: 'Infrastructure',
    description: 'Entrega e execução de software.',
    items: ['Docker', 'Azure', 'Azure DevOps', 'Git', 'CI/CD'],
  },
];

export const engineeringPrinciples = [
  {
    name: 'Maintainability',
    description: 'Código compreensível e simples de evoluir.',
  },
  {
    name: 'Separation of concerns',
    description: 'Responsabilidades claras entre componentes.',
  },
  {
    name: 'Scalability',
    description: 'Decisões que consideram crescimento e carga.',
  },
  {
    name: 'Clean code',
    description: 'Intenção explícita em nomes, fluxo e estrutura.',
  },
  {
    name: 'Reusability',
    description: 'Soluções consistentes sem duplicação desnecessária.',
  },
  {
    name: 'Reliability',
    description: 'Comportamento previsível diante de falhas.',
  },
  {
    name: 'Continuous learning',
    description: 'Evolução contínua de práticas e repertório técnico.',
  },
];
