// ===== Helpers
const $ = (q, el = document) => el.querySelector(q);
const $$ = (q, el = document) => [...el.querySelectorAll(q)];

// ===== Translations
const translations = {
  pt: {
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.certs': 'Certificados',
    'nav.contact': 'Contato',
    'nav.theme': 'Tema',
    'hero.kicker': 'Engenheiro DevOps • Desenvolvedor Full-Stack',
    'hero.title': 'João Pedro Nascimento Silveira',
    'hero.lead': 'Construo infraestrutura confiável, automatizo pipelines de entrega e desenvolvo produtos web/mobile escaláveis. Foco forte em Kubernetes, observabilidade e práticas de engenharia limpa.',
    'hero.btn.projects': 'Ver Projetos',
    'hero.btn.contact': 'Contato',
    'hero.chip.location': 'Porto Velho, BR',
    'hero.card.available': 'Disponível para oportunidades',
    'hero.card.subtitle': 'DevOps • Platform • Full-Stack',
    'hero.card.focus': 'Foco',
    'hero.card.focus.value': 'Confiabilidade',
    'hero.card.stack': 'Stack',
    'hero.card.stack.value': 'K8s + CI/CD',
    'hero.card.cloud': 'Cloud',
    'hero.card.cloud.value': 'AWS / OCI',
    'hero.card.btn.experience': 'Ver Experiência',
    'hero.card.btn.hire': 'Me Contrate',
    'section.about': 'Sobre',
    'section.about.desc': 'Um resumo rápido sobre quem sou e o que faço.',
    'about.profile': 'Perfil',
    'about.profile.text': 'Engenheiro DevOps e Desenvolvedor Full-Stack com experiência em sustentar e automatizar ambientes críticos. Experiência prática com Docker, Kubernetes, Nutanix, CI/CD (GitLab CI, ArgoCD), e observabilidade (Prometheus, Grafana, Dynatrace, Zabbix). Terraform básico (IaC). Fundador da Ore Software construindo produtos SaaS e mobile.',
    'about.highlights': 'Destaques',
    'about.highlight.1': 'Gerenciou clusters Kubernetes e infraestrutura Nutanix para alta disponibilidade.',
    'about.highlight.2': 'Automatizou pipelines de entrega com GitLab CI e ArgoCD.',
    'about.highlight.3': 'Implementou monitoramento/observabilidade com Prometheus, Grafana, Dynatrace, Zabbix.',
    'about.highlight.4': 'Construiu produtos web/mobile com Next.js, Angular, Flutter e APIs.',
    'section.skills': 'Habilidades',
    'section.skills.desc': 'Ferramentas e tecnologias que utilizo.',
    'skills.devops': 'DevOps & Platform',
    'skills.observability': 'Observabilidade',
    'skills.backend': 'Backend & APIs',
    'skills.frontend': 'Frontend & Mobile',
    'skills.data': 'Data & Databases',
    'skills.cloud': 'Cloud & Tooling',
    'section.experience': 'Experiência',
    'section.experience.desc': 'Onde trabalhei e o que entreguei.',
    'exp.1.title': 'Secretaria de Estado de Finanças — Engenheiro DevOps',
    'exp.1.period': 'Porto Velho, RO • Jun 2025 — Presente',
    'exp.1.li.1': 'Administrou infraestrutura Nutanix e clusters Kubernetes para alta disponibilidade e resiliência.',
    'exp.1.li.2': 'Padronizou ambientes usando Docker para garantir entrega consistente.',
    'exp.1.li.3': 'Criou e manteve pipelines CI/CD com GitLab CI e ArgoCD.',
    'exp.1.li.4': 'Implementou monitoramento/observabilidade com Prometheus, Grafana, Dynatrace e Zabbix.',
    'exp.1.li.5': 'Automatizou provisionamento/configuração com Ansible, Rancher e Terraform básico (IaC).',
    'exp.2.title': 'Tribunal de Justiça de Rondônia — Estagiário de Desenvolvimento de Software',
    'exp.2.period': 'Porto Velho, RO • Ago 2022 — Ago 2024',
    'exp.2.li.1': 'Construiu aplicações web escaláveis usando Angular (frontend) e Quarkus (backend).',
    'exp.2.li.2': 'Melhorou UI/UX para aumentar eficiência e acessibilidade.',
    'exp.2.li.3': 'Utilizou JWT e OAuth para autenticação segura e controle de acesso.',
    'exp.3.title': 'Defensoria Pública de Rondônia — Estagiário de Desenvolvimento de Software',
    'exp.3.period': 'Porto Velho, RO • Jul 2021 — Ago 2021',
    'exp.3.li.1': 'Otimizou queries de banco de dados Django, melhorando performance e tempo de resposta.',
    'exp.4.title': 'Ministério Público — Estagiário Administrativo',
    'exp.4.period': 'Porto Velho, RO • Fev 2016 — Mar 2017',
    'exp.4.li.1': 'Assistiu na elaboração de ofícios, memorandos e circulares.',
    'exp.4.li.2': 'Entregou documentos nas instituições apropriadas.',
    'section.projects': 'Projetos',
    'section.projects.desc': 'Trabalho selecionado — links inclusos.',
    'project.1.title': 'Discord Bot',
    'project.1.text': 'Bot para servidores Discord com suporte a banco de dados.',
    'project.2.title': 'Zero Math',
    'project.2.text': 'Aplicativo mobile para auxiliar no ensino e aprendizado do tema "Zero de Funções".',
    'project.3.title': 'Ore Software (Holding)',
    'project.3.text': 'Marca guarda-chuva para Ore Labs (SaaS/apps/web) e Ore Studios (games).',
    'section.certs': 'Cursos Online & Certificados',
    'section.certs.desc': 'Treinamento e aprendizado recente.',
    'section.publication': 'Publicação',
    'section.publication.desc': 'Publicação científica e palavras-chave.',
    'publication.title': 'ZeroMath: An application to assist in teaching and learning the Zero of Functions (2024)',
    'publication.keywords': 'Palavras-chave: Métodos Numéricos, Zero de Funções, Aplicação Educacional, Gráficos Interativos.',
    'section.contact': 'Contato',
    'section.contact.desc': 'Quer conversar? Envie uma mensagem.',
    'contact.getintouch': 'Entre em contato',
    'contact.text': 'Email é a forma mais rápida. Você também pode me alcançar via LinkedIn.',
    'contact.copy': 'Copiar email',
    'contact.download': 'Baixar Currículo',
    'contact.message': 'Mensagem',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mensagem',
    'contact.form.placeholder.name': 'Seu nome',
    'contact.form.placeholder.email': 'voce@email.com',
    'contact.form.placeholder.message': 'Conte-me sobre seu projeto...',
    'contact.form.submit': 'Enviar',
    'footer.text': '© 2026 • João Pedro Nascimento Silveira',
    'footer.totop': 'Voltar ao topo ↑',
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.certs': 'Certificates',
    'nav.contact': 'Contact',
    'nav.theme': 'Theme',
    'hero.kicker': 'DevOps Engineer • Full-Stack Developer',
    'hero.title': 'João Pedro Nascimento Silveira',
    'hero.lead': 'I build reliable infrastructure, automate delivery pipelines, and develop scalable web/mobile products. Strong focus on Kubernetes, observability, and clean engineering practices.',
    'hero.btn.projects': 'View Projects',
    'hero.btn.contact': 'Contact',
    'hero.chip.location': 'Porto Velho, BR',
    'hero.card.available': 'Available for opportunities',
    'hero.card.subtitle': 'DevOps • Platform • Full-Stack',
    'hero.card.focus': 'Focus',
    'hero.card.focus.value': 'Reliability',
    'hero.card.stack': 'Stack',
    'hero.card.stack.value': 'K8s + CI/CD',
    'hero.card.cloud': 'Cloud',
    'hero.card.cloud.value': 'AWS / OCI',
    'hero.card.btn.experience': 'See Experience',
    'hero.card.btn.hire': 'Hire Me',
    'section.about': 'About',
    'section.about.desc': 'A quick summary of who I am and what I do.',
    'about.profile': 'Profile',
    'about.profile.text': 'DevOps Engineer and Full-Stack Developer experienced in sustaining and automating mission-critical environments. Hands-on with Docker, Kubernetes, Nutanix, CI/CD (GitLab CI, ArgoCD), and observability (Prometheus, Grafana, Dynatrace, Zabbix). Basic Terraform (IaC). Founder of Ore Software building SaaS and mobile products.',
    'about.highlights': 'Highlights',
    'about.highlight.1': 'Managed Kubernetes clusters and Nutanix infrastructure for high availability.',
    'about.highlight.2': 'Automated delivery pipelines with GitLab CI and ArgoCD.',
    'about.highlight.3': 'Implemented monitoring/observability with Prometheus, Grafana, Dynatrace, Zabbix.',
    'about.highlight.4': 'Built web/mobile products with Next.js, Angular, Flutter and APIs.',
    'section.skills': 'Skills',
    'section.skills.desc': 'Tools and technologies I use.',
    'skills.devops': 'DevOps & Platform',
    'skills.observability': 'Observability',
    'skills.backend': 'Backend & APIs',
    'skills.frontend': 'Frontend & Mobile',
    'skills.data': 'Data & Databases',
    'skills.cloud': 'Cloud & Tooling',
    'section.experience': 'Experience',
    'section.experience.desc': 'Where I\'ve worked and what I delivered.',
    'exp.1.title': 'State Department of Finance — DevOps Engineer',
    'exp.1.period': 'Porto Velho, RO • Jun 2025 — Present',
    'exp.1.li.1': 'Administered Nutanix infrastructure and Kubernetes clusters for high availability and resilience.',
    'exp.1.li.2': 'Standardized environments using Docker to ensure consistent delivery.',
    'exp.1.li.3': 'Created and maintained CI/CD pipelines with GitLab CI and ArgoCD.',
    'exp.1.li.4': 'Implemented monitoring/observability with Prometheus, Grafana, Dynatrace, and Zabbix.',
    'exp.1.li.5': 'Automated provisioning/configuration with Ansible, Rancher, and basic Terraform (IaC).',
    'exp.2.title': 'State Court of Rondônia — Software Development Intern',
    'exp.2.period': 'Porto Velho, RO • Aug 2022 — Aug 2024',
    'exp.2.li.1': 'Built scalable web apps using Angular (frontend) and Quarkus (backend).',
    'exp.2.li.2': 'Improved UI/UX to increase efficiency and accessibility.',
    'exp.2.li.3': 'Used JWT and OAuth for secure authentication and access control.',
    'exp.3.title': 'Public Defender\'s Office of Rondônia — Software Development Intern',
    'exp.3.period': 'Porto Velho, RO • Jul 2021 — Aug 2021',
    'exp.3.li.1': 'Optimized Django database queries, improving performance and response time.',
    'exp.4.title': 'Public Prosecutor\'s Office — Administrative Intern',
    'exp.4.period': 'Porto Velho, RO • Feb 2016 — Mar 2017',
    'exp.4.li.1': 'Assisted in drafting official letters, memos, and circulars.',
    'exp.4.li.2': 'Delivered documents to the appropriate institutions.',
    'section.projects': 'Projects',
    'section.projects.desc': 'Selected work — links included.',
    'project.1.title': 'Discord Bot',
    'project.1.text': 'Bot for Discord servers with database support.',
    'project.2.title': 'Zero Math',
    'project.2.text': 'Mobile app to assist teaching and learning the "Zero of Functions" topic.',
    'project.3.title': 'Ore Software (Holding)',
    'project.3.text': 'Umbrella brand for Ore Labs (SaaS/apps/web) and Ore Studios (games).',
    'section.certs': 'Online Courses & Certificates',
    'section.certs.desc': 'Recent training and learning.',
    'section.publication': 'Publication',
    'section.publication.desc': 'Scientific publication and keywords.',
    'publication.title': 'ZeroMath: An application to assist in teaching and learning the Zero of Functions (2024)',
    'publication.keywords': 'Keywords: Numerical Methods, Zero of Functions, Educational Application, Interactive Graphs.',
    'section.contact': 'Contact',
    'section.contact.desc': 'Want to talk? Send a message.',
    'contact.getintouch': 'Get in touch',
    'contact.text': 'Email is the fastest way. You can also reach me via LinkedIn.',
    'contact.copy': 'Copy email',
    'contact.download': 'Download CV',
    'contact.message': 'Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.placeholder.name': 'Your name',
    'contact.form.placeholder.email': 'you@email.com',
    'contact.form.placeholder.message': 'Tell me about your project...',
    'contact.form.submit': 'Send',
    'footer.text': '© 2026 • João Pedro Nascimento Silveira',
    'footer.totop': 'Back to top ↑',
  }
};

