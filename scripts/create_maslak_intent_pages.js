const fs = require('fs');

// Template generator function
function generatePage({ title, metaDesc, keywords, canonical, h1, lead, heroBadge, mainContent, schemaType, faqItems }) {
  const schemaFaq = faqItems.map(item => `{
      "@type": "Question",
      "name": "${item.q}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "${item.a}"
      }
    }`).join(',\n    ');

  const faqHtml = faqItems.map((item, idx) => `
          <div class="faq-item${idx === 0 ? ' active' : ''}">
            <button type="button" class="faq-question">
              <span>${item.q}</span>
              <span class="faq-icon">▼</span>
            </button>
            <div class="faq-answer">
              <p>${item.a}</p>
            </div>
          </div>`).join('\n');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${metaDesc}">
  <meta name="keywords" content="${keywords}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonical}">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${metaDesc}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="https://maslakotocekici.com/images/kapak-fotografi.webp">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="images/logo.svg">
  <link rel="icon" type="image/webp" href="images/logo.webp">

  <!-- Preconnect & Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap">
  </noscript>
  <link rel="stylesheet" href="css/style.css">

  <!-- Schema.org -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EmergencyService", "AutoRepair"],
        "@id": "${canonical}#service",
        "name": "${title.split(' - ')[0]}",
        "telephone": "+905332657089",
        "url": "${canonical}",
        "image": "https://maslakotocekici.com/images/kapak-fotografi.webp",
        "priceRange": "₺₺",
        "currenciesAccepted": "TRY",
        "paymentAccepted": "Nakit, Kredi Kartı, Banka Kartı, Havale, FAST, EFT",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Büyükdere Caddesi, Atatürk Oto Sanayi Sitesi",
          "addressLocality": "Maslak / Sarıyer",
          "addressRegion": "İstanbul",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.110543,
          "longitude": 29.021764
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://maslakotocekici.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "${h1.replace(/<[^>]*>/g, '')}",
            "item": "${canonical}"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          ${schemaFaq}
        ]
      }
    ]
  }
  </script>
