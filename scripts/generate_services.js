const fs = require('fs');
const path = require('path');

const PHONE = '0533 265 70 89';
const PHONE_RAW = '905332657089';
const DOMAIN = 'https://maslakcekici.com';

const services = [
  {
    slug: 'oto-cekici',
    name: 'Kayar Kasa Oto Çekici',
    title: 'Kayar Kasa Oto Çekici | Maslak Çekici - 0533 265 70 89',
    metaDesc: 'Maslak kayar kasa oto çekici hizmeti. Binek, SUV ve ticari araçlar için sıfır hasar garantili hidrolik kayar kasa transferi. 10-15 dk varış: 0533 265 70 89.',
    keywords: 'maslak oto çekici, kayar kasa çekici, hidrolik çekici, maslak acil çekici, sarıyer oto çekici, beşiktaş oto çekici',
    image: 'otomobil_cekici-1.webp',
    lead: 'Maslak Oto Sanayi merkezli filomuzla binek otomobil, crossover ve hafif ticari araçlarınızı hidrolik kayar kasa platformlarımızla en ufak sürtünme veya mekanik baskı olmadan taşıyoruz.',
    features: [
      'Geniş açılı hidrolik kayar platform',
      '4 noktadan profesyonel tekerlek sabitleme',
      '%100 Emtia Nakliyat ve Taşıma Kaskosu',
      'Maslak Oto Sanayi ve anlaşmalı servislere öncelikli kabul',
      '10 ila 15 dakikada en yakın nöbetçi intikali'
    ]
  },
  {
    slug: 'luks-spor-arac-cekici',
    name: 'Lüks & Spor Araç Çekici',
    title: 'Lüks & Spor Araç Çekici | Maslak Çekici - 0533 265 70 89',
    metaDesc: 'Maslak, Bebek, Etiler, İstinye ve Nişantaşı’nda basık, spor ve lüks otomobiller için özel alçak rampa aparatlı çekici. Tam kaskolu: 0533 265 70 89.',
    keywords: 'maslak lüks araç çekici, spor araç çekici, basık araç çekici, etiler lüks çekici, bebek spor araba çekici, istinye özel çekici',
    image: 'luks-arac-cekici.webp',
    lead: 'Porsche, Ferrari, Lamborghini, Maserati, BMW M, Mercedes AMG ve basık süspansiyonlu tüm prestij araçları için sıfır dereceli rampa uzantıları ve yumuşak kilit aparatları ile hizmet veriyoruz.',
    features: [
      'Sıfır dereceli alçak şasi rampa sistemi',
      'Tampon, difüzör ve marşpiyel sürtme riski sıfır',
      'Özel jant koruyucu mikrofiber sabitleme kayışları',
      'Yüksek teminatlı özel emtia taşıma sigortası',
      'Kapalı otopark ve vale noktalarından hassas yükleme'
    ]
  },
  {
    slug: 'oto-kurtarma',
    name: 'Kaza & Vinç Kurtarma',
    title: 'Kaza & Vinç Kurtarma | Maslak Çekici - 0533 265 70 89',
    metaDesc: 'Kaza, şarampol, devrilme ve kilitli araç durumlarında vinçli oto kurtarma. Maslak ve tüm otoyollarda 7/24 acil müdahale: 0533 265 70 89.',
    keywords: 'maslak oto kurtarma, kaza çekici, vinçli kurtarma, ahtapot çekici, maslak oto kurtarıcı, otoyol kaza çekici',
    image: 'kazali-arac-cekici.webp',
    lead: 'Trafik kazası, şarampole kayma, bariyer sıkışması veya mekanik devrilme durumlarında çift halatlı hidrolik vinç ve ahtapot aparatlı kurtarma araçlarımızla 7/24 sahadayız.',
    features: [
      'Ağır tonajlı hidrolik vinç ve ahtapot kaldırma kolları',
      'Olay yeri reflektörlü ve tepe flaşörlü güvenlik yönetimi',
      'Kaza tespit tutanağı sürecinde profesyonel rehberlik',
      'Kasko ve sigorta anlaşmalı yetkili servislere transfer',
      'Tekerlekleri kilitli veya yürümeyen araçları kaydırma aparatıyla taşıma'
    ]
  },
  {
    slug: 'yol-yardim-aku-takviye',
    name: 'Mobil Akü Takviye & Yol Yardım',
    title: 'Mobil Akü Takviye & Yol Yardım | Maslak Çekici - 0533 265 70 89',
    metaDesc: 'Yerinde akü takviyesi ve acil yol yardım. Maslak, Sarıyer, Kağıthane, Şişli’de 12V/24V taşınabilir booster ile çalıştırma: 0533 265 70 89.',
    keywords: 'maslak akü takviye, mobil akü yol yardım, yerinde akü çalıştırma, maslak yol yardım, 7/24 akü takviye',
    image: 'aku-takviye.webp',
    lead: 'Aracınız marş basmıyor veya aküsü bittiyse çekici masrafına girmeden yerinde çözüm sunuyoruz. Taşınabilir dijital booster cihazlarımızla aracınızı anında çalıştırıyoruz.',
    features: [
      '12V ve 24V tüm araçlara uygun profesyonel booster',
      'Start-Stop, AGM ve EFB modern akü uyumluluğu',
      'Şarj dinamosu ve alternatör voltaj kontrolü',
      'Yerinde stepne değişimi ve lastik hava desteği',
      'Ortalama 10-15 dakikada adrese ulaşım'
    ]
  },
  {
    slug: 'motosiklet-cekici',
    name: 'Motosiklet Çekici & Taşıma',
    title: 'Motosiklet Çekici | Maslak Çekici - 0533 265 70 89',
    metaDesc: 'Scooter, racing, touring motosikletler için özel tekerlek kilitleme aparatlı ve sarsıntısız motosiklet çekici: 0533 265 70 89.',
    keywords: 'maslak motosiklet çekici, motor çekici, motor kurtarma, scooter çekici, motosiklet taşıma istanbul',
    image: 'motorsiklet-cekici.webp',
    lead: 'Motosikletler standart çekiciyle çekilmez! Özel ön teker kilit mekanizmamız ve 4 noktadan hidrolik gergili sabitleme kayışlarımızla motorunuz dik konumda, çizilmeden taşınır.',
    features: [
      'Özel ön teker sabitleme sehpası ve kilit aparatı',
      'Grenaj ve kaportaya temas etmeyen yumuşak kayışlar',
      'Racing, Enduro, Chopper, Maxi-Scooter tam uyum',
      'Kaskolu ve sarsıntısız transfer güvencesi',
      'İstanbul içi ve şehirlerarası transfer desteği'
    ]
  },
  {
    slug: 'sehirlerarasi-arac-tasima',
    name: 'Şehirlerarası Araç Taşıma',
    title: 'Şehirlerarası Araç Taşıma | Maslak Çekici - 0533 265 70 89',
    metaDesc: 'Maslak çıkışlı Türkiye’nin 81 iline kaskolu şehirlerarası oto çekici ve araç taşıma. Sabit fiyat garantisi: 0533 265 70 89.',
    keywords: 'maslak şehirlerarası çekici, şehirlerarası araç taşıma, kaskolu araç nakliyesi, istanbul şehirlerarası çekici',
    image: 'sehirlerarasi-cekici.webp',
    lead: 'Maslak çıkışlı Ankara, İzmir, Bursa, Antalya, Muğla ve Türkiye’nin her noktasına tekli veya çoklu kaskolu araç transferi gerçekleştiriyoruz.',
    features: [
      'Kapıdan alıp kapıya teslimat konforu',
      'Tam kapsamlı nakliyat emtia kaskosu',
      'Canlı konum ve şoför irtibat desteği',
      'Sıfır km ve klasik araçlar için özel koruma',
      'Mesafe bazlı en rekabetçi sabit fiyatlandırma'
    ]
  }
];

