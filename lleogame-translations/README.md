# LLEOGAME — Traduções de jogos

Catálogo de projetos independentes de tradução para português brasileiro. O site usa Vite e navegação por hash, para funcionar como site estático no Render.

## Rodar localmente

1. Instale Node.js (versão LTS).
2. Abra o terminal nesta pasta.
3. Execute:

```bash
npm install
npm run dev
```

4. Abra o endereço local indicado pelo Vite.

Para testar a versão de produção:

```bash
npm run build
npm run preview
```

## Publicar no Render

Configuração do Static Site:

- **Root Directory:** `lleogame-translations` (se a pasta do projeto estiver dentro da raiz do repositório)
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`

O site usa rotas com `#`, então as páginas individuais funcionam em hospedagem estática sem configurar regras extras de redirecionamento.

## Como cadastrar ou editar um projeto

Abra `src/main.js` e localize o array `projects`, no início do arquivo. Cada projeto possui:

- `id`: identificador usado no endereço `#/projeto/ID`.
- `title`, `platform`, `description` e `tags`: informações exibidas no catálogo e na ficha.
- `status`: use `Em andamento`, `Em preparação`, `Planejado` ou `Concluído`.
- `team`: créditos da equipe.
- `progressItems`: etapas e situação do desenvolvimento. Não informe porcentagens sem uma medição real.
- `gallery`: imagens do projeto, com `src`, `alt` e `caption`.
- `versions`: histórico de versões publicadas.
- `downloads`: arquivos públicos. Cada item usa `label`, `description` e `url`.

Para adicionar imagens, coloque os arquivos na pasta `public/images/` e use caminhos como `/images/nome-do-arquivo.png` em `cover` (capa) ou em `gallery` (capturas). As artes atuais dos cards são provisórias e geradas por CSS; não são capas oficiais dos jogos.

## Observações

- Os dados do catálogo são editados no código e publicados por commit no GitHub.
- Este site ainda não possui painel administrativo, login, banco de dados ou formulário de contato funcional.
- Botões de download só aparecem como links quando há um endereço real informado em `downloads`.
- Não distribua cópias dos jogos. Publique apenas patches e arquivos que você tenha direito de compartilhar.
