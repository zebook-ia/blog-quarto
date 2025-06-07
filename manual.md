---
id: manual
title: Manual de Configura\u00e7\u00e3o e Publica\u00e7\u00e3o
---

Este documento explica como configurar e publicar o blog do professor Gabriel Ramos utilizando o framework **Docusaurus**. As instru\u00e7\u00f5es foram escritas para usu\u00e1rios com conhecimentos b\u00e1sicos em tecnologia.

## Requisitos M\u00ednimos

- **Computador**: MacBook M3 com 8GB de RAM.
- **Sistema Operacional**: macOS atualizado.
- **Softwares Necess\u00e1rios**:
  - [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/).
  - [Git](https://git-scm.com) para controlar o c\u00f3digo.
  - Um editor de c\u00f3digo de sua prefer\u00eancia (por exemplo, Visual Studio Code).

## Configurando o Ambiente

1. Instale o Node.js e o Git seguindo as instru\u00e7\u00f5es para macOS.
2. Clone o reposit\u00f3rio do blog:
   ```bash
   git clone https://seu-repositorio/blog-docusaurus.git
   cd blog-docusaurus
   ```
3. Instale as depend\u00eancias do projeto:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento para visualizar o site:
   ```bash
   npm start
   ```

## Estrutura do Projeto

- `docusaurus.config.js`: configura\u00e7\u00e3o principal do site.
- `src/pages/`: p\u00e1ginas personalizadas como Home e Contato.
- `docs/`: documentos com T\u00e9cnicas de Estudo, Ferramentas e este manual.
- `blog/`: diret\u00f3rio onde ficam os artigos do blog.

## Administra\u00e7\u00e3o e API

O projeto possui um servidor Express (`server.js`) respons\u00e1vel por uma API simples para gerenciar posts.

- `POST /api/posts` cria um novo artigo a partir de `slug`, `title` e `content`.
- `GET /api/posts` lista os arquivos existentes no diret\u00f3rio `blog/`.
- `DELETE /api/posts/:slug` remove o artigo correspondente.

Al\u00e9m da API, existe uma p\u00e1gina em `/admin` que envia dados para esses endpoints por meio de um formul\u00e1rio.

## Deployment em VPS Ubuntu

As instru\u00e7\u00f5es a seguir assumem que voc\u00ea possui acesso \u00e0 VPS com Ubuntu 20.04.6 LTS (GNU/Linux 5.4.0-105-generic x86_64).

1. **Acesse a VPS** pelo terminal usando SSH:
   ```bash
   ssh usuario@seu-servidor
   ```
2. **Instale Node.js e Git** na VPS:
   ```bash
   sudo apt update
   sudo apt install nodejs npm git -y
   ```
3. **Clone o reposit\u00f3rio** na VPS:
   ```bash
   git clone https://seu-repositorio/blog-docusaurus.git
   cd blog-docusaurus
   ```
4. **Instale as depend\u00eancias e gere os arquivos est\u00e1ticos**:
   ```bash
   npm install
   npm run build
   ```
5. **Configure o servidor web** (Nginx) para servir o diret\u00f3rio `build/` e iniciar o Express com a API:
   ```bash
   sudo apt install nginx -y
   sudo rm -rf /var/www/html/*
   sudo cp -r build/* /var/www/html/
   nohup node server.js &
   ```
6. **Recarregue o Nginx** para aplicar as altera\u00e7\u00f5es:
   ```bash
   sudo systemctl restart nginx
   ```

Ap\u00f3s esses passos o blog estar\u00e1 acess\u00edvel pelo endere\u00e7o configurado em sua VPS.

## Atualiza\u00e7\u00f5es Futuras

Para publicar novas p\u00e1ginas ou posts:

1. Utilize a API local em `/api/posts` ou o painel `/admin` para criar novos artigos.
2. Caso prefira, edite arquivos `.md` diretamente no reposit\u00f3rio.
3. Teste as altera\u00e7\u00f5es com `npm start`.
4. Envie para o Git e atualize a VPS executando `npm run build` e reiniciando o `server.js`.

Seguindo este guia voc\u00ea conseguir\u00e1 configurar, manter e publicar o blog do professor Gabriel Ramos com facilidade.
