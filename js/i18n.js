// 简单的 i18n 实现：默认根据浏览器语言选择，用户选择会记住
const I18N = {
  'zh-CN': {
    nav: { home: '首页', products: '产品', about: '关于我们' },
    brand: '灌灌游 <span class="en">GuanGuanGames</span>',
    hero: {
      title: '创造有温度的工具与游戏',
      subtitle: '我们正在打造 <b>PaperRig</b> —— 面向 Unreal Engine 的工作流程增强插件。简单、可靠、高效。',
      cardTitle: 'PaperRig',
      cardSub: '原生UE工作流的轻量级 2D 骨骼动画插件',
      points: ['Interchange 管线适配', '稳定的资源导入', '面向团队的可扩展设计'],
      ctaBrowse: '浏览产品',
      ctaDocs: '查看 PaperRig 文档',
      cardCta: '了解更多'
    },
    home: {
      whatWeDo: {
        title: '我们在做什么',
        quality: { title: '专注品质', desc: '以开发者体验为中心，打磨每一个细节。' },
        docs: { title: '开放与文档', desc: '遵循可读、可维护、可扩展的工程实践。' },
        longterm: { title: '长期主义', desc: '把时间花在真正重要的事情上。' }
      }
    },
    products: { title: '产品与项目', viewDocs: '查看文档' },
    about: {
      title: '关于灌灌游',
      p1: '灌灌游 GuanGuanGames 专注于游戏与开发工具的研发。我们追求稳定、易用与优雅的产品体验。',
      p2: '当前重点产品 <b>PaperRig</b> 是一款轻量级 2D 骨骼动画插件，基于 Unreal Engine 原生 Skeletal Mesh 工作流构建，帮助团队更高效地创建和管理 2D 动画资产。',
      p3: '如需合作或了解更多，请通过 <a href="mailto:{email}">{email}</a> 或加入 <a href="{discord}" target="_blank" rel="noopener">Discord</a> 与我们联系。'
    },
    footer: { copy: '© 2025 灌灌游 GuanGuanGames' }
  },
  'en': {
    nav: { home: 'Home', products: 'Products', about: 'About' },
    brand: 'GuanGuanGames',
    hero: {
      title: 'Tools and games that feel good to use',
      subtitle: 'We\'re building <b>PaperRig</b> — a workflow-friendly plugin for Unreal Engine. Simple. Reliable. Efficient.',
      cardTitle: 'PaperRig',
      cardSub: 'Lightweight 2D Skeletal Animation Plugin with Native UE Workflow',
      points: ['Interchange pipeline ready', 'Reliable asset import', 'Team-friendly extensibility'],
      ctaBrowse: 'Browse Products',
      ctaDocs: 'Read PaperRig Docs',
      cardCta: 'Learn more'
    },
    home: {
      whatWeDo: {
        title: 'What we do',
        quality: { title: 'Quality-first', desc: 'Polishing every detail for developer experience.' },
        docs: { title: 'Open & documented', desc: 'Readable, maintainable and extensible engineering.' },
        longterm: { title: 'Long-termism', desc: 'Spend time on what truly matters.' }
      }
    },
    products: { title: 'Products & Projects', viewDocs: 'Docs' },
    about: {
      title: 'About GuanGuanGames',
      p1: 'GuanGuanGames focuses on games and developer tools with stability and elegance.',
      p2: 'Our current focus, <b>PaperRig</b>, is a lightweight 2D skeletal animation plugin built entirely on Unreal Engine’s native Skeletal Mesh workflow, helping teams create and manage 2D animation assets more efficiently.',
      p3: 'For collaboration and inquiries, email <a href="mailto:{email}">{email}</a> or join our <a href="{discord}" target="_blank" rel="noopener">Discord</a>.'
    },
    footer: { copy: '© 2025 GuanGuanGames' }
  }
};

function getBrowserLang() {
  const stored = localStorage.getItem('lang');
  if (stored) return stored;
  const nav = navigator.language || (navigator.languages && navigator.languages[0]) || 'en';
  return nav && nav.toLowerCase().startsWith('zh') ? 'zh-CN' : 'en';
}