</head>
<body>

  <!-- Top Bar -->
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-inner">
        <div class="top-bar-left">
          <span class="live-badge"><span class="pulse-dot"></span> 7/24 Maslak Nöbetçi Çekici</span>
          <span>Maslak Oto Sanayi & Çevre Arterlerde 10-15 Dk İntikal</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="index.html" class="brand-logo" aria-label="Maslak Oto Çekici Ana Sayfa">
          <img src="images/logo.svg" alt="Maslak Oto Çekici" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">MASLAK <span>OTO ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Acil Yol Yardım & Kurtarma</span>
          </div>
        </a>

        <nav class="main-nav" aria-label="Ana Menü">
          <ul class="nav-list">
            <li><a href="index.html" class="nav-link">Ana Sayfa</a></li>
            <li><a href="hizmetler/index.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="bolgeler/index.html" class="nav-link">Bölgelerimiz</a></li>
            <li><a href="galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="blog/index.html" class="nav-link">Blog</a></li>
            <li><a href="hakkimizda.html" class="nav-link">Hakkımızda</a></li>
            <li><a href="iletisim.html" class="nav-link">İletişim</a></li>
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

  <!-- Subpage Hero -->
  <section class="subpage-hero" style="background: linear-gradient(135deg, #070b14 0%, #0f172a 60%, #162032 100%); color: #fff; padding: 50px 0;">
    <div class="container">
      <nav class="breadcrumb-nav" aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 15px; color: #94a3b8;">
        <a href="index.html" style="color: #cbd5e1; text-decoration: none;">Ana Sayfa</a> /
        <span style="color: #ff5500; font-weight: 600;">${h1.replace(/<[^>]*>/g, '')}</span>
      </nav>
      <div style="max-width: 840px;">
        <span class="badge" style="background: rgba(255,85,0,0.15); color: #ff5500; border: 1px solid rgba(255,85,0,0.3); padding: 5px 12px; border-radius: 999px; font-weight: 700; font-size: 0.8125rem; display: inline-flex; align-items: center; gap: 6px; margin-bottom: 12px;">
          <span class="pulse-dot"></span> ${heroBadge}
        </span>
        <h1 style="font-size: clamp(1.8rem, 4vw, 2.75rem); font-weight: 900; line-height: 1.2; margin-bottom: 15px; letter-spacing: -0.02em;">
          ${h1}
        </h1>
        <p style="font-size: 1.05rem; line-height: 1.6; color: #cbd5e1; margin-bottom: 25px;">
          ${lead}
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <a href="tel:05332657089" class="btn btn-call btn-lg">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
            <span>Hemen Ara: 0533 265 70 89</span>
          </a>
          <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
            <span>WhatsApp ile Konum Gönder</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Ana İçerik -->
  <main class="section">
    <div class="container" style="max-width: 900px;">
      ${mainContent}

      <!-- SSS Bölümü -->
      <div style="margin-top: 50px;">
        <h2 style="font-size: 1.6rem; font-weight: 800; color: #0f172a; margin-bottom: 20px; text-align: center;">
          Sıkça Sorulan Sorular
        </h2>
        <div class="faq-wrap">
          ${faqHtml}
        </div>
      </div>

      <!-- Çağrı Kutusu -->
      <div style="margin-top: 50px; background: linear-gradient(135deg, #070b14 0%, #162032 100%); border: 1px solid rgba(255,85,0,0.3); border-radius: 16px; padding: 35px; color: #fff; text-align: center;">
        <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 10px;">7/24 Kesintisiz Çağrı Merkezi</h3>
        <p style="color: #cbd5e1; margin-bottom: 20px;">Maslak Oto Sanayi merkezli filomuzla 15 dakikada adresinize veya arıza noktanıza ulaşıyoruz.</p>
        <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
          <a href="tel:05332657089" class="btn btn-call btn-lg">0533 265 70 89</a>
          <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">WhatsApp Konum At</button>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="brand-logo" style="margin-bottom: 1rem;">
            <img src="images/logo.svg" alt="Maslak Oto Çekici" width="38" height="38">
            <div class="brand-text">
              <span class="brand-name" style="font-size: 1.05rem;">MASLAK <span>OTO ÇEKİCİ</span></span>
            </div>
          </div>
          <p style="font-size: 0.875rem; line-height: 1.6; color: #94a3b8;">
            Maslak Atatürk Oto Sanayi merkezli filomuzla Maslak, Sarıyer, Beşiktaş, Kağıthane, Şişli ve Boğaz hattında 7/24 kaskolu, sabit fiyatlı Maslak oto çekici ve yol yardım hizmeti.
          </p>
        </div>
        <div>
          <h3 class="footer-title">Hızlı Bağlantılar</h3>
          <ul class="footer-links">
            <li><a href="maslak-oto-cekici.html">Maslak Oto Çekici</a></li>
            <li><a href="maslak-oto-kurtarma.html">Maslak Oto Kurtarma</a></li>
            <li><a href="maslak-yol-yardim.html">Maslak Yol Yardım</a></li>
            <li><a href="hizmetler/oto-cekici.html">Kayar Kasa Çekici</a></li>
          </ul>
        </div>
        <div>
          <h3 class="footer-title">İletişim & Nöbetçi Hat</h3>
          <ul class="footer-links">
            <li style="color: #fff; font-weight: 700;">📞 0533 265 70 89</li>
            <li>📍 Maslak Atatürk Oto Sanayi, İstanbul</li>
            <li>⏰ 7 Gün 24 Saat Açık</li>
            <li>💳 Nakit & Kredi Kartı & FAST</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Maslak Oto Çekici & Kurtarma. Tüm hakları saklıdır.</span>
        <span>7/24 Acil Hat: <a href="tel:05332657089" style="color: #34d399; font-weight: 700;">0533 265 70 89</a></span>
      </div>
    </div>
  </footer>

  <!-- Mobil Dock -->
  <div class="mobile-sticky-dock" aria-label="Sabit Acil Çağrı Çubuğu">
    <div class="sticky-dock-inner">
      <a href="tel:05332657089" class="sticky-dock-btn sticky-call-btn" aria-label="Maslak Çekici Ara">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
        <span>HEMEN ARA</span>
      </a>
      <a href="#" class="sticky-dock-btn sticky-whatsapp-btn btn-send-location" aria-label="WhatsApp Konum Gönder">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
        <span>KONUM AT</span>
      </a>
    </div>
  </div>

  <script src="js/main.js" defer></script>
