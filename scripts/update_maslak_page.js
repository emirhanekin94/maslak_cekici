const fs = require('fs');

let content = fs.readFileSync('bolgeler/maslak-oto-cekici.html', 'utf8');

content = content.replace(
  /<title>.*?<\/title>/i,
  '<title>Maslak Oto Çekici & Maslak Çekici | Maslak Oto Kurtarma ve Yol Yardım - 0533 265 70 89</title>'
);

content = content.replace(
  /<meta name="description" content=".*?">/i,
  '<meta name="description" content="Maslak oto çekici, Maslak çekici, 7/24 acil Maslak oto kurtarma ve Maslak yol yardım hizmeti. Atatürk Oto Sanayi ve çevresinde 10 dakikada intikal: 0533 265 70 89.">'
);

content = content.replace(
  /<meta name="keywords" content=".*?">/i,
  '<meta name="keywords" content="maslak oto çekici, maslak çekici, maslak otocekici, maslak yol yardım, maslak oto kurtarma, maslak otokurtarma, maslak oto sanayi çekici, en yakın çekici maslak">'
);

fs.writeFileSync('bolgeler/maslak-oto-cekici.html', content, 'utf8');
console.log('Successfully updated bolgeler/maslak-oto-cekici.html');
