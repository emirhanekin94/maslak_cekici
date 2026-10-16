const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

const markers = {
  hero: '<!-- HERO BÖLÜMÜ -->',
  bolgeler: '<!-- CANLI BÖLGE ARAMA & 20 SEMT KATALOĞU (SEARCH-FIRST UX) -->',
  hizmetler: '<!-- HİZMETLERİMİZ BÖLÜMÜ -->',
  nedenBiz: '<!-- NEDEN MASLAK ÇEKİCİ? (GÜVEN VE KURUMSALLIK) -->',
  surec: '<!-- 4 ADIMDA KOLAY ÇEKİCİ SÜRECİ -->',
  galeri: '<!-- GERÇEK OPERASYON FOTOĞRAF GALERİSİ ÖNİZLEME -->',
  yorumlar: '<!-- GERÇEK GOOGLE MÜŞTERİ YORUMLARI & DEĞERLENDİRMELER -->',
  sss: '<section class="section" id="sss">',
  cta: '<!-- ACİL ÇAĞRI BANNERI (CTA) -->'
};

// Check all markers exist
for (const [key, marker] of Object.entries(markers)) {
  if (!content.includes(marker)) {
    console.error(`Marker missing: ${key} -> "${marker}"`);
    process.exit(1);
  }
}

// Slice the sections
const preMain = content.substring(0, content.indexOf(markers.hero));

const heroSection = content.substring(
  content.indexOf(markers.hero),
  content.indexOf(markers.bolgeler)
);

const bolgelerSection = content.substring(
  content.indexOf(markers.bolgeler),
  content.indexOf(markers.hizmetler)
);

const hizmetlerSection = content.substring(
  content.indexOf(markers.hizmetler),
  content.indexOf(markers.nedenBiz)
);

const nedenBizSection = content.substring(
  content.indexOf(markers.nedenBiz),
  content.indexOf(markers.surec)
);

const surecSection = content.substring(
  content.indexOf(markers.surec),
  content.indexOf(markers.galeri)
);

const galeriSection = content.substring(
  content.indexOf(markers.galeri),
  content.indexOf(markers.yorumlar)
);

const yorumlarSection = content.substring(
  content.indexOf(markers.yorumlar),
  content.indexOf(markers.sss)
);

const sssSection = content.substring(
  content.indexOf(markers.sss),
  content.indexOf(markers.cta)
);

let ctaAndFooter = content.substring(content.indexOf(markers.cta));

// Clean up any "15 çevre bölgede" in CTA
ctaAndFooter = ctaAndFooter.replace('15 çevre bölgede', 'çevre bölgelerde ve otoyollarda');

// User's requested order:
// 1. Kapak (heroSection)
// 2. Hizmetlerimiz (hizmetlerSection)
// 3. Neden Biz (nedenBizSection)
// 4. Galeri (galeriSection)
// 5. Süreç Nasıl İşler (surecSection)
// 6. Bölgelerimiz (bolgelerSection)
// 7. Yorumlar (yorumlarSection)
// 8. SSS (sssSection)
// followed by ctaAndFooter

const newContent = preMain +
  heroSection.trim() + '\n\n    ' +
  hizmetlerSection.trim() + '\n\n    ' +
  nedenBizSection.trim() + '\n\n    ' +
  galeriSection.trim() + '\n\n    ' +
  surecSection.trim() + '\n\n    ' +
  bolgelerSection.trim() + '\n\n    ' +
  yorumlarSection.trim() + '\n\n    ' +
  sssSection.trim() + '\n\n    ' +
  ctaAndFooter;

// Write reordered content
fs.writeFileSync('index.html', newContent, 'utf8');

console.log('Successfully reordered index.html sections!');
console.log('Section Order Applied:');
console.log('1. Kapak (Hero)');
console.log('2. Hizmetlerimiz');
console.log('3. Neden Maslak Çekici?');
console.log('4. Galeri (Fotoğraf Galerisi)');
console.log('5. Çekici Sürecimiz Nasıl İşler?');
console.log('6. Canlı Bölge Arama & Semt Kataloğu (Bölgelerimiz)');
console.log('7. Gerçek Müşteri Yorumları');
console.log('8. Sıkça Sorulan Sorular (SSS)');
console.log('9. Hızlı Çağrı CTA & Footer');
