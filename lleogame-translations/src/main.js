import './style.css';

/*
 * Conteúdo do catálogo.
 * Para cadastrar um jogo, adicione um objeto neste array.
 * Não inclua links de download antes de ter um arquivo público validado.
 */
const projects = [
  {
    id: 'kh-358-2-days',
    title: 'Kingdom Hearts 358/2 Days',
    shortTitle: '358/2 Days',
    series: 'Kingdom Hearts',
    platform: 'Nintendo DS',
    status: 'Em andamento',
    statusDetail: 'Tradução em desenvolvimento',
    description: 'Projeto de tradução de Kingdom Hearts 358/2 Days para português brasileiro. Esta página reunirá informações do projeto, novidades, imagens e futuras versões da tradução.',
    summary: 'Acompanhe o projeto de localização de 358/2 Days.',
    version: 'Ainda não publicada',
    updated: 'Sem data publicada',
    release: '2009',
    developer: 'Square Enix / h.a.n.d.',
    publisher: 'Square Enix',
    format: 'Projeto de tradução',
    art: 'art-days',
    mark: '358/2',
    artCaption: 'A HISTÓRIA DE ROXAS',
    tags: ['RPG', 'Ação', 'Nintendo DS', 'Kingdom Hearts'],
    team: [
      { role: 'Tradução', name: 'lleogame' },
      { role: 'Revisão', name: 'Em desenvolvimento' },
      { role: 'Gráficos', name: 'Não informado' }
    ],
    progressItems: [
      { name: 'Textos', state: 'Em andamento' },
      { name: 'Revisão', state: 'Em andamento' },
      { name: 'Gráficos e interface', state: 'Não divulgado' }
    ],
    gallery: [],
    versions: [],
    downloads: []
  },
  {
    id: 'kh-dark-road',
    title: 'Kingdom Hearts Dark Road',
    shortTitle: 'Dark Road',
    series: 'Kingdom Hearts',
    platform: 'Android / iOS',
    status: 'Em andamento',
    statusDetail: 'Tradução em desenvolvimento',
    description: 'Projeto de localização de Kingdom Hearts Dark Road para português brasileiro. A página será atualizada com detalhes técnicos, capturas de tela e informações sobre a disponibilização da tradução.',
    summary: 'Uma jornada pelo passado de Xehanort, agora em português.',
    version: 'Ainda não publicada',
    updated: 'Sem data publicada',
    release: '2020',
    developer: 'Square Enix',
    publisher: 'Square Enix',
    format: 'Projeto de tradução',
    art: 'art-dark-road',
    mark: 'DARK\nROAD',
    artCaption: 'O CAMINHO PARA A ESCURIDÃO',
    tags: ['RPG', 'Mobile', 'Android', 'iOS', 'Kingdom Hearts'],
    team: [
      { role: 'Tradução', name: 'lleogame' },
      { role: 'Revisão', name: 'Em desenvolvimento' },
      { role: 'Gráficos', name: 'Não informado' }
    ],
    progressItems: [
      { name: 'Textos', state: 'Em andamento' },
      { name: 'Interface', state: 'Em andamento' },
      { name: 'Revisão', state: 'Não divulgado' }
    ],
    gallery: [],
    versions: [],
    downloads: []
  },
  {
    id: 'kh-recoded',
    title: 'Kingdom Hearts Re:coded',
    shortTitle: 'Re:coded',
    series: 'Kingdom Hearts',
    platform: 'Nintendo DS',
    status: 'Em andamento',
    statusDetail: 'Análise técnica em andamento',
    description: 'Espaço dedicado ao projeto de Kingdom Hearts Re:coded. Aqui serão reunidas as informações sobre a tradução, compatibilidade, atualizações e arquivos disponibilizados.',
    summary: 'As memórias do diário de Jiminy estão sendo preparadas para uma nova leitura.',
    version: 'Ainda não publicada',
    updated: 'Sem data publicada',
    release: '2010',
    developer: 'Square Enix / h.a.n.d.',
    publisher: 'Square Enix',
    format: 'Projeto de tradução',
    art: 'art-recoded',
    mark: 'RE:\nCODED',
    artCaption: 'DADOS. MEMÓRIAS. CORAÇÃO.',
    tags: ['RPG', 'Ação', 'Nintendo DS', 'Kingdom Hearts'],
    team: [
      { role: 'Tradução', name: 'lleogame' },
      { role: 'Revisão', name: 'Não informado' },
      { role: 'Gráficos', name: 'Não informado' }
    ],
    progressItems: [
      { name: 'Análise dos arquivos', state: 'Em andamento' },
      { name: 'Textos', state: 'Não divulgado' },
      { name: 'Testes', state: 'Não divulgado' }
    ],
    gallery: [],
    versions: [],
    downloads: []
  },
  {
    id: 'twewy',
    title: 'The World Ends With You',
    shortTitle: 'The World Ends With You',
    series: 'The World Ends With You',
    platform: 'Nintendo DS',
    status: 'Em andamento',
    statusDetail: 'Tradução em desenvolvimento',
    description: 'Projeto de tradução de The World Ends With You para português brasileiro. Esta página centralizará o andamento, os materiais de referência e as futuras atualizações.',
    summary: 'Shibuya tem uma história para contar. Em breve, em português brasileiro.',
    version: 'Ainda não publicada',
    updated: 'Sem data publicada',
    release: '2007',
    developer: 'Square Enix / Jupiter',
    publisher: 'Square Enix',
    format: 'Projeto de tradução',
    art: 'art-twewy',
    mark: 'TWEWY',
    artCaption: 'THE WORLD ENDS WITH YOU',
    tags: ['RPG', 'Ação', 'Nintendo DS'],
    team: [
      { role: 'Tradução', name: 'lleogame' },
      { role: 'Revisão', name: 'Em desenvolvimento' },
      { role: 'Gráficos', name: 'Não informado' }
    ],
    progressItems: [
      { name: 'Textos', state: 'Em andamento' },
      { name: 'Revisão', state: 'Não divulgado' },
      { name: 'Gráficos e interface', state: 'Não divulgado' }
    ],
    gallery: [],
    versions: [],
    downloads: []
  }
];

