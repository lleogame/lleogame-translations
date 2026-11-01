import './style.css';

const games = [
  {
    id: 'kh358',
    title: 'Kingdom Hearts 358/2 Days',
    platform: 'Nintendo DS',
    genre: 'Action RPG',
    status: 'Em andamento',
    description: 'Projeto de tradução de Kingdom Hearts 358/2 Days para português brasileiro. Esta página reunirá informações, progresso e links da tradução.',
    cover: 'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?auto=format&fit=crop&w=700&q=85',
    link: '',
    version: 'Em desenvolvimento'
  },
  {
    id: 'darkroad',
    title: 'Kingdom Hearts Dark Road',
    platform: 'Android / iOS',
    genre: 'RPG',
    status: 'Em andamento',
    description: 'Projeto de localização de Kingdom Hearts Dark Road. Informações e novidades serão publicadas nesta página.',
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=700&q=85',
    link: '',
    version: 'Em desenvolvimento'
  },
  {
    id: 'recoded',
    title: 'Kingdom Hearts Re:coded',
    platform: 'Nintendo DS',
    genre: 'Action RPG',
    status: 'Em andamento',
    description: 'Projeto de tradução de Kingdom Hearts Re:coded para português brasileiro.',
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=700&q=85',
    link: '',
    version: 'Em desenvolvimento'
  },
  {
    id: 'twewy',
    title: 'The World Ends With You',
    platform: 'Nintendo DS',
    genre: 'Action RPG',
    status: 'Planejado',
    description: 'Espaço reservado para informações sobre uma possível tradução de The World Ends With You.',
    cover: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=700&q=85',
    link: '',
    version: 'Ainda não iniciado'
  }
];

const app = document.querySelector('#app');
let selectedId = games[0].id;
let search = '';

const statusClass = s => s === 'Concluído' ? 'done' : s === 'Em andamento' ? 'working' : 'planned';

function render() {
  const visible = games.filter(g => `${g.title} ${g.platform} ${g.genre}`.toLowerCase().includes(search.toLowerCase()));
  if (visible.length && !visible.some(g => g.id === selectedId)) selectedId = visible[0].id;
  const selected = visible.find(g => g.id === selectedId);

  app.innerHTML = `
    <header class="topbar">
      <a class="brand" href="#"><span class="brand-mark">LG</span><span><b>LLEOGAME</b><small>GAME TRANSLATIONS</small></span></a>
      <nav><a href="#jogos" class="active">Jogos</a><a href="#sobre">Sobre</a></nav>
      <a class="top-link" href="#jogos">Explorar catálogo ↗</a>
    </header>
    <main>
      <section class="intro">
        <div class="eyebrow"><i></i> CATÁLOGO DE TRADUÇÕES</div>
        <h1>Escolha um jogo<span>.</span></h1>
        <p>Selecione uma capa para ver as informações, plataforma e links disponíveis.</p>
      </section>
      <section class="catalog" id="jogos">
        <div class="catalog-head">
          <div><span class="eyebrow">BIBLIOTECA</span><h2>Jogos <em>(${visible.length})</em></h2></div>
          <label class="search"><span>⌕</span><input id="search" type="search" placeholder="Buscar jogo..." value="${search.replaceAll('"','&quot;')}"></label>
        </div>
        <div class="layout">
          <div class="game-list" id="game-list">
            ${visible.length ? visible.map(g => `
              <button class="game-tile ${g.id === selectedId ? 'selected' : ''}" data-id="${g.id}">
                <img src="${g.cover}" alt="Capa de ${g.title}">
                <span class="tile-shade"></span>
                <span class="tile-title">${g.title}</span>
                <span class="tile-platform">${g.platform}</span>
                <span class="tile-indicator">↗</span>
              </button>`).join('') : '<div class="empty">Nenhum jogo encontrado.</div>'}
          </div>
          <section class="details" id="details">
            ${selected ? `
              <div class="detail-cover"><img src="${selected.cover}" alt="Capa de ${selected.title}"><span class="cover-glow"></span></div>
              <div class="detail-content">
                <div class="detail-top"><span class="eyebrow">DETALHES DO PROJETO</span><span class="status ${statusClass(selected.status)}">${selected.status}</span></div>
                <h2>${selected.title}</h2>
                <p class="description">${selected.description}</p>
                <div class="info-grid">
                  <div><small>PLATAFORMA</small><strong>${selected.platform}</strong></div>
                  <div><small>GÊNERO</small><strong>${selected.genre}</strong></div>
                  <div><small>VERSÃO</small><strong>${selected.version}</strong></div>
                </div>
                <div class="detail-actions">
                  ${selected.link ? `<a class="download" href="${selected.link}" target="_blank" rel="noopener noreferrer">Acessar tradução <span>↗</span></a>` : `<span class="unavailable">Link da tradução em breve</span>`}
                </div>
              </div>` : '<div class="empty detail-empty">Nenhum jogo encontrado. Tente outra busca.</div>'}
          </section>
        </div>
      </section>
      <section class="about" id="sobre"><span class="eyebrow">SOBRE O PROJETO</span><h2>Traduções de fã,<br><em>para fãs.</em></h2><p>Um espaço independente para reunir projetos de localização de jogos para português brasileiro, feitos por lleogame.</p></section>
    </main>
    <footer><a class="brand" href="#"><span class="brand-mark">LG</span><span><b>LLEOGAME</b><small>GAME TRANSLATIONS</small></span></a><span>© 2026 LLEOGAME · Projetos de fãs, sem fins lucrativos.</span></footer>
  `;

  document.querySelector('#search').addEventListener('input', e => { search = e.target.value; render(); const input = document.querySelector('#search'); input.focus(); input.setSelectionRange(search.length, search.length); });
  document.querySelectorAll('[data-id]').forEach(btn => btn.addEventListener('click', () => { selectedId = btn.dataset.id; render(); }));
}
render();
