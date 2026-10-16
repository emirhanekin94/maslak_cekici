const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Update Title and Meta
html = html.replace(
  /<title>.*?<\/title>/i,
  '<title>Maslak Oto Çekici & Maslak Çekici | 7/24 Maslak Oto Kurtarma ve Yol Yardım - 0533 265 70 89</title>'
);

html = html.replace(
  /<meta name="description" content=".*?">/i,
  '<meta name="description" content="Maslak oto çekici ve 7/24 acil Maslak çekici hizmeti. Maslak Atatürk Oto Sanayi ve çevresinde 15 dakikada en yakın Maslak oto kurtarma, çekici ve Maslak yol yardım. Sabit fiyat garantisi: 0533 265 70 89.">'
);

html = html.replace(
  /<meta name="keywords" content=".*?">/i,
  '<meta name="keywords" content="maslak oto çekici, maslak çekici, maslak otocekici, maslak yol yardım, maslak oto kurtarma, maslak otokurtarma, maslak oto sanayi çekici, maslak acil çekici, en yakın çekici maslak, 7/24 maslak oto çekici">'
);

// 2. Open Graph & Twitter
html = html.replace(
  /<meta property="og:title" content=".*?">/i,
  '<meta property="og:title" content="Maslak Oto Çekici & Maslak Çekici | 7/24 Maslak Oto Kurtarma ve Yol Yardım">'
);

html = html.replace(
  /<meta property="og:description" content=".*?">/i,
  '<meta property="og:description" content="Maslak Atatürk Oto Sanayi ve çevresinde 15 dakikada en yakın Maslak oto çekici, Maslak çekici, Maslak oto kurtarma ve acil Maslak yol yardım. Sabit fiyat garantisi: 0533 265 70 89">'
);

html = html.replace(
  /<meta name="twitter:title" content=".*?">/i,
  '<meta name="twitter:title" content="Maslak Oto Çekici & Maslak Çekici | 7/24 Maslak Oto Kurtarma ve Yol Yardım">'
);

html = html.replace(
  /<meta name="twitter:description" content=".*?">/i,
  '<meta name="twitter:description" content="Maslak, Sarıyer ve otoyollarda 15 dakikada en yakın Maslak oto çekici, Maslak oto kurtarma ve Maslak yol yardım: 0533 265 70 89">'
);

// 3. Schema LocalBusiness Name
html = html.replace(
  /"name":\s*"Maslak Çekici - Maslak Oto Çekici & Kurtarma"/i,
  '"name": "Maslak Oto Çekici - Maslak Çekici, Oto Kurtarma & Yol Yardım"'
);

// 4. Hero Title & Description
html = html.replace(
  /<h1 class="hero-title">[\s\S]*?<\/h1>/i,
  `<h1 class="hero-title">
              Maslak Oto Çekici & <span class="text-highlight">Maslak Çekici, Kurtarma ve Yol Yardım</span>
            </h1>`
);

html = html.replace(
  /<p class="hero-description">[\s\S]*?<\/p>/i,
  `<p class="hero-description">
              Maslak Atatürk Oto Sanayi, Büyükdere Caddesi, Maslak 1453 ve çevre arterlerde <strong>10 - 15 dakikada en yakın Maslak oto çekici ve Maslak yol yardım</strong>. Kaskolu taşıma, profesyonel Maslak oto kurtarma ve şeffaf sabit fiyat garantisi: <strong>0533 265 70 89</strong>.
            </p>`
);

// 5. Hizmetlerimiz Section Header
html = html.replace(
  /<span class="section-badge">Geniş Araç Filosu<\/span>\s*<h2 class="section-title">Maslak Çekici Hizmetlerimiz<\/h2>\s*<p class="section-subtitle">[\s\S]*?<\/p>/i,
  `<span class="section-badge">7/24 Profesyonel Kurtarma & Çekici Filosu</span>
          <h2 class="section-title">Maslak Oto Çekici, Maslak Çekici & Yol Yardım</h2>
          <p class="section-subtitle">
            Maslak Atatürk Oto Sanayi merkezli filomuzla <strong>Maslak oto çekici</strong>, <strong>Maslak çekici</strong>, acil <strong>Maslak oto kurtarma</strong> ve yerinde <strong>Maslak yol yardım</strong> ihtiyaçlarınızda 15 dakikada yanınızdayız.
          </p>`
);

// 6. Hizmet Kartı 1 Başlığı
html = html.replace(
  /<h3 class="service-title"><a href="hizmetler\/oto-cekici\.html">Kayar Kasa Oto Çekici<\/a><\/h3>/i,
  '<h3 class="service-title"><a href="hizmetler/oto-cekici.html">Maslak Oto Çekici & Kayar Kasa</a></h3>'
);

// 7. Hizmet Kartı 3 Başlığı
html = html.replace(
  /<h3 class="service-title"><a href="hizmetler\/oto-kurtarma\.html">Kaza & Vinç Kurtarma<\/a><\/h3>/i,
  '<h3 class="service-title"><a href="hizmetler/oto-kurtarma.html">Maslak Oto Kurtarma & Vinç</a></h3>'
);

// 8. Hizmet Kartı 4 Başlığı
html = html.replace(
  /<h3 class="service-title"><a href="hizmetler\/yol-yardim-aku-takviye\.html">Mobil Akü Takviye<\/a><\/h3>/i,
  '<h3 class="service-title"><a href="hizmetler/yol-yardim-aku-takviye.html">Maslak Yol Yardım & Akü Takviye</a></h3>'
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html with primary Maslak SEO keywords and branding!');
