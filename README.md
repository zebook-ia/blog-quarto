# Blog do Professor Gabriel Ramos

## Introdução
Este é o repositório do blog pessoal do **Professor Gabriel Ramos**, implementado com [Docusaurus](https://docusaurus.io). O objetivo do projeto é compartilhar técnicas de estudo, recomendações de ferramentas e posts sobre tecnologia. Também há uma área administrativa para publicação de artigos.


O site inclui botões de "copiar para a área de transferência" em todos os blocos de código e suporte a gráficos [Mermaid](https://mermaid.js.org/).

## Páginas Principais

- **Home** (`src/pages/index.md`)
- **Técnicas de Estudo** (`docs/tecnicas-de-estudo.md`)
- **Ferramentas** (`docs/ferramentas.md`)
- **Blog** (`blog/`)
- **Contato** (`src/pages/contato.md`)

Um manual detalhado de configuração e publicação está disponível em [docs/manual.md](docs/manual.md).

## Estrutura do Repositório

```
blog-quarto/
  blog/                # Artigos do blog em Markdown
  docs/                # Documentação e páginas extras
  src/pages/           # Páginas personalizadas, como Home e Contato
  docusaurus.config.js # Configuração do Docusaurus
  server.js            # API Express para administrar posts
```

## Instalação

1. Certifique-se de ter **Node.js** e **Git** instalados.
2. Clone o repositório:
   ```bash
   git clone https://seu-repositorio/blog-docusaurus.git
   cd blog-docusaurus
   ```
3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

## Como Usar

### Ambiente de Desenvolvimento

- Inicie o servidor de desenvolvimento do Docusaurus:
  ```bash
  npm start
  ```
  A aplicação ficará disponível em `http://localhost:3000`.

### Publicação

- Gere os arquivos estáticos:
  ```bash
  npm run build
  ```
- Inicie o servidor Express com a API e o site estático:
  ```bash
  node server.js
  ```

O painel administrativo está em `http://localhost:3001/admin` e permite enviar novos posts em Markdown.

### Edição Manual

- Crie posts adicionando arquivos em `blog/`.
- Edite páginas em `docs/` ou `src/pages/`.

## Exemplos de Uso da API

Adicionar um novo post via terminal:

```bash
curl -X POST http://localhost:3001/api/posts \
  -d "slug=novo-post" \
  -d "title=Meu Post" \
  --data-urlencode "content=Conteúdo em Markdown"
```

Listar arquivos existentes:

```bash
curl http://localhost:3001/api/posts
```

Remover um post:

```bash
curl -X DELETE http://localhost:3001/api/posts/novo-post
```

## Contato

Dúvidas ou sugestões? Entre em contato pelo e-mail [contato@example.com](mailto:contato@example.com).