function t(key, lang = currentLang) {
  return translations[lang]?.[key] || translations.en?.[key] || key;
}

let currentLang = 'pt';

// ===== Language toggle (persisted)
const langBtn = $('[data-lang]');

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  
  if (langBtn) {
    langBtn.querySelector('.lang-text').textContent = lang.toUpperCase();
  }
  
  // Update all elements with data-i18n attribute
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key, lang);
  });
}

(function initLanguage() {
  const saved = localStorage.getItem('language');
  const browserLang = navigator.language.startsWith('pt') ? 'pt' : 'en';
  setLanguage(saved || browserLang);
})();

langBtn?.addEventListener('click', () => {
  setLanguage(currentLang === 'pt' ? 'en' : 'pt');
});

// ===== Theme toggle (persisted)
const themeBtn = $('[data-theme]');
const root = document.documentElement;

function setTheme(mode) {
  root.setAttribute('data-theme', mode);
  localStorage.setItem('theme', mode);

  const icon = $('.theme-icon');
  if (icon) icon.textContent = mode === 'light' ? '☀' : '☾';
}

(function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  setTheme(saved || (prefersLight ? 'light' : 'dark'));
})();

themeBtn?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') || 'dark';
  setTheme(current === 'light' ? 'dark' : 'light');
});

// ===== Mobile menu
const navToggle = $('.nav-toggle');
const navLinks = $('[data-navlinks]');

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

$$('[data-navlinks] a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

// ===== Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

$$('.reveal').forEach(el => observer.observe(el));

// ===== Footer year
const yearEl = $('#year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// ===== Copy buttons
$$('[data-copy]').forEach(btn => {
  btn.addEventListener('click', async () => {
    const value = btn.getAttribute('data-copy') || '';
    try {
      await navigator.clipboard.writeText(value);
      const old = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => (btn.textContent = old), 1100);
    } catch {
      alert('Could not copy. Please copy manually: ' + value);
    }
  });
});

// ===== Download CV button (placeholder)
const downloadBtn = $('[data-download]');
downloadBtn?.addEventListener('click', () => {
  // Replace with your resume URL, e.g.:
  window.open(`./docs/joao_pedro_cv_${currentLang}.pdf`, '_blank');
});

// ===== Contact form (mailto - no backend needed)
const form = $('[data-contact-form]');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const message = String(data.get('message') || '').trim();

  const subject = encodeURIComponent(`Portfolio Contact — ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`);
  window.location.href = `mailto:pedrozle@outlook.com?subject=${subject}&body=${body}`;
});
