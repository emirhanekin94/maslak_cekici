const fs = require('fs');
const path = require('path');

const PHONE = '0533 265 70 89';
const PHONE_RAW = '905332657089';
const DOMAIN = 'https://maslakcekici.com';

const regions = [
  {
    slug: 'maslak-oto-cekici',
    name: 'Maslak',
    title: 'Maslak Oto Çekici 7/24 | 10 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Maslak Oto Sanayi Sitesi, Büyükdere Caddesi, ITU Ayazağa ve plazalar bölgesinde 7/24 nöbetçi oto çekici. 10 dakikada intikal, sabit fiyat: 0533 265 70 89.',
    keywords: 'maslak çekici, maslak oto çekici, maslak oto kurtarma, maslak oto sanayi çekici, büyükdere caddesi çekici, ayazağa çekici, maslak en yakın çekici',
    eta: '10 Dk',
    caseTitle: 'Maslak Oto Sanayi Girişinde Şanzıman Arızası',
    caseDesc: 'Büyükdere Caddesi Maslak kavşağında akşam iş çıkışı saatinde şanzıman kilitleyen lüks sedan araca 8 dakikada müdahale edilerek Maslak 1. Kısım Oto Sanayi özel servisine aktarıldı.',
    vehicleType: 'Sedan Otomobil',
    deliveryPoint: 'Maslak 1. Kısım Oto Sanayi',
    leadText: 'Maslak Oto Sanayi Sitesi (1. ve 2. Kısım), Büyükdere Caddesi, ITU Ayazağa Yerleşkesi, Ahi Evran Caddesi ve Dereboyu aksında 7/24 aktif nöbetçi kayar kasa çekicilerimizle hazırız. Plazalar bölgesindeki kapalı otopark arızalarından ana arter kazalarına kadar tüm araç tiplerine anında kaskolu müdahale sağlıyoruz.',
    hotspots: 'Maslak Oto Sanayi 1. ve 2. Kısım, Büyükdere Caddesi, Ahi Evran Caddesi, Dereboyu Caddesi, ITU Ayazağa Kampüsü, Vadi İstanbul bağlantı yolu',
    faqs: [
      { q: 'Maslak Oto Sanayi Sitesi içinde çekici kaç dakikada gelir?', a: 'Merkez üssümüz Maslak Oto Sanayi ve Büyükdere Caddesi kesişiminde olduğundan ortalama 7 ila 10 dakika içinde yanınızdayız.' },
      { q: 'Maslak plazalarındaki alçak tavanlı kapalı otoparklardan araç çekiyor musunuz?', a: 'Evet, alçak tavanlı kapalı otoparklara özel düşük kabinli ve hidrolik ahtapot donanımlı araçlarımızla kurtarma yapıyoruz.' },
      { q: 'Maslak’ta lüks ve spor araçlar için sıfır açılı çekiciniz var mı?', a: 'Evet. Porsche, BMW, Mercedes ve spor araçlar için özel alçak rampa ve teker sabitleme aparatlı kayar kasa kullanıyoruz.' },
      { q: 'Maslak çekici fiyatları nasıl belirlenir?', a: 'Aracınızın cinsi ve gideceği mesafeye göre telefonda sabit fiyat verilir; sonradan ek sürpriz ücret talep edilmez.' },
      { q: 'Yetkili bayilere (Borusan, Doğuş Oto vb.) teslimat yapıyor musunuz?', a: 'Evet, Maslak ve çevresindeki tüm resmi yetkili servislere emtia sigortasıyla güvenle teslimat sağlıyoruz.' }
    ]
  },
  {
    slug: 'sariyer-oto-cekici',
    name: 'Sarıyer',
    title: 'Sarıyer Oto Çekici 7/24 | 15 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Sarıyer Merkez, Çayırbaşı Tüneli, Maden, Tarabya ve Kireçburnu sahilinde 7/24 nöbetçi oto çekici ve kurtarıcı. 15 dakikada intikal: 0533 265 70 89.',
    keywords: 'sarıyer çekici, sarıyer oto çekici, sarıyer oto kurtarma, çayırbaşı çekici, maden çekici, tarabya çekici, kireçburnu çekici, sarıyer yol yardım',
    eta: '15 Dk',
    caseTitle: 'Çayırbaşı Tünel Çıkışında Hararet Yapan SUV Tahliyesi',
    caseDesc: 'Çayırbaşı Tüneli çıkışında hararet yükselterek stop eden SUV araca Hacıosman noktasındaki ekibimiz 11 dakikada ulaştı ve güvenle Maslak servisine ulaştırdı.',
    vehicleType: 'Dizel SUV',
    deliveryPoint: 'Maslak Oto Sanayi Özel Servis',
    leadText: 'Sarıyer Merkez, Çayırbaşı, Maden Mahallesi, Hacıosman Bayırı, Tarabya ve Kireçburnu sahil hattında 7/24 nöbetçi ekiplerimizle yanınızdayız. Hem sahil trafiğinde hem virajlı Sarıyer yollarında hidrolik kayar kasa kurtarıcılarımızla emniyetli taşıma sunuyoruz.',
    hotspots: 'Sarıyer Merkez, Çayırbaşı Tüneli, Maden Mahallesi, Hacıosman Bayırı, Kireçburnu Sahil, Tarabya Bayırı, Rumelikavağı',
    faqs: [
      { q: 'Sarıyer sahil yolunda çekici ne kadar sürede ulaşır?', a: 'Sahil hattındaki nöbetçi filomuzla ortalama 12-15 dakika içinde aracınızın yanındayız.' },
      { q: 'Hacıosman bayırında kalan araçlara müdahale ediyor musunuz?', a: 'Evet, Hacıosman ve Maslak bağlantısında hazır bekleyen kurtarıcılarımız dakikalar içinde intikal eder.' },
      { q: 'Sarıyer’den Maslak Sanayi’ye çekici ücreti ne kadardır?', a: 'Mesafe ve araç cinsine göre şeffaf sabit fiyat verilmektedir. 0533 265 70 89 numaramızdan anında öğrenebilirsiniz.' },
      { q: 'Kaza durumunda vinçli kurtarma hizmetiniz var mı?', a: 'Evet, şarampol veya eğimli arazide kalan araçlar için güçlü vinçli kurtarma araçlarımız mevcuttur.' },
      { q: 'Gece nöbetçi çekiciniz var mı?', a: 'Evet, haftanın 7 günü 24 saat kesintisiz nöbetçi ekiplerimiz görev başındadır.' }
    ]
  },
  {
    slug: 'kagithane-oto-cekici',
    name: 'Kağıthane',
    title: 'Kağıthane Oto Çekici 7/24 | 12 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Kağıthane Merkez, Cendere Caddesi, Çeliktepe, Gültepe ve Sadabad hattında 7/24 oto çekici ve yol yardım. 12 dakikada intikal: 0533 265 70 89.',
    keywords: 'kağıthane çekici, kağıthane oto çekici, kağıthane oto kurtarma, cendere çekici, çeliktepe çekici, gültepe çekici, kağıthane yol yardım',
    eta: '12 Dk',
    caseTitle: 'Cendere Caddesi Üzerinde Lastik ve Aks Kırılması',
    caseDesc: 'Cendere Vadisi Vadi İstanbul istikametinde çukura düşerek aksı zarar gören hafif ticari araca 10 dakikada ahtapot aparatla müdahale edildi.',
    vehicleType: 'Hafif Ticari Kamyonet',
    deliveryPoint: 'Kağıthane Sanayi Sitesi',
    leadText: 'Kağıthane Merkez, Cendere Caddesi, Sadabad Vadisi, Çeliktepe, Gültepe, Talatpaşa ve Hasdal Otoyolu kavşağında 7/24 kesintisiz çekici hizmeti. Yoğun vadide trafiği aksatmadan süratle yükleme yaparak kaskolu teslimat gerçekleştiriyoruz.',
    hotspots: 'Cendere Caddesi, Sadabad Kültür Merkezi çevresi, Çeliktepe, Gültepe, Talatpaşa, Hasdal Kavşağı, Vadi İstanbul',
    faqs: [
      { q: 'Cendere Caddesi’nde çekici bekleme süresi ne kadardır?', a: 'Cendere ve Seyrantepe hattında hazır bekleyen araçlarımızla ortalama 10-12 dakika sürer.' },
      { q: 'Çeliktepe ve Gültepe’nin dar sokaklarına çekici girebiliyor mu?', a: 'Evet, dar sokaklara uygun manevra kabiliyeti yüksek kompakt kayar kasa araçlarımız mevcuttur.' },
      { q: 'Ticari ve kamyonet araçları çekiyor musunuz?', a: 'Evet, binek otomobillerin yanı sıra panelvan, minibüs ve kamyonetleri güvenle taşıyoruz.' },
      { q: 'Ödeme için kredi kartı geçerli mi?', a: 'Evet, tüm çekicilerimizde mobil POS cihazı yer almaktadır.' },
      { q: 'Kağıthane’de akü takviyesi yapıyor musunuz?', a: 'Evet, yerinde akü takviye ve çalıştırma desteği sunuyoruz.' }
    ]
  },
  {
    slug: 'besiktas-oto-cekici',
    name: 'Beşiktaş',
    title: 'Beşiktaş Oto Çekici 7/24 | 12 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Beşiktaş Merkez, Levent, 4. Levent, Gayrettepe, Balmumcu ve Barbaros Bulvarı’nda 7/24 kaskolu oto çekici. 12 dakikada en yakın kurtarıcı: 0533 265 70 89.',
    keywords: 'beşiktaş çekici, beşiktaş oto çekici, levent çekici, 4 levent çekici, gayrettepe çekici, balmumcu çekici, barbaros bulvarı çekici',
    eta: '12 Dk',
    caseTitle: 'Barbaros Bulvarı Yokuşunda Debriyaj Biten Araç Kurtarması',
    caseDesc: 'Akşam saatlerinde Barbaros Bulvarı yokuşunda debriyaj balatası yanan ve kayan araca 9 dakikada ulaşılarak Maslak servisine nakledildi.',
    vehicleType: 'Hatchback Otomobil',
    deliveryPoint: 'Maslak Oto Sanayi',
    leadText: 'Beşiktaş Meydan, Barbaros Bulvarı, Levent, 4. Levent, Gayrettepe, Balmumcu, Ortaköy ve Çırağan hattında 7/24 nöbetçi kurtarıcı filomuzla hizmetinizdeyiz. Büyükdere Caddesi aksından hızla bağlanarak en kısa sürede adresinize varıyoruz.',
    hotspots: 'Levent Büyükdere Caddesi, Barbaros Bulvarı, Beşiktaş Meydan, Gayrettepe, Balmumcu, Ortaköy Sahili, 4. Levent',
    faqs: [
      { q: 'Levent ve Beşiktaş’a Maslak’tan çekici ne kadar sürede gelir?', a: 'Büyükdere Caddesi güzergahından ortalama 10 ila 12 dakika içinde konuma varıyoruz.' },
      { q: 'Barbaros Bulvarı dik yokuşunda kalan aracı çekebilir misiniz?', a: 'Evet, güçlü çelik halat ve vinç destekli hidrolik platformumuzla dik yokuşlarda güvenli yükleme yapıyoruz.' },
      { q: 'Taşıma esnasında araba sigortalı mıdır?', a: 'Evet, tüm transferlerimiz emtia taşıma kaskosu ile tam güvence altındadır.' },
      { q: 'Ortaköy sahil yoluna çekici gönderiyor musunuz?', a: 'Evet, Ortaköy, Kuruçeşme ve Bebek sahil şeridine 7/24 nöbetçi araç yönlendiriyoruz.' },
      { q: 'Fiyatlar sabit mi?', a: 'Evet, telefonda konuştuğumuz sabit ücret haricinde ek maliyet çıkmaz.' }
    ]
  },
  {
    slug: 'eyupsultan-oto-cekici',
    name: 'Eyüpsultan',
    title: 'Eyüpsultan Oto Çekici 7/24 | 15 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Eyüpsultan Merkez, Alibeyköy, Silahtarağa, Hasdal ve çevre otoyollarda 7/24 oto kurtarma ve çekici. 15 dakikada intikal: 0533 265 70 89.',
    keywords: 'eyüpsultan çekici, eyüp çekici, alibeyköy çekici, silahtarağa çekici, hasdal çekici, eyüpsultan oto kurtarma, eyüp yol yardım',
    eta: '15 Dk',
    caseTitle: 'Alibeyköy Cep Otogarı Civarında Elektrik Arızası',
    caseDesc: 'Alibeyköy tramvay hattı kenarında stop eden ve çalışmayan hibrit araca 12 dakikada ulaşılarak akü kontrolü yapıldı ve servise çekildi.',
    vehicleType: 'Hibrit Sedan',
    deliveryPoint: 'Yetkili Servis',
    leadText: 'Eyüpsultan Merkez, Alibeyköy, Silahtarağa, Yeşilpınar, Rami ve Hasdal Kışlası mevkiinde 7/24 oto kurtarma desteği sağlıyoruz. Kaskolu taşıma filomuz ve deneyimli operatörlerimizle aracınızı güvenle teslim ediyoruz.',
    hotspots: 'Eyüpsultan Merkez, Alibeyköy Meydan, Hasdal Bağlantı Yolu, Silahtarağa Caddesi, Yeşilpınar',
    faqs: [
      { q: 'Alibeyköy ve Eyüpsultan’a çekici kaç dakikada gelir?', a: 'Hasdal ve Cendere aksındaki ekiplerimizle ortalama 12-15 dakika içinde ulaşıyoruz.' },
      { q: 'Hasdal Askeri Kışlası otoyolunda çekici hizmeti var mı?', a: 'Evet, otoyol kenarında kalan araçlara reflektörlü emniyet tedbirleriyle müdahale ediyoruz.' },
      { q: 'Elektrikli ve hibrit araç çekiyor musunuz?', a: 'Evet, elektrikli ve hibrit araçların motoruna zarar vermeyen tekerlek korumalı transfer yapıyoruz.' },
      { q: 'Gece saatlerinde arayabilir miyiz?', a: 'Evet, 7 gün 24 saat 0533 265 70 89 numaramız aktiftir.' },
      { q: 'Ödeme yöntemleri nelerdir?', a: 'Nakit, kredi kartı ve FAST / havale kabul edilmektedir.' }
    ]
  },
  {
    slug: 'sisli-oto-cekici',
    name: 'Şişli',
    title: 'Şişli Oto Çekici 7/24 | 12 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Şişli Merkez, Mecidiyeköy Viyadüğü, Halaskargazi, Bomonti, Fulya ve Esentepe’de 7/24 nöbetçi oto kurtarma. 12 dakikada en yakın çekici: 0533 265 70 89.',
    keywords: 'şişli çekici, şişli oto çekici, mecidiyeköy çekici, fulya çekici, bomonti çekici, esentepe çekici, halaskargazi çekici',
    eta: '12 Dk',
    caseTitle: 'Mecidiyeköy Viyadük Girişinde Zincirleme Hasar Tahliyesi',
    caseDesc: 'Mecidiyeköy E-5 katılımında hasar alan otomobil, trafiğin kilitlenmemesi için 10 dakikada hidrolik kayar kasaya alınarak emniyetli alana çekildi.',
    vehicleType: 'Crossover SUV',
    deliveryPoint: 'Maslak Oto Sanayi Kaporta Servisi',
    leadText: 'Şişli Merkez, Mecidiyeköy Meydan ve Viyadüğü, Halaskargazi Caddesi, Bomonti, Fulya Deresi ve Esentepe bölgesinde 7/24 nöbetçi çekici araçlarımızla hizmet veriyoruz. Yoğun arterlerde süratli yükleme ile zaman kaybettirmeden destek sunuyoruz.',
    hotspots: 'Mecidiyeköy Viyadüğü, Büyükdere Caddesi Şişli aksı, Halaskargazi, Bomonti, Fulya, Esentepe',
    faqs: [
      { q: 'Mecidiyeköy viyadüğünde arıza yaparsam ne kadar sürede gelirsiniz?', a: 'Büyükdere aksından hızlı intikal ile ortalama 10-12 dakikada yanınızdayız.' },
      { q: 'Fulya’nın dik yokuşlarında çekici çalışabiliyor mu?', a: 'Evet, Fulya ve Bomonti’nin dik yokuşlarına uygun güçlü vinç ve çekicilerimiz vardır.' },
      { q: 'Kaza tespit tutanağı için bekliyor musunuz?', a: 'Evet, polis veya sürücüler tutanağı tamamlayana kadar emniyet desteği sağlıyoruz.' },
      { q: 'Şişli’den Maslak Sanayi’ye çekici taşır mı?', a: 'Evet, Maslak Oto Sanayi ana uzmanlık ve servis bölgemizdir.' },
      { q: 'Kredi kartı geçiyor mu?', a: 'Tüm araçlarımızda mobil POS mevcuttur.' }
    ]
  },
  {
    slug: 'beyoglu-oto-cekici',
    name: 'Beyoğlu',
    title: 'Beyoğlu Oto Çekici 7/24 | 15 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Beyoğlu Taksim, Piyalepaşa Bulvarı, Kasımpaşa, Karaköy ve Hasköy’de 7/24 oto kurtarma ve çekici. 15 dakikada intikal: 0533 265 70 89.',
    keywords: 'beyoğlu çekici, beyoğlu oto çekici, taksim çekici, piyalepaşa çekici, kasımpaşa çekici, karaköy çekici, hasköy çekici',
    eta: '15 Dk',
    caseTitle: 'Piyalepaşa Bulvarı Tünel Çıkışında Hararet Arızası',
    caseDesc: 'Piyalepaşa - Bomonti tünel çıkışında su kaynatan araca 11 dakikada ulaşılarak trafik emniyeti sağlandı ve servise aktarıldı.',
    vehicleType: 'Sedan Otomobil',
    deliveryPoint: 'Oto Sanayi Özel Servis',
    leadText: 'Beyoğlu, Taksim Meydanı, Piyalepaşa Bulvarı, Kasımpaşa, Karaköy, Hasköy, Şişhane ve Tarlabaşı hattında 7/24 oto çekici hizmeti. Tarihi ve dar sokaklara uygun manevra kabiliyetine sahip araçlarımızla güvenle transfer yapıyoruz.',
    hotspots: 'Piyalepaşa Bulvarı, Taksim Tarlabaşı, Kasımpaşa Tersane Caddesi, Karaköy Kemeraltı, Hasköy Sahili',
    faqs: [
      { q: 'Beyoğlu ve Taksim çevresine çekici ne kadar sürede gelir?', a: 'Piyalepaşa ve Kasımpaşa güzergahından ortalama 15 dakika içinde ulaşıyoruz.' },
      { q: 'Tünel içinde kalan araçları çekiyor musunuz?', a: 'Evet, tünel acil cepleri ve çıkışlarında güvenli tahliye sağlıyoruz.' },
      { q: 'Dar sokaklarda araç çekimi nasıl yapılıyor?', a: 'Özel dar şasili kurtarıcılarımızla manevra yaparak araca zarar vermeden yüklüyoruz.' },
      { q: 'Fiyat tarifesi nasıl?', a: 'Mesafe ve arıza durumuna göre şeffaf sabit fiyat verilir.' },
      { q: 'Akü takviyesi var mı?', a: 'Evet, yerinde akü desteği ve çalıştırma yapıyoruz.' }
    ]
  },
  {
    slug: 'arnavutkoy-oto-cekici',
    name: 'Arnavutköy',
    title: 'Arnavutköy Oto Çekici 7/24 | 15 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Arnavutköy Boğaz sahili, Kuruçeşme, Bebek bağlantısı ve 3. Havalimanı yolunda 7/24 acil oto çekici. 15 dakikada intikal: 0533 265 70 89.',
    keywords: 'arnavutköy çekici, arnavutköy oto çekici, arnavutköy boğaz çekici, kuruçeşme çekici, arnavutköy yol yardım, 3 havalimanı yolu çekici',
    eta: '15 Dk',
    caseTitle: 'Arnavutköy Sahil Yolunda Kilitlenen Otomatik Araç',
    caseDesc: 'Sahil yolunda elektronik park freni kilitlenen araca teker kaydırma aparatlarıyla müdahale edilerek sahil trafiği aksatılmadan çekildi.',
    vehicleType: 'Lüks Coupe',
    deliveryPoint: 'Maslak Oto Sanayi',
    leadText: 'Arnavutköy Boğaz sahil şeridi, Kuruçeşme, Bebek sahil yolu bağlantıları ve kuzey aksındaki Arnavutköy 3. Havalimanı güzergahında 7/24 kesintisiz oto kurtarıcı desteği veriyoruz.',
    hotspots: 'Arnavutköy Sahil Yolu, Kuruçeşme Caddesi, Bebek Arnavutköy Caddesi, Arnavutköy Burnu, Havalimanı Bağlantısı',
    faqs: [
      { q: 'Arnavutköy Boğaz sahilinde çekici ne kadar sürede gelir?', a: 'Ortalama 12-15 dakika içinde aracınızın yanına ulaşıyoruz.' },
      { q: 'Sahil trafiğinde araç yüklemesi güvenli mi?', a: 'Evet, tepe flaşörleri ve güvenlik ekipmanlarıyla trafiği tıkamadan dakikalar içinde yüklüyoruz.' },
      { q: 'Lüks araç taşıma kaskosu var mı?', a: 'Evet, %100 nakliyat ve emtia kaskosu ile hizmet veriyoruz.' },
      { q: 'Havalimanı otoyoluna çekici gönderiyor musunuz?', a: 'Evet, Kuzey Marmara ve 3. Havalimanı bağlantılarına nöbetçi filomuz vardır.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, mobil POS ile araç başında kartla ödeme yapabilirsiniz.' }
    ]
  },
  {
    slug: 'kemerburgaz-oto-cekici',
    name: 'Kemerburgaz',
    title: 'Kemerburgaz Oto Çekici 7/24 | 15 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Kemerburgaz Merkez, Mithatpaşa, Hasdal-Kemerburgaz otoyolu ve orman yolunda 7/24 oto kurtarma ve çekici. 15 dakikada intikal: 0533 265 70 89.',
    keywords: 'kemerburgaz çekici, kemerburgaz oto çekici, kemerburgaz oto kurtarma, mithatpaşa çekici, hasdal kemerburgaz çekici, kemerburgaz yol yardım',
    eta: '15 Dk',
    caseTitle: 'Hasdal - Kemerburgaz Otoyolunda Lastik Yarılması',
    caseDesc: 'Otoyolda yüksek hızda lastiği yarılan ve bariyer kenarında kalan araca 12 dakikada ulaşılarak güvenli alana tahliyesi yapıldı.',
    vehicleType: 'Station Wagon',
    deliveryPoint: 'Maslak Lastik & Mekanik Servisi',
    leadText: 'Kemerburgaz Merkez, Mithatpaşa, Hasdal - Kemerburgaz Otoyolu, Pirinççi Köyü yolu ve orman güzergahında 7/24 nöbetçi çekici filomuzla yanınızdayız. Hem otoyol arızalarında hem zorlu zemin koşullarında güçlü kayar kasa araçlarımızla hizmet veriyoruz.',
    hotspots: 'Hasdal - Kemerburgaz Yolu, Kemerburgaz Merkez, Mithatpaşa Mahallesi, Göktürk Kavşağı, Pirinççi Yolu',
    faqs: [
      { q: 'Kemerburgaz otoyolunda çekici kaç dakikada gelir?', a: 'Hasdal çıkışlı nöbetçi aracımızla ortalama 12-15 dakika içinde konuma varıyoruz.' },
      { q: 'Orman yolu veya köy yollarına çekici geliyor mu?', a: 'Evet, Kemerburgaz çevresindeki tüm tali yol ve arazi yollarına müdahale ediyoruz.' },
      { q: 'Akü bitmesi durumunda yerinde takviye yapıyor musunuz?', a: 'Evet, taşınabilir 12V/24V takviye cihazımız ile yerinde destek veriyoruz.' },
      { q: 'Taşıma kaskolu mu?', a: 'Tüm nakliye işlemlerimiz eksiksiz emtia kaskosu altındadır.' },
      { q: 'Fiyatı önceden öğrenebilir miyim?', a: 'Evet, aradığınızda sabit ve net fiyat bilgisi iletilir.' }
    ]
  },
  {
    slug: 'gokturk-oto-cekici',
    name: 'Göktürk',
    title: 'Göktürk Oto Çekici 7/24 | 15 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Göktürk Merkez, İstanbul Caddesi, Kemer Country ve Gölet çevresinde 7/24 lüks ve spor araç oto çekici. 15 dakikada intikal: 0533 265 70 89.',
    keywords: 'göktürk çekici, göktürk oto çekici, kemer country çekici, istanbul caddesi çekici, göktürk lüks araç çekici, göktürk yol yardım',
    eta: '15 Dk',
    caseTitle: 'Kemer Country Çıkışında Elektrikli Araç Batarya Kilitlenmesi',
    caseDesc: 'Bataryası tamamen tükenen ve tekerlekleri dönmeyen elektrikli lüks SUV, özel kayar rampa ve patinaj tekerlekleriyle çiziksiz yüklendi.',
    vehicleType: 'Elektrikli SUV',
    deliveryPoint: 'Maslak Yetkili Şarj & Servis Merkezi',
    leadText: 'Göktürk Merkez, İstanbul Caddesi, Kemer Country villa siteleri, Göktürk Gölet bölgesi ve Maslak bağlantı yolunda 7/24 kesintisiz çekici hizmeti sunuyoruz. Özellikle lüks, basık spor ve elektrikli araçlar için özel aparatlı çekicilerimizle sıfır hasar garantisi veriyoruz.',
    hotspots: 'İstanbul Caddesi, Kemer Country, Göktürk Göleti, Maslak - Göktürk Yolu, Göktürk Merkez',
    faqs: [
      { q: 'Göktürk’te elektrikli araçları çekebiliyor musunuz?', a: 'Evet, şanzımanı veya tekerlekleri kilitlenen elektrikli araçlar için özel makaralı aparatlar kullanıyoruz.' },
      { q: 'Kemer Country sitelerine çekici gelebiliyor mu?', a: 'Evet, site güvenliğiyle koordineli şekilde adresinize kadar geliyoruz.' },
      { q: 'Göktürk - Maslak arası çekici süresi nedir?', a: 'Ortalama 12-15 dakikada adreste oluyoruz.' },
      { q: 'Lüks araç taşıma kaskonuz ne kadar teminatlı?', a: 'Yüksek değerli prestij araçlar için tam kapsamlı taşıma kaskosu uyguluyoruz.' },
      { q: 'Ödeme kredi kartıyla yapılabilir mi?', a: 'Evet, araç başında kredi kartı veya FAST ile ödeme mümkündür.' }
    ]
  },
  {
    slug: 'hamidiye-mahallesi-oto-cekici',
    name: 'Hamidiye Mahallesi',
    title: 'Hamidiye Mahallesi Çekici 7/24 | 10 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Kağıthane Hamidiye Mahallesi, Vadi İstanbul hattı, Cendere Vadisi ve Hasdal’da 7/24 oto çekici. 10 dakikada intikal: 0533 265 70 89.',
    keywords: 'hamidiye mahallesi çekici, hamidiye çekici, kağıthane hamidiye oto çekici, vadi istanbul çekici, cendere hamidiye çekici',
    eta: '10 Dk',
    caseTitle: 'Vadi İstanbul Yakınında Hararet Yapan Otomobil',
    caseDesc: 'Cendere Caddesi Hamidiye ayrımında motor arıza lambası yanan otomobile Seyrantepe çıkışlı ekibimiz 8 dakikada ulaştı.',
    vehicleType: 'Binek Otomobil',
    deliveryPoint: 'Maslak Oto Sanayi',
    leadText: 'Kağıthane Hamidiye Mahallesi, Vadi İstanbul rezidans bölgesi, Cendere Vadisi ve Hasdal Kışlası kavşağında 7/24 hazır bekleyen nöbetçi kurtarıcılarımızla en geç 10 dakikada adrese ulaşıyoruz.',
    hotspots: 'Hamidiye Mahallesi Merkez, Vadi İstanbul, Cendere Vadisi, Hasdal Kavşağı, Seyrantepe Bağlantısı',
    faqs: [
      { q: 'Hamidiye Mahallesi’ne çekici ne kadar sürede gelir?', a: 'Seyrantepe ve Cendere üssümüzden ortalama 8-10 dakika içinde yanınızdayız.' },
      { q: 'Vadi İstanbul kapalı otoparkından araç çekebilir misiniz?', a: 'Evet, kapalı otoparklara uygun alçak tavan kurtarıcılarımız mevcuttur.' },
      { q: 'Maslak Oto Sanayi’ye teslimat yapıyor musunuz?', a: 'Evet, aracınızı Maslak Sanayi’deki ustanıza doğrudan ulaştırıyoruz.' },
      { q: 'Gece saatinde hizmet veriyor musunuz?', a: 'Evet, 7/24 nöbetçi ekiplerimiz kesintisiz çalışmaktadır.' },
      { q: 'Sabit fiyat garantisi var mı?', a: 'Evet, telefonda belirtilen sabit ücret dışında ek maliyet alınmaz.' }
    ]
  },
  {
    slug: 'etiler-oto-cekici',
    name: 'Etiler',
    title: 'Etiler Oto Çekici 7/24 | 10 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Etiler Nisbetiye Caddesi, Akatlar, Mayadrom, Boğaziçi Üniversitesi ve Levent bağlantısında 7/24 lüks araç oto çekici. 10 dakikada intikal: 0533 265 70 89.',
    keywords: 'etiler çekici, etiler oto çekici, nisbetiye çekici, akatlar çekici, mayadrom çekici, etiler oto kurtarma, etiler lüks araç çekici',
    eta: '10 Dk',
    caseTitle: 'Nisbetiye Caddesi Üzerinde Fren Kilitlenmesi',
    caseDesc: 'Akşam saatlerinde Nisbetiye Caddesi üzerinde elektronik el freni takılı kalan lüks SUV araca 9 dakikada ulaşılarak Maslak Borusan servisine taşındı.',
    vehicleType: 'Lüks SUV',
    deliveryPoint: 'Borusan Oto Maslak',
    leadText: 'Etiler, Nisbetiye Caddesi, Akatlar, Mayadrom, Alkent, Boğaziçi Üniversitesi kampüsü ve Tepecik Yolu çevresinde 7/24 lüks araç çekici desteği sunuyoruz. Alçak tabanlı kayar kasa araçlarımızla spor otomobillerinizi tamponuna zarar vermeden güvenle taşıyoruz.',
    hotspots: 'Nisbetiye Caddesi, Akatlar Mahallesi, Mayadrom çevresi, Tepecik Yolu, Alkent Sitesi, Levent Bağlantısı',
    faqs: [
      { q: 'Etiler’e Maslak’tan çekici ne kadar sürede ulaşır?', a: 'Büyükdere Caddesi ve Levent üzerinden ortalama 10 dakika içinde yanınızdayız.' },
      { q: 'Lüks ve spor arabalar için uygun araç var mı?', a: 'Evet, basık spor arabalar için sıfır açılı rampa ve teker kilit aparatlarımız bulunmaktadır.' },
      { q: 'Akatlar ve Mayadrom bölgesine servisiniz var mı?', a: 'Evet, Etiler ve Akatlar’ın tüm cadde ve sitelerine 7/24 hizmet veriyoruz.' },
      { q: 'Araç taşıma esnasında sigortalı mı?', a: 'Evet, %100 emtia taşıma kaskosu ile tam güvence altındasınız.' },
      { q: 'Ödeme kredi kartıyla yapılabilir mi?', a: 'Tüm çekicilerimizde mobil POS cihazı mevcuttur.' }
    ]
  },
  {
    slug: 'armutlu-oto-cekici',
    name: 'Armutlu',
    title: 'Armutlu Oto Çekici 7/24 | 10 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Armutlu (Fatih Sultan Mehmet Mah.), Baltalimanı hisarüstü ve TEM köprü bağlantısında 7/24 acil oto çekici. 10 dakikada intikal: 0533 265 70 89.',
    keywords: 'armutlu çekici, armutlu oto çekici, fsm mahallesi çekici, baltalimanı hisarüstü çekici, tem köprü çekici, armutlu yol yardım',
    eta: '10 Dk',
    caseTitle: 'TEM Köprü Katılımında Yakıt Bitmesi ve Emniyet Tahliyesi',
    caseDesc: 'TEM Köprü katılımı Armutlu viyadüğünde yakıtı biterek emniyet şeridinde kalan araca 8 dakikada müdahale edildi ve benzinliğe aktarıldı.',
    vehicleType: 'Hatchback Otomobil',
    deliveryPoint: 'En Yakın Akaryakıt İstasyonu',
    leadText: 'Armutlu (Fatih Sultan Mehmet Mahallesi), Baltalimanı hisarüstü bağlantısı, Derbent ve TEM köprü gişeleri mevkiinde 7/24 hazır nöbetçi araçlarımızla 10 dakika içinde adrese varıyoruz.',
    hotspots: 'Fatih Sultan Mehmet Mahallesi, Baltalimanı Hisarüstü Caddesi, TEM Köprü Bağlantısı, Derbent Mevkii',
    faqs: [
      { q: 'Armutlu ve TEM köprü girişinde çekici ne kadar sürede gelir?', a: 'Maslak çıkışlı ekiplerimizle ortalama 8-10 dakika içinde ulaşıyoruz.' },
      { q: 'Köprü bağlantısında güvenli yükleme nasıl yapılıyor?', a: 'Flaşörlü güvenlik araçlarımızla trafik akışı emniyete alınarak hızlı yükleme yapılır.' },
      { q: 'Fiyatlar sabit mi?', a: 'Evet, telefonda konuşulan sabit fiyat haricinde hiçbir ücret talep edilmez.' },
      { q: 'Gece çekici bulabilir miyim?', a: '7 gün 24 saat kesintisiz nöbetçi filomuz hazırdır.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, kartla ödeme yapabilirsiniz.' }
    ]
  },
  {
    slug: 'istinye-oto-cekici',
    name: 'İstinye',
    title: 'İstinye Oto Çekici 7/24 | 10 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'İstinyePark, İstinye Koyu, Marina, Katar Caddesi ve Poligon mahallesinde 7/24 kaskolu oto çekici. 10 dakikada intikal: 0533 265 70 89.',
    keywords: 'istinye çekici, istinye oto çekici, istinyepark çekici, katar caddesi çekici, istinye marina çekici, istinye oto kurtarma',
    eta: '10 Dk',
    caseTitle: 'İstinyePark Açık Otoparkında Akü Deşarjı ve Çekici Desteği',
    caseDesc: 'İstinyePark otoparkında aküsü tamamen tükenen araca taşınabilir booster ile yerinde destek verildi ve kontrol amaçlı servise nakledildi.',
    vehicleType: 'Sedan Otomobil',
    deliveryPoint: 'Maslak Oto Sanayi',
    leadText: 'İstinyePark AVM çevresi, Katar Caddesi, İstinye Marina ve Koyu, Poligon Mahallesi ve Pınar Mahallesi hattında 7/24 kesintisiz çekici hizmeti veriyoruz. Maslak Oto Sanayi’ye komşu konumumuz sayesinde en geç 10 dakikada yanınızdayız.',
    hotspots: 'İstinyePark, Katar Caddesi, İstinye Sahili & Marina, Poligon Mahallesi, Pınar Mahallesi',
    faqs: [
      { q: 'İstinyePark çevresine çekici ne kadar sürede ulaşır?', a: 'Maslak üssümüzden sadece 7-10 dakika içinde İstinyePark ve çevresine varıyoruz.' },
      { q: 'İstinye Koyu ve sahil yoluna çekici geliyor mu?', a: 'Evet, İstinye sahil şeridinde 7/24 nöbetçi çekicimiz mevcuttur.' },
      { q: 'Aracım taşınırken kaskolu mu?', a: 'Evet, tüm araçlar %100 nakliyat ve emtia kaskosu ile taşınır.' },
      { q: 'Akü takviyesi için çekici çağırmak şart mı?', a: 'Hayır, mobil akü takviye ekiplerimiz yerinde çalıştırma desteği sağlar.' },
      { q: 'Ödeme nasıl yapılıyor?', a: 'Nakit, kredi kartı veya FAST ile güvenle ödeyebilirsiniz.' }
    ]
  },
  {
    slug: 'yenikoy-oto-cekici',
    name: 'Yeniköy',
    title: 'Yeniköy Oto Çekici 7/24 | 15 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Yeniköy Köybaşı Caddesi, Kalender Sahili ve Bağlar mevkiinde 7/24 kaskolu oto çekici ve kurtarıcı. 15 dakikada intikal: 0533 265 70 89.',
    keywords: 'yeniköy çekici, yeniköy oto çekici, köybaşı caddesi çekici, kalender çekici, yeniköy sahil çekici, yeniköy yol yardım',
    eta: '15 Dk',
    caseTitle: 'Köybaşı Caddesi Sahilinde Motor Stop Eden Araç Tahliyesi',
    caseDesc: 'Yeniköy sahilinde dar yolda trafiği kilitleyen motor arızalı otomobile 12 dakikada ulaşılarak hızlıca kayar kasaya alındı.',
    vehicleType: 'Binek Otomobil',
    deliveryPoint: 'Maslak Özel Servis',
    leadText: 'Yeniköy Köybaşı Caddesi, Kalender Sahili, Yeniköy Bağlar mevkii ve Tarabya bağlantı yolunda 7/24 oto kurtarıcı desteği sağlıyoruz. Boğaz’ın dar sahil yolunda trafiği aksatmadan profesyonel yükleme yapıyoruz.',
    hotspots: 'Köybaşı Caddesi, Kalender Sahili, Yeniköy Bağlar Mevkii, Tarabya Sahil Yolu',
    faqs: [
      { q: 'Yeniköy sahilinde çekici ne kadar sürede gelir?', a: 'Sahil ve Maslak çıkışlı araçlarımızla ortalama 12-15 dakikada adresteyiz.' },
      { q: 'Dar sahil yolunda trafik tıkanmadan aracı nasıl yüklüyorsunuz?', a: 'Hızlı açılan hidrolik kayar kasa ve vinç donanımımızla 3-4 dakikada yükleme tamamlanır.' },
      { q: 'Yeniköy’den Maslak Sanayi’ye araç çeker misiniz?', a: 'Evet, en çok transfer yaptığımız güzergahlardan biridir.' },
      { q: 'Kaza durumunda vinç desteği var mı?', a: 'Evet, vinçli kurtarma araçlarımız hazırdır.' },
      { q: 'Fiyatlar sabit mi?', a: 'Evet, telefonda verilen sabit fiyat geçerlidir.' }
    ]
  },
  {
    slug: 'nisantasi-oto-cekici',
    name: 'Nişantaşı',
    title: 'Nişantaşı Oto Çekici 7/24 | 15 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Nişantaşı Valikonağı Caddesi, Abdi İpekçi, Teşvikiye, Rumeli ve Maçka’da 7/24 özel aparatlı lüks araç çekici. 15 dakikada intikal: 0533 265 70 89.',
    keywords: 'nişantaşı çekici, nişantaşı oto çekici, valikonağı çekici, abdi ipekçi çekici, teşvikiye çekici, maçka çekici, nişantaşı lüks araç çekici',
    eta: '15 Dk',
    caseTitle: 'Abdi İpekçi Caddesi’nde Basık Spor Otomobil Tahliyesi',
    caseDesc: 'Abdi İpekçi Caddesi üzerinde alt takımı yere yakın spor otomobil, özel alçak rampa aparatları kullanılarak tamponu çizilmeden yüklendi.',
    vehicleType: 'Spor Coupe',
    deliveryPoint: 'Maslak Yetkili Servis',
    leadText: 'Nişantaşı Valikonağı Caddesi, Abdi İpekçi, Teşvikiye, Rumeli Caddesi, Maçka ve Harbiye mevkiinde 7/24 özel aparatlı lüks araç çekici hizmeti veriyoruz. Dar sokaklar ve tek yönlü arterlerde uzman şoförlerimizle hasarsız taşıma garantisi sunuyoruz.',
    hotspots: 'Valikonağı Caddesi, Abdi İpekçi Caddesi, Teşvikiye Camii çevresi, Rumeli Caddesi, Maçka Parkı',
    faqs: [
      { q: 'Nişantaşı’nın dar sokaklarına çekici girebiliyor mu?', a: 'Evet, Nişantaşı sokaklarına uygun dar şasili ve özel manevralı çekicilerimiz mevcuttur.' },
      { q: 'Spor ve basık otomobiller için özel rampa var mı?', a: 'Evet, sıfır eğimli rampa ile tampon ve marşpiyellere temas etmeden yükleme yapılır.' },
      { q: 'Nişantaşı’na çekici varış süresi nedir?', a: 'Şişli ve Beşiktaş arterlerimizden ortalama 12-15 dakika içinde ulaşıyoruz.' },
      { q: 'Araç sigortalı taşınıyor mu?', a: 'Evet, yüksek bedelli taşıma kaskosu ile güvence altındasınız.' },
      { q: 'Ödeme kredi kartıyla yapılabilir mi?', a: 'Evet, mobil POS ile araç başında ödeme alıyoruz.' }
    ]
  },
  {
    slug: 'bebek-oto-cekici',
    name: 'Bebek',
    title: 'Bebek Oto Çekici 7/24 | 12 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Bebek Sahil, Cevdet Paşa Caddesi, Bebek Yokuşu ve Aşiyan’da 7/24 lüks ve spor araç oto çekici. 12 dakikada intikal: 0533 265 70 89.',
    keywords: 'bebek çekici, bebek oto çekici, cevdet paşa caddesi çekici, bebek yokuşu çekici, aşiyan çekici, bebek lüks araç çekici',
    eta: '12 Dk',
    caseTitle: 'Bebek Yokuşunda Şanzıman Kilitlenmesi',
    caseDesc: 'Bebek yokuşunda dik eğimde kalan lüks SUV araca tekerlek kaydırma aparatlarıyla müdahale edilerek Maslak servisine aktarıldı.',
    vehicleType: 'Lüks SUV',
    deliveryPoint: 'Maslak Oto Sanayi',
    leadText: 'Bebek Sahili, Cevdet Paşa Caddesi, Bebek Yokuşu (İnşirah Caddesi), Küçükbebek ve Aşiyan hattında 7/24 lüks ve spor araç çekici hizmeti sağlıyoruz. Yüksek değerli araçlarınızı özel sabitleme aparatlarıyla sıfır riskle taşıyoruz.',
    hotspots: 'Cevdet Paşa Caddesi, Bebek Parkı çevresi, Bebek Yokuşu, İnşirah Caddesi, Aşiyan Sahili',
    faqs: [
      { q: 'Bebek sahil yolunda çekici ne kadar sürede ulaşır?', a: 'Etiler ve sahil nöbetçi birimlerimizle ortalama 10-12 dakika içinde konuma varıyoruz.' },
      { q: 'Bebek Yokuşu dik rampasında çekici çalışabilir mi?', a: 'Evet, dik rampalara uygun hidrolik frenleme ve çift kancalı vinç donanımımız vardır.' },
      { q: 'Lüks spor araçlar için sıfır hasar garantisi var mı?', a: 'Evet, özel açılı rampa ve korumalı bağlama aparatları ile sıfır hasar garantisi veriyoruz.' },
      { q: 'Bebek’ten Maslak Sanayi’ye çekici taşır mı?', a: 'Evet, Maslak Oto Sanayi ve anlaşmalı yetkili servislere direkt transfer sağlıyoruz.' },
      { q: 'Ödeme şekilleri nelerdir?', a: 'Kredi kartı, banka kartı, nakit veya FAST / havale geçerlidir.' }
    ]
  },
  {
    slug: 'emirgan-oto-cekici',
    name: 'Emirgan',
    title: 'Emirgan Oto Çekici 7/24 | 10 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Emirgan Korusu, Sakıp Sabancı Caddesi, Baltalimanı ve Çınaraltı mevkiinde 7/24 kaskolu oto çekici. 10 dakikada intikal: 0533 265 70 89.',
    keywords: 'emirgan çekici, emirgan oto çekici, sakıp sabancı caddesi çekici, emirgan korusu çekici, baltalimanı emirgan çekici, emirgan yol yardım',
    eta: '10 Dk',
    caseTitle: 'Sakıp Sabancı Caddesi Sahilinde Elektrik Kesintisi',
    caseDesc: 'Emirgan Çınaraltı mevkiinde elektrik tesisatı arızasıyla stop eden araca İstinye nöbetçi ekibimiz 8 dakikada ulaştı.',
    vehicleType: 'Binek Sedan',
    deliveryPoint: 'Maslak Oto Sanayi',
    leadText: 'Emirgan Korusu çevresi, Sakıp Sabancı Caddesi sahil boyu, Çınaraltı ve Baltalimanı sahil bağlantısında 7/24 nöbetçi çekici hizmeti. Maslak ve İstinye üslerimize çok yakın konumda olduğundan 10 dakikada yanınızdayız.',
    hotspots: 'Sakıp Sabancı Caddesi, Emirgan Korusu, Çınaraltı Meydanı, Baltalimanı Sahil Yolu',
    faqs: [
      { q: 'Emirgan’a çekici ne kadar sürede gelir?', a: 'Maslak ve İstinye’den ortalama 8-10 dakika içinde yanınızdayız.' },
      { q: 'Emirgan Korusu yokuşunda araç çekiyor musunuz?', a: 'Evet, koru çevresindeki virajlı ve dik yollara uygun kayar kasalı araçlarımız vardır.' },
      { q: 'Sahil yolunda çekici çağırmak kolay mı?', a: '0533 265 70 89 numaramızı aramanız veya WhatsApp’tan konum atmanız yeterlidir.' },
      { q: 'Taşıma kaskosu mevcut mu?', a: 'Evet, aracınız yükleme anından itibaren tam kaskolu taşınır.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, araç başında kredi kartıyla ödeme yapabilirsiniz.' }
    ]
  },
  {
    slug: 'seyrantepe-oto-cekici',
    name: 'Seyrantepe',
    title: 'Seyrantepe Oto Çekici 7/24 | 10 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Seyrantepe RAMS Park (Ali Sami Yen), Huzur Mahallesi, Cendere ve TEM kavşağında 7/24 oto çekici. 10 dakikada intikal: 0533 265 70 89.',
    keywords: 'seyrantepe çekici, seyrantepe oto çekici, rams park çekici, ali sami yen çekici, huzur mahallesi çekici, seyrantepe oto kurtarma',
    eta: '10 Dk',
    caseTitle: 'RAMS Park Maç Çıkışında Akü Arızası Desteği',
    caseDesc: 'Stadyum otoparkı çıkışında farları açık kalarak aküsü biten araca yerinde booster takviyesi yapılarak 6 dakikada çalıştırıldı.',
    vehicleType: 'Hatchback Otomobil',
    deliveryPoint: 'Yerinde Akü Takviye',
    leadText: 'Seyrantepe Merkez, RAMS Park Stadyumu çevresi, Huzur Mahallesi, Cendere Caddesi bağlantısı ve TEM Seyrantepe kavşağında 7/24 hazır nöbetçi araçlarımızla hizmetinizdeyiz. Maslak Oto Sanayi sınırında olmamız sayesinde en hızlı ulaştığımız bölgelerden biridir.',
    hotspots: 'RAMS Park Stadyumu, Huzur Mahallesi, Seyrantepe Sanayi, Cendere Bağlantısı, TEM Kavşağı',
    faqs: [
      { q: 'Seyrantepe’ye çekici kaç dakikada gelir?', a: 'Seyrantepe ana operasyon üssümüze komşu olduğundan ortalama 7-10 dakika içinde yanınızdayız.' },
      { q: 'Maç günleri stadyum çevresine çekici girebiliyor mu?', a: 'Evet, emniyet geçiş izinleri ve alternatif güzergahlarla maç günleri de hizmet veriyoruz.' },
      { q: 'Maslak Oto Sanayi’ye çekici ücreti ne kadardır?', a: 'Çok yakın mesafe olduğu için en uygun sabit fiyat tarifemiz geçerlidir.' },
      { q: 'Yerinde akü takviyesi yapıyor musunuz?', a: 'Evet, 12V/24V taşınabilir booster ile anında yerinde çalıştırma sağlıyoruz.' },
      { q: 'Ödeme kartla olur mu?', a: 'Evet, mobil POS ile kredi kartı veya FAST kabul edilmektedir.' }
    ]
  },
  {
    slug: 'okmeydani-oto-cekici',
    name: 'Okmeydanı',
    title: 'Okmeydanı Oto Çekici 7/24 | 15 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Okmeydanı E-5 Kavşağı, PERPA, Darülaceze, Piyalepaşa ve Fevzi Çakmak mevkiinde 7/24 oto kurtarma ve çekici. 15 dakikada intikal: 0533 265 70 89.',
    keywords: 'okmeydanı çekici, okmeydanı oto çekici, perpa çekici, darülaceze çekici, e5 okmeydanı çekici, okmeydanı oto kurtarma',
    eta: '15 Dk',
    caseTitle: 'PERPA Otopark Çıkışında Marş Basmayan Araç Tahliyesi',
    caseDesc: 'PERPA Ticaret Merkezi otopark katında marş motoru kilitlenen ticari araca 12 dakikada ulaşılarak Maslak servisine çekildi.',
    vehicleType: 'Hafif Ticari Van',
    deliveryPoint: 'Maslak Sanayi Sitesi',
    leadText: 'Okmeydanı E-5 Kavşağı, PERPA Ticaret Merkezi, Darülaceze Caddesi, Piyalepaşa tünel girişi ve Fevzi Çakmak mevkiinde 7/24 oto çekici desteği sağlıyoruz. E-5 otoyolu arızalarında reflektörlü güvenlik araçlarımızla emniyetli kurtarma yapıyoruz.',
    hotspots: 'Okmeydanı E-5 Kavşağı, PERPA Ticaret Merkezi, Darülaceze Caddesi, Piyalepaşa Tünel Çıkışı, Şişli Bağlantısı',
    faqs: [
      { q: 'Okmeydanı E-5 üzerinde arıza yaptığımda ne kadar sürede gelirsiniz?', a: 'E-5 otoyol ekibimizle ortalama 12-15 dakika içinde aracınızın yanındayız.' },
      { q: 'PERPA katlı otoparkına çekici giriyor mu?', a: 'Evet, katlı otoparklar için uygun alçak kabinli kurtarıcılarımız mevcuttur.' },
      { q: 'Hafif ticari ve kargo araçlarını çekiyor musunuz?', a: 'Evet, panelvan ve kamyonetler için güçlü kayar kasalarımız bulunmaktadır.' },
      { q: 'Fiyat önceden netleşir mi?', a: 'Evet, telefonda şeffaf ve kesin sabit fiyat verilir.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, araç başında kredi kartı veya FAST ile ödeme yapabilirsiniz.' }
    ]
  }
];