</body>
</html>`;
}

// 1. PAGE: maslak-oto-cekici.html
const maslakOtoCekiciContent = `
      <article style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 35px; margin-bottom: 30px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 15px;">
          Maslak Oto Çekici & Maslak Çekici Hizmetleri (Maslak Otocekici)
        </h2>
        <p style="font-size: 1.05rem; line-height: 1.7; color: #334155; margin-bottom: 20px;">
          İstanbul'un iş ve finans merkezi Maslak'ta, Atatürk Oto Sanayi Sitesi (1. ve 2. Kısım), Büyükdere Caddesi, Maslak 1453, Vadi İstanbul ve plazalar bölgesinde arıza veya kaza nedeniyle yolda kaldığınızda <strong>Maslak oto çekici</strong> ve <strong>Maslak çekici</strong> filomuz 10-15 dakikada yanınızdadır.
        </p>
        <p style="font-size: 1rem; line-height: 1.7; color: #475569; margin-bottom: 20px;">
          Kayar kasa hidrolik platformlu araçlarımız binek otomobil, SUV, elektrikli araçlar ve hafif ticari araçları sıfır hasar protokolüyle yükler. Aracınız Maslak Oto Sanayi'ndeki istediğiniz özel servise veya Borusan Oto, Doğuş Oto gibi yetkili servis kabul alanlarına kaskolu olarak güvenle ulaştırılır.
        </p>
        <div style="background: #f8fafc; border-left: 4px solid #ff5500; padding: 18px; border-radius: 8px; margin-bottom: 25px;">
          <strong style="color: #0f172a; display: block; margin-bottom: 6px;">📍 Maslak Çekici Hizmet Bölgelerimiz:</strong>
          <span style="color: #475569; font-size: 0.95rem;">Büyükdere Caddesi, Atatürk Oto Sanayi 1. ve 2. Kısım, Ahi Evran Caddesi, Dereboyu Caddesi, Maslak 1453, Spine Tower, Sun Plaza, Windowist Tower, İTÜ Ayazağa Kampüsü ve TEM Levent/Seyrantepe katılımı.</span>
        </div>
      </article>

      <article style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 35px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 15px;">
          Neden Maslak Oto Çekici Tercih Edilmeli?
        </h2>
        <ul style="list-style: none; padding: 0; margin: 0 0 20px 0; display: grid; gap: 12px;">
          <li style="display: flex; gap: 10px; align-items: flex-start; color: #334155; font-size: 1rem;">
            <span style="color: #10b981; font-weight: 900;">✓</span>
            <span><strong>10-15 Dakika İntikal Süresi:</strong> Maslak içinde daima hazır bekleyen nöbetçi ekiplerimizle en yakın çekiciyi anında yönlendiriyoruz.</span>
          </li>
          <li style="display: flex; gap: 10px; align-items: flex-start; color: #334155; font-size: 1rem;">
            <span style="color: #10b981; font-weight: 900;">✓</span>
            <span><strong>Sabit Fiyat Garantisi:</strong> Telefonda onayladığımız çekici ücreti dışında sonradan asla sürpriz fatura veya ek maliyet çıkmaz.</span>
          </li>
          <li style="display: flex; gap: 10px; align-items: flex-start; color: #334155; font-size: 1rem;">
            <span style="color: #10b981; font-weight: 900;">✓</span>
            <span><strong>Emtia Taşıma Kaskosu:</strong> Aracınız çekici platformuna alındığı andan teslimata kadar tam sigorta güvencesi altındadır.</span>
          </li>
          <li style="display: flex; gap: 10px; align-items: flex-start; color: #334155; font-size: 1rem;">
            <span style="color: #10b981; font-weight: 900;">✓</span>
            <span><strong>Kredi Kartı ile Araç Başında Ödeme:</strong> Tüm kurtarıcı araçlarımızda mobil POS cihazı yer almakta olup taksit ve temassız ödeme mümkündür.</span>
          </li>
        </ul>
      </article>`;

const maslakOtoCekiciHtml = generatePage({
  title: 'Maslak Oto Çekici & Maslak Çekici | 7/24 En Yakın - 0533 265 70 89',
  metaDesc: 'Maslak oto çekici ve 7/24 acil Maslak çekici hizmeti. Maslak Atatürk Oto Sanayi, Büyükdere Caddesi ve plazalarda 10-15 dk en yakın oto kurtarıcı: 0533 265 70 89.',
  keywords: 'maslak oto çekici, maslak çekici, maslak otocekici, maslak acil çekici, maslak oto sanayi çekici, en yakın çekici maslak, 7/24 maslak oto çekici',
  canonical: 'https://maslakotocekici.com/maslak-oto-cekici.html',
  h1: 'Maslak Oto Çekici & <span style="color: var(--primary);">Maslak Çekici</span>',
  lead: 'Maslak Atatürk Oto Sanayi ve çevresinde 10-15 dakikada en yakın oto çekici. Kayar kasa kaskolu taşıma ve sabit fiyat garantisi: 0533 265 70 89.',
  heroBadge: '7/24 Maslak Nöbetçi Çekici • 10 Dk Varış',
  mainContent: maslakOtoCekiciContent,
  schemaType: 'AutoRepair',
  faqItems: [
    { q: 'Maslak oto çekici kaç dakikada yanıma gelir?', a: 'Maslak Atatürk Oto Sanayi ve Büyükdere Caddesi üzerinde sürekli hazır bekleyen nöbetçi ekiplerimizle ortalama 10-15 dakikada adresinize ulaşıyoruz.' },
    { q: 'Maslak çekici fiyatı ne kadar?', a: 'Maslak ve çevre ilçelerde kısa mesafe çekici başlangıç taban ücreti 1.500 TL olup, taşınacak araç tipi ve gidilecek mesafeye göre telefonda net sabit fiyat verilir.' },
    { q: 'Maslak Oto Sanayi Sitesi yetkili servislerine teslimat yapıyor musunuz?', a: 'Evet. Maslak 1. Kısım, 2. Kısım ve Doğuş Oto, Borusan Oto gibi tüm yetkili ve özel servislere kaskolu anahtar teslimi yapıyoruz.' },
    { q: 'Kredi kartı geçerli mi?', a: 'Evet, tüm çekicilerimizde mobil POS cihazı bulunmaktadır. Kredi kartı, banka kartı veya FAST havale ile ödeme yapabilirsiniz.' }
  ]
});

fs.writeFileSync('maslak-oto-cekici.html', maslakOtoCekiciHtml, 'utf8');
console.log('Created maslak-oto-cekici.html');

// 2. PAGE: maslak-oto-kurtarma.html
const maslakOtoKurtarmaContent = `
      <article style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 35px; margin-bottom: 30px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 15px;">
          Maslak Oto Kurtarma & Vinçli Kurtarıcı Operasyonları (Maslak Otokurtarma)
        </h2>
        <p style="font-size: 1.05rem; line-height: 1.7; color: #334155; margin-bottom: 20px;">
          Trafik kazaları, şarampol veya bariyere sıkışma, tekerlek kopması, yürür aksam kilitlenmesi veya devrilme gibi ağır durumlarda standart çekiciler yetersiz kalır. <strong>Maslak oto kurtarma</strong> filomuz, ağır tonajlı vinçler, 4 tekerlekten kaldırma yapan ahtapot aparatları ve profesyonel sertifikalı kurtarma operatörleriyle 7/24 acil kaza müdahalesi sağlar.
        </p>
        <p style="font-size: 1rem; line-height: 1.7; color: #475569; margin-bottom: 20px;">
          TEM Otoyolu Seyrantepe/Maslak bağlantısı, Büyükdere Caddesi yokuşları ve virajlı Sarıyer koridorlarında kaza yapan araçları çevre güvenliğini alarak hızla olay yerinden tahliye ediyoruz. Kaza tespit tutanağı sürecinde sürücülerimize rehberlik ediyor, hasarlı aracınızı anlaşmalı sigorta servislerine veya Maslak Atatürk Oto Sanayi kaporta/şasi atölyelerine güvenle teslim ediyoruz.
        </p>
        <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 18px; border-radius: 8px; margin-bottom: 25px;">
          <strong style="color: #991b1b; display: block; margin-bottom: 6px;">⚠️ Kaza Anında Acil Kurtarma Protokolümüz:</strong>
          <span style="color: #7f1d1d; font-size: 0.95rem;">Önce can güvenliğiniz! Dörtlülerinizi yakın, emniyet şeridine geçin ve reflektörünüzü yerleştirin. 0533 265 70 89 hattımızdan canlı konumunuzu iletin, tepe lambalı vinçli kurtarıcımız derhal çıkış yapsın.</span>
        </div>
      </article>

      <article style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 35px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 15px;">
          Maslak Oto Kurtarma Hizmet Alanlarımız
        </h2>
        <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 12px;">
          <li style="display: flex; gap: 10px; align-items: flex-start; color: #334155; font-size: 1rem;">
            <span style="color: #ef4444; font-weight: 900;">•</span>
            <span><strong>Kaza ve Çarpışma Kurtarma:</strong> Hasar görmüş, yürümeyen veya tekerlekleri kilitlenmiş araçların vinç ve ahtapot yardımıyla kurtarılması.</span>
          </li>
          <li style="display: flex; gap: 10px; align-items: flex-start; color: #334155; font-size: 1rem;">
            <span style="color: #ef4444; font-weight: 900;">•</span>
            <span><strong>Şarampol ve Çamurdan Çıkarma:</strong> Yoldan çıkan, refüje veya kanala saplanan araçların güçlü halat ve makaralarla hasarsız çıkarılması.</span>
          </li>
          <li style="display: flex; gap: 10px; align-items: flex-start; color: #334155; font-size: 1rem;">
            <span style="color: #ef4444; font-weight: 900;">•</span>
            <span><strong>Kapalı Otopark Kurtarma:</strong> Maslak plazalarındaki alçak tavanlı otoparklarda (1.90m - 2.10m) mahsur kalan araçlar için alçak kabinli kurtarıcı.</span>
          </li>
        </ul>
      </article>`;

const maslakOtoKurtarmaHtml = generatePage({
  title: 'Maslak Oto Kurtarma & Acil Vinç Kurtarıcı | 7/24 - 0533 265 70 89',
  metaDesc: 'Maslak oto kurtarma ve Maslak otokurtarma servisi. Kaza, şarampol, devrilme ve kilitli araç durumlarında vinçli ve ahtapot kurtarıcı: 0533 265 70 89.',
  keywords: 'maslak oto kurtarma, maslak otokurtarma, maslak oto kurtarıcı, maslak kaza kurtarma, maslak vinçli çekici, 7/24 maslak oto kurtarma',
  canonical: 'https://maslakotocekici.com/maslak-oto-kurtarma.html',
  h1: 'Maslak Oto Kurtarma & <span style="color: var(--primary);">Acil Vinç Kurtarıcı</span>',
  lead: 'Kaza, şarampol, devrilme ve hasarlı araç durumlarında güçlü vinç ve ahtapot kurtarma donanımımızla 7/24 yanınızdayız: 0533 265 70 89.',
  heroBadge: '7/24 Acil Kaza & Vinç Kurtarma • 15 Dk İntikal',
  mainContent: maslakOtoKurtarmaContent,
  schemaType: 'EmergencyService',
  faqItems: [
    { q: 'Kaza durumunda Maslak oto kurtarma ekibi ne kadar sürede gelir?', a: 'Maslak Atatürk Oto Sanayi ve Seyrantepe kavşağında hazır bekleyen vinçli kurtarma araçlarımız ortalama 10-15 dakikada kaza mahalline intikal eder.' },
    { q: 'Tekerlekleri kilitli veya dönmeyen araçları çekebiliyor musunuz?', a: 'Evet. Dört tekerlekten kaldırma yapabilen ahtapot vinç aparatımız sayesinde tekerlekleri kilitli veya aksı kırılmış araçlar tekerleklerine yük binmeden taşınır.' },
    { q: 'Kapalı otoparkta kalan aracı kurtarabilir misiniz?', a: 'Evet. Maslak plazalarının alçak tavanlı (1.90m - 2.10m) kapalı otoparkları için özel tasarlanmış düşük şasili kurtarıcı araçlarımız mevcuttur.' },
    { q: 'Kurtarma işlemi kasko kapsamında mı?', a: 'Evet, tüm kurtarma operasyonlarımız Taşıyıcı Mali Sorumluluk Sigortası ve Emtia Nakliyat Kaskosu güvencesindedir.' }
  ]
});

fs.writeFileSync('maslak-oto-kurtarma.html', maslakOtoKurtarmaHtml, 'utf8');
console.log('Created maslak-oto-kurtarma.html');

// 3. PAGE: maslak-yol-yardim.html
const maslakYolYardimContent = `
      <article style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 35px; margin-bottom: 30px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 15px;">
          Maslak Yol Yardım: 7/24 Yerinde Akü Takviye, Lastik ve Yakıt Desteği
        </h2>
        <p style="font-size: 1.05rem; line-height: 1.7; color: #334155; margin-bottom: 20px;">
          Her araç arızasında çekiciye ihtiyaç duyulmaz. Akü bitmesi, farların açık unutulması, lastik patlaması veya yakıt tükenmesi gibi durumlarda aracınızı çekiciye yükletip zaman kaybetmenize gerek yok! <strong>Maslak yol yardım</strong> mobil ekiplerimiz donanımlı acil servis araçlarıyla doğrudan yanınıza gelerek arızayı yerinde çözer.
        </p>
        <p style="font-size: 1rem; line-height: 1.7; color: #475569; margin-bottom: 20px;">
          Mobil yol yardım filomuzda yer alan profesyonel 12V ve 24V taşınabilir akü takviye booster cihazları, start-stop ve hibrit/elektrikli araçların hassas elektronik beyinlerine en ufak zarar vermeden güvenli şarj başlatma imkanı sunar. Yolda patlayan veya inen lastikleriniz için mobil bijon ve hava kompresörüyle yerinde stepne değişimi veya fitil tamiri yapıyoruz.
        </p>
        <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 18px; border-radius: 8px; margin-bottom: 25px;">
          <strong style="color: #065f46; display: block; margin-bottom: 6px;">⚡ Hızlı ve Ekonomik Çözüm:</strong>
          <span style="color: #047857; font-size: 0.95rem;">Yerinde yol yardım hizmetimiz çekici maliyetine kıyasla çok daha ekonomik ve hızlıdır. 15 dakikada aracınızı çalıştırıp güvenle yolunuza devam etmenizi sağlıyoruz.</span>
        </div>
      </article>

      <article style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 35px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 15px;">
          Maslak Yol Yardım Hizmet Paketlerimiz
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px;">
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
            <span style="font-size: 2rem; display: block; margin-bottom: 10px;">🔋</span>
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Yerinde Akü Takviye</h3>
            <p style="font-size: 0.9rem; color: #475569; line-height: 1.6; margin: 0;">12V/24V profesyonel cihazlarla beyin korumalı akü şarjı, dinamo ve voltaj kontrolü.</p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
            <span style="font-size: 2rem; display: block; margin-bottom: 10px;">🛞</span>
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Mobil Lastik Tamiri</h3>
            <p style="font-size: 0.9rem; color: #475569; line-height: 1.6; margin: 0;">Patlayan lastiğin fitil tamiri, hava basımı veya stepne değişimi.</p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
            <span style="font-size: 2rem; display: block; margin-bottom: 10px;">⛽</span>
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Acil Yakıt İkmali</h3>
            <p style="font-size: 0.9rem; color: #475569; line-height: 1.6; margin: 0;">Yolda yakıtı biten araçlara güvenli bidonla benzin veya dizel temini.</p>
          </div>
        </div>
      </article>`;

const maslakYolYardimHtml = generatePage({
  title: 'Maslak Yol Yardım & Mobil Akü Takviye | 7/24 - 0533 265 70 89',
  metaDesc: 'Maslak yol yardım ve 7/24 acil mobil akü takviye hizmeti. Maslak Oto Sanayi ve çevresinde yerinde akü şarjı, lastik tamiri, acil yakıt: 0533 265 70 89.',
  keywords: 'maslak yol yardım, maslak yol yardim, maslak acil yol yardım, maslak akü takviye, maslak mobil lastik tamiri, 7/24 maslak yol yardım',
  canonical: 'https://maslakotocekici.com/maslak-yol-yardim.html',
  h1: 'Maslak Yol Yardım & <span style="color: var(--primary);">Mobil Akü Takviye</span>',
  lead: 'Akü bitmesi, lastik patlaması veya acil durumlarda yerinde hızlı müdahale. 15 dakikada yanınızdayız: 0533 265 70 89.',
  heroBadge: '7/24 Yerinde Mobil Yol Yardım • 15 Dk İntikal',
  mainContent: maslakYolYardimContent,
  schemaType: 'EmergencyService',
  faqItems: [
    { q: 'Akü takviyesi aracımın beynine veya elektroniğine zarar verir mi?', a: 'Hayır. Ekiplerimiz amatör kablolar yerine voltaj dengeleyicili profesyonel dijital booster cihazları kullanır. Aracınızın elektronik beyni ve sigortaları %100 korunur.' },
    { q: 'Yol yardım ekibi Maslak ve çevresine kaç dakikada gelir?', a: 'Maslak Oto Sanayi merkezli mobil motorize ve servis araçlarımız ortalama 10-15 dakikada adresinize ulaşır.' },
    { q: 'Stepnem yoksa lastik tamiri yapabilir misiniz?', a: 'Evet. Ekiplerimiz çivi veya vida batması kaynaklı hava kaçaklarını fitil ve hava kompresörü ile yerinde tamir ederek yolunuza devam etmenizi sağlar.' },
    { q: 'Yerinde çözülemezse çekici hizmetiniz var mı?', a: 'Evet. Arıza yerinde giderilemeyecek boyuttaysa filomuzdaki nöbetçi kayar kasa çekicimiz derhal devreye girerek aracınızı servise taşır.' }
  ]
});

fs.writeFileSync('maslak-yol-yardim.html', maslakYolYardimHtml, 'utf8');
console.log('Created maslak-yol-yardim.html');
