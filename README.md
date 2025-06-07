# Blog do Professor Gabriel Ramos

Este reposit\u00f3rio cont\u00e9m o c\u00f3digo-fonte do blog pessoal do **Professor Gabriel Ramos**, criado com o [Quarto](https://quarto.org). O objetivo \u00e9 disponibilizar t\u00e9cnicas de estudo, recomenda\u00e7\u00f5es de ferramentas e artigos sobre aprendizagem de forma simples e organizada.

O site possui as p\u00e1ginas principais:

- **Home** (`index.qmd`)
- **T\u00e9cnicas de Estudo** (`tecnicas-de-estudo.qmd`)
- **Ferramentas** (`ferramentas.qmd`)
- **Blog** (`blog.qmd` com conte\u00fado da pasta `posts/`)
- **Contato** (`contato.qmd`)

Um manual completo de instala\u00e7\u00e3o e publica\u00e7\u00e3o est\u00e1 dispon\u00edvel em [manual.md](manual.md).

## Instala\u00e7\u00e3o r\u00e1pida

1. Instale o **Quarto** e o **Git** em seu computador (Mac ou Linux).
2. Clone este reposit\u00f3rio:

   ```bash
   git clone https://seu-repositorio/blog-quarto.git
   cd blog-quarto
   ```
3. Verifique o ambiente executando:

   ```bash
   quarto check
   ```

## Como usar

- Visualize o site localmente com:

  ```bash
  quarto preview
  ```

  O Quarto ir\u00e1 abrir uma URL local para voc\u00ea conferir as altera\u00e7\u00f5es em tempo real.

- Para criar um novo post, adicione um arquivo `.qmd` em `posts/` e rode `quarto render` para gerar o site est\u00e1tico.
- Consulte o [manual](manual.md) para instru\u00e7\u00f5es detalhadas de deploy em uma VPS Ubuntu 20.04.

## Exemplo de post

```qmd
---
title: "Meu Novo Post"
date: 2024-07-01
---

Conte\u00fado do post aqui...
```

Salve este arquivo dentro de `posts/` e rode `quarto preview` para ver o resultado.

## Contato

D\u00favidas ou sugest\u00f5es? Entre em contato pelo e-mail [contato@example.com](mailto:contato@example.com).
