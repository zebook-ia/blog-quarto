# Manual de Configura\u00e7\u00e3o e Publica\u00e7\u00e3o do Blog

Este documento explica como configurar e publicar o blog do professor Gabriel Ramos utilizando o framework Quarto. As instru\u00e7\u00f5es foram escritas para usu\u00e1rios com conhecimentos b\u00e1sicos em tecnologia.

## Requisitos M\u00ednimos

- **Computador**: MacBook M3 com 8GB de RAM.
- **Sistema Operacional**: macOS atualizado.
- **Softwares Necess\u00e1rios**:
  - [Quarto](https://quarto.org) instalado.
  - [Git](https://git-scm.com) para controlar o c\u00f3digo.
  - Um editor de c\u00f3digo de sua prefer\u00eancia (por exemplo, Visual Studio Code).

## Configurando o Ambiente

1. Instale o Quarto seguindo as instru\u00e7\u00f5es para macOS no site oficial.
2. Instale o Git caso ainda n\u00e3o esteja dispon\u00edvel.
3. Clone o reposit\u00f3rio do blog ou crie um novo diret\u00f3rio para o projeto.
4. Abra o diret\u00f3rio do projeto no terminal e execute `quarto check` para verificar se tudo est\u00e1 correto.

## Estrutura do Projeto

- `_quarto.yml`: arquivo de configura\u00e7\u00e3o do site.
- `index.qmd`: p\u00e1gina inicial.
- `tecnicas-de-estudo.qmd`, `ferramentas.qmd`, `blog.qmd`, `contato.qmd`: p\u00e1ginas secund\u00e1rias.
- `posts/`: diret\u00f3rio onde ficam os artigos do blog.
- `manual.md`: este manual.

## Publica\u00e7\u00e3o Local

Para visualizar o site localmente execute:

```bash
quarto preview
```

O comando iniciar\u00e1 um servidor local, disponibilizando uma URL no navegador para ver as altera\u00e7\u00f5es em tempo real.

## Deployment em VPS Ubuntu

As instru\u00e7\u00f5es a seguir assumem que voc\u00ea possui acesso \u00e0 VPS com Ubuntu 20.04.6 LTS (GNU/Linux 5.4.0-105-generic x86_64).

1. **Acesse a VPS** pelo terminal usando SSH:
   ```bash
   ssh usuario@seu-servidor
   ```
2. **Instale o Quarto e o Git** na VPS:
   ```bash
   sudo apt update
   sudo apt install quarto-cli git -y
   ```
3. **Clone o reposit\u00f3rio do blog** na VPS:
   ```bash
   git clone https://seu-repositorio/blog-quarto.git
   cd blog-quarto
   ```
4. **Gere os arquivos est\u00e1ticos** usando o Quarto:
   ```bash
   quarto render
   ```
5. **Disponibilize os arquivos** gerados (na pasta `_site`) por meio de um servidor web como Nginx ou Apache. Exemplo com Nginx:
   ```bash
   sudo apt install nginx -y
   sudo rm -rf /var/www/html/*
   sudo cp -r _site/* /var/www/html/
   ```
6. **Recarregue o Nginx** para aplicar as altera\u00e7\u00f5es:
   ```bash
   sudo systemctl restart nginx
   ```

Ap\u00f3s esses passos o blog estar\u00e1 acess\u00edvel pelo endere\u00e7o configurado em sua VPS.

## Deployment usando Portainer e Traefik

Caso voc\u00ea gerencie seus containers com o Portainer e j\u00e1 possua o Traefik instalado como proxy reverso, \u00e9 poss\u00edvel servir o blog est\u00e1tico em um cont\u00eainer Nginx.

1. Renderize o site localmente:
   ```bash
   quarto render
   ```
   Os arquivos ser\u00e3o gerados dentro da pasta `_site`.

2. Crie um `Dockerfile` simples no diret\u00f3rio do projeto:
   ```Dockerfile
   FROM nginx:alpine
   COPY _site /usr/share/nginx/html
   ```
   Esse cont\u00eainer servir\u00e1 os arquivos est\u00e1ticos do blog.

3. Construa a imagem e envie para um registro acess\u00edvel pelo Portainer:
   ```bash
   docker build -t meu-usuario/blog-quarto:latest .
   docker push meu-usuario/blog-quarto:latest
   ```

4. No Portainer, crie um novo container ou stack com essa imagem. Para que o Traefik realize o roteamento, adicione labels como no exemplo abaixo (ajuste o dom\u00ednio):
   ```yaml
   labels:
     - "traefik.enable=true"
     - "traefik.http.routers.blog.rule=Host(`blog.exemplo.com`)"
     - "traefik.http.routers.blog.entrypoints=websecure"
     - "traefik.http.routers.blog.tls.certresolver=letsencrypt"
   ```

5. Salve a configura\u00e7\u00e3o e inicie o container. O Traefik ir\u00e1 encaminhar as requisi\u00e7\u00f5es para o Nginx, disponibilizando o blog no dom\u00ednio configurado.

## Atualiza\u00e7\u00f5es Futuras

Para publicar novas p\u00e1ginas ou posts:

1. Edite ou crie arquivos `.qmd` no reposit\u00f3rio local.
2. Teste localmente com `quarto preview`.
3. Envie as altera\u00e7\u00f5es para o Git e sincronize com a VPS.
4. Na VPS, execute novamente `quarto render` e copie os arquivos da pasta `_site` para o diret\u00rio do servidor web.

Seguindo este guia voc\u00ea conseguir\u00e1 configurar, manter e publicar o blog do professor Gabriel Ramos com facilidade.
