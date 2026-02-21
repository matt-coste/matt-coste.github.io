const I18N = {
  en: {
    tagline: 'Choose your experience',
    labelPhoto: 'Visual',
    titlePhoto: 'Photo<br>Portfolio',
    descPhoto: 'Collections, series and visual stories captured through the lens.',
    ctaPhoto: 'Explore',
    labelDev: 'Technical',
    titleDev: 'Code<br>Portfolio',
    descDev: 'Projects, architecture and software built as a software engineer.',
    ctaDev: 'Explore',
    rights: 'All rights reserved',
  },
  fr: {
    tagline: 'Choisissez votre univers',
    labelPhoto: 'Visuel',
    titlePhoto: 'Portfolio<br>Photo',
    descPhoto: 'Collections, séries et histoires visuelles capturées à travers l\'objectif.',
    ctaPhoto: 'Découvrir',
    labelDev: 'Technique',
    titleDev: 'Portfolio<br>Code',
    descDev: 'Projets, architecture et logiciels construits en tant qu\'ingénieur logiciel.',
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
