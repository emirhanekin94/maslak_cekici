const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'generate_regions.js');
let code = fs.readFileSync(scriptPath, 'utf8');

// 1. Add the 3 highway regions before the end of regions array if not present
if (!code.includes('slug: \'tem-otoyolu-oto-cekici\'')) {
  const highwayRegionsData = `  {
    slug: 'tem-otoyolu-oto-cekici',
    name: 'TEM Otoyolu',
    category: 'kuzey-otoyol',
    categoryLabel: 'Otoyol & Transit Hat',
    title: 'TEM Otoyolu Oto Çekici 7/24 | 10 Dk Acil Kurtarma - 0533 265 70 89',
    metaDesc: 'TEM Otoyolu Hasdal, Seyrantepe viyadüğü, Türk Telekom Stadyumu ve Levent kavşağında 7/24 acil emniyet şeridi oto çekici. 10 dakikada intikal: 0533 265 70 89.',
    keywords: 'tem otoyolu çekici, tem çekici, seyrantepe tem çekici, hasdal çekici, tem otoyolu oto kurtarma, tem oto yardım',
    eta: '10 Dk',
    caseTitle: 'TEM Seyrantepe Viyadüğünde Emniyet Şeridi Acil Tahliyesi',
    caseDesc: 'TEM Otoyolu Seyrantepe viyadüğü üzerinde sabah trafiğinde radyatör patlatan binek araca 9 dakikada ulaşılarak zincirleme kaza riski önlendi.',
    vehicleType: 'Binek Sedan',
    deliveryPoint: 'Maslak Atatürk Oto Sanayi',
    leadText: 'TEM Otoyolu Hasdal-Seyrantepe-Levent güzergahında meydana gelen mekanik arıza ve kazalarda otoyol güvenlik protokollerine tam uyumlu hızlı müdahale sağlıyoruz. Güçlü tepe lambaları ve emniyet dubalama ekipmanlarımızla güvenli çekim yapıyoruz.',
    hotspots: 'TEM Seyrantepe Viyadüğü, Hasdal Kavşağı, TT Stadyumu Girişi, Levent Sapağı, Harp Akademileri Tüneli',
    faqs: [
      { q: 'TEM Otoyolu emniyet şeridinde beklemek tehlikeli midir?', a: 'Evet, çok tehlikelidir. Dörtlülerinizi yakın, aracın sağından çıkarak bariyer arkasına geçin ve derhal bizi arayın. En hızlı şekilde gelip aracınızı güvenli alana alıyoruz.' },
      { q: 'TEM Otoyolu çekici ücreti ne kadardır?', a: 'Şeffaf ve sabit fiyat politikamız gereği telefonda mesafe ve araç tipine göre net fiyat belirtilir.' },
      { q: 'Ağır ticari veya minibüs çekimi yapıyor musunuz?', a: 'Evet, yüksek tonajlı ticari araçlar ve minibüsler için uygun çekicilerimiz mevcuttur.' },
      { q: 'Gece saatlerinde TEM üzerinde çekici bulabilir miyim?', a: 'Evet, 7 gün 24 saat TEM nöbetçi ekiplerimiz hazır beklemektedir.' },
      { q: 'Maslak Oto Sanayi’ye teslimat yapıyor musunuz?', a: 'Evet, arızalı aracınızı doğrudan Maslak Oto Sanayi’deki ustanıza veya yetkili servise ulaştırıyoruz.' }
    ]
  },
  {
    slug: 'kuzey-marmara-otoyolu-oto-cekici',
    name: 'Kuzey Marmara Otoyolu',
    category: 'kuzey-otoyol',
    categoryLabel: 'Kuzey Otoyolu & Gişeler',
    title: 'Kuzey Marmara Otoyolu Çekici 7/24 | 15 Dk Kurtarma - 0533 265 70 89',
    metaDesc: 'Kuzey Marmara Otoyolu Sarıyer, Uskumruköy, YSS Köprüsü bağlantısı ve Havalimanı aksında 7/24 oto çekici ve yol yardım. 15 dakikada intikal: 0533 265 70 89.',
    keywords: 'kuzey marmara otoyolu çekici, kuzey marmara çekici, uskumruköy çekici, yss köprüsü çekici, 3. köprü çekici, kmo oto kurtarma',
    eta: '15 Dk',
    caseTitle: 'Kuzey Marmara Otoyolu Uskumruköy Viyadüğünde Lastik Patlaması',
    caseDesc: 'Kuzey Marmara Otoyolu Uskumruköy mevkisinde çift lastik yaran lüks SUV araca 12 dakikada ulaşılarak hidrolik kayar kasa ile güvenle Maslak servisine aktarıldı.',
    vehicleType: 'Lüks SUV',
    deliveryPoint: 'Maslak Yetkili Servis',
    leadText: 'Kuzey Marmara Otoyolu (KMO) Sarıyer tünelleri, Uskumruköy gişeleri, Yavuz Sultan Selim Köprüsü Avrupa yakası bağlantıları ve İstanbul Havalimanı güzergahında 7/24 tam donanımlı kayar kasa çekicilerimizle hizmetinizdeyiz.',
    hotspots: 'KMO Sarıyer Tüneli Çıkışı, Uskumruköy Gişeleri, Fenertepe-Işıklar Aksı, Zekeriyaköy KMO Bağlantısı',
    faqs: [
      { q: 'Kuzey Marmara Otoyolu gişelerine ne kadar sürede varırsınız?', a: 'Sarıyer ve Kemerburgaz bağlantılarında bekleyen ekiplerimiz ortalama 12-15 dakikada intikal eder.' },
      { q: 'YSS Köprüsü bağlantısında araç çekiyor musunuz?', a: 'Evet, Avrupa yakası köprü çıkışları ve otoyol viyadüklerinde kaskolu kurtarma yapıyoruz.' },
      { q: 'Elektrikli ve spor araçlar için sıfır açılı rampa var mı?', a: 'Evet, basık ve elektrikli araçlara özel korumalı yükleme platformlarımız bulunmaktadır.' },
      { q: 'Gişe ücreti çekici fiyatına dahil mi?', a: 'Tüm maliyet kalemleri telefonda şeffaf olarak belirtilir; gizli hiçbir ücret eklenmez.' },
      { q: 'Kaza durumunda vinçli kurtarıcı sevk edebilir misiniz?', a: 'Evet, şarampole inen veya ağır hasarlı araçlar için vinçli donanımlarımız hazırdır.' }
    ]
  },
  {
    slug: 'buyukdere-caddesi-oto-cekici',
    name: 'Büyükdere Caddesi',
    category: 'maslak-sariyer',
    categoryLabel: 'Ana Arter & Plazalar',
    title: 'Büyükdere Caddesi Oto Çekici 7/24 | 10 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Büyükdere Caddesi, Maslak, Levent, 4. Levent ve Zincirlikuyu aksında 7/24 nöbetçi oto çekici. 10 dakikada intikal, sabit fiyat garantisi: 0533 265 70 89.',
    keywords: 'büyükdere caddesi çekici, büyükdere caddesi oto çekici, maslak büyükdere çekici, levent büyükdere çekici, zincirlikuyu çekici',
    eta: '10 Dk',
    caseTitle: 'Büyükdere Caddesi 4. Levent Ayrımında Şanzıman Arızası',
    caseDesc: 'Akşam yoğunluğunda Büyükdere Caddesi üzerinde kilitlenen otomatik vites araca 7 dakikada ulaşılarak trafik tıkanmadan güvenle tahliye edildi.',
    vehicleType: 'Otomatik Sedan',
    deliveryPoint: 'Maslak 2. Kısım Oto Sanayi',
    leadText: 'İstanbul’un en işlek ana arteri olan Büyükdere Caddesi üzerinde Maslak, 4. Levent, Sanayi Mahallesi ve Hacıosman aksında trafiği kilitlemeden 7/24 acil çekici ve yol yardım hizmeti veriyoruz.',
    hotspots: 'Büyükdere Caddesi Maslak Kavşağı, 4. Levent Metro Çıkışı, Sanayi Mahallesi Köprüsü, Hacıosman Bayırı Girişi',
    faqs: [
      { q: 'Büyükdere Caddesi gibi yoğun bir arterde ne kadar sürede ulaşıyorsunuz?', a: 'Merkez garajımız doğrudan Büyükdere Caddesi bağlantısında olduğundan ortalama 7-10 dakikada aracınızın yanındayız.' },
      { q: 'Plazaların kapalı otoparklarına girebiliyor musunuz?', a: 'Evet, alçak tavanlı otoparklar için özel mini kurtarıcı ve ahtapot araçlarımız mevcuttur.' },
      { q: 'Büyükdere Caddesi’nden Maslak Oto Sanayi’ye çekici fiyatı nedir?', a: 'Kısa mesafe için en uygun sabit fiyat garantisi sunulmaktadır; hemen arayıp öğrenebilirsiniz.' },
      { q: 'Otomatik vitesli araçlara zarar vermeden çekim yapıyor musunuz?', a: 'Evet, çeker tekerlekler havaya kaldırılarak veya tam platform üzerine tekerlek aparatı ile alınarak çekilir.' },
      { q: 'Akü takviyesi hizmetiniz var mı?', a: 'Evet, akü bitmesi durumunda 12V/24V profesyonel booster ile araç başında akü takviyesi yapıyoruz.' }
    ]
  }
];`;
  code = code.replace(/};\s*const regions = \[/, '};\n\n// (regions array starts)');
  code = code.replace(/(\n\s*\}\n\];)/, ',\n' + highwayRegionsData);
}

