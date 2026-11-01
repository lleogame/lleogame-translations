import './style.css';

const projects = [
  {
    id: 'kh-358-2-days',
    title: 'Kingdom Hearts 358/2 Days',
    series: 'Kingdom Hearts',
    platform: 'Nintendo DS',
    status: 'Em andamento',
    progress: 78,
    description: 'Projeto de tradução para português brasileiro de Kingdom Hearts 358/2 Days. Acompanhe o andamento e as futuras atualizações do projeto.',
    version: 'Em desenvolvimento',
    updated: 'Em breve',
    cover: 'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?auto=format&fit=crop&w=900&q=85',
    tags: ['RPG', 'Nintendo DS', 'Kingdom Hearts']
  },
  {
    id: 'kh-dark-road',
    title: 'Kingdom Hearts Dark Road',
    series: 'Kingdom Hearts',
    platform: 'Android / iOS',
    status: 'Em andamento',
    progress: 65,
    description: 'Tradução dos textos de Kingdom Hearts Dark Road para português brasileiro, incluindo revisão dos arquivos e da interface.',
    version: 'Em desenvolvimento',
    updated: 'Em breve',
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=85',
    tags: ['RPG', 'Mobile', 'Kingdom Hearts']
  },
  {
    id: 'kh-recoded',
    title: 'Kingdom Hearts Re:coded',
    series: 'Kingdom Hearts',
    platform: 'Nintendo DS',
    status: 'Em andamento',
    progress: 35,
    description: 'Projeto experimental de localização. Mais informações, imagens e arquivos serão publicados conforme o desenvolvimento.',
    version: 'Em desenvolvimento',
    updated: 'Em breve',
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=85',
    tags: ['RPG', 'Nintendo DS', 'Kingdom Hearts']
  },
  {
    id: 'twewy',
    title: 'The World Ends With You',
    series: 'The World Ends With You',
    platform: 'Nintendo DS',
    status: 'Planejado',
    progress: 0,
    description: 'Página reservada para novidades e informações do projeto. Detalhes serão adicionados futuramente.',
    version: 'Ainda não iniciado',
    updated: 'Em breve',
    cover: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=85',
    tags: ['RPG', 'Nintendo DS']
  }
];

const app = document.querySelector('#app');
let activeFilter = 'Todos';
let searchTerm = '';

function statusClass(status) {
  return status === 'Concluído' ? 'done' : status === 'Em andamento' ? 'progress' : 'planned';
}

function card(project) {
  return `
    <article class="project-card" data-id="${project.id}">
      <button class="cover-button" data-open="${project.id}" aria-label="Ver ${project.title}">
        <img class="cover" src="${project.cover}" alt="" loading="lazy" />
        <span class="cover-shade"></span>
        <span class="platform">${project.platform}</span>
      </button>
      <div class="card-content">
        <div class="card-meta"><span>${project.series}</span><span class="status ${statusClass(project.status)}">${project.status}</span></div>
        <h3>${project.title}</h3>
        <div class="progress-row"><span>Progresso</span><strong>${project.progress}%</strong></div>
        <div class="progress-track"><span style="width:${project.progress}%"></span></div>
        <button class="text-link" data-open="${project.id}">Ver projeto <span>↗</span></button>
      </div>
    </article>`;
}

