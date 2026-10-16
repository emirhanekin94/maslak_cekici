const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://maslakotocekici.com';
const today = new Date().toISOString().split('T')[0];

const urls = [
  { loc: `${DOMAIN}/`, priority: '1.0', changefreq: 'daily' },
  { loc: `${DOMAIN}/maslak-oto-cekici.html`, priority: '0.95', changefreq: 'daily' },
  { loc: `${DOMAIN}/maslak-oto-kurtarma.html`, priority: '0.95', changefreq: 'daily' },
  { loc: `${DOMAIN}/maslak-yol-yardim.html`, priority: '0.95', changefreq: 'daily' },
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
  { loc: `${DOMAIN}/hizmetler/sehirlerarasi-arac-tasima.html`, priority: '0.85', changefreq: 'weekly' },
  { loc: `${DOMAIN}/blog/index.html`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${DOMAIN}/blog/maslak-ve-sariyer-en-yakin-oto-cekici-rehberi.html`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${DOMAIN}/blog/oto-cekici-fiyatlari-nasil-hesaplanir.html`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${DOMAIN}/blog/otomatik-vitesli-araclar-nasil-cekilir.html`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${DOMAIN}/blog/otoyolda-arac-arizalandiginda-yapilmasi-gerekenler.html`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${DOMAIN}/blog/aku-neden-aniden-biter-takviye-nasil-yapilir.html`, priority: '0.8', changefreq: 'weekly' }
];

const regionList = require('./generate_regions.js');

regionList.forEach(r => {
  urls.push({
    loc: `${DOMAIN}/bolgeler/${r.slug}.html`,
    priority: '0.85',
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
