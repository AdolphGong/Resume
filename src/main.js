import { resumeData } from './data.js';

const app = document.querySelector('#app');

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const link = (href, label, className = 'text-link') => href
  ? `<a class="${className}" href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(label)}</a>`
  : '';

const renderHeader = ({ profile, nav }) => `
  <header class="site-header">
    <div class="wrap nav-wrap">
      <a class="brand" href="#top" aria-label="返回顶部">
        <span>${escapeHtml(profile.name)}</span>
        <small>${escapeHtml(profile.romanName)}</small>
      </a>
      <nav class="site-nav" aria-label="页面导航">
        ${nav.map((item) => `<a href="#${escapeHtml(item.id)}">${escapeHtml(item.label)}</a>`).join('')}
      </nav>
    </div>
  </header>
`;

const renderHero = ({ profile, stats }) => `
  <section id="top" class="hero">
    <div class="wrap hero-inner">
      <p class="eyebrow">${escapeHtml(profile.title)} · ${escapeHtml(profile.location)}</p>
      <h1>${escapeHtml(profile.headline)}</h1>
      <p class="identity"><strong>${escapeHtml(profile.name)}</strong><span>${escapeHtml(profile.subtitle)}</span></p>
      <p class="hero-summary">${escapeHtml(profile.summary)}</p>
      <div class="hero-stats" aria-label="职业概览">
        ${stats.map((item) => `
          <div class="stat-item">
            <strong>${escapeHtml([item.big, item.unit].filter(Boolean).join(''))}</strong>
            <span>${escapeHtml(item.label)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`;

const renderEducation = ({ education }) => `
  <section id="education" class="section">
    <div class="wrap">
      <div class="section-head">
        <h2>教育背景</h2>
        <p>Education</p>
      </div>
      <article class="education-card">
        <div>
          <p class="meta-line">${escapeHtml(education.date)}</p>
          <h3>${escapeHtml(education.school)}</h3>
          <p>${escapeHtml(education.major)}</p>
        </div>
        <div class="chips compact">
          ${education.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}
        </div>
      </article>
    </div>
  </section>
`;

const renderResultCards = (results = []) => results.length
  ? `<div class="result-grid">${results.map((item) => `
      <div class="result-card">
        <strong>${escapeHtml(item.n)}</strong>
        <span>${escapeHtml(item.t)}</span>
      </div>
    `).join('')}</div>`
  : '';

const renderWork = ({ jobs, early }) => `
  <section id="work" class="section">
    <div class="wrap">
      <div class="section-head">
        <h2>工作经历</h2>
        <p>Work Experience</p>
      </div>
      <div class="work-list">
        ${jobs.map((job) => `
          <article class="job-card">
            <div class="card-top">
              <h3>${escapeHtml(job.company)} <span>· ${escapeHtml(job.title)}</span></h3>
              <time>${escapeHtml(job.date)}</time>
            </div>
            <p class="role-line">${escapeHtml(job.role)}</p>
            <p class="body-text">${escapeHtml(job.desc)}</p>
            ${renderResultCards(job.results)}
          </article>
        `).join('')}
      </div>
      <div class="early-list" aria-label="早期创业经历">
        ${early.map((item) => `
          <article>
            <time>${escapeHtml(item.date)}</time>
            <h3>${escapeHtml(item.company)} <span>· ${escapeHtml(item.title)}</span></h3>
            <p>${escapeHtml(item.desc)}</p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>
`;

const renderKeyProjects = ({ keyProjects }) => `
  <section id="projects" class="section">
    <div class="wrap">
      <div class="section-head">
        <h2>重点项目</h2>
        <p>Selected Projects</p>
      </div>
      <div class="project-grid">
        ${keyProjects.map((item) => `
          <article class="dark-card">
            <p class="card-kicker">${escapeHtml(item.era)}</p>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.desc)}</p>
            <div class="card-metric">${escapeHtml(item.metric)}</div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>
`;

const renderPractice = ({ lanes }) => `
  <section id="practice" class="section">
    <div class="wrap">
      <div class="section-head">
        <h2>特别实践</h2>
        <p>Practice</p>
      </div>
      <div class="practice-list">
        ${lanes.map((lane) => `
          <div class="practice-lane">
            <div class="lane-info">
              <h3>${escapeHtml(lane.group)}</h3>
              <p>${escapeHtml(lane.note)}</p>
            </div>
            <div class="lane-cards">
              ${lane.items.map((item) => `
                <article class="dark-card practice-card">
                  <p class="card-kicker">${escapeHtml(item.era)}</p>
                  <h4>${escapeHtml(item.title)}</h4>
                  <p>${escapeHtml(item.desc)}</p>
                  <div class="card-metric">${escapeHtml(item.metric)}</div>
                  ${link(item.link, item.linkText || '查看项目 →', 'text-link warm')}
                </article>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`;

const renderSkills = ({ skills }) => `
  <section id="skills" class="section">
    <div class="wrap">
      <div class="section-head">
        <h2>专业技能</h2>
        <p>Skill Stack</p>
      </div>
      <div class="skill-list">
        ${skills.map((group) => `
          <div class="skill-row">
            <h3>${escapeHtml(group.k)}</h3>
            <div class="chips">
              ${group.chips.map((chip) => `<span>${escapeHtml(chip)}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`;

const renderTrajectory = ({ waves }) => `
  <section id="trajectory" class="section trajectory-section">
    <div class="wrap">
      <div class="section-head">
        <h2>技术轨迹</h2>
        <p>Technology Path</p>
      </div>
      <div class="timeline">
        ${waves.map((wave) => `
          <article class="timeline-item">
            <time>${escapeHtml(wave.era)}</time>
            <h3>${escapeHtml(wave.title)}</h3>
            <p>${escapeHtml(wave.desc)}</p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>
`;

const renderWriting = ({ articles }) => `
  <section id="writing" class="section">
    <div class="wrap">
      <div class="section-head">
        <h2>文章</h2>
        <p>Writing</p>
      </div>
      <div class="article-grid">
        ${articles.map((article) => `
          <article class="article-card">
            <p class="card-kicker">${escapeHtml(article.source)} ${escapeHtml(article.date)}</p>
            <h3>${escapeHtml(article.title)}</h3>
            <p>${escapeHtml(article.desc)}</p>
            ${link(article.link, '阅读原文 →', 'text-link warm')}
          </article>
        `).join('')}
      </div>
    </div>
  </section>
`;

const renderContact = ({ profile }) => `
  <footer id="contact" class="contact-section">
    <div class="wrap">
      <h2>联系我</h2>
      <p class="contact-intro">如果你正在寻找一位既懂算法、又懂产品、还能推动工程落地的 AI 产品经理，欢迎随时联系。</p>
      <div class="contact-actions">
        <a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a>
        <span>${escapeHtml(profile.phone)}</span>
        <span>${escapeHtml(profile.city)}</span>
        <button id="wechat-open" class="contact-button" type="button">添加微信</button>
      </div>
      <p class="copyright">${escapeHtml(profile.copyright)}</p>
    </div>
  </footer>
  <div id="wechat-modal" class="modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="wechat-title">
    <div class="modal-panel" role="document">
      <button class="modal-close" type="button" data-wechat-close aria-label="关闭微信二维码">×</button>
      <h2 id="wechat-title">添加微信</h2>
      <p>使用微信扫码添加。</p>
      <img src="assets/wechat.jpg" alt="龚桂兵微信二维码">
    </div>
  </div>
`;

const renderPage = (data) => {
  app.innerHTML = [
    renderHeader(data),
    '<main>',
    renderHero(data),
    renderEducation(data),
    renderWork(data),
    renderKeyProjects(data),
    renderPractice(data),
    renderSkills(data),
    renderTrajectory(data),
    renderWriting(data),
    '</main>',
    renderContact(data)
  ].join('');
};

const setWechatModal = (open) => {
  const modal = document.querySelector('#wechat-modal');
  const openButton = document.querySelector('#wechat-open');
  if (!modal) return;

  modal.classList.toggle('is-open', open);
  modal.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('modal-open', open);

  if (open) {
    modal.querySelector('[data-wechat-close]')?.focus();
  } else {
    openButton?.focus();
  }
};

const bindInteractions = () => {
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    if (target.closest('#wechat-open')) {
      setWechatModal(true);
      return;
    }

    if (target.matches('[data-wechat-close]') || target.id === 'wechat-modal') {
      setWechatModal(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setWechatModal(false);
  });
};

renderPage(resumeData);
bindInteractions();