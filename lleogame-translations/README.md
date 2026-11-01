# LLEOGAME Translations — HUD de catálogo

Versão com uma HUD simples: lista de jogos em capas à esquerda e painel de detalhes ao selecionar um jogo.

## Publicar atualização
1. Substitua os arquivos do repositório GitHub pelos arquivos desta pasta.
2. Mantenha o Root Directory do Render como `lleogame-translations`.
3. O Render fará novo deploy automaticamente após o commit.

## Cadastrar/editar jogos
Edite o array `games` no início de `src/main.js`.
Cada jogo possui:
- `title`: nome do jogo
- `platform`: plataforma
- `genre`: gênero
- `status`: Em andamento, Concluído ou Planejado
- `description`: informações
- `cover`: URL da imagem da capa
- `link`: link público da tradução (deixe vazio se ainda não existir)
- `version`: versão atual

Os links de download só aparecem quando `link` tiver uma URL.
