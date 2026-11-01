# LLEOGAME — Game Translations

Site inicial de catálogo de traduções inspirado na experiência de navegação de sites de projetos de localização, com identidade visual própria.

## Rodar localmente

1. Instale Node.js (versão LTS).
2. Extraia o projeto.
3. Abra o terminal nesta pasta e execute:

```bash
npm install
npm run dev
```

4. Abra o endereço local mostrado pelo Vite.

## Publicar no Render

Este projeto é um site estático:

1. Envie os arquivos para um repositório no GitHub.
2. No Render, selecione **New → Static Site**.
3. Conecte o repositório.
4. Build Command: `npm install && npm run build`
5. Publish Directory: `dist`
6. Clique em **Create Static Site**.

O Render publicará o site em um endereço `onrender.com`.

## Editar os projetos

Os projetos de demonstração estão no início de `src/main.js`, no array `projects`.
Edite título, plataforma, status, progresso, descrição, versão e imagem para cadastrar seus projetos.

## Observação importante

Esta é a primeira versão visual e funcional do catálogo: pesquisa, filtros e páginas de detalhes em janela modal funcionam no navegador. O painel administrativo com login, cadastro persistente e hospedagem de arquivos é uma próxima etapa; não coloque senhas ou dados privados neste site estático.
