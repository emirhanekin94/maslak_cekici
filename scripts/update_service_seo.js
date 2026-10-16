const fs = require('fs');

// 1. hizmetler/oto-cekici.html
let otoCekici = fs.readFileSync('hizmetler/oto-cekici.html', 'utf8');
otoCekici = otoCekici.replace(
  /<title>.*?<\/title>/i,
  '<title>Maslak Oto Çekici & Maslak Çekici | 7/24 En Yakın Kayar Kasa - 0533 265 70 89</title>'
);
otoCekici = otoCekici.replace(
  /<meta name="description" content=".*?">/i,
  '<meta name="description" content="Maslak oto çekici ve 7/24 Maslak çekici hizmeti. Maslak Atatürk Oto Sanayi ve çevresinde binek ve SUV araçlar için kaskolu kayar platform transferi: 0533 265 70 89.">'
);
otoCekici = otoCekici.replace(
  /<meta name="keywords" content=".*?">/i,
  '<meta name="keywords" content="maslak oto çekici, maslak çekici, maslak otocekici, maslak oto sanayi çekici, maslak acil çekici, en yakın maslak çekici">'
);
otoCekici = otoCekici.replace(
  /<h1[^>]*>.*?<\/h1>/i,
  '<h1 class="page-hero-title">Maslak Oto Çekici & <span style="color: var(--primary);">Maslak Çekici</span></h1>'
);
fs.writeFileSync('hizmetler/oto-cekici.html', otoCekici, 'utf8');
console.log('Updated hizmetler/oto-cekici.html');

// 2. hizmetler/oto-kurtarma.html
let otoKurtarma = fs.readFileSync('hizmetler/oto-kurtarma.html', 'utf8');
otoKurtarma = otoKurtarma.replace(
  /<title>.*?<\/title>/i,
  '<title>Maslak Oto Kurtarma & Acil Vinç Kurtarıcı | 7/24 - 0533 265 70 89</title>'
);
otoKurtarma = otoKurtarma.replace(
  /<meta name="description" content=".*?">/i,
  '<meta name="description" content="Maslak oto kurtarma ve Maslak otokurtarma hizmeti. Maslak ve çevre otoyollarda kaza, şarampol, devrilme ve kilitli araçlar için acil vinç kurtarma: 0533 265 70 89.">'
);
otoKurtarma = otoKurtarma.replace(
  /<meta name="keywords" content=".*?">/i,
  '<meta name="keywords" content="maslak oto kurtarma, maslak otokurtarma, maslak oto kurtarıcı, maslak acil kurtarma, maslak vinçli çekici">'
);
otoKurtarma = otoKurtarma.replace(
  /<h1[^>]*>.*?<\/h1>/i,
  '<h1 class="page-hero-title">Maslak Oto Kurtarma & <span style="color: var(--primary);">Acil Vinç Kurtarıcı</span></h1>'
);
fs.writeFileSync('hizmetler/oto-kurtarma.html', otoKurtarma, 'utf8');
console.log('Updated hizmetler/oto-kurtarma.html');

// 3. hizmetler/yol-yardim-aku-takviye.html
let yolYardim = fs.readFileSync('hizmetler/yol-yardim-aku-takviye.html', 'utf8');
yolYardim = yolYardim.replace(
  /<title>.*?<\/title>/i,
  '<title>Maslak Yol Yardım & Mobil Akü Takviye | 7/24 Yerinde Destek - 0533 265 70 89</title>'
);
yolYardim = yolYardim.replace(
  /<meta name="description" content=".*?">/i,
  '<meta name="description" content="Maslak yol yardım ve 7/24 yerinde mobil akü takviye hizmeti. Maslak Oto Sanayi, Büyükdere Caddesi ve çevresinde 12V/24V akü şarjı, lastik tamiri: 0533 265 70 89.">'
);
yolYardim = yolYardim.replace(
  /<meta name="keywords" content=".*?">/i,
  '<meta name="keywords" content="maslak yol yardım, maslak yol yardim, maslak acil yol yardım, maslak akü takviye, maslak mobil lastik tamiri, 7/24 maslak yol yardım">'
);
yolYardim = yolYardim.replace(
  /<h1[^>]*>.*?<\/h1>/i,
  '<h1 class="page-hero-title">Maslak Yol Yardım & <span style="color: var(--primary);">Mobil Akü Takviye</span></h1>'
);
fs.writeFileSync('hizmetler/yol-yardim-aku-takviye.html', yolYardim, 'utf8');
console.log('Updated hizmetler/yol-yardim-aku-takviye.html');