function applyI18n(lang) {
  const t = I18N[lang] || I18N['en'];
  document.documentElement.lang = lang;

  // brand
  const brand = document.getElementById('brand-text');
  if (brand) {
    if (lang === 'zh-CN') {
      brand.innerHTML = '灌灌游 <span class="en">GuanGuanGames</span>';
    } else {
      brand.innerHTML = 'GuanGuanGames';
    }
  }

  // nav
  document.querySelectorAll('[data-i18n="nav.home"]').forEach(n => n.textContent = t.nav.home);
  document.querySelectorAll('[data-i18n="nav.products"]').forEach(n => n.textContent = t.nav.products);
  document.querySelectorAll('[data-i18n="nav.about"]').forEach(n => n.textContent = t.nav.about);

  // header ctas etc (home only if present)
  const ht = document.getElementById('hero-title'); if (ht) ht.innerHTML = t.hero.title;
  const hs = document.getElementById('hero-subtitle'); if (hs) hs.innerHTML = t.hero.subtitle;
  const hct = document.getElementById('hero-card-title'); if (hct) hct.textContent = t.hero.cardTitle;
  const hcs = document.getElementById('hero-card-sub'); if (hcs) hcs.textContent = t.hero.cardSub;
  const hp = document.getElementById('hero-card-points');
  if (hp) { hp.innerHTML = (t.hero.points || []).map(x => `<li>${x}</li>`).join(''); }
  const cb = document.getElementById('cta-browse'); if (cb) cb.textContent = t.hero.ctaBrowse;
  const cd = document.getElementById('cta-docs'); if (cd) cd.textContent = t.hero.ctaDocs;
  const hcc = document.getElementById('hero-card-cta'); if (hcc) hcc.textContent = t.hero.cardCta;

  // home section
  document.querySelectorAll('[data-i18n="home.whatWeDo.title"]').forEach(n => n.textContent = t.home.whatWeDo.title);
  document.querySelectorAll('[data-i18n="home.whatWeDo.quality.title"]').forEach(n => n.textContent = t.home.whatWeDo.quality.title);
  document.querySelectorAll('[data-i18n="home.whatWeDo.quality.desc"]').forEach(n => n.textContent = t.home.whatWeDo.quality.desc);
  document.querySelectorAll('[data-i18n="home.whatWeDo.docs.title"]').forEach(n => n.textContent = t.home.whatWeDo.docs.title);
  document.querySelectorAll('[data-i18n="home.whatWeDo.docs.desc"]').forEach(n => n.textContent = t.home.whatWeDo.docs.desc);
  document.querySelectorAll('[data-i18n="home.whatWeDo.longterm.title"]').forEach(n => n.textContent = t.home.whatWeDo.longterm.title);
  document.querySelectorAll('[data-i18n="home.whatWeDo.longterm.desc"]').forEach(n => n.textContent = t.home.whatWeDo.longterm.desc);

  // products title
  const pt = document.getElementById('products-title'); if (pt) pt.textContent = t.products.title;

  // about
  const at = document.getElementById('about-title'); if (at) at.textContent = t.about.title;
  const ab = document.getElementById('about-body'); if (ab) {
    ab.innerHTML = `<p>${t.about.p1}</p><p>${t.about.p2}</p><p>${t.about.p3.replaceAll('{email}', SITE.email).replaceAll('{discord}', SITE.discord)}</p>`;
  }

  // footer + contacts
  const fc = document.getElementById('footer-copy'); if (fc) fc.textContent = t.footer.copy;
  const fe = document.getElementById('footer-email'); if (fe) { fe.href = 'mailto:' + SITE.email; fe.textContent = SITE.email; }
  const fd = document.getElementById('footer-discord'); if (fd) { fd.href = SITE.discord; }
  const fdn = document.getElementById('footer-domain'); if (fdn) { fdn.textContent = SITE.domain; }
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = getBrowserLang();
  applyI18n(lang);
  // set lang switch UI
  document.querySelectorAll('[data-setlang]').forEach(btn => {
    if (btn.getAttribute('data-setlang') === lang) btn.classList.add('active');
    btn.addEventListener('click', () => {
      const chosen = btn.getAttribute('data-setlang');
      localStorage.setItem('lang', chosen);
      document.querySelectorAll('[data-setlang]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyI18n(chosen);
      // if products page, also re-render product cards in chosen language
      if (typeof renderProducts === 'function') renderProducts(chosen);
    });
  });
});
