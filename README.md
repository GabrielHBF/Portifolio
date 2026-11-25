# Gabriel Henrique — Software Engineering Portfolio

Portfólio técnico em Angular com navegação por seções, estudos de arquitetura interativos e conteúdo mantido em módulos de dados TypeScript.

## Requisitos

- Node.js 24.15.0 ou superior (compatível com Angular CLI 22)
- npm

## Desenvolvimento

```bash
npm install
npm start
```

O servidor local fica disponível em `http://localhost:4200`.

## Build de produção

```bash
npm run build
```

Os artefatos de deploy são gerados em `dist/gabriel-portfolio/browser`.

## Organização

- `src/app/features/`: páginas e seções standalone.
- `src/app/data/`: perfil, projetos, frentes de engenharia, tecnologias e diagramas.
- `src/app/app.routes.ts`: rotas Angular.
- `src/styles.scss`: tokens visuais, layout responsivo e acessibilidade.

O idioma padrão é português brasileiro. A base de idiomas suportados fica em `src/app/i18n/locales.ts`; traduções em inglês podem ser adicionadas ali e conectadas às features sem misturar os dados dos projetos com os componentes.

## Dados de contato

Configure o endereço de e-mail em `src/app/data/profile.ts`. Quando preenchido, a seção de contato habilita o link `mailto:` e o botão para copiar.

O case de `Management.AiConversation` descreve apenas elementos conferidos nos arquivos públicos do repositório, e pode ser atualizado em `src/app/data/projects.ts`.
