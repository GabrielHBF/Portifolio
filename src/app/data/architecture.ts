export interface DiagramNode {
  id: string;
  title: string;
  subtitle: string;
  x: number;
  y: number;
  width: number;
  description: string;
}

export interface DiagramEdge {
  id: string;
  path: string;
}

export interface ArchitectureDiagram {
  id: string;
  label: string;
  eyebrow: string;
  summary: string;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
}

export const architectureDiagrams: ArchitectureDiagram[] = [
  {
    id: 'layers',
    label: 'Layered flow',
    eyebrow: 'REQUEST / DEPENDENCY DIRECTION',
    summary:
      'Uma requisição atravessa a API e a aplicação. O domínio concentra regras; infraestrutura implementa integrações acessadas por abstrações.',
    nodes: [
      {
        id: 'client',
        title: 'CLIENT',
        subtitle: 'request',
        x: 174,
        y: 14,
        width: 140,
        description: 'Origina a chamada HTTP e recebe a resposta da API.',
      },
      {
        id: 'api',
        title: 'API',
        subtitle: 'ASP.NET Core',
        x: 174,
        y: 88,
        width: 140,
        description: 'Recebe HTTP, configura dependências e encaminha a chamada aos controllers.',
      },
      {
        id: 'application',
        title: 'APPLICATION',
        subtitle: 'use cases',
        x: 174,
        y: 162,
        width: 140,
        description: 'Coordena operações da aplicação e mantém o fluxo de casos de uso.',
      },
      {
        id: 'domain',
        title: 'DOMAIN',
        subtitle: 'business rules',
        x: 30,
        y: 246,
        width: 140,
        description: 'Representa regras e conceitos centrais do domínio.',
      },
      {
        id: 'infrastructure',
        title: 'INFRASTRUCTURE',
        subtitle: 'integrations',
        x: 318,
        y: 246,
        width: 140,
        description: 'Implementa integrações externas e persistência.',
      },
      {
        id: 'database',
        title: 'MONGODB',
        subtitle: 'document store',
        x: 318,
        y: 326,
        width: 140,
        description: 'Persistência documental utilizada pela infraestrutura.',
      },
    ],
    edges: [
      { id: 'client-api', path: 'M244 66 V88' },
      { id: 'api-application', path: 'M244 140 V162' },
      { id: 'application-domain', path: 'M174 188 H100 V246' },
      { id: 'application-infrastructure', path: 'M314 188 H388 V246' },
      { id: 'infrastructure-db', path: 'M388 298 V326' },
    ],
  },
  {
    id: 'cqrs',
    label: 'CQRS',
    eyebrow: 'COMMAND / QUERY SEPARATION',
    summary:
      'Comandos expressam intenção de alterar estado; consultas retornam dados. Os fluxos podem compartilhar persistência sem compartilhar handlers.',
    nodes: [
      {
        id: 'request',
        title: 'REQUEST',
        subtitle: 'intent',
        x: 174,
        y: 14,
        width: 140,
        description: 'A entrada representa uma intenção de escrita ou leitura.',
      },
      {
        id: 'command',
        title: 'COMMAND',
        subtitle: 'state change',
        x: 30,
        y: 110,
        width: 140,
        description: 'Solicita uma operação que altera o estado do sistema.',
      },
      {
        id: 'query',
        title: 'QUERY',
        subtitle: 'read request',
        x: 318,
        y: 110,
        width: 140,
        description: 'Solicita dados sem alterar o estado do sistema.',
      },
      {
        id: 'command-handler',
        title: 'COMMAND HANDLER',
        subtitle: 'write path',
        x: 30,
        y: 216,
        width: 140,
        description: 'Valida e coordena a execução da intenção de escrita.',
      },
      {
        id: 'query-handler',
        title: 'QUERY HANDLER',
        subtitle: 'read path',
        x: 318,
        y: 216,
        width: 140,
        description: 'Obtém e projeta os dados solicitados pela consulta.',
      },
      {
        id: 'store',
        title: 'DATA STORE',
        subtitle: 'persistence',
        x: 174,
        y: 326,
        width: 140,
        description: 'Persistência consultada pelos fluxos de escrita e leitura.',
      },
    ],
    edges: [
      { id: 'request-command', path: 'M214 66 L100 110' },
      { id: 'request-query', path: 'M274 66 L388 110' },
      { id: 'command-handler', path: 'M100 162 V216' },
      { id: 'query-handler', path: 'M388 162 V216' },
      { id: 'handler-store', path: 'M100 268 L214 326' },
      { id: 'query-store', path: 'M388 268 L274 326' },
    ],
  },
  {
    id: 'agents',
    label: 'AI agents',
    eyebrow: 'TOOL-USE ORCHESTRATION',
    summary:
      'A aplicação prepara o contexto; um orquestrador decide quando chamar ferramentas. O modelo propõe ações, e a aplicação executa integrações permitidas.',
    nodes: [
      {
        id: 'user',
        title: 'USER',
        subtitle: 'prompt',
        x: 174,
        y: 14,
        width: 140,
        description: 'Envia a solicitação e recebe a resposta consolidada.',
      },
      {
        id: 'api',
        title: 'BACKEND API',
        subtitle: 'application boundary',
        x: 174,
        y: 88,
        width: 140,
        description: 'Autentica a chamada e coordena a execução do caso de uso.',
      },
      {
        id: 'orchestrator',
        title: 'ORCHESTRATOR',
        subtitle: 'agent + tools',
        x: 174,
        y: 162,
        width: 140,
        description: 'Gerencia contexto, seleção de ferramentas e continuidade da execução.',
      },
      {
        id: 'model',
        title: 'LLM',
        subtitle: 'reasoning',
        x: 30,
        y: 260,
        width: 140,
        description: 'Interpreta contexto e pode solicitar uma ferramenta ao orquestrador.',
      },
      {
        id: 'tools',
        title: 'TOOLS',
        subtitle: 'controlled actions',
        x: 318,
        y: 260,
        width: 140,
        description: 'Funções explicitamente registradas para executar ações no sistema.',
      },
      {
        id: 'systems',
        title: 'SYSTEMS',
        subtitle: 'APIs / data',
        x: 318,
        y: 340,
        width: 140,
        description: 'Serviços e dados acessados somente pelas ferramentas autorizadas.',
      },
    ],
    edges: [
      { id: 'user-api', path: 'M244 66 V88' },
      { id: 'api-orchestrator', path: 'M244 140 V162' },
      { id: 'orchestrator-model', path: 'M174 188 H100 V260' },
      { id: 'orchestrator-tools', path: 'M314 188 H388 V260' },
      { id: 'tools-systems', path: 'M388 312 V340' },
    ],
  },
  {
    id: 'rag',
    label: 'RAG',
    eyebrow: 'RETRIEVAL-AUGMENTED GENERATION',
    summary:
      'A pergunta é convertida em busca; trechos relevantes são recuperados e adicionados ao contexto enviado ao modelo antes de gerar a resposta.',
    nodes: [
      {
        id: 'question',
        title: 'QUESTION',
        subtitle: 'user input',
        x: 174,
        y: 14,
        width: 140,
        description: 'Pergunta do usuário que precisa de contexto relevante.',
      },
      {
        id: 'embed',
        title: 'EMBEDDING',
        subtitle: 'query vector',
        x: 174,
        y: 94,
        width: 140,
        description: 'Representação vetorial da pergunta usada na busca semântica.',
      },
      {
        id: 'search',
        title: 'RETRIEVAL',
        subtitle: 'similarity search',
        x: 174,
        y: 174,
        width: 140,
        description: 'Recupera trechos relevantes da base de conhecimento.',
      },
      {
        id: 'knowledge',
        title: 'KNOWLEDGE BASE',
        subtitle: 'indexed chunks',
        x: 30,
        y: 282,
        width: 140,
        description: 'Documentos preparados, divididos em trechos e indexados.',
      },
      {
        id: 'context',
        title: 'CONTEXT',
        subtitle: 'grounded evidence',
        x: 318,
        y: 282,
        width: 140,
        description: 'Trechos recuperados que fundamentam a resposta gerada.',
      },
      {
        id: 'llm',
        title: 'LLM RESPONSE',
        subtitle: 'grounded output',
        x: 174,
        y: 362,
        width: 140,
        description: 'Resposta elaborada com a pergunta e os trechos de contexto.',
      },
    ],
    edges: [
      { id: 'question-embed', path: 'M244 66 V94' },
      { id: 'embed-search', path: 'M244 146 V174' },
      { id: 'search-knowledge', path: 'M174 200 H100 V282' },
      { id: 'search-context', path: 'M314 200 H388 V282' },
      { id: 'context-llm', path: 'M318 308 H244 V362' },
    ],
  },
];