function buildRegionPage(reg) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": reg.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": `${DOMAIN}/` },
      { "@type": "ListItem", "position": 2, "name": "Bölgelerimiz", "item": `${DOMAIN}/bolgeler/index.html` },
      { "@type": "ListItem", "position": 3, "name": `${reg.name} Çekici`, "item": `${DOMAIN}/bolgeler/${reg.slug}.html` }
    ]
  };

  const autoRepairSchema = {
    "@context": "https://schema.org",
    "@type": ["EmergencyService", "AutoRepair"],
    "name": `Maslak Çekici - ${reg.name} Oto Çekici & Kurtarma`,
    "telephone": `+${PHONE_RAW}`,
    "url": `${DOMAIN}/bolgeler/${reg.slug}.html`,
    "image": `${DOMAIN}/images/otomobil_cekici-1.webp`,
    "priceRange": "₺₺",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": `${reg.name}, İstanbul`,
      "addressRegion": "İstanbul",
      "addressCountry": "TR"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${reg.name}, İstanbul`
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "86"
    }
  };

  // Diğer bölgelerin linkleri (bu sayfa hariç)
  const otherRegionsList = regions
    .filter(r => r.slug !== reg.slug)
    .slice(0, 8)
    .map(r => `<li><a href="${r.slug}.html">${r.name} Çekici (${r.eta})</a></li>`)
    .join('\n');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${reg.title}</title>
  <meta name="description" content="${reg.metaDesc}">
  <meta name="keywords" content="${reg.keywords}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${DOMAIN}/bolgeler/${reg.slug}.html">

  <!-- Favicon & Tarayıcı Logoları -->
  <link rel="icon" type="image/svg+xml" href="../images/logo.svg">
  <link rel="icon" type="image/webp" href="../images/logo.webp">
  <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../images/apple-touch-icon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${reg.title}">
  <meta property="og:description" content="${reg.metaDesc}">
  <meta property="og:url" content="${DOMAIN}/bolgeler/${reg.slug}.html">
  <meta property="og:image" content="${DOMAIN}/images/otomobil_cekici-1.webp">
  <meta property="og:locale" content="tr_TR">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${reg.title}">
  <meta name="twitter:description" content="${reg.metaDesc}">
  <meta name="twitter:image" content="${DOMAIN}/images/otomobil_cekici-1.webp">

  <!-- Google Fonts & CSS -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap">
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org Yapılandırılmış Veriler -->
  <script type="application/ld+json">
  ${JSON.stringify(autoRepairSchema, null, 2)}
  </script>
  <script type="application/ld+json">
  ${JSON.stringify(breadcrumbSchema, null, 2)}
  </script>
  <script type="application/ld+json">
  ${JSON.stringify(faqSchema, null, 2)}
  </script>
</head>
<body>

  <!-- Üst Acil Durum Bilgi Şeridi -->
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-inner">
        <div class="top-bar-left">
          <span class="live-badge"><span class="pulse-dot"></span> 7/24 Canlı Nöbetçi Çekici</span>
          <span>${reg.name} & Maslak Merkezli 20 Bölgede 10-15 Dk Varış</span>
        </div>
        <div class="top-bar-right">
          <a href="tel:${PHONE_RAW}" class="top-bar-link">
            <span>📞 7/24 Acil: <strong>${PHONE}</strong></span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="../index.html" class="brand-logo" aria-label="Maslak Çekici Ana Sayfa">
          <img src="../images/logo.svg" alt="Maslak Çekici Logo" class="brand-logo-img" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">MASLAK <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Acil Yol Yardım & Kurtarma</span>
          </div>
        </a>

        <nav class="main-nav" aria-label="Ana Menü">
          <ul class="nav-list">
            <li><a href="../index.html" class="nav-link">Ana Sayfa</a></li>
            <li><a href="index.html" class="nav-link active">Bölgelerimiz</a></li>
            <li><a href="../hizmetler/oto-cekici.html" class="nav-link">Hizmetlerimiz</a></li>
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
          <button type="button" class="menu-toggle-btn" aria-label="Menüyü Aç/Kapat" aria-expanded="false">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Breadcrumb & Hero -->
  <section class="subpage-hero" style="background: linear-gradient(135deg, #070b14 0%, #0f172a 60%, #162032 100%); color: #fff; padding: 45px 0;">
    <div class="container">
      <div style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 10px;">
        <a href="../index.html" style="color: #cbd5e1;">Ana Sayfa</a> / <a href="index.html" style="color: #cbd5e1;">Hizmet Bölgeleri</a> / <span style="color: #ff8533;">${reg.name} Çekici</span>
      </div>
      <h1 style="font-size: 2.15rem; font-weight: 900; margin-bottom: 8px;">${reg.name} Oto Çekici & 7/24 Acil Yol Yardım</h1>
      <p style="color: #cbd5e1; font-size: 1.05rem;">
        ${reg.name} ve çevre arterlerde ortalama <strong>${reg.eta}</strong> varış süresiyle kaskolu, sabit fiyatlı nöbetçi oto kurtarma.
      </p>
    </div>
  </section>

  <main class="section">
    <div class="container" style="max-width: 1060px;">

      <!-- Bölge Güvence Rozetleri -->
      <div class="region-badge-bar">
        <div class="region-badge-pill">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2C11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          Ortalama Varış: <strong>${reg.eta}</strong>
        </div>
        <div class="region-badge-pill">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
          %100 Taşıma Kaskosu
        </div>
        <div class="region-badge-pill">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
          Sabit Fiyat Güvencesi
        </div>
        <div class="region-badge-pill">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 17h2c.55 0 1-.45 1-1v-3.5c0-.38-.21-.71-.53-.88l-2.02-1.01A1.99 1.99 0 0018.55 10H16V7a1 1 0 00-1-1H3a1 1 0 00-1 1v10h2a3 3 0 006 0h4a3 3 0 006 0zm-12 1a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2zM16 11.5h2.55l1.6 1.07V15H16v-3.5zM4 8h10v7H4V8z"/></svg>
          Hasarsız Kayar Kasa
        </div>
      </div>

      <!-- Hızlı Çağrı & Teklif Kutusu -->
      <div style="background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 30px; box-shadow: var(--shadow-md); margin-bottom: 35px;">
        <div class="region-cta-grid">
          <div>
            <span style="background: var(--primary-light); color: var(--primary); font-size: 0.8rem; font-weight: 800; padding: 4px 10px; border-radius: var(--radius-full); text-transform: uppercase;">
              ${reg.name} Acil Çağrı Merkezi
            </span>
            <h2 style="font-size: 1.5rem; color: var(--secondary); margin-top: 8px;">${reg.name} Bölgesinde Yolda mı Kaldınız?</h2>
            <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 6px; line-height: 1.6;">
              Mekanik arıza, kaza, akü bitmesi veya lastik patlaması durumunda <strong>${reg.eta}</strong> içinde adresinizdeyiz. Şeffaf sabit fiyat onayı alarak aracınızı güvenle teslim edebilirsiniz.
            </p>
            <div style="display: flex; gap: 12px; margin-top: 20px; flex-wrap: wrap;">
              <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
                <span>${PHONE}</span>
              </a>
              <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
                <span>Canlı Konum At</span>
              </button>
            </div>
          </div>

          <!-- WhatsApp Teklif Formu -->
          <div style="background: #ffffff; border: 1px solid var(--border-light); padding: 24px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
            <strong style="display: block; font-size: 1.05rem; font-weight: 800; color: var(--text-dark); margin-bottom: 4px;">WhatsApp Sabit Fiyat Onayı</strong>
            <small style="color: var(--text-muted); display: block; margin-bottom: 14px;">${reg.name} nöbetçi çekicimizden anında fiyat almak için formu iletin:</small>
            
            <form class="wp-contact-form">
              <input type="hidden" name="region_select" value="${reg.name}">
              
              <div style="margin-bottom: 10px;">
                <label style="display:block; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">Araç Türü *</label>
                <select name="vehicle_type_select" class="wp-form-select wp-form-select-light" required>
                  <option value="Binek Otomobil (Sedan/HB)" selected>Binek Otomobil (Sedan / HB)</option>
                  <option value="SUV / 4x4 / Jeep">SUV / 4x4 / Jeep</option>
                  <option value="Lüks / Spor / Basık Araç">Lüks / Spor / Basık Araç</option>
                  <option value="Hafif Ticari / Kamyonet">Hafif Ticari / Kamyonet</option>
                  <option value="Motosiklet / Scooter">Motosiklet / Scooter</option>
                </select>
              </div>

              <div style="margin-bottom: 10px;">
                <label style="display:block; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">Yaşanan Problem *</label>
                <select name="problem_select" class="wp-form-select wp-form-select-light" required>
                  <option value="Mekanik Arıza (Çalışmıyor)" selected>Mekanik Arıza (Çalışmıyor)</option>
                  <option value="Trafik Kazası (Yürümüyor)">Trafik Kazası (Hasarlı)</option>
                  <option value="Akü Bitti (Takviye Lazım)">Akü Bitti / Marş Basmıyor</option>
                  <option value="Lastik Patladı (Stepne)">Lastik Patladı / Stepne Değişimi</option>
                  <option value="Şanzıman / Tekerlek Kilitli">Şanzıman / Tekerlek Kilitli</option>
                </select>
              </div>

              <div style="margin-bottom: 10px;">
                <label style="display:block; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">Gidilecek Yer / Servis *</label>
                <input type="text" name="to_location" placeholder="Örn: Maslak Oto Sanayi, Yetkili Servis" class="wp-form-input" required>
              </div>

              <button type="submit" class="btn btn-whatsapp" style="width: 100%; justify-content: center; padding: 13px;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
                <span>WhatsApp ile Sabit Fiyat Al</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Detaylı Özgün Açıklama & Bölgesel Analiz -->
      <article class="region-feature-box">
        <h2 style="font-size: 1.5rem; color: var(--secondary); margin-bottom: 14px;">${reg.name} Oto Çekici ve Kurtarma Hizmet Detayları</h2>

        <p style="margin-bottom: 16px; font-size: 0.98rem; line-height: 1.8; color: var(--text-main);">
          <strong>Maslak Çekici</strong> olarak, ${reg.leadText}
        </p>
        <p style="margin-bottom: 20px; font-size: 0.98rem; line-height: 1.8; color: var(--text-main);">
          Bölgedeki kritik noktalarımız: <em>${reg.hotspots}</em>. Aracınız nerede kalırsa kalsın, uzman şoförlerimiz dar sokak ve yoğun trafik koşullarına uygun teçhizatla emniyetli transfer sağlar.
        </p>

        <!-- Gerçek Saha Operasyon Notu & Vaka İncelemesi (Case Study) -->
        <div class="local-case-study">
          <div class="local-case-header">
            <span class="local-case-badge">Gerçek Saha Kaydı</span>
            <h4 class="local-case-title">📍 ${reg.name} Saha Operasyonu: ${reg.caseTitle}</h4>
          </div>
          <p class="local-case-desc">${reg.caseDesc}</p>
          <div class="local-case-meta">
            <span class="local-case-meta-item"><strong>Araç Tipi:</strong> ${reg.vehicleType}</span>
            <span class="local-case-meta-item"><strong>İntikal:</strong> ${reg.eta} İntikal</span>
            <span class="local-case-meta-item"><strong>Teslim:</strong> ${reg.deliveryPoint}</span>
            <span class="local-case-meta-item"><strong>Güvence:</strong> %100 Taşıma Kaskosu</span>
          </div>
        </div>

        <!-- Araç Uyumluluk Tablosu -->
        <h3 style="font-size: 1.25rem; color: var(--secondary); margin: 24px 0 12px;">${reg.name} Bölgesinde Taşınabilen Araç Tipleri</h3>
        <table class="table-vehicle-support">
          <thead>
            <tr>
              <th>Araç Segmenti</th>
              <th>Kullanılan Çekici Tipi</th>
              <th>Sabitleme Teknolojisi</th>
              <th>Ortalama Varış</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Binek Otomobiller (Sedan/HB)</strong></td>
              <td>Hidrolik Kayar Kasa</td>
              <td>4 Nokta Tekerlek Kilit Sistemi</td>
              <td>${reg.eta}</td>
            </tr>
            <tr>
              <td><strong>Lüks & Spor Araçlar</strong></td>
              <td>Sıfır Açılı Alçak Rampa</td>
              <td>Özel Marşpiyel Koruyucu Aparat</td>
              <td>${reg.eta}</td>
            </tr>
            <tr>
              <td><strong>SUV, Jeep & 4x4</strong></td>
              <td>Ağır Tip Kayar Kasa Platform</td>
              <td>Diferansiyel ve Aks Koruma</td>
              <td>${reg.eta}</td>
            </tr>
            <tr>
              <td><strong>Hafif Ticari & Minibüs</strong></td>
              <td>Genişletilmiş Platform Çekici</td>
              <td>Yüksek Taşıma Kapasiteli Halat</td>
              <td>${reg.eta}</td>
            </tr>
            <tr>
              <td><strong>Motosiklet & Scooter</strong></td>
              <td>Özel Ön Tekerlek Sabitleyici</td>
              <td>Gergili Yan Denge Bantları</td>
              <td>${reg.eta}</td>
            </tr>
          </tbody>
        </table>
      </article>

      <!-- 4 Adımda Çekici Süreci -->
      <div class="process-steps-grid">
        <div class="process-step-card">
          <div class="process-step-num">1</div>
          <h3 class="process-step-title">Konum Paylaşın</h3>
          <p class="process-step-desc">0533 265 70 89 numarasından arayın veya WhatsApp ile canlı konum iletin.</p>
        </div>
        <div class="process-step-card">
          <div class="process-step-num">2</div>
          <h3 class="process-step-title">Sabit Fiyat Alın</h3>
          <p class="process-step-desc">Gidilecek yer ve araç modeline göre sürpriz içermeyen kesin fiyat onayı verilir.</p>
        </div>
        <div class="process-step-card">
          <div class="process-step-num">3</div>
          <h3 class="process-step-title">${reg.eta} İntikal</h3>
          <p class="process-step-desc">${reg.name} nöbetçi kayar kasa kurtarıcımız hızla yanınıza ulaşır.</p>
        </div>
        <div class="process-step-card">
          <div class="process-step-num">4</div>
          <h3 class="process-step-title">Kaskolu Teslim</h3>
          <p class="process-step-desc">Aracınız Maslak Sanayi veya dilediğiniz servise kaskolu teslim edilir.</p>
        </div>
      </div>

      <!-- Sıkça Sorulan Sorular -->
      <section style="margin: 35px 0;">
        <h2 style="font-size: 1.5rem; color: var(--secondary); margin-bottom: 16px;">${reg.name} Çekici Sıkça Sorulan Sorular</h2>
        <div class="faq-wrap">
          ${reg.faqs.map((f, i) => `
          <div class="faq-item ${i === 0 ? 'active' : ''}">
            <button type="button" class="faq-question">
              <span>${f.q}</span>
              <span class="faq-icon">▼</span>
            </button>
            <div class="faq-answer">
              <p>${f.a}</p>
            </div>
          </div>
          `).join('')}
        </div>
      </section>

      <!-- Diğer Bölgeler Linkleri -->
      <div style="background: var(--bg-subtle); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px; margin-top: 35px;">
        <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 12px;">Çevre Hizmet Bölgelerimiz</h3>
        <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px; font-size: 0.9rem; font-weight: 600;">
          ${otherRegionsList}
        </ul>
        <div style="margin-top: 14px; text-align: right;">
          <a href="index.html" style="color: var(--primary); font-weight: 700; font-size: 0.9rem;">Tüm 20 Bölgeyi Görüntüle →</a>
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
            <img src="../images/logo.svg" alt="Maslak Çekici" width="38" height="38" style="border-radius:50%;">
            <div class="brand-text">
              <span class="brand-name" style="font-size: 1.05rem;">MASLAK <span>ÇEKİCİ</span></span>
            </div>
          </div>
          <p style="font-size: 0.875rem; line-height: 1.6; color: var(--dark-muted);">
            Maslak Oto Sanayi merkezli filomuzla ${reg.name} ve çevre ilçelerde 7/24 kaskolu oto kurtarma, çekici ve yol yardım hizmeti.
          </p>
        </div>
        <div>
          <h3 class="footer-title">Hizmetlerimiz</h3>
          <ul class="footer-links">
            <li><a href="../hizmetler/oto-cekici.html">Kayar Kasa Çekici</a></li>
            <li><a href="../hizmetler/luks-spor-arac-cekici.html">Lüks Araç Taşıma</a></li>
            <li><a href="../hizmetler/oto-kurtarma.html">Kaza Kurtarma</a></li>
            <li><a href="../hizmetler/yol-yardim-aku-takviye.html">Akü Takviye</a></li>
          </ul>
        </div>
        <div>
          <h3 class="footer-title">Hızlı İletişim</h3>
          <ul class="footer-links">
            <li style="color: #fff; font-weight: 700;">📞 ${PHONE}</li>
            <li>📍 Maslak Oto Sanayi / İstanbul</li>
            <li>⏰ 7 Gün 24 Saat Açık</li>
            <li>💳 Nakit & Kart & FAST</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Maslak Çekici & ${reg.name} Yol Yardım.</span>
        <span>7/24 Acil: <a href="tel:${PHONE_RAW}" style="color: #34d399; font-weight: 700;">${PHONE}</a></span>
      </div>
    </div>
  </footer>

  <!-- Mobil Sabit Dock & Masaüstü Floating CTA -->
  <div class="mobile-sticky-dock" aria-label="Sabit Acil Çağrı Çubuğu">
    <div class="sticky-dock-inner">
      <a href="tel:${PHONE_RAW}" class="sticky-dock-btn sticky-call-btn" aria-label="${reg.name} Çekici Ara">
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
</html>`;
}