const app = document.querySelector('#app');
const state = { search: '', filter: 'Todos', mobileMenu: false };
const icon = (name) => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    external: '<path d="M14 3h7v7M10 14 21 3M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    game: '<path d="M6 12h4m-2-2v4m7-1h.01M18 10h.01M7 6h10a4 4 0 0 1 3.8 5.3l-1.2 3.6a2 2 0 0 1-3.4.7L14 14H10l-2.2 1.6a2 2 0 0 1-3.4-.7l-1.2-3.6A4 4 0 0 1 7 6Z"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>'
  };
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.info}</svg>`;
};

function esc(value = '') {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function currentRoute() {
  const raw = location.hash.replace(/^#\/?/, '') || 'inicio';
  const parts = raw.split('/').filter(Boolean);
  return { page: parts[0] || 'inicio', id: parts[1] || null };
}

function go(route) {
  location.hash = `/${route}`;
}

function statusClass(status) {
  if (status === 'Concluído') return 'status-done';
  if (status === 'Em preparação' || status === 'Planejado') return 'status-planned';
  return 'status-progress';
}

function poster(project, compact = false) {
  const lines = esc(project.mark).replaceAll('\n', '<br>');
  return `
    <div class="poster ${project.art} ${compact ? 'poster-compact' : ''} ${project.cover ? 'has-photo' : ''}" role="img" aria-label="Arte de ${esc(project.title)}">
      ${project.cover ? `<img class="poster-photo" src="${esc(project.cover)}" alt="Capa de ${esc(project.title)}">` : ''}
      <div class="poster-grid"></div>
      <span class="poster-kicker">LLEOGAME <i>／</i> FAN TRANSLATION</span>
      <div class="poster-mark">${lines}</div>
      <span class="poster-caption">${esc(project.artCaption)}</span>
      <span class="poster-platform">${esc(project.platform)}</span>
      <span class="poster-orbit"></span>
    </div>`;
}

function projectCard(project) {
  return `
    <article class="project-card">
      <a class="card-poster-link" href="#/projeto/${esc(project.id)}" aria-label="Abrir ${esc(project.title)}">
        ${poster(project, true)}
        <span class="card-open">ABRIR PROJETO ${icon('arrow')}</span>
      </a>
      <div class="card-body">
        <div class="card-eyebrow"><span>${esc(project.series)}</span><span class="status ${statusClass(project.status)}">${esc(project.status)}</span></div>
        <h3><a href="#/projeto/${esc(project.id)}">${esc(project.title)}</a></h3>
        <p>${esc(project.summary)}</p>
        <div class="card-footer"><span>${icon('game')}${esc(project.platform)}</span><a href="#/projeto/${esc(project.id)}">Ver detalhes ${icon('arrow')}</a></div>
      </div>
    </article>`;
}

function header(active = '') {
  const nav = [
    ['inicio', 'Início'], ['catalogo', 'Catálogo'], ['sobre', 'Sobre'], ['apoio', 'Ajude a causa'], ['contato', 'Contato']
  ];
  return `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="#/inicio" aria-label="LLEOGAME — início">
          <span class="brand-symbol">LG<span>✦</span></span>
          <span class="brand-name">LLEOGAME<small>TRADUÇÕES DE JOGOS</small></span>
        </a>
        <nav class="main-nav ${state.mobileMenu ? 'nav-open' : ''}" aria-label="Navegação principal">
          ${nav.map(([id, label]) => `<a href="#/${id}" class="${active === id ? 'active' : ''}" ${active === id ? 'aria-current="page"' : ''}>${label}</a>`).join('')}
        </nav>
        <a class="header-catalog" href="#/catalogo">Explorar catálogo ${icon('arrow')}</a>
        <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="${state.mobileMenu}">${icon(state.mobileMenu ? 'close' : 'menu')}</button>
      </div>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-main">
        <div class="footer-brand-block">
          <a class="brand" href="#/inicio"><span class="brand-symbol">LG<span>✦</span></span><span class="brand-name">LLEOGAME<small>TRADUÇÕES DE JOGOS</small></span></a>
          <p>Projetos independentes de tradução de jogos para português brasileiro.</p>
        </div>
        <div class="footer-links"><strong>NAVEGAÇÃO</strong><a href="#/catalogo">Catálogo</a><a href="#/sobre">Sobre o projeto</a><a href="#/apoio">Ajude a causa</a><a href="#/contato">Contato</a></div>
        <div class="footer-links"><strong>INFORMAÇÕES</strong><a href="#/legal">Aviso legal</a><a href="#/contato">Relatar um problema</a></div>
      </div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} LLEOGAME</span><span>Traduções de fã para fã, sem fins lucrativos.</span><a href="#/inicio">Voltar ao início ↑</a></div>
    </footer>`;
}

function shell(content, active = '') {
  app.innerHTML = `${header(active)}<main id="main-content">${content}</main>${footer()}`;
  const route = currentRoute();
  const activeProject = route.page === 'projeto' ? projects.find(item => item.id === route.id) : null;
  const pageTitle = activeProject ? activeProject.title : ({ inicio: 'Início', catalogo: 'Catálogo', sobre: 'Sobre', apoio: 'Ajude a causa', contato: 'Contato', legal: 'Aviso legal' }[route.page] || 'Página não encontrada');
  document.title = `${pageTitle} | LLEOGAME`;
  document.querySelectorAll('a[href^="#"]:not([href^="#/"])').forEach(anchor => anchor.addEventListener('click', event => {
    const selector = anchor.getAttribute('href');
    const target = selector && document.querySelector(selector);
    if (target) { event.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }));
  document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    state.mobileMenu = !state.mobileMenu;
    render();
  });
  document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => { state.mobileMenu = false; }));
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function homePage() {
  const featured = projects[0];
  const content = `
    <section class="home-hero">
      <div class="hero-background-lines"></div>
      <div class="hero-content wrap">
        <div class="hero-copy">
          <div class="eyebrow"><span class="eyebrow-dot"></span> PROJETOS DE LOCALIZAÇÃO INDEPENDENTES</div>
          <h1>O jogo é o mesmo.<br><em>A experiência é sua.</em></h1>
          <p>Traduções de jogos para português brasileiro, feitas com atenção aos textos, à interface e à experiência de quem joga.</p>
          <div class="hero-buttons"><a class="button button-primary" href="#/catalogo">Explorar traduções ${icon('arrow')}</a><a class="button button-quiet" href="#/sobre">Conheça o LLEOGAME</a></div>
          <div class="hero-numbers"><div><strong>${String(projects.length).padStart(2, '0')}</strong><span>PROJETOS NO CATÁLOGO</span></div><i></i><div><strong>PT-BR</strong><span>IDIOMA DAS TRADUÇÕES</span></div><i></i><div><strong>FÃ</strong><span>FEITO POR FÃ, PARA FÃ</span></div></div>
        </div>
        <a class="hero-feature" href="#/projeto/${featured.id}" aria-label="Conheça ${featured.title}">
          <div class="feature-label"><span>PROJETO EM DESTAQUE</span><b>${String(projects.indexOf(featured) + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}</b></div>
          ${poster(featured)}
          <div class="feature-title"><div><span>${esc(featured.series)}</span><strong>${esc(featured.title)}</strong></div>${icon('arrow')}</div>
        </a>
      </div>
      <div class="hero-bottom-note wrap"><span>01 — TRADUÇÕES</span><span>UMA BIBLIOTECA EM CONSTRUÇÃO</span><span>SCROLL PARA EXPLORAR ↓</span></div>
    </section>

    <section class="section wrap home-catalog" id="destaques">
      <div class="section-heading"><div><div class="eyebrow">BIBLIOTECA DE PROJETOS</div><h2>Encontre sua próxima <em>aventura.</em></h2><p>Conheça as traduções e acompanhe o desenvolvimento de cada projeto.</p></div><a class="inline-link" href="#/catalogo">Ver catálogo completo ${icon('arrow')}</a></div>
      <div class="project-grid">${projects.slice(0, 3).map(projectCard).join('')}</div>
    </section>

    <section class="manifesto-band"><div class="wrap manifesto-inner"><div class="manifesto-mark">L<span>G</span></div><div><div class="eyebrow">NOSSA IDEIA</div><h2>Histórias não deveriam<br><em>ter barreiras de idioma.</em></h2><p>O LLEOGAME reúne projetos independentes de localização, com o objetivo de aproximar jogos e jogadores por meio do português brasileiro.</p><a class="inline-link" href="#/sobre">Saiba mais sobre o projeto ${icon('arrow')}</a></div><div class="manifesto-side">LOCALIZAÇÃO<br><b>PT-BR</b><br>FÃ PARA FÃ</div></div></section>

    <section class="section wrap home-updates"><div class="section-heading"><div><div class="eyebrow">ACOMPANHE DE PERTO</div><h2>Novidades dos <em>projetos.</em></h2><p>Comunicados e lançamentos serão publicados nesta área.</p></div></div><div class="empty-update"><span class="empty-update-icon">${icon('clock')}</span><div><strong>Nenhuma atualização publicada ainda.</strong><p>Quando houver novidades ou uma nova versão, as informações aparecerão aqui.</p></div><a href="#/catalogo">Ver projetos ${icon('arrow')}</a></div></section>`;
  shell(content, 'inicio');
}

function catalogPage() {
  const filters = ['Todos', 'Em andamento', 'Planejado', 'Concluído'];
  const content = `
    <section class="inner-hero"><div class="wrap"><div class="breadcrumbs"><a href="#/inicio">Início</a><span>/</span><span>Catálogo</span></div><div class="eyebrow">BIBLIOTECA LLEOGAME</div><h1>Catálogo de <em>traduções.</em></h1><p>Explore os projetos, descubra em quais plataformas estão disponíveis e acompanhe seu desenvolvimento.</p></div></section>
    <section class="section wrap catalog-page"><div class="catalog-toolbar"><label class="search-field">${icon('search')}<input id="catalog-search" type="search" placeholder="Buscar por jogo, série ou plataforma..." value="${esc(state.search)}"><kbd>BUSCAR</kbd></label><span class="catalog-count"><strong id="result-count">${projects.length}</strong> projetos</span></div><div class="filter-row" role="group" aria-label="Filtrar projetos">${filters.map(filter => `<button type="button" class="filter-chip ${state.filter === filter ? 'selected' : ''}" data-filter="${filter}">${filter}</button>`).join('')}</div><div class="project-grid catalog-grid" id="catalog-results">${catalogResults()}</div></section>`;
  shell(content, 'catalogo');
  document.querySelector('#catalog-search')?.addEventListener('input', event => {
    state.search = event.target.value;
    updateCatalogResults();
  });
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    state.filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => item.classList.toggle('selected', item === button));
    updateCatalogResults();
  }));
}

function catalogResults() {
  const q = state.search.trim().toLocaleLowerCase('pt-BR');
  const matches = projects.filter(project => {
    const filterMatch = state.filter === 'Todos' || project.status === state.filter;
    const haystack = [project.title, project.series, project.platform, project.status, ...project.tags].join(' ').toLocaleLowerCase('pt-BR');
    return filterMatch && haystack.includes(q);
  });
  return matches.length ? matches.map(projectCard).join('') : '<div class="empty-state"><span>⌕</span><strong>Nenhum projeto encontrado.</strong><p>Experimente outro termo ou selecione um filtro diferente.</p><button type="button" class="button button-outline" data-clear-search>Limpar busca</button></div>';
}

function updateCatalogResults() {
  const target = document.querySelector('#catalog-results');
  if (!target) return;
  target.innerHTML = catalogResults();
  const count = target.querySelectorAll('.project-card').length;
  document.querySelector('#result-count').textContent = count;
  target.querySelector('[data-clear-search]')?.addEventListener('click', () => {
    state.search = '';
    state.filter = 'Todos';
    catalogPage();
  });
}

function fact(label, value) {
  return `<div class="fact-item"><span>${esc(label)}</span><strong>${esc(value || 'Não informado')}</strong></div>`;
}

function projectPage(project) {
  const team = project.team.map(member => `<div class="team-row"><span>${esc(member.role)}</span><strong>${esc(member.name)}</strong></div>`).join('');
  const progress = project.progressItems.map((item, index) => `<div class="progress-item"><span class="progress-number">0${index + 1}</span><div><strong>${esc(item.name)}</strong><small>${esc(item.state)}</small></div><span class="progress-state">${esc(item.state)}</span></div>`).join('');
  const gallery = project.gallery.length ? `<div class="gallery-grid">${project.gallery.map(image => `<figure><img src="${esc(image.src)}" alt="${esc(image.alt)}"><figcaption>${esc(image.caption || '')}</figcaption></figure>`).join('')}</div>` : `<div class="section-empty">${icon('image')}<div><strong>Capturas de tela em breve</strong><p>As imagens do jogo e da tradução serão adicionadas quando estiverem disponíveis.</p></div></div>`;
  const versions = project.versions.length ? `<div class="version-list">${project.versions.map(version => `<article class="version-item"><div><strong>Versão ${esc(version.version)}</strong><span>${esc(version.date)}</span></div><p>${esc(version.notes)}</p></article>`).join('')}</div>` : `<div class="section-empty">${icon('clock')}<div><strong>Nenhuma versão pública até o momento</strong><p>O histórico será exibido aqui quando uma versão for disponibilizada.</p></div></div>`;
  const downloads = project.downloads.length ? project.downloads.map(file => `<a class="download-row" href="${esc(file.url)}" target="_blank" rel="noopener noreferrer"><span>${icon('download')}<span><strong>${esc(file.label)}</strong><small>${esc(file.description || 'Download')}</small></span></span>${icon('external')}</a>`).join('') : `<div class="download-unavailable"><span class="download-icon">${icon('download')}</span><strong>Tradução ainda não disponível</strong><p>Os arquivos para download serão publicados nesta página quando estiverem prontos.</p><span class="availability-label">SEM ARQUIVO PÚBLICO</span></div>`;

  const content = `
    <section class="project-hero"><div class="wrap"><div class="breadcrumbs"><a href="#/inicio">Início</a><span>/</span><a href="#/catalogo">Catálogo</a><span>/</span><span>${esc(project.shortTitle)}</span></div><div class="project-hero-grid"><div class="project-poster">${poster(project)}</div><div class="project-intro"><div class="project-overline"><span>${esc(project.series)}</span><span class="status ${statusClass(project.status)}">${esc(project.status)}</span></div><h1>${esc(project.title)}</h1><p class="project-lead">${esc(project.description)}</p><div class="project-tags">${project.tags.map(tag => `<span>${esc(tag)}</span>`).join('')}</div><div class="project-hero-actions"><a class="button button-primary" href="#downloads">Ver downloads ${icon('arrow')}</a><a class="button button-quiet" href="#andamento">Acompanhar andamento</a></div><div class="project-updated">${icon('clock')} Última atualização: ${esc(project.updated)}</div></div></div></div></section>
    <section class="wrap project-layout">
      <div class="project-main-column">
        <section class="detail-section" id="sobre-o-jogo"><div class="detail-heading"><span>01</span><div><div class="eyebrow">SOBRE O PROJETO</div><h2>Conheça a tradução.</h2></div></div><p class="detail-copy">${esc(project.description)}</p><div class="facts-grid">${fact('Plataforma', project.platform)}${fact('Lançamento original', project.release)}${fact('Desenvolvedora', project.developer)}${fact('Distribuidora', project.publisher)}${fact('Idioma', 'Português brasileiro (PT-BR)')}${fact('Versão da tradução', project.version)}</div></section>
        <section class="detail-section" id="andamento"><div class="detail-heading"><span>02</span><div><div class="eyebrow">DESENVOLVIMENTO</div><h2>Andamento do projeto.</h2></div></div><p class="section-description">O estado de cada etapa será atualizado conforme o trabalho avançar. Percentuais só serão exibidos quando houver uma medição definida.</p><div class="progress-list">${progress}</div></section>
        <section class="detail-section" id="equipe"><div class="detail-heading"><span>03</span><div><div class="eyebrow">CRÉDITOS</div><h2>Equipe do projeto.</h2></div></div><div class="team-list">${team}</div></section>
        <section class="detail-section" id="galeria"><div class="detail-heading"><span>04</span><div><div class="eyebrow">IMAGENS</div><h2>Galeria.</h2></div></div>${gallery}</section>
        <section class="detail-section" id="historico"><div class="detail-heading"><span>05</span><div><div class="eyebrow">VERSÕES</div><h2>Histórico de atualizações.</h2></div></div>${versions}</section>
      </div>
      <aside class="project-sidebar"><div class="sidebar-card" id="downloads"><div class="sidebar-eyebrow">ARQUIVOS DO PROJETO</div><h2>Downloads.</h2>${downloads}<div class="sidebar-disclaimer">${icon('info')}<p>Use somente arquivos e patches publicados nos canais oficiais do projeto. Não distribuímos cópias dos jogos.</p></div></div><div class="sidebar-card sidebar-quick"><div class="sidebar-eyebrow">NESTA PÁGINA</div><a href="#sobre-o-jogo">Sobre o projeto <span>01</span></a><a href="#andamento">Andamento <span>02</span></a><a href="#equipe">Equipe <span>03</span></a><a href="#galeria">Galeria <span>04</span></a><a href="#historico">Histórico <span>05</span></a></div><a class="back-catalog" href="#/catalogo">← Voltar ao catálogo</a></aside>
    </section>`;
  shell(content, 'catalogo');
}

function textPage({ kicker, title, intro, body, active }) {
  shell(`<section class="inner-hero"><div class="wrap"><div class="breadcrumbs"><a href="#/inicio">Início</a><span>/</span><span>${esc(title.replaceAll('<em>', '').replaceAll('</em>', ''))}</span></div><div class="eyebrow">${esc(kicker)}</div><h1>${title}</h1><p>${esc(intro)}</p></div></section><section class="section wrap text-page">${body}</section>`, active);
}

function aboutPage() {
  textPage({
    kicker: 'QUEM SOMOS', title: 'Sobre o <em>LLEOGAME.</em>', intro: 'Um espaço independente dedicado à localização de jogos para português brasileiro.', active: 'sobre',
    body: `<div class="text-page-lead"><span class="large-monogram">LG</span><div><div class="eyebrow">NOSSA PROPOSTA</div><h2>Mais pessoas vivendo<br><em>as mesmas histórias.</em></h2><p>O LLEOGAME nasceu para reunir e apresentar projetos de tradução de jogos. A ideia é aproximar jogadores de experiências que nem sempre chegam ao público brasileiro em nosso idioma.</p></div></div><div class="text-columns"><article><span class="text-index">01 / PROPÓSITO</span><h3>Localização feita com cuidado.</h3><p>Tradução envolve mais do que substituir palavras. Textos, menus, limitações técnicas e contexto precisam conversar para que a experiência continue fazendo sentido.</p></article><article><span class="text-index">02 / PRINCÍPIOS</span><h3>Fã para fã.</h3><p>Os projetos são independentes e sem fins lucrativos. As marcas, personagens, jogos e demais propriedades intelectuais pertencem aos seus respectivos titulares.</p></article><article><span class="text-index">03 / CATÁLOGO</span><h3>Projetos em um só lugar.</h3><p>Cada tradução tem uma página própria com informações, créditos, andamento, capturas de tela, histórico e arquivos, quando publicados.</p></article></div><div class="text-callout"><strong>Quer acompanhar os projetos?</strong><p>Visite o catálogo para conferir o estado de cada tradução.</p><a class="button button-primary" href="#/catalogo">Acessar catálogo ${icon('arrow')}</a></div>`
  });
}

function supportPage() {
  textPage({
    kicker: 'COMUNIDADE', title: 'Ajude a <em>causa.</em>', intro: 'Todo apoio ajuda a manter os projetos independentes vivos e acessíveis.', active: 'apoio',
    body: `<div class="support-intro"><span class="support-heart">${icon('heart')}</span><div><h2>Você pode ajudar de várias formas.</h2><p>Nem todo apoio precisa ser financeiro. Divulgar o trabalho, testar versões públicas e enviar relatos bem explicados também fazem diferença.</p></div></div><div class="support-grid"><article><span>01</span><h3>Compartilhe</h3><p>Conte para outros jogadores sobre o catálogo e os projetos de tradução.</p></article><article><span>02</span><h3>Teste e reporte</h3><p>Quando uma versão pública estiver disponível, relatos de erros e sugestões ajudam a melhorar a qualidade.</p></article><article><span>03</span><h3>Respeite os créditos</h3><p>Ao divulgar uma tradução, mantenha os créditos e compartilhe os links oficiais do projeto.</p></article></div><div class="text-callout"><strong>Colaboração e apoio financeiro</strong><p>Os canais específicos para contribuição ainda não foram configurados. Nenhum pagamento é solicitado por esta página.</p><a class="button button-outline" href="#/contato">Entrar em contato ${icon('arrow')}</a></div>`
  });
}

function contactPage() {
  textPage({
    kicker: 'FALE COM O LLEOGAME', title: 'Conecte-se <em>conosco.</em>', intro: 'Encontrou um problema, tem uma sugestão ou quer conversar sobre um projeto?', active: 'contato',
    body: `<div class="contact-panel"><div class="contact-panel-icon">${icon('info')}</div><div><h2>Vamos conversar.</h2><p>Os canais públicos de contato serão adicionados aqui assim que estiverem definidos. Enquanto isso, você pode acompanhar as páginas dos projetos para consultar informações e novidades.</p><a class="button button-primary" href="#/catalogo">Explorar projetos ${icon('arrow')}</a></div></div><div class="contact-note"><strong>Ao relatar um problema em uma tradução</strong><p>Informe o nome do jogo, a plataforma, a versão utilizada e os passos para reproduzir o erro. Isso facilita a análise.</p></div>`
  });
}

function legalPage() {
  textPage({
    kicker: 'INFORMAÇÕES', title: 'Aviso <em>legal.</em>', intro: 'Informações sobre a natureza dos projetos e os direitos relacionados às obras.', active: '',
    body: `<article class="legal-article"><h2>Projetos de fã para fã</h2><p>O LLEOGAME é um projeto independente e sem fins lucrativos. As traduções disponibilizadas neste site são produzidas com finalidade de preservação, estudo e acesso linguístico por parte da comunidade.</p><h2>Direitos autorais e marcas</h2><p>Todos os nomes, marcas, logotipos, personagens, imagens, músicas, jogos e demais elementos protegidos pertencem aos seus respectivos titulares. O LLEOGAME não reivindica propriedade sobre essas obras e não possui vínculo oficial com as empresas responsáveis por elas.</p><h2>Arquivos e distribuição</h2><p>Quando disponíveis, os downloads publicados nesta plataforma devem ser patches ou arquivos de tradução. O usuário é responsável por possuir uma cópia legítima do jogo original e por observar as leis aplicáveis em sua região. Não disponibilizamos cópias comerciais dos jogos.</p><h2>Conteúdo e disponibilidade</h2><p>Informações de andamento, compatibilidade e versões podem mudar durante o desenvolvimento. Sempre consulte a página individual do projeto e as instruções que acompanham cada lançamento.</p></article>`
  });
}

function notFoundPage() {
  shell(`<section class="not-found wrap"><div class="eyebrow">ERRO 404</div><h1>Essa página não foi <em>encontrada.</em></h1><p>O endereço pode ter mudado ou o projeto não existe no catálogo.</p><a class="button button-primary" href="#/catalogo">Voltar ao catálogo ${icon('arrow')}</a></section>`);
}

function render() {
  const route = currentRoute();
  if (route.page === 'inicio') return homePage();
  if (route.page === 'catalogo') return catalogPage();
  if (route.page === 'projeto') {
    const project = projects.find(item => item.id === route.id);
    return project ? projectPage(project) : notFoundPage();
  }
  if (route.page === 'sobre') return aboutPage();
  if (route.page === 'apoio') return supportPage();
  if (route.page === 'contato') return contactPage();
  if (route.page === 'legal') return legalPage();
  return notFoundPage();
}

window.addEventListener('hashchange', () => { state.mobileMenu = false; render(); });
render();
