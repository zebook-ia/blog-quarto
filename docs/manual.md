---
id: manual
title: Manual de Configuração e Publicação
---

Este documento explica como configurar e publicar o blog do professor Gabriel Ramos utilizando o framework **Docusaurus**. As instruções foram escritas para usuários com conhecimentos básicos em tecnologia.

## Requisitos Mínimos

- **Computador**: MacBook M3 com 8GB de RAM.
- **Sistema Operacional**: macOS atualizado.
- **Softwares Necessários**:
  - [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/).
  - [Git](https://git-scm.com) para controlar o código.
  - Um editor de código de sua preferência (por exemplo, Visual Studio Code).

## Configurando o Ambiente

1. Instale o Node.js e o Git seguindo as instruções para macOS.
2. Clone o repositório do blog:
   ```bash
   git clone https://seu-repositorio/blog-docusaurus.git
   cd blog-docusaurus
   ```
3. Instale as dependências do projeto:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento para visualizar o site:
   ```bash
   npm start
   ```

## Estrutura do Projeto

- `docusaurus.config.js`: configuração principal do site.
- `src/pages/`: páginas personalizadas como Home e Contato.
- `docs/`: documentos com Técnicas de Estudo, Ferramentas e este manual.
- `blog/`: diretório onde ficam os artigos do blog.

## Administração e API

O projeto possui um servidor Express (`server.js`) responsável por uma API simples para gerenciar posts.

- `POST /api/posts` cria um novo artigo a partir de `slug`, `title` e `content`.
- `GET /api/posts` lista os arquivos existentes no diretório `blog/`.
- `DELETE /api/posts/:slug` remove o artigo correspondente.

Além da API, existe uma página em `/admin` que envia dados para esses endpoints por meio de um formulário.

## Deployment em VPS Ubuntu

As instruções a seguir assumem que você possui acesso à VPS com Ubuntu 20.04.6 LTS (GNU/Linux 5.4.0-105-generic x86_64).

1. **Acesse a VPS** pelo terminal usando SSH:
   ```bash
   ssh usuario@seu-servidor
   ```
2. **Instale Node.js e Git** na VPS:
   ```bash
   sudo apt update
   sudo apt install nodejs npm git -y
   ```
3. **Clone o repositório** na VPS:
   ```bash
   git clone https://seu-repositorio/blog-docusaurus.git
   cd blog-docusaurus
   ```
4. **Instale as dependências e gere os arquivos estáticos**:
   ```bash
   npm install
   npm run build
   ```
5. **Configure o servidor web** (Nginx) para servir o diretório `build/` e iniciar o Express com a API:
   ```bash
   sudo apt install nginx -y
   sudo rm -rf /var/www/html/*
   sudo cp -r build/* /var/www/html/
   nohup node server.js &
   ```
6. **Recarregue o Nginx** para aplicar as alterações:
   ```bash
   sudo systemctl restart nginx
   ```

Após esses passos o blog estará acessível pelo endereço configurado em sua VPS.

## Atualizações Futuras

Para publicar novas páginas ou posts:

1. Utilize a API local em `/api/posts` ou o painel `/admin` para criar novos artigos.
2. Caso prefira, edite arquivos `.md` diretamente no repositório.
3. Teste as alterações com `npm start`.
4. Envie para o Git e atualize a VPS executando `npm run build` e reiniciando o `server.js`.

Seguindo este guia você conseguirá configurar, manter e publicar o blog do professor Gabriel Ramos com facilidade.