// bolgeler/index.html Oluşturucu
function buildRegionsIndexPage() {
  const cardsHtml = regions.map(r => `
    <article class="region-square-card">
      <div class="region-square-top">
        <div class="region-square-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        </div>
        <span class="region-square-live"><span class="region-live-dot"></span> 7/24 Nöbetçi</span>
      </div>
      <div class="region-square-body">
        <h3 class="region-square-title"><a href="${r.slug}.html">${r.name} Oto Çekici</a></h3>
        <p class="region-square-sub">${r.metaDesc}</p>
        <div class="region-square-badges">
          <span class="region-square-badge eta">⏱ ${r.eta} Varış</span>
          <span class="region-square-badge kasko">🛡 %100 Kaskolu</span>
        </div>
      </div>
      <div class="region-square-actions">
        <a href="${r.slug}.html" class="btn-square-detail">Bölge Detayı →</a>
        <a href="tel:${PHONE_RAW}" class="btn-square-call">
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
          <span>Ara</span>
        </a>
      </div>
    </article>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Maslak Çekici Hizmet Bölgelerimiz (20 Bölge & Semt) - 0533 265 70 89</title>
  <meta name="description" content="Maslak merkezli 20 bölgede 7/24 oto çekici, kurtarma ve yol yardım. Maslak, Sarıyer, Beşiktaş, Kağıthane, Şişli, Etiler, Bebek ve çevre semtlerde 10-15 dk varış.">
  <link rel="canonical" href="${DOMAIN}/bolgeler/index.html">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="icon" type="image/svg+xml" href="../images/logo.svg">
</head>
<body>
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-inner">
        <div class="top-bar-left">
          <span class="live-badge"><span class="pulse-dot"></span> 7/24 Aktif 20 Bölge</span>
          <span>Maslak, Sarıyer, Beşiktaş, Kağıthane, Şişli ve Boğaz Hattı Nöbetçi Çekici</span>
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
            <li><a href="index.html" class="nav-link active">Bölgelerimiz</a></li>
            <li><a href="../hizmetler/oto-cekici.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="../galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="../hakkimizda.html" class="nav-link">Hakkımızda</a></li>
            <li><a href="../iletisim.html" class="nav-link">İletişim</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          <a href="tel:${PHONE_RAW}" class="btn btn-call header-call-btn"><span>${PHONE}</span></a>
        </div>
      </div>
    </div>
  </header>

  <section class="subpage-hero" style="background: linear-gradient(135deg, #070b14 0%, #0f172a 60%, #162032 100%); color: #fff; padding: 45px 0;">
    <div class="container">
      <div style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 10px;">
        <a href="../index.html" style="color: #cbd5e1;">Ana Sayfa</a> / <span style="color: #ff8533;">Hizmet Bölgeleri</span>
      </div>
      <h1 style="font-size: 2.25rem; font-weight: 900; margin-bottom: 8px;">Maslak Merkezli Hizmet Bölgelerimiz</h1>
      <p style="color: #cbd5e1; font-size: 1.05rem;">
        İstanbul Avrupa Yakası ve çevre otoyollarda 20 kilit semtte 10-15 dakikada en yakın oto çekici.
      </p>
    </div>
  </section>

  <main class="section">
    <div class="container">
      <div class="regions-square-grid">
        ${cardsHtml}
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

// Çalıştır ve Dosyaları Yaz
const bolgelerDir = path.join(__dirname, '..', 'bolgeler');
if (!fs.existsSync(bolgelerDir)) {
  fs.mkdirSync(bolgelerDir, { recursive: true });
}

regions.forEach(reg => {
  const filePath = path.join(bolgelerDir, `${reg.slug}.html`);
  fs.writeFileSync(filePath, buildRegionPage(reg), 'utf8');
  console.log(`Oluşturuldu: bolgeler/${reg.slug}.html`);
});

const indexFilePath = path.join(bolgelerDir, 'index.html');
fs.writeFileSync(indexFilePath, buildRegionsIndexPage(), 'utf8');
console.log('Oluşturuldu: bolgeler/index.html');
console.log('Tüm 20 bölge başarıyla tamamlandı!');
