# Gabriel Henrique — Software Engineering Portfolio

Portfólio técnico desenvolvido em Angular para apresentar projetos, práticas de engenharia backend e conceitos de arquitetura de software. A interface tem tema escuro por padrão, oferece alternância de tema e foi organizada para telas desktop e dispositivos móveis.

## Requisitos

- Node.js `^22.22.3`, `^24.15.0` ou `>=26.0.0` (versão recomendada: `24.15.0`, definida em `.nvmrc`)
- npm

## Executar localmente

```bash
npm install
npm start
```

Abra `http://localhost:4200`. O servidor de desenvolvimento atualiza a página quando os arquivos são alterados.

Para gerar novamente o build de desenvolvimento enquanto edita:

```bash
npm run watch
```

## Build de produção

```bash
npm run build
```

Os arquivos prontos para publicação são gerados em `dist/gabriel-portfolio/browser`. Hospede esse diretório em um serviço de arquivos estáticos. Caso o provedor não ofereça fallback automático de SPA, configure as rotas desconhecidas para servir `index.html`.

## Funcionalidades

- Navegação por seções com Angular Router e menu responsivo.
- Alternância entre temas escuro e claro.
- Architecture Lab com diagramas SVG exploráveis: fluxo em camadas, CQRS, agentes de IA e RAG.
- Inspeção interativa dos componentes dos diagramas, com suporte a teclado.
- Seções de experiência técnica, estudo de caso, tecnologias e princípios de engenharia.
- Contato configurável, link de e-mail e ação para copiar o endereço.
- Metadados básicos para mecanismos de busca e compartilhamento social.
- Preferência por movimento reduzido respeitada nas animações.

Os diagramas são explicações conceituais; não representam automaticamente a arquitetura do projeto em destaque. O estudo de `Management.AiConversation` é mantido separado e descreve somente informações confirmadas no repositório público.

## Estrutura do projeto

```text
src/
├── app/
│   ├── data/                 # Perfil, projetos, experiência, tecnologias e diagramas
│   ├── features/
│   │   ├── architecture/    # Architecture Lab
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── overview/        # Página e introdução do portfólio
│   │   ├── projects/
│   │   └── technology-stack/
│   ├── i18n/                # Identificadores e idioma padrão
│   ├── app.routes.ts
│   └── app.config.ts
├── index.html
└── styles.scss              # Design tokens, tipografia e estilos responsivos
```

Os componentes standalone cuidam da apresentação; os conteúdos editáveis ficam em `src/app/data/`. Para atualizar o endereço de contato ou os links profissionais, edite `src/app/data/profile.ts`. Para incluir projetos, siga a interface `ProjectCaseStudy` e acrescente uma entrada em `src/app/data/projects.ts`.

## Idiomas

O idioma atual da interface é português brasileiro. `src/app/i18n/locales.ts` define `pt-BR` como idioma padrão e `en` como idioma planejado; as traduções em inglês ainda não estão implementadas.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run watch` | Observa alterações e recompila em modo de desenvolvimento |

O projeto ainda não possui uma suíte de testes automatizados configurada.
