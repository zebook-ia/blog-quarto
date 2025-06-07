# Blog do Professor Gabriel Ramos

Este \u00e9 o reposit\u00f3rio do blog pessoal do **Professor Gabriel Ramos**, implementado com [Docusaurus](https://docusaurus.io). O projeto apresenta p\u00e1ginas sobre t\u00e9cnicas de estudo e ferramentas, um blog em Markdown e uma \u00e1rea administrativa para cria\u00e7\u00e3o e remo\u00e7\u00e3o de posts.

O site inclui bot\u00f5es de "copiar para a \u00e1rea de transfer\u00eancia" em todos os blocos de c\u00f3digo e suporte a gr\u00e1ficos [Mermaid](https://mermaid.js.org/).

## P\u00e1ginas Principais

- **Home** (`src/pages/index.md`)
- **T\u00e9cnicas de Estudo** (`docs/tecnicas-de-estudo.md`)
- **Ferramentas** (`docs/ferramentas.md`)
- **Blog** (`blog/`)
- **Contato** (`src/pages/contato.md`)

Um manual detalhado de configura\u00e7\u00e3o e publica\u00e7\u00e3o est\u00e1 dispon\u00edvel em [docs/manual.md](docs/manual.md).

## Instala\u00e7\u00e3o

1. Certifique-se de ter **Node.js** e **Git** instalados.
2. Clone o reposit\u00f3rio:
   ```bash
   git clone https://seu-repositorio/blog-docusaurus.git
   cd blog-docusaurus
   ```
3. Instale as depend\u00eancias do projeto:
   ```bash
   npm install
   ```

## Como Usar

### Ambiente de Desenvolvimento

- Inicie o servidor de desenvolvimento do Docusaurus:
  ```bash
  npm start
  ```
  A aplica\u00e7\u00e3o ficar\u00e1 dispon\u00edvel em `http://localhost:3000`.

### Publica\u00e7\u00e3o

- Gere os arquivos est\u00e1ticos:
  ```bash
  npm run build
  ```
- Inicie o servidor Express com a API e o site est\u00e1tico:
  ```bash
  node server.js
  ```

O painel administrativo est\u00e1 em `http://localhost:3001/admin` e permite enviar novos posts em Markdown.

### Edi\u00e7\u00e3o Manual

- Crie posts adicionando arquivos em `blog/`.
- Edite p\u00e1ginas em `docs/` ou `src/pages/`.

## Exemplos de Uso da API

Adicionar um novo post via terminal:

```bash
curl -X POST http://localhost:3001/api/posts \
  -d "slug=novo-post" \
  -d "title=Meu Post" \
  --data-urlencode "content=Conte\u00fado em Markdown"
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

D\u00favidas ou sugest\u00f5es? Entre em contato pelo e-mail [contato@example.com](mailto:contato@example.com).