function buildServicePage(srv) {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${srv.title}</title>
  <meta name="description" content="${srv.metaDesc}">
  <meta name="keywords" content="${srv.keywords}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${DOMAIN}/hizmetler/${srv.slug}.html">

  <link rel="icon" type="image/svg+xml" href="../images/logo.svg">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap">
  <link rel="stylesheet" href="../css/style.css">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "${srv.name}",
    "provider": {
      "@type": "AutoRepair",
      "name": "Maslak Çekici",
      "telephone": "+${PHONE_RAW}",
      "url": "${DOMAIN}/"
    },
    "areaServed": "İstanbul Avrupa Yakası",
    "description": "${srv.metaDesc}"
  }
  </script>
</head>
<body>

  <div class="top-bar">
    <div class="container">
      <div class="top-bar-inner">
        <div class="top-bar-left">
          <span class="live-badge"><span class="pulse-dot"></span> 7/24 Kesintisiz Hizmet</span>
          <span>Maslak Oto Sanayi Merkezli Profesyonel Çekici Filosu</span>
        </div>
        <div class="top-bar-right">
          <a href="tel:${PHONE_RAW}" class="top-bar-link">📞 ${PHONE}</a>
        </div>
      </div>
    </div>
  </div>

  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="../index.html" class="brand-logo">
          <img src="../images/logo.svg" alt="Maslak Çekici" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">MASLAK <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Acil Yol Yardım</span>
          </div>
        </a>

        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="../index.html" class="nav-link">Ana Sayfa</a></li>
            <li><a href="../bolgeler/index.html" class="nav-link">Bölgelerimiz</a></li>
            <li><a href="oto-cekici.html" class="nav-link active">Hizmetlerimiz</a></li>
            <li><a href="../galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="../hakkimizda.html" class="nav-link">Hakkımızda</a></li>
            <li><a href="../iletisim.html" class="nav-link">İletişim</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <a href="tel:${PHONE_RAW}" class="btn btn-call header-call-btn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
            <span>${PHONE}</span>
          </a>
          <button type="button" class="menu-toggle-btn" aria-label="Menü">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <section class="subpage-hero" style="background: linear-gradient(135deg, #070b14 0%, #0f172a 60%, #162032 100%); color: #fff; padding: 45px 0;">
    <div class="container">
      <div style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 10px;">
        <a href="../index.html" style="color: #cbd5e1;">Ana Sayfa</a> / <a href="oto-cekici.html" style="color: #cbd5e1;">Hizmetlerimiz</a> / <span style="color: #ff8533;">${srv.name}</span>
      </div>
      <h1 style="font-size: 2.25rem; font-weight: 900; margin-bottom: 8px;">${srv.name} Hizmeti</h1>
      <p style="color: #cbd5e1; font-size: 1.05rem;">
        Maslak ve çevre bölgelerde %100 kaskolu, sabit fiyatlı ve hasarsız transfer çözümleri.
      </p>
    </div>
  </section>

  <main class="section">
    <div class="container" style="max-width: 1060px;">
      <div class="about-intro-grid">
        <div>
          <div style="border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 24px; box-shadow: var(--shadow-md);">
            <img src="../images/${srv.image}" alt="${srv.name}" style="width: 100%; height: auto; display: block;">
          </div>
          <h2 style="font-size: 1.6rem; color: var(--secondary); margin-bottom: 14px;">${srv.name} Detayları & Standartlarımız</h2>
          <p style="font-size: 1rem; line-height: 1.8; color: var(--text-main); margin-bottom: 20px;">
            ${srv.lead}
          </p>

          <h3 style="font-size: 1.25rem; color: var(--secondary); margin-bottom: 12px;">Hizmet Özellikleri</h3>
          <ul class="service-features" style="font-size: 0.95rem; gap: 0.75rem; margin-bottom: 25px;">
            ${srv.features.map(f => `<li><span class="check-icon">✓</span> ${f}</li>`).join('\n')}
          </ul>

          <div style="background: var(--primary-light); border-left: 4px solid var(--primary); padding: 18px 20px; border-radius: var(--radius-md); margin-bottom: 25px;">
            <strong style="color: #9a3412; display: block; margin-bottom: 4px;">Şeffaf Sabit Fiyat Güvencesi</strong>
            <p style="color: #7c2d12; font-size: 0.92rem; margin: 0; line-height: 1.6;">
              Telefonda konuşulan fiyat dışında aracınız yüklenirken veya teslim edilirken asla ek ücret talep edilmez. Tüm ödemeler kredi kartı, nakit veya FAST ile makbuzlu/faturalı yapılabilir.
            </p>
          </div>
        </div>

        <div>
          <div class="about-trust-card" style="position: sticky; top: 90px;">
            <h3 style="font-size: 1.25rem; color: var(--secondary); margin-bottom: 14px;">Hemen Fiyat & Çekici Al</h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 18px;">
              En yakın nöbetçi kurtarıcımızı yönlendirmek ve sabit fiyat almak için bizi hemen arayın:
            </p>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
                <span>${PHONE}</span>
              </a>
              <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
                <span>WhatsApp Konum Gönder</span>
              </button>
            </div>

            <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--border-light);">
              <span style="font-size: 0.8rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase;">Diğer Hizmetlerimiz</span>
              <ul style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px; font-size: 0.88rem; font-weight: 600;">
                ${services.filter(s => s.slug !== srv.slug).map(s => `<li><a href="${s.slug}.html" style="color: var(--secondary);">→ ${s.name}</a></li>`).join('\n')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-bottom">
        <span>© 2026 Maslak Çekici. Tüm hakları saklıdır.</span>
        <span>7/24 Acil Çağrı: <a href="tel:${PHONE_RAW}" style="color: #34d399; font-weight: 700;">${PHONE}</a></span>
      </div>
    </div>
  </footer>

  <div class="mobile-sticky-dock">
    <div class="sticky-dock-inner">
      <a href="tel:${PHONE_RAW}" class="sticky-dock-btn sticky-call-btn"><span>HEMEN ARA</span></a>
      <a href="#" class="sticky-dock-btn sticky-whatsapp-btn btn-send-location"><span>KONUM AT</span></a>
    </div>
  </div>

  <script defer src="../js/main.js"></script>
</body>
</html>`;
}

const hizmetlerDir = path.join(__dirname, '..', 'hizmetler');
if (!fs.existsSync(hizmetlerDir)) {
  fs.mkdirSync(hizmetlerDir, { recursive: true });
}

services.forEach(srv => {
  const filePath = path.join(hizmetlerDir, `${srv.slug}.html`);
  fs.writeFileSync(filePath, buildServicePage(srv), 'utf8');
  console.log(`Oluşturuldu: hizmetler/${srv.slug}.html`);
});

console.log('Tüm hizmet sayfaları başarıyla üretildi!');