function render() {
  const filtered = projects.filter(p => {
    const matchesFilter = activeFilter === 'Todos' || p.status === activeFilter || p.series === activeFilter;
    const haystack = `${p.title} ${p.series} ${p.platform} ${p.tags.join(' ')}`.toLowerCase();
    return matchesFilter && haystack.includes(searchTerm.toLowerCase());
  });

  app.innerHTML = `
    <header class="topbar">
      <a class="brand" href="#" aria-label="lleogame início">
        <span class="brand-mark">LG</span>
        <span class="brand-copy"><strong>LLEOGAME</strong><small>GAME TRANSLATIONS</small></span>
      </a>
      <nav class="desktop-nav">
        <a class="active" href="#inicio">Início</a>
        <a href="#catalogo">Catálogo</a>
        <a href="#sobre">Sobre</a>
        <a href="#atualizacoes">Atualizações</a>
      </nav>
      <a class="header-cta" href="#catalogo">Explorar projetos <span>↗</span></a>
      <button class="mobile-menu" aria-label="Abrir menu">☰</button>
    </header>

    <main>
      <section class="hero" id="inicio">
        <div class="hero-grid"></div>
        <div class="hero-copy">
          <div class="eyebrow"><span class="pulse"></span> TRADUÇÕES DE FÃ PARA FÃ</div>
          <h1>Seu jogo.<br/><em>Sua língua.</em></h1>
          <p>Projetos de localização de jogos para português brasileiro, feitos com cuidado por <strong>lleogame</strong>.</p>
          <div class="hero-actions">
            <a class="primary-btn" href="#catalogo">Explorar traduções <span>→</span></a>
            <a class="secondary-btn" href="#sobre">Conheça o projeto</a>
          </div>
          <div class="hero-stats">
            <div><strong>${projects.length.toString().padStart(2,'0')}</strong><span>Projetos no catálogo</span></div>
            <i></i>
            <div><strong>PT-BR</strong><span>Idioma das traduções</span></div>
            <i></i>
            <div><strong>100%</strong><span>Feito por fã</span></div>
          </div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
          <div class="hero-symbol">LG<span>✦</span></div>
          <div class="floating-tag tag-one">LOCALIZAÇÃO <b>PT-BR</b></div>
          <div class="floating-tag tag-two">FAN PROJECT <b>2026</b></div>
        </div>
      </section>

      <section class="catalog section-wrap" id="catalogo">
        <div class="section-heading">
          <div><div class="eyebrow">BIBLIOTECA</div><h2>Projetos em destaque<span>.</span></h2><p>Encontre uma tradução ou acompanhe o desenvolvimento.</p></div>
          <label class="search-box"><span>⌕</span><input id="search" type="search" placeholder="Buscar jogo..." value="${searchTerm.replaceAll('"','&quot;')}"/><kbd>ENTER</kbd></label>
        </div>
        <div class="filters" id="filters">
          ${['Todos','Em andamento','Concluído','Planejado','Kingdom Hearts'].map(f => `<button class="filter ${activeFilter===f?'selected':''}" data-filter="${f}">${f}</button>`).join('')}
        </div>
        <div class="project-grid" id="project-grid">
          ${filtered.length ? filtered.map(card).join('') : '<div class="empty-state">Nenhum projeto encontrado. Tente outra busca.</div>'}
        </div>
      </section>

      <section class="feature-band" id="sobre">
        <div class="feature-inner">
          <div class="feature-icon">✧</div>
          <div><div class="eyebrow">SOBRE O LLEOGAME</div><h2>Preservar histórias.<br/><em>Compartilhar experiências.</em></h2><p>Este espaço reúne projetos independentes de tradução de jogos. O objetivo é tornar essas experiências mais acessíveis em português brasileiro, respeitando o material original e a comunidade de jogadores.</p></div>
          <div class="feature-stamp">FÃ<br/>PARA<br/>FÃ</div>
        </div>
      </section>

      <section class="updates section-wrap" id="atualizacoes">
        <div class="section-heading compact"><div><div class="eyebrow">FIQUE POR DENTRO</div><h2>Últimas atualizações<span>.</span></h2></div><span class="coming-soon">NOVIDADES EM BREVE</span></div>
        <div class="update-placeholder"><span class="update-dot"></span><div><strong>Central de atualizações</strong><p>As novidades dos projetos aparecerão aqui.</p></div><span class="update-date">EM BREVE</span></div>
      </section>
    </main>

    <footer>
      <div class="footer-main"><a class="brand" href="#"><span class="brand-mark">LG</span><span class="brand-copy"><strong>LLEOGAME</strong><small>GAME TRANSLATIONS</small></span></a><p>Traduções de fã para fã, sem fins lucrativos.</p><a class="back-top" href="#inicio">Voltar ao topo ↑</a></div>
      <div class="footer-bottom"><span>© 2026 LLEOGAME. Todos os direitos reservados.</span><span>Marcas e jogos pertencem aos seus respectivos proprietários.</span></div>
    </footer>
    <div id="modal-root"></div>
  `;

  document.querySelector('#search').addEventListener('input', e => {
    searchTerm = e.target.value;
    const results = projects.filter(p => {
      const okFilter = activeFilter === 'Todos' || p.status === activeFilter || p.series === activeFilter;
      return okFilter && `${p.title} ${p.series} ${p.platform} ${p.tags.join(' ')}`.toLowerCase().includes(searchTerm.toLowerCase());
    });
    document.querySelector('#project-grid').innerHTML = results.length ? results.map(card).join('') : '<div class="empty-state">Nenhum projeto encontrado. Tente outra busca.</div>';
    bindOpen();
  });
  document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
    activeFilter = btn.dataset.filter;
    render();
  }));
  bindOpen();
  document.querySelector('.mobile-menu').addEventListener('click', () => document.querySelector('.desktop-nav').classList.toggle('show'));
}

function bindOpen() {
  document.querySelectorAll('[data-open]').forEach(btn => btn.addEventListener('click', () => openProject(btn.dataset.open)));
}

function openProject(id) {
  const p = projects.find(item => item.id === id);
  if (!p) return;
  document.querySelector('#modal-root').innerHTML = `
    <div class="modal-backdrop" data-close>
      <section class="project-modal" role="dialog" aria-modal="true" aria-label="${p.title}">
        <button class="modal-close" data-close aria-label="Fechar">×</button>
        <img src="${p.cover}" alt="" class="modal-cover"/>
        <div class="modal-body">
          <div class="card-meta"><span>${p.series}</span><span class="status ${statusClass(p.status)}">${p.status}</span></div>
          <h2>${p.title}</h2>
          <p class="modal-desc">${p.description}</p>
          <div class="modal-info"><div><small>PLATAFORMA</small><strong>${p.platform}</strong></div><div><small>VERSÃO</small><strong>${p.version}</strong></div><div><small>ATUALIZAÇÃO</small><strong>${p.updated}</strong></div></div>
          <div class="progress-row"><span>Progresso do projeto</span><strong>${p.progress}%</strong></div><div class="progress-track"><span style="width:${p.progress}%"></span></div>
          <div class="modal-note">Os links de download e os detalhes completos serão adicionados quando cada projeto estiver pronto para publicação.</div>
        </div>
      </section>
    </div>`;
  document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', e => {
    if (e.target === el || el.classList.contains('modal-close')) document.querySelector('#modal-root').innerHTML = '';
  }));
  document.addEventListener('keydown', escClose, { once: true });
}
function escClose(e) { if (e.key === 'Escape') document.querySelector('#modal-root').innerHTML = ''; }

render();