// 2. Replace buildRegionsIndexPage function with the new rich version
const newIndexFunction = `// bolgeler/index.html Oluşturucu
function buildRegionsIndexPage() {
  const cardsHtml = regions.map(r => \`
    <article class="region-square-card" data-category="\${r.category}">
      <div class="region-square-top">
        <div class="region-square-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        </div>
        <span class="region-square-live"><span class="region-live-dot"></span> 7/24 Nöbetçi</span>
      </div>
      <div class="region-square-body">
        <span class="region-square-category">\${r.categoryLabel}</span>
        <h3 class="region-square-title"><a href="\${r.slug}.html">\${r.name} Oto Çekici</a></h3>
        <p class="region-square-sub">\${r.metaDesc}</p>
        <div class="region-square-badges">
          <span class="region-square-badge eta">⏱ \${r.eta} Varış</span>
          <span class="region-square-badge kasko">🛡 %100 Kaskolu</span>
        </div>
      </div>
      <div class="region-square-actions">
        <a href="\${r.slug}.html" class="btn-square-detail">Bölge Detayı →</a>
        <a href="tel:\${PHONE_RAW}" class="btn-square-call">
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
          <span>Ara</span>
        </a>
      </div>
    </article>
  \`).join('\\n');

  return \`<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Maslak Çekici Hizmet Bölgelerimiz & Otoyollar - 0533 265 70 89</title>
  <meta name="description" content="Maslak merkezli Sarıyer, Beşiktaş, Kağıthane, Şişli, TEM Otoyolu ve Kuzey Marmara Otoyolu aksında 7/24 oto çekici, kurtarma ve yol yardım. 10-15 dk varış.">
  <link rel="canonical" href="\${DOMAIN}/bolgeler/index.html">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="icon" type="image/svg+xml" href="../images/logo.svg">
</head>
<body>
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-inner">
        <div class="top-bar-left">
          <span class="live-badge"><span class="pulse-dot"></span> 7/24 Kesintisiz Nöbetçi Çekici</span>
          <span>Maslak, Sarıyer, Otoyollar ve Çevre İlçelerde 10-15 Dk İntikal</span>
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
            <span class="brand-name">MASLAK <span>OTO ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Acil Yol Yardım & Kurtarma</span>
          </div>
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="../index.html" class="nav-link">Ana Sayfa</a></li>
            <li><a href="../hizmetler/index.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="index.html" class="nav-link active">Bölgelerimiz</a></li>
            <li><a href="../galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="../blog/index.html" class="nav-link">Blog</a></li>
            <li><a href="../hakkimizda.html" class="nav-link">Hakkımızda</a></li>
            <li><a href="../iletisim.html" class="nav-link">İletişim</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          <button type="button" class="menu-toggle-btn" aria-label="Menüyü Aç/Kapat" aria-expanded="false">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <section class="subpage-hero" style="background: linear-gradient(135deg, #070b14 0%, #0f172a 60%, #162032 100%); color: #fff; padding: 50px 0;">
    <div class="container">
      <span class="badge" style="background: rgba(255,85,0,0.15); color: #ff5500; border: 1px solid rgba(255,85,0,0.3); padding: 5px 12px; border-radius: 999px; font-weight: 700; font-size: 0.8125rem; display: inline-flex; align-items: center; gap: 6px; margin-bottom: 12px;">
        <span class="pulse-dot"></span> Maslak ve Otoyol Aksında Canlı Nöbetçi Çekici
      </span>
      <h1 style="font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 900; line-height: 1.2; margin-bottom: 15px;">
        Hizmet Bölgelerimiz & Otoyol Bağlantıları
      </h1>
      <p style="font-size: 1.1rem; line-height: 1.6; color: #cbd5e1; max-width: 800px; margin-bottom: 25px;">
        Maslak Atatürk Oto Sanayi, Büyükdere Caddesi, TEM Otoyolu, Kuzey Marmara Otoyolu, Sarıyer, Beşiktaş, Kağıthane ve Boğaz hattında nöbetçi çekicilerimizle 10-15 dakikada yanınızdayız.
      </p>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <a href="tel:\${PHONE_RAW}" class="btn btn-call btn-lg">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
          <span>Hemen Ara: \${PHONE}</span>
        </a>
        <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
          <span>WhatsApp Konum Gönder</span>
        </button>
      </div>
    </div>
  </section>

  <main class="section">
    <div class="container">
      <div class="region-search-wrapper" style="margin-bottom: 25px;">
        <div class="region-search-box">
          <svg class="region-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" id="region-search-input" class="region-search-input" placeholder="Bölge ara... (Örn: Ayazağa, TEM, Seyrantepe, Levent, İstinye)" aria-label="Bölge Ara">
          <button type="button" id="region-search-clear" class="region-search-clear">✕</button>
          <span class="region-search-badge">18 Bölge & Hat Aktif</span>
        </div>
      </div>

      <div class="regions-square-grid" id="regions-container">
        \${cardsHtml}
      </div>
    </div>
  </main>

  <!-- NEDEN MASLAK ÇEKİCİ? (BÖLGELERİMİZ) -->
  <section class="section section-subtle" style="background: #f8fafc; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light);">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 3rem;">
        <span class="section-badge">Neden Bizi Seçmelisiniz?</span>
        <h2 class="section-title">Neden Maslak Çekici ve Yol Yardım?</h2>
        <p class="section-subtitle">
          İstanbul’un en kritik ticaret, finans ve otoyol merkezinde tavizsiz güvenlik ve 10-15 dakika varış garantisi.
        </p>
      </div>

      <div class="why-us-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
        <div class="why-us-card" style="background: #fff; padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--border-light); box-shadow: var(--shadow-sm);">
          <div style="font-size: 2.2rem; margin-bottom: 14px;">⏱️</div>
          <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px;">10 - 15 Dakika Varış</h3>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">
            Maslak Oto Sanayi, Büyükdere Caddesi ve TEM viyadüklerinde bekleyen nöbetçi ekiplerimizle trafiğe takılmadan en hızlı intikal.
          </p>
        </div>

        <div class="why-us-card" style="background: #fff; padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--border-light); box-shadow: var(--shadow-sm);">
          <div style="font-size: 2.2rem; margin-bottom: 14px;">🛡️</div>
          <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px;">%100 Emtia Taşıma Kaskosu</h3>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">
            Aracınız çekici platformuna alındığı andan servise indirilene kadar tüm risklere karşı kurumsal kasko poliçesiyle güvendedir.
          </p>
        </div>

        <div class="why-us-card" style="background: #fff; padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--border-light); box-shadow: var(--shadow-sm);">
          <div style="font-size: 2.2rem; margin-bottom: 14px;">🏷️</div>
          <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px;">Şeffaf Sabit Fiyat Sözü</h3>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">
            Telefonda verilen net fiyat esastır. Gece tarifesi, köprü bahanesi veya varışta ekstra ücret talep edilmez.
          </p>
        </div>

        <div class="why-us-card" style="background: #fff; padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--border-light); box-shadow: var(--shadow-sm);">
          <div style="font-size: 2.2rem; margin-bottom: 14px;">🏎️</div>
          <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px;">Lüks & Spor Araç Aparatları</h3>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">
            Basık şasili, spor ve lüks otomobiller için özel sıfır dereceli rampa uzatmaları ve çiziksiz yumuşak tekerlek sabitleme kemerleri.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- BÖLGELERİMİZ SIKÇA SORULAN SORULAR (SSS) -->
  <section class="section" id="bolgeler-sss">
    <div class="container" style="max-width: 860px;">
      <div class="section-header" style="text-align: center; margin-bottom: 2.5rem;">
        <span class="section-badge">Merak Edilenler</span>
        <h2 class="section-title">Hizmet Bölgelerimiz Hakkında SSS</h2>
        <p class="section-subtitle">Maslak ve çevre ilçelerdeki kurtarma süreçleriyle ilgili en çok sorulan sorular.</p>
      </div>

      <div class="faq-wrap">
        <div class="faq-item active">
          <button type="button" class="faq-question">
            <span>Maslak dışındaki çevre ilçelere (Levent, Beşiktaş, Şişli vb.) kaç dakikada ulaşıyorsunuz?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-answer">
            <p>Çekici araçlarımız sadece tek bir garajda beklemez; Maslak Oto Sanayi, Büyükdere Caddesi, Hasdal ve Seyrantepe kavşaklarında daima devriye ve nöbet halindedir. Bu sayede Levent, Ayazağa, İstinye ve Kağıthane bölgelerine 10-12 dakikada, Beşiktaş ve Şişli aksına ortalama 12-15 dakikada ulaşıyoruz.</p>
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-question">
            <span>TEM Otoyolu veya Kuzey Marmara Otoyolu'nda kaldığımda ne yapmalıyım?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-answer">
            <p>Öncelikle dörtlü ikaz lambalarınızı yakın, aracınızı mümkünse emniyet şeridine çekin ve reflektörünüzü yerleştirin. Ardından 0533 265 70 89 numaramızdan konumunuzu WhatsApp ile paylaşın. Otoyol donanımlı tepe lambalı nöbetçi çekicimiz derhal yola çıkarak sizi güvenli alana tahliye eder.</p>
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-question">
            <span>Aracımı Maslak Atatürk Oto Sanayi'deki istediğim servise teslim ediyor musunuz?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-answer">
            <p>Kesinlikle evet. Maslak 1. Kısım, 2. Kısım ve Atatürk Oto Sanayi bünyesindeki tüm özel servislere, kaportacılara veya Borusan Oto, Doğuş Oto gibi yetkili servislerin kabul alanlarına anahtar teslim kaskolu teslimat yapıyoruz.</p>
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-question">
            <span>Kredi kartı ile araç başında ödeme yapabilir miyim?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-answer">
            <p>Evet, filomuzdaki tüm çekici araçlarında temassız özellikli mobil POS cihazı bulunmaktadır. Tüm banka ve kredi kartları, FAST havale veya nakit olarak ödeme yapabilirsiniz.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- HIZLI ÇAĞRI VE İLETİŞİM CTA -->
  <section class="section" style="padding-top: 0;">
    <div class="container">
      <div class="emergency-banner-box" style="background: linear-gradient(135deg, #070b14 0%, #162032 100%); border-radius: var(--radius-xl); padding: 40px; color: #fff; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px; border: 1px solid rgba(255,85,0,0.3);">
        <div>
          <span class="live-badge" style="margin-bottom: 10px;"><span class="pulse-dot"></span> 7/24 Kesintisiz Nöbetçi Çekici</span>
          <h2 style="font-size: 1.8rem; font-weight: 900; margin-bottom: 8px;">Tüm Bölgelerde Bir Telefon Uzağınızdayız</h2>
          <p style="color: #cbd5e1; max-width: 600px; margin: 0; font-size: 1rem;">
            Konumunuzu iletin, en yakın nöbetçi kayar kasa kurtarıcımız 15 dakikada yanınıza gelsin.
          </p>
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="tel:\${PHONE_RAW}" class="btn btn-call btn-lg">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
            <span>\${PHONE}</span>
          </a>
          <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
            <span>WhatsApp Konum</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="brand-logo" style="margin-bottom: 1rem;">
            <img src="../images/logo.svg" alt="Maslak Çekici" width="38" height="38">
            <div class="brand-text">
              <span class="brand-name" style="font-size: 1.05rem;">MASLAK <span>OTO ÇEKİCİ</span></span>
            </div>
          </div>
          <p style="font-size: 0.875rem; line-height: 1.6; color: #94a3b8;">
            Maslak Atatürk Oto Sanayi merkezli filomuzla Maslak, Sarıyer, Beşiktaş, Kağıthane, Şişli, TEM Otoyolu ve Kuzey Marmara Otoyolu aksında 7/24 kaskolu, sabit fiyatlı oto çekici hizmeti.
          </p>
        </div>
        <div>
          <h3 class="footer-title">Hizmetlerimiz</h3>
          <ul class="footer-links">
            <li><a href="../hizmetler/oto-cekici.html">Kayar Kasa Oto Çekici</a></li>
            <li><a href="../hizmetler/luks-spor-arac-cekici.html">Lüks & Spor Araç Taşıma</a></li>
            <li><a href="../hizmetler/oto-kurtarma.html">Kaza Kurtarma</a></li>
            <li><a href="../hizmetler/yol-yardim-aku-takviye.html">Akü Takviye</a></li>
          </ul>
        </div>
        <div>
          <h3 class="footer-title">Hızlı İletişim</h3>
          <ul class="footer-links">
            <li style="color: #fff; font-weight: 700;">📞 \${PHONE}</li>
            <li>📍 Maslak Oto Sanayi / İstanbul</li>
            <li>⏰ 7 Gün 24 Saat Açık</li>
            <li>💳 Nakit & Kart & FAST</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Maslak Çekici & Acil Kurtarma.</span>
        <span>7/24 Acil: <a href="tel:\${PHONE_RAW}" style="color: #34d399; font-weight: 700;">\${PHONE}</a></span>
      </div>
    </div>
  </footer>

  <div class="mobile-sticky-dock" aria-label="Sabit Acil Çağrı Çubuğu">
    <div class="sticky-dock-inner">
      <a href="tel:\${PHONE_RAW}" class="sticky-dock-btn sticky-call-btn" aria-label="Maslak Çekici Ara">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
        <span>HEMEN ARA</span>
      </a>
      <a href="#" class="sticky-dock-btn sticky-whatsapp-btn btn-send-location" aria-label="WhatsApp Konum Gönder">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
        <span>KONUM AT</span>
      </a>
    </div>
  </div>

  <script defer src="../js/main.js"></script>
</body>
</html>\`;
}`;

