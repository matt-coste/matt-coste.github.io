const I18N = {
  en: {
    tagline: 'Choose your experience',
    labelPhoto: 'Visual',
    titlePhoto: 'Photography<br>Portfolio',
    descPhoto: 'Visual collections captured through my lens.',
    ctaPhoto: 'Explore',
    labelDev: 'Technical',
    titleDev: 'Portfolio<br>Software Engineer & UX/UI Designer',
    descDev: 'IT and UX/UI development projects.',
    ctaDev: 'Explore',
    rights: 'All rights reserved',
  },
  fr: {
    tagline: 'Choisissez votre univers',
    labelPhoto: 'Visuel',
    titlePhoto: 'Portfolio<br>Photographique',
    descPhoto: 'Collections visuelles capturées à travers mon objectif.',
    ctaPhoto: 'Découvrir',
    labelDev: 'Technique',
    titleDev: 'Portfolio<br> Ingénieur logiciel & UX/UI designer',
    descDev: 'Projets de développement informatique et d\'UX/UI.',
    ctaDev: 'Découvrir',
    rights: 'Tous droits réservés',
  },
};

let theme = localStorage.getItem('theme') || 'dark';
let lang = localStorage.getItem('lang') || 'en';

function applyTheme(t) {
  theme = t;
  localStorage.setItem('theme', t);
  document.documentElement.setAttribute('data-theme', t);
  document.getElementById('theme-btn').textContent = t === 'dark' ? '☀' : '☾';
}

function applyLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  document.documentElement.setAttribute('lang', l);
  document.getElementById('lang-btn').textContent = l === 'en' ? 'FR' : 'EN';

  const s = I18N[l];
  document.getElementById('tagline').textContent = s.tagline;
  document.getElementById('label-photo').textContent = s.labelPhoto;
  document.getElementById('title-photo').innerHTML = s.titlePhoto;
  document.getElementById('desc-photo').textContent = s.descPhoto;
  document.getElementById('cta-photo').textContent = s.ctaPhoto;
  document.getElementById('label-dev').textContent = s.labelDev;
  document.getElementById('title-dev').innerHTML = s.titleDev;
  document.getElementById('desc-dev').textContent = s.descDev;
  document.getElementById('cta-dev').textContent = s.ctaDev;
  document.getElementById('footer-copy').textContent =
    `© ${new Date().getFullYear()} Matt Coste — ${s.rights}`;
}

document.getElementById('theme-btn').addEventListener('click', () => {
  applyTheme(theme === 'dark' ? 'light' : 'dark');
});
document.getElementById('lang-btn').addEventListener('click', () => {
  applyLang(lang === 'en' ? 'fr' : 'en');
});

applyTheme(theme);
applyLang(lang);
