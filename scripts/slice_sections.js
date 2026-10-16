const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

// Find boundaries
const heroStart = content.indexOf('<!-- HERO BÖLÜMÜ -->');
const bolgelerStart = content.indexOf('<!-- CANLI BÖLGE ARAMA & 20 SEMT KATALOĞU (SEARCH-FIRST UX) -->');
const hizmetlerStart = content.indexOf('<!-- HİZMETLERİMİZ BÖLÜMÜ -->');
const nedenBizStart = content.indexOf('<!-- NEDEN MASLAK ÇEKİCİ? (GÜVEN VE KURUMSALLIK) -->');
const surecStart = content.indexOf('<!-- 4 ADIMDA KOLAY ÇEKİCİ SÜRECİ -->');
const galeriStart = content.indexOf('<!-- GERÇEK OPERASYON FOTOĞRAF GALERİSİ ÖNİZLEME -->');
const yorumlarStart = content.indexOf('<!-- GERÇEK GOOGLE MÜŞTERİ YORUMLARI & DEĞERLENDİRMELER -->');
const sssStart = content.indexOf('<!-- SIKÇA SORULAN SORULAR -->');
const ctaStart = content.indexOf('<!-- HIZLI ÇAĞRI VE İLETİŞİM CTA -->');

console.log({
  heroStart,
  bolgelerStart,
  hizmetlerStart,
  nedenBizStart,
  surecStart,
  galeriStart,
  yorumlarStart,
  sssStart,
  ctaStart
});