// Find buildRegionsIndexPage function and replace it
const startIndex = code.indexOf('// bolgeler/index.html Oluşturucu');
const endIndex = code.indexOf('// Çıktı Klasörünü Hazırla ve Sayfaları Oluştur');

if (startIndex !== -1 && endIndex !== -1) {
  code = code.substring(0, startIndex) + newIndexFunction + '\n\n' + code.substring(endIndex);
}

// 3. Guard the execution block
const guardCode = `// Çıktı Klasörünü Hazırla ve Sayfaları Oluştur
if (require.main === module) {
  const bolgelerDir = path.join(__dirname, '..', 'bolgeler');
  if (!fs.existsSync(bolgelerDir)) {
    fs.mkdirSync(bolgelerDir, { recursive: true });
  }

  // 1. Tekil Bölge Sayfaları
  regions.forEach(reg => {
    const filePath = path.join(bolgelerDir, \`\${reg.slug}.html\`);
    fs.writeFileSync(filePath, buildRegionPage(reg), 'utf8');
    console.log(\`Oluşturuldu: bolgeler/\${reg.slug}.html\`);
  });

  // 2. bolgeler/index.html
  const indexFilePath = path.join(bolgelerDir, 'index.html');
  fs.writeFileSync(indexFilePath, buildRegionsIndexPage(), 'utf8');
  console.log(\`Oluşturuldu: bolgeler/index.html\`);

  console.log(\`Tüm \${regions.length} bölge ve bolgeler/index.html başarıyla tamamlandı!\`);
}

module.exports = regions;
`;

const oldGuardIndex = code.indexOf('// Çıktı Klasörünü Hazırla ve Sayfaları Oluştur');
if (oldGuardIndex !== -1) {
  code = code.substring(0, oldGuardIndex) + guardCode;
}

fs.writeFileSync(scriptPath, code, 'utf8');
console.log('✓ generate_regions.js updated successfully!');
