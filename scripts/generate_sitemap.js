const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://maslakcekici.com';
const today = new Date().toISOString().split('T')[0];

const urls = [
  { loc: `${DOMAIN}/`, priority: '1.0', changefreq: 'daily' },
  { loc: `${DOMAIN}/hakkimizda.html`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${DOMAIN}/iletisim.html`, priority: '0.9', changefreq: 'monthly' },
  { loc: `${DOMAIN}/galeri.html`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${DOMAIN}/bolgeler/index.html`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${DOMAIN}/hizmetler/index.html`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${DOMAIN}/hizmetler/oto-cekici.html`, priority: '0.85', changefreq: 'weekly' },
  { loc: `${DOMAIN}/hizmetler/luks-spor-arac-cekici.html`, priority: '0.85', changefreq: 'weekly' },
  { loc: `${DOMAIN}/hizmetler/oto-kurtarma.html`, priority: '0.85', changefreq: 'weekly' },
  { loc: `${DOMAIN}/hizmetler/yol-yardim-aku-takviye.html`, priority: '0.85', changefreq: 'weekly' },
  { loc: `${DOMAIN}/hizmetler/motosiklet-cekici.html`, priority: '0.85', changefreq: 'weekly' },
  { loc: `${DOMAIN}/hizmetler/sehirlerarasi-arac-tasima.html`, priority: '0.85', changefreq: 'weekly' }
];

const regions = [
  'maslak-oto-cekici', 'sariyer-oto-cekici', 'kagithane-oto-cekici', 'besiktas-oto-cekici',
  'eyupsultan-oto-cekici', 'sisli-oto-cekici', 'beyoglu-oto-cekici', 'arnavutkoy-oto-cekici',
  'kemerburgaz-oto-cekici', 'gokturk-oto-cekici', 'hamidiye-mahallesi-oto-cekici', 'etiler-oto-cekici',
  'armutlu-oto-cekici', 'istinye-oto-cekici', 'yenikoy-oto-cekici', 'nisantasi-oto-cekici',
  'bebek-oto-cekici', 'emirgan-oto-cekici', 'seyrantepe-oto-cekici', 'okmeydani-oto-cekici'
];

regions.forEach(slug => {
  urls.push({
    loc: `${DOMAIN}/bolgeler/${slug}.html`,
    priority: '0.8',
    changefreq: 'weekly'
  });
});

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

urls.forEach(u => {
  xml += `  <url>\n`;
  xml += `    <loc>${u.loc}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${u.changefreq}</changefreq>\n`;
  xml += `    <priority>${u.priority}</priority>\n`;
  xml += `  </url>\n`;
});

xml += `</urlset>\n`;

fs.writeFileSync(path.join(__dirname, '..', 'sitemap.xml'), xml, 'utf8');
console.log('sitemap.xml başarıyla oluşturuldu! Toplam URL sayısı:', urls.length);
