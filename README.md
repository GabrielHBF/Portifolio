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

## Publicar no GitHub Pages

O workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) compila e publica o portfólio pelo GitHub Actions. Ele é executado em pull requests para validar o build, em pushes para `main` e também pode ser iniciado manualmente. A publicação usa o endereço-base `/Portifolio/` e inclui `404.html` como fallback para a aplicação.

Para habilitar a publicação:

1. Envie o projeto para a branch `main` do repositório `Portifolio`.
2. No GitHub, abra **Settings → Pages → Build and deployment**.
3. Em **Source**, selecione **GitHub Actions**.
4. Aguarde a execução de **Build and deploy to GitHub Pages** na aba **Actions**. Após a primeira publicação, o endereço estará disponível em `https://gabrielhbf.github.io/Portifolio/`.

Para validar localmente o mesmo build destinado ao Pages:

```bash
npx ng build --configuration production --base-href=/Portifolio/
```

O GitHub Pages não compila o projeto Angular. O workflow gera o conteúdo estático e publica os arquivos de `dist/gabriel-portfolio/browser`; não é necessário commitar a pasta `dist/` nem configurar a publicação por uma pasta `/docs`.

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

| Comando         | Descrição                                                 |
| --------------- | --------------------------------------------------------- |
| `npm start`     | Inicia o servidor de desenvolvimento                      |
| `npm run build` | Gera o build de produção                                  |
| `npm run watch` | Observa alterações e recompila em modo de desenvolvimento |

O projeto ainda não possui uma suíte de testes automatizados configurada.
