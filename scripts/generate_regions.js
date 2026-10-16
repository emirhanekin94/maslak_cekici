const fs = require('fs');
const path = require('path');

const PHONE = '0533 265 70 89';
const PHONE_RAW = '905332657089';
const DOMAIN = 'https://maslakotocekici.com';

const regions = [
  {
    slug: 'maslak-oto-cekici',
    name: 'Maslak',
    category: 'maslak-sariyer',
    categoryLabel: 'Merkez Üs & Sanayi',
    title: 'Maslak Oto Çekici 7/24 | 10 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Maslak Oto Sanayi Sitesi, Büyükdere Caddesi, İTÜ Ayazağa ve plazalar bölgesinde 7/24 nöbetçi oto çekici. 10 dakikada intikal, sabit fiyat: 0533 265 70 89.',
    keywords: 'maslak çekici, maslak oto çekici, maslak oto kurtarma, maslak oto sanayi çekici, büyükdere caddesi çekici, ayazağa çekici, maslak en yakın çekici',
    eta: '10 Dk',
    caseTitle: 'Maslak Oto Sanayi Girişinde Şanzıman Arızası',
    caseDesc: 'Büyükdere Caddesi Maslak kavşağında akşam iş çıkışı saatinde şanzıman kilitleyen araca 8 dakikada müdahale edilerek Maslak 1. Kısım Oto Sanayi özel servisine aktarıldı.',
    vehicleType: 'Sedan Otomobil',
    deliveryPoint: 'Maslak 1. Kısım Oto Sanayi',
    leadText: 'Maslak Atatürk Oto Sanayi Sitesi (1. ve 2. Kısım), Büyükdere Caddesi, İTÜ Ayazağa Yerleşkesi, Ahi Evran Caddesi ve Dereboyu aksında 7/24 aktif nöbetçi kayar kasa çekicilerimizle hazırız. Plazalar bölgesindeki kapalı otopark arızalarından ana arter kazalarına kadar tüm araç tiplerine anında kaskolu müdahale sağlıyoruz.',
    hotspots: 'Maslak Oto Sanayi 1. ve 2. Kısım, Büyükdere Caddesi, Ahi Evran Caddesi, Dereboyu Caddesi, İTÜ Ayazağa Kampüsü, Vadi İstanbul bağlantı yolu',
    trafficAnalysis: "Maslak, İstanbul'un uluslararası finans ve iş dünyasının kalbi olmasının yanı sıra, Türkiye'nin en büyük otomotiv tamir ve servis ekosistemlerinden biri olan Atatürk Oto Sanayi Sitesi'ne (1. ve 2. Kısım) ev sahipliği yapmaktadır. Bölgenin omurgasını oluşturan Büyükdere Caddesi, günde on binlerce plazalar çalışanının ve transit araçların kullandığı ana koridordur. Maslak'ta sabah 08:00 - 10:00 ve akşam 17:30 - 20:00 saatleri arasında Büyükdere Caddesi üzerinde kuzey-güney aksında aşırı trafik yoğunluğu görülür. Ahi Evran Caddesi, Dereboyu Caddesi, Spine Tower, Maslak 42 ve Windowist çevresinde daralan tali yollar, arıza yapan tek bir aracın dahi dakikalar içinde kilometrelerce kuyruk oluşturmasına yol açar. Maslak kavşağı, İTÜ Ayazağa metro çıkışı ve Vadi İstanbul viyadük katılımı bölgenin en hassas darboğazlarıdır.",
    scenarios: "Maslak lokasyonunda filomuzun en sık karşılaştığı durumların başında, yüksek katlı plazaların ve iş merkezlerinin -3, -4 ve -5. katlarında yer alan alçak tavanlı kapalı otoparklarda meydana gelen elektrik/akü arızaları gelmektedir. Tavan yüksekliği 1.95 - 2.10 metreye kadar düşen bu otoparklara standart çekicilerin girmesi imkansızdır. İkinci yaygın senaryo ise Büyükdere Caddesi'ndeki dur-kalk trafikte çift kavramalı (DSG, EDC, Powershift) araçların şanzıman ısınması uyarısı vermesi ve mekatronik kilitlemesidir. Ayrıca İTÜ Ayazağa kampüs içi yollarda ve Sanayi Sitesi giriş rampalarında meydana gelen debriyaj balatası tükenmeleri ile hafif ticari araçların aks kesme arızaları sıkça kurtarma operasyonu gerektirir.",
    equipmentProtocol: "Maslak operasyonlarımızda iki ana tip donanım aktif nöbettedir. Birincisi, plazaların yer altı katlarına sorunsuz girebilen, alçak şasili, kompakt boyutlu ve hidrolik ahtapot donanımlı kapalı otopark çekicilerimizdir. İkincisi ise Maslak'taki lüks, spor ve elektrikli araç yoğunluğuna özel tasarlanmış sıfır dereceye yakın açı alan hidrolik kayar kasa platformlardır. Porsche, Ferrari, BMW M serisi ve Mercedes-AMG gibi araçların yere yakın karter ve karbonfiber difüzörleri, özel polimer rampa uzatmalarıyla milimetrik hassasiyetle korunur. Tekerlekler çiziksiz yumuşak dokuma güvenlik kuşaklarıyla bağlanarak araç şasisine hiçbir yük bindirilmez.",
    localAdvice: "Maslak Atatürk Oto Sanayi Sitesi'ndeki merkez üssümüz sayesinde, arıza bildiriminizden itibaren en geç 8 ila 10 dakika içinde yanınızdayız. Aracınız arızalandığında ilk olarak Maslak 1. Kısım ve 2. Kısım bünyesindeki 1500'den fazla özel servisten dilediğinize ya da Büyükdere Caddesi üzerindeki Borusan Oto, Doğuş Oto ve yetkili bayilere doğrudan teslimat sağlıyoruz. Maslak'ta yolda kaldığınızda aracınızı mümkünse sağ şeride veya plazaların cep girişlerine yanaştırıp dörtlü ikazlarınızı açmanız ve araç içinde beklemek yerine kaldırım güvenliğinde konum göndermeniz hayati önem taşır.",
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
    category: 'maslak-sariyer',
    categoryLabel: 'Sarıyer & Sahil',
    title: 'Sarıyer Oto Çekici 7/24 | 12 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Sarıyer Merkez, Çayırbaşı Tüneli, Maden, Tarabya ve Kireçburnu sahilinde 7/24 nöbetçi oto çekici ve kurtarıcı. 12 dakikada intikal: 0533 265 70 89.',
    keywords: 'sarıyer çekici, sarıyer oto çekici, sarıyer oto kurtarma, çayırbaşı çekici, maden çekici, tarabya çekici, kireçburnu çekici, sarıyer yol yardım',
    eta: '12 Dk',
    caseTitle: 'Çayırbaşı Tünel Çıkışında Hararet Yapan SUV Tahliyesi',
    caseDesc: 'Çayırbaşı Tüneli çıkışında hararet yükselterek stop eden SUV araca Hacıosman noktasındaki ekibimiz 11 dakikada ulaştı ve güvenle Maslak servisine ulaştırdı.',
    vehicleType: 'Dizel SUV',
    deliveryPoint: 'Maslak Oto Sanayi Özel Servis',
    leadText: 'Sarıyer Merkez, Çayırbaşı, Maden Mahallesi, Hacıosman Bayırı, Kireçburnu sahil hattı ve Rumelikavağı aksında 7/24 nöbetçi ekiplerimizle yanınızdayız. Hem sahil trafiğinde hem virajlı Sarıyer yollarında hidrolik kayar kasa kurtarıcılarımızla emniyetli taşıma sunuyoruz.',
    hotspots: 'Sarıyer Merkez, Çayırbaşı Tüneli, Maden Mahallesi, Hacıosman Bayırı, Kireçburnu Sahil, Rumelikavağı',
    trafficAnalysis: "Sarıyer ilçesi, İstanbul Boğazı'nın Karadeniz'e açılan kuzey kapısı olup hem virajlı sahil yolları hem de ormanlık tepelerle çevrili engebeli bir topoğrafyaya sahiptir. Sarıyer Merkez, Çayırbaşı Tüneli, Maden Mahallesi, Kireçburnu sahil aksı, Hacıosman Bayırı ve Rumelikavağı güzergahı bölgenin ana arterlerini oluşturur. Özellikle Hacıosman Bayırı'ndaki %12'ye varan dik eğim ve virajlar, araçların fren ve motor sistemlerini en üst seviyede zorlar. Hafta sonlarında Kilyos, Gümüşdere ve Rumelifeneri plajlarına giden tatilciler sebebiyle sahil yolu ile Çayırbaşı tünel girişinde kilometrelerce araç yoğunluğu yaşanır. Kış aylarında ise Karadeniz'den gelen sert rüzgarlar ve nem, sahil asfaltında gizli buzlanmaya yol açar.",
    scenarios: "Sarıyer bölgesinde en sık müdahale ettiğimiz vakaların başında Hacıosman Bayırı'nı tırmanırken motor harareti tavan yapan ve su kaynatan binek araçlar gelmektedir. Çayırbaşı Tüneli içinde gerçekleşen motor stop etmeleri ve lastik yarılmaları ise tünel güvenliği açısından acil tahliye gerektirir. Sarıyer Merkez ve Rumelikavağı'nın dar sokaklarında dik yokuşlarda geri kayarak duvara veya park halindeki araçlara temas eden araçlar, şarampol tehlikesi taşıyan viraj dışına kaymalar ve balıkçı lokantaları çevresinde deniz kenarında arıza yapan araçlar sıklıkla kurtarılmaktadır.",
    equipmentProtocol: "Sarıyer'in dik yokuşlu ve virajlı coğrafyası için filomuzda yüksek torklu, çift tamburlu ağır hizmet vinçlerine sahip çekiciler görev yapmaktadır. Viraj dışına kayan veya toprak zemine oturan araçlar, gövdeye zarar vermeyen yumuşak sapanlar ve çelik yönlendirme makaralarıyla güvenli açıyla yola çekilir. Sahil boyundaki dar yollar için ise dönüş yarıçapı kısa, hidrolik hızlandırılmış kayar platformlar kullanılarak sahil trafiği kilitlenmeden 4 dakika içinde araç kasaya yüklenir.",
    localAdvice: "Sarıyer genelinde nöbetçi çekici ekiplerimiz Hacıosman çıkışı ve Çayırbaşı tünel ağzında daimi devriye gezmektedir. Bu stratejik konuşlanma sayesinde Sarıyer Merkez'e 10-12 dakikada, Kireçburnu ve Maden'e 8-10 dakikada ulaşıyoruz. Aracınızı Maslak Oto Sanayi'deki uzman servislere veya Sarıyer Çayırbaşı'ndaki yerel tamirhanelere kaskolu olarak ulaştırıyoruz. Hacıosman inişinde fren şişmesi yaşarsanız kesinlikle vitesi boşa almayıp motor kompresyonuyla sağ şeride yanaşarak acil çekici çağırınız.",
    faqs: [
      { q: 'Sarıyer sahil yolunda çekici ne kadar sürede ulaşır?', a: 'Sahil hattındaki nöbetçi filomuzla ortalama 10-12 dakika içinde aracınızın yanındayız.' },
      { q: 'Hacıosman bayırında kalan araçlara müdahale ediyor musunuz?', a: 'Evet, Hacıosman ve Maslak bağlantısında hazır bekleyen kurtarıcılarımız dakikalar içinde intikal eder.' },
      { q: 'Sarıyer’den Maslak Sanayi’ye çekici ücreti ne kadardır?', a: 'Mesafe ve araç cinsine göre şeffaf sabit fiyat verilmektedir. 0533 265 70 89 numaramızdan anında öğrenebilirsiniz.' },
      { q: 'Kaza durumunda vinçli kurtarma hizmetiniz var mı?', a: 'Evet, şarampol veya eğimli arazide kalan araçlar için güçlü vinçli kurtarma araçlarımız mevcuttur.' },
      { q: 'Gece nöbetçi çekiciniz var mı?', a: 'Evet, haftanın 7 günü 24 saat kesintisiz nöbetçi ekiplerimiz görev başındadır.' }
    ]
  },
  {
    slug: 'ayazaga-oto-cekici',
    name: 'Ayazağa',
    category: 'maslak-sariyer',
    categoryLabel: 'Ayazağa & Vadi',
    title: 'Ayazağa Oto Çekici 7/24 | 10 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Ayazağa Merkez, Vadi İstanbul, Cendere Vadisi, İTÜ Ayazağa Yerleşkesi ve Maslak 1453 çevresinde 7/24 oto çekici. 10 dk varış: 0533 265 70 89.',
    keywords: 'ayazağa çekici, ayazağa oto çekici, vadi istanbul çekici, maslak 1453 çekici, ayazağa oto kurtarma, cendere vadisi çekici',
    eta: '10 Dk',
    caseTitle: 'Vadi İstanbul Önünde Kilitlenen Otomatik Vites Araç',
    caseDesc: 'Cendere Caddesi Vadi İstanbul kavşağında vites kutusu kilitlenen binek araca 7 dakikada ulaşılarak tekerlek kaydırma aparatıyla hasarsız yüklendi.',
    vehicleType: 'Otomatik Sedan',
    deliveryPoint: 'Maslak Atatürk Oto Sanayi',
    leadText: 'Ayazağa Merkez Mahallesi, Cendere Vadisi, Vadi İstanbul AVM ve rezidansları, Maslak 1453, İTÜ Ayazağa Kampüsü ve Beykent Üniversitesi çevresinde 7/24 nöbetçi çekici araçlarımızla sadece 10 dakikada yanınızdayız.',
    hotspots: 'Vadi İstanbul, Maslak 1453, Cendere Caddesi, Ayazağa Köy İçi, Hadım Koruyolu, İTÜ Ayazağa Metro Çıkışı',
    trafficAnalysis: "Ayazağa ve Cendere Vadisi, son yıllarda Vadi İstanbul, Maslak 1453 ve dev rezidans projeleriyle İstanbul'un en hızlı büyüyen modern yaşam merkezlerinden biri haline gelmiştir. Bölgenin can damarı olan Cendere Caddesi, Hadım Koruyolu Caddesi ve Ayazağa Köy İçi aksı, hem Maslak plazalarına hem de TEM Otoyolu'na doğrudan bağlantı sağlar. Cendere Vadisi boyunca uzanan geniş bulvarlar inşaat kamyonları, mikserler ve yoğun iş trafiği ile doludur. Dere yatağı topoğrafyası sebebiyle kış aylarında yoğun sis ve zeminde aşırı nem oluşur. Maslak 1453'ün kule girişleri ve Vadi İstanbul AVM dönel kavşağı mesai bitimlerinde ciddi sıkışıklık noktalarıdır.",
    scenarios: "Ayazağa bölgesinde karşılaştığımız başlıca arızalar, Maslak 1453 ve Vadi İstanbul rezidanslarının katlı yer altı otoparklarında anahtar tanıtma hatası veren veya bataryası kilitlenen yeni nesil elektrikli araçlardır. Cendere Caddesi üzerinde inşaat sahalarından dökülen demir ve molozlar sebebiyle çok sayıda lastik yarılması vakası yaşanmaktadır. Ayrıca Beykent Üniversitesi Ayazağa yerleşkesi çevresindeki dik yokuşlarda genç sürücü araçlarında yaşanan baskı-balata sıyırmaları ve dönel kavşaklarda dikkatsizlik kaynaklı ön takım hasarlı kazalar sık görülür.",
    equipmentProtocol: "Ayazağa bölgesine tahsis ettiğimiz araçlar, lüks site ve rezidans nizamiyelerine uyumlu, sessiz çalışan modern hidrolik sistemlerle donatılmıştır. Vadi İstanbul'un kapalı otopark girişlerine özel düşük kabinli ahtapot kurtarıcılar sevk edilirken, Cendere Caddesi'ndeki ağır şantiye ve ticari araçlar için 5 tona kadar taşıma kapasiteli geniş tablalı kayar kasalar devrededir. Tekerlekleri dönmeyen veya kilitlenen 4x4 SUV araçlar için özel taşıyıcı arabacıklar (dolly) kullanılır.",
    localAdvice: "Ayazağa Cendere aksındaki nöbet noktamız sayesinde Maslak 1453, Vadi İstanbul ve Ayazağa merkeze ortalama 8 ila 10 dakika içinde intikal ediyoruz. Alınan arızalı araçlar Maslak Atatürk Oto Sanayi'ye sadece 3 kilometre mesafede olduğundan en hızlı tamirhane teslimatı bu bölgede gerçekleşmektedir. Rezidans içinde yolda kalırsanız güvenlik birimine çekici plakasını bildirmeniz giriş sürecini hızlandıracaktır.",
    faqs: [
      { q: 'Ayazağa’ya çekici ne kadar sürede gelir?', a: 'Maslak Oto Sanayi üssümüz Ayazağa’ya bitişik olduğu için ortalama 7-10 dakika içinde yanınızdayız.' },
      { q: 'Maslak 1453 ve Vadi İstanbul kapalı otoparklarına çekici girer mi?', a: 'Evet, kapalı otopark yüksekliğine uygun kompakt kurtarıcılarımızla yer altı katlarından da araç tahliye edebiliyoruz.' },
      { q: 'Ayazağa’dan Maslak Sanayi’ye çekici fiyatı ne kadar?', a: 'Çok yakın komşu bölge olduğundan en ekonomik taban fiyat tarifemiz uygulanır.' },
      { q: 'Akü takviyesi ve lastik patlaması için yardım var mı?', a: 'Evet, mobil akü takviye ve yerinde lastik değişim ekiplerimiz de 7/24 aktiftir.' },
      { q: 'Ödeme kredi kartıyla yapılabilir mi?', a: 'Evet, araç başında mobil POS ile tüm kredi kartları geçerlidir.' }
    ]
  },
  {
    slug: 'seyrantepe-oto-cekici',
    name: 'Seyrantepe',
    category: 'maslak-sariyer',
    categoryLabel: 'Seyrantepe & Stadyum',
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
    trafficAnalysis: "Seyrantepe, RAMS Park (Ali Sami Yen Spor Kompleksi), Huzur Mahallesi, Cendere Köprüsü ve Seyrantepe Oto Sanayi Sitesi'ni kapsayan, aynı zamanda TEM Otoyolu'nun en kritik katılım viyadüklerine komşu stratejik bir bölgedir. Bölgenin ana arteri İbrahim Karaoğlanoğlu Caddesi ile TEM yan yollarıdır. Seyrantepe'nin en belirgin trafik karakteristiği, Galatasaray'ın ev sahibi olduğu maç günleri ve dev konser organizasyonlarında yaşanır. Etkinlik günlerinde stadyum çevresinde 50 binden fazla taraftar ve binlerce araç toplanır; bağlantı yolları ve katlı otoparklar tamamen kilitlenir. Normal günlerde ise sanayi girişleri ve metro istasyonu çevresinde dar sokak trafiği hakimdir.",
    scenarios: "Seyrantepe'de özellikle maç günleri stat çevresinde saatlerce süren rölanti bekleyişinde aküsü tükenen, fan açmayıp hararet yapan veya kalkışta debriyajı yanan yüzlerce araçla karşılaşmaktayız. İkinci büyük senaryo, TEM Seyrantepe katılım viyadüğünde emniyet şeridinde kalan ve zincirleme kaza tehlikesi oluşturan yüksek hızlı arızalardır. Ayrıca Seyrantepe Oto Sanayi çevresindeki dik yokuşlarda el freni kopması ve iki araç arasına sıkışarak çıkamayan kilitli araçlar için kurtarma çağrıları gelmektedir.",
    equipmentProtocol: "Seyrantepe operasyonlarında maç ve konser günleri için motosikletli hızlı keşif ekibi ile koordineli çalışan acil oto çekicilerimiz görev alır. TEM Otoyolu kenarındaki kurtarmalar için arkadan gelen trafiği 1 kilometre önceden uyaran yüksek parlaklıklı LED otoyol yönlendirme panoları ve çakar lambalar kullanılır. Kilitli araçlar için tekerleğe temas etmeden jant kollarından askıya alan hidrolik vinçli kurtarma sistemleri sahaya sürülür.",
    localAdvice: "Seyrantepe Huzur Mahallesi ve stadyum bağlantısında hazır bekleyen filomuzla arıza konumunuza ortalama 8-10 dakikada ulaşıyoruz. RAMS Park maç çıkışlarında yolda kaldıysanız polis barikatları ve taraftar akışı sebebiyle çekicimize konumunuzu stadyum kapı numarası veya en yakın metro çıkışı olarak iletmeniz operasyonu büyük ölçüde kolaylaştıracaktır. Aracınız Seyrantepe veya Maslak Oto Sanayi'ye dakikalar içinde nakledilir.",
    faqs: [
      { q: 'Seyrantepe’ye çekici kaç dakikada gelir?', a: 'Seyrantepe ana operasyon üssümüze komşu olduğundan ortalama 7-10 dakika içinde yanınızdayız.' },
      { q: 'Maç günleri stadyum çevresine çekici girebiliyor mu?', a: 'Evet, emniyet geçiş izinleri ve alternatif güzergahlarla maç günleri de kesintisiz hizmet veriyoruz.' },
      { q: 'Maslak Oto Sanayi’ye çekici ücreti ne kadardır?', a: 'Çok yakın mesafe olduğu için en uygun sabit fiyat tarifemiz geçerlidir.' },
      { q: 'Yerinde akü takviyesi yapıyor musunuz?', a: 'Evet, 12V/24V taşınabilir booster ile anında yerinde çalıştırma sağlıyoruz.' },
      { q: 'Ödeme kartla olur mu?', a: 'Evet, mobil POS ile kredi kartı veya FAST kabul edilmektedir.' }
    ]
  },
  {
    slug: 'levent-oto-cekici',
    name: 'Levent & 4. Levent',
    category: 'besiktas-sisli',
    categoryLabel: 'Levent & Plazalar',
    title: 'Levent Oto Çekici 7/24 | 10 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Levent, 4. Levent, Büyükdere Caddesi, Kanyon, Sapphire ve Nispetiye aksında 7/24 nöbetçi oto çekici. 10 dakikada intikal: 0533 265 70 89.',
    keywords: 'levent çekici, 4 levent çekici, levent oto çekici, sapphire çekici, kanyon çekici, büyükdere caddesi levent çekici, levent yol yardım',
    eta: '10 Dk',
    caseTitle: 'Büyükdere Caddesi 4. Levent Metro Çıkışında Hararet',
    caseDesc: 'Büyükdere Caddesi Levent yönünde yoğun akşam trafiğinde hararet yükselten araca 8 dakikada ulaşılarak Maslak Borusan servisine güvenle taşındı.',
    vehicleType: 'Lüks Sedan',
    deliveryPoint: 'Maslak Yetkili Servis',
    leadText: 'Levent Merkez, 4. Levent, Büyükdere Caddesi plazalar aksı, Çeliktepe bağlantısı, Kanyon, Özdilek, Sapphire AVM çevresi ve Nispetiye girişinde 7/24 nöbetçi oto çekici filomuzla hizmet veriyoruz. Yoğun trafikte hızlı müdahale sağlıyoruz.',
    hotspots: 'Büyükdere Caddesi Levent, 4. Levent Metro, Sapphire AVM önü, Kanyon Kavşağı, Levent Çarşı, Nispetiye Girişi',
    trafficAnalysis: "Levent ve 4. Levent, İstanbul'un gökdelenler bölgesi olarak bilinen, Kanyon, Metrocity, ÖzdilekPark ve Sapphire gibi dev iş ve yaşam merkezlerinin bulunduğu en yoğun plazalar merkezidir. Bölge, Büyükdere Caddesi üzerinden Maslak'a, Nispetiye Caddesi üzerinden Etiler'e ve Çeliktepe tüneli üzerinden Kağıthane'ye bağlanır. Günün her saati son derece yoğun olan Büyükdere Caddesi trafiği, sabah Zincirlikuyu yönünde, akşam ise Maslak-Sarıyer yönünde durma noktasına gelir. Levent içindeki 1. Levent, Levent Konakları gibi villa sokakları ise dar, tek şeritli ve iki tarafı park edilmiş araçlarla doludur.",
    scenarios: "Levent bölgesinde en sık karşılaşılan kurtarma ihtiyacı, gökdelenlerin ve AVM'lerin 4 kat yerin altına inen spiral rampalı kapalı otoparklarında gerçekleşir. Özellikle lüks segment hibrit ve elektrikli otomobillerin yazılımsal el freni kilitlenmeleri ve akü deşarjları bu otoparklarda kalmaya yol açar. Diğer yandan Büyükdere Caddesi'nin Levent geçişinde meydana gelen ani zincirleme tampon temasları ve yoğun trafikte kavrama arızası yaşayan otomatik vitesli araçlar ana arteri tıkamadan acil çekilmeyi gerektirir.",
    equipmentProtocol: "Levent için özel olarak filomuzda tutulan 1.90m tavan maniasına uygun, kompakt kabinli ve alçak hidrolik tablalı kurtarıcılarımız AVM otoparklarına rahatlıkla giriş yapar. Mercedes S Serisi, BMW 7 Serisi ve Range Rover gibi uzun dingil mesafeli makam araçlarının güvenli taşınması için ekstra uzun hidrolik kayar kasa platformları ve jant çizilmesini engelleyen polipropilen korumalı sabitleme aparatları kullanılır.",
    localAdvice: "Levent Büyükdere Caddesi ve plazalar aksında konuşlu nöbetçi ekiplerimizle ortalama 8 ila 10 dakika içinde aracınızın yanındayız. Alınan araçlar talebiniz doğrultusunda Maslak Atatürk Oto Sanayi'deki özel servislere veya 4. Levent'teki Borusan, Gülsoy gibi yetkili servis noktalarına emtia sigortası kapsamında teslim edilir. Büyükdere üzerinde arızalanırsanız aracınızı varsa otobüs durak ceplerine veya emniyet alanına çekmeniz güvenliğiniz için elzemdir.",
    faqs: [
      { q: 'Levent Büyükdere Caddesi’nde arıza yaptım, çekici ne kadar sürede gelir?', a: 'Maslak’tan Büyükdere güzergahını kullanarak ortalama 8-10 dakika içinde yanınıza varıyoruz.' },
      { q: 'Plazaların kapalı otoparklarına girebiliyor musunuz?', a: 'Evet, düşük kabinli özel otopark çekicilerimizle -3 ve -4. katlardan güvenle araç çıkarıyoruz.' },
      { q: 'Lüks ve spor arabalar için sıfır eğimli rampa var mı?', a: 'Evet, hidrolik kayar kasa sistemimiz sayesinde yere yakın araçlar tampon sürtmeden yüklenir.' },
      { q: 'Fiyat önceden netleşir mi?', a: 'Evet, aradığınızda sabit ve şeffaf fiyat bilgisi verilir.' },
      { q: 'Kredi kartı ile ödeme yapabilir miyim?', a: 'Tüm çekicilerimizde mobil POS cihazı bulunmaktadır.' }
    ]
  },
  {
    slug: 'kagithane-oto-cekici',
    name: 'Kağıthane',
    category: 'kagithane-cendere',
    categoryLabel: 'Kağıthane & Cendere',
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
    trafficAnalysis: "Kağıthane, Cendere Vadisi boyunca uzanan yeni ofis blokları, Sadabad Parkı, Merkez Mahallesi, Seyrantepe yokuşları ve Çağlayan Adliyesi bağlantısı ile İstanbul'un en hareketli dönüşüm ilçelerinden biridir. Cendere Caddesi geniş bir arter olmasına rağmen sürekli devam eden konut ve ticaret inşaatları sebebiyle yoğun kamyon ve beton mikseri trafiğine maruz kalır. Kağıthane Merkez ve Talatpaşa, Gültepe gibi mahalleler ise son derece dik yokuşlara, dar sokaklara ve virajlı ada kesişimlerine sahiptir. Kışın dere yatağında yoğun nem ve gizli buzlanma, yazın ise yoğun toz ve asfalt kayganlığı görülür.",
    scenarios: "Kağıthane'de en çok karşılaştığımız arıza tiplerinin başında, Cendere Caddesi'ndeki şantiye artıklarından kaynaklanan derin lastik yarılmaları ve jant eğrilmeleri gelmektedir. İkinci sık senaryo, Gültepe ve Çeliktepe'nin %15'i aşan dik sokaklarında geri kayarak askıda kalan, debriyaj balatası yanan veya el freni teli kopan binek araçlardır. Ayrıca şiddetli yağışlarda Cendere dere yatağına yakın kotlarda su birikintisine girerek motoruna su çeken (hidrolik kilitlenme yaşayan) araçların vinçle tahliyesi sıkça yapılır.",
    equipmentProtocol: "Kağıthane'nin hem geniş Cendere bulvarına hem de dik, dar sokaklarına hizmet verebilmek için iki farklı araç tipi kullanıyoruz: Dik yokuşlarda kaymayı önleyen arka sabitleme ayaklarına ve güçlü çelik çeki tamburuna sahip tırmanıcı kurtarıcılar ile Cendere'deki ağır yükleri taşıyabilen 5 tonluk kayar kasalar. Su birikintisinde kalan araçlar için taban yüksekliği yüksek 4x4 kurtarma araçlarımız sahaya sürülür.",
    localAdvice: "Kağıthane Cendere nöbet noktamız sayesinde Merkez Mahallesi, Seyrantepe köprüsü ve Sadabad çevresine 10-12 dakikada ulaşıyoruz. Aracınızı güvenle Maslak Atatürk Oto Sanayi'ye veya Kağıthane Sanayi Sitesi'ndeki yetkili/özel ustalara ulaştırıyoruz. Dik bir yokuşta aracınız stop ederse tekerleklerinizi kaldırım taşı yönüne çevirip el frenini sonuna kadar çekerek araçtan güvenle inip ekibimizi arayınız.",
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
    category: 'besiktas-sisli',
    categoryLabel: 'Beşiktaş & Barbaros',
    title: 'Beşiktaş Oto Çekici 7/24 | 12 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Beşiktaş Merkez, Levent, Barbaros Bulvarı, Balmumcu, Ortaköy ve Gayrettepe’de 7/24 kaskolu oto çekici. 12 dakikada en yakın kurtarıcı: 0533 265 70 89.',
    keywords: 'beşiktaş çekici, beşiktaş oto çekici, barbaros bulvarı çekici, gayrettepe çekici, balmumcu çekici, ortaköy çekici, beşiktaş yol yardım',
    eta: '12 Dk',
    caseTitle: 'Barbaros Bulvarı Yokuşunda Debriyaj Biten Araç Kurtarması',
    caseDesc: 'Akşam saatlerinde Barbaros Bulvarı yokuşunda debriyaj balatası yanan araca 9 dakikada ulaşılarak Maslak servisine nakledildi.',
    vehicleType: 'Hatchback Otomobil',
    deliveryPoint: 'Maslak Oto Sanayi',
    leadText: 'Beşiktaş Meydan, Barbaros Bulvarı, Balmumcu, Gayrettepe, Yıldız, Ortaköy ve Çırağan hattında 7/24 nöbetçi kurtarıcı filomuzla hizmetinizdeyiz. Büyükdere Caddesi aksından hızla bağlanarak en kısa sürede adresinize varıyoruz.',
    hotspots: 'Barbaros Bulvarı, Beşiktaş Meydan, Gayrettepe, Balmumcu, Ortaköy Sahili, Yıldız Yokuşu',
    trafficAnalysis: "Beşiktaş, Avrupa yakasının en köklü ulaşım ve transfer merkezi olup Barbaros Bulvarı, Balmumcu Kavşağı, Gayrettepe bağlantısı, Yıldız Yokuşu, Akaretler, Dolmabahçe ve Çırağan sahil aksını kapsar. Bölgenin en belirgin ulaşım arteri olan Barbaros Bulvarı, Boğaz Köprüsü katılımı ile Beşiktaş meydanını birbirine bağlayan dik ve sürekli akışkan bir yokuştur. Barbaros Bulvarı'nda sabah saatlerinde sahil yönüne, akşam saatlerinde ise köprü yönüne yoğun trafik tıkanıklığı yaşanır. Akaretler, Vişnezade ve Ihlamurdere gibi iç mahalleler ise tek şeritli, Arnavut kaldırımlı ve dik yokuşlu tarihi bir dokuya sahiptir.",
    scenarios: "Beşiktaş genelinde en sık karşılaşılan problem, Barbaros Bulvarı inişinde sürekli fren kullanımına bağlı olarak fren hidroliğinin kaynaması, disklerin şişmesi ve fren tutmama vakalarıdır. İkinci yaygın senaryo, Dolmabahçe ve Çırağan sahil hattında arıza yaparak duran ve yüzlerce otobüs ile turizm aracının yolunu tıkayan VIP minibüs arızalarıdır. Ayrıca Akaretler ve Şair Nedim caddelerindeki dar virajlarda iki araç arasına sıkışan veya dik yokuşta debriyajı yanan binek otomobiller sıkça kurtarılmaktadır.",
    equipmentProtocol: "Barbaros Bulvarı ve köprü katılımlarındaki yüksek eğimli alanlarda aracı geriye kaçırmadan platforma alabilen hassas uzaktan kumandalı vinç tertibatı kullanıyoruz. Akaretler ve Ihlamurdere gibi dar ve çift taraflı park edilmiş sokaklar için ise arka ahtapot donanımlı manevra yeteneği yüksek kurtarıcılarımız devreye girer. Lüks araç yoğunluğuna karşı tüm araçlarımızda tekerlek jant koruyucu yumuşak askı sistemleri bulunmaktadır.",
    localAdvice: "Balmumcu ve Barbaros aksında nöbetçi bekleyen filomuzla Beşiktaş Meydanı, Balmumcu ve Gayrettepe'ye ortalama 10 ila 12 dakikada intikal ediyoruz. Arızalanan aracınızı Maslak Atatürk Oto Sanayi'ye veya Beşiktaş çevresindeki yetkili servis noktalarına %100 kasko güvencesiyle sevk ediyoruz. Barbaros Bulvarı üzerinde durmak zorunda kalırsanız reflektörünüzü en az 100 metre geriye koymayı ihmal etmeyiniz.",
    faqs: [
      { q: 'Beşiktaş’a Maslak’tan çekici ne kadar sürede gelir?', a: 'Büyükdere Caddesi güzergahından ortalama 10 ila 12 dakika içinde konuma varıyoruz.' },
      { q: 'Barbaros Bulvarı dik yokuşunda kalan aracı çekebilir misiniz?', a: 'Evet, güçlü çelik halat ve vinç destekli hidrolik platformumuzla dik yokuşlarda güvenli yükleme yapıyoruz.' },
      { q: 'Taşıma esnasında araba sigortalı mıdır?', a: 'Evet, tüm transferlerimiz emtia taşıma kaskosu ile tam güvence altındadır.' },
      { q: 'Ortaköy sahil yoluna çekici gönderiyor musunuz?', a: 'Evet, Ortaköy, Kuruçeşme ve Bebek sahil şeridine 7/24 nöbetçi araç yönlendiriyoruz.' },
      { q: 'Fiyatlar sabit mi?', a: 'Evet, telefonda konuştuğumuz sabit ücret haricinde ek maliyet çıkmaz.' }
    ]
  },
  {
    slug: 'sisli-oto-cekici',
    name: 'Şişli & Mecidiyeköy',
    category: 'besiktas-sisli',
    categoryLabel: 'Şişli & Mecidiyeköy',
    title: 'Şişli Oto Çekici 7/24 | 12 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Şişli Merkez, Mecidiyeköy Viyadüğü, Halaskargazi, Bomonti, Fulya ve Esentepe’de 7/24 nöbetçi oto kurtarma. 12 dakikada en yakın çekici: 0533 265 70 89.',
    keywords: 'şişli çekici, mecidiyeköy çekici, şişli oto çekici, fulya çekici, bomonti çekici, esentepe çekici, halaskargazi çekici',
    eta: '12 Dk',
    caseTitle: 'Mecidiyeköy Viyadük Girişinde Zincirleme Hasar Tahliyesi',
    caseDesc: 'Mecidiyeköy E-5 katılımında hasar alan otomobil, trafiğin kilitlenmemesi için 10 dakikada hidrolik kayar kasaya alınarak emniyetli alana çekildi.',
    vehicleType: 'Crossover SUV',
    deliveryPoint: 'Maslak Oto Sanayi Kaporta Servisi',
    leadText: 'Şişli Merkez, Mecidiyeköy Meydan ve Viyadüğü, Halaskargazi Caddesi, Bomonti, Fulya Deresi, Teşvikiye ve Esentepe bölgesinde 7/24 nöbetçi çekici araçlarımızla hizmet veriyoruz. Yoğun arterlerde süratli yükleme ile zaman kaybettirmeden destek sunuyoruz.',
    hotspots: 'Mecidiyeköy Viyadüğü, Büyükdere Caddesi Şişli aksı, Halaskargazi, Bomonti, Fulya, Esentepe',
    trafficAnalysis: "Şişli, Halaskargazi Caddesi, Büyükdere Caddesi Şişli girişi, Abide-i Hürriyet Caddesi, Cevahir AVM önü, Bomonti tünel bağlantısı, Fulya ve Mecidiyeköy viyadüğü aksını içine alan İstanbul'un en yoğun ticaret ve konut merkezidir. İlçede günün 20 saati kesintisiz bir araç ve yaya trafiği bulunur. Özellikle Mecidiyeköy Meydanı, metrobüs ve metro çıkışlarının kesişim noktası olup durma halinde devasa kilitlenmelere gebedir. Fulya Deresi bölgesine inen yokuşlar (%16 eğim) ve Bomonti tünel girişleri bölgenin en kritik topoğrafik geçişleridir.",
    scenarios: "Şişli lokasyonunda ekiplerimizin en sık müdahale ettiği olaylar, Mecidiyeköy viyadüğü üzerinde ve Cevahir kavşağında meydana gelen maddi hasarlı zincirleme kazalardır. Diğer yaygın arıza, Fulya dik yokuşlarında dur-kalk yaparken şanzımanı kitleyen veya motor harareti yapan binek otomobillerdir. Ayrıca Bomonti ve Nişantaşı otopark girişlerinde karterini vuran basık spor araçlar ile Bomonti-Dolmabahçe tüneli içinde stop eden araçların acil tahliyesi sıkça gerçekleştirilir.",
    equipmentProtocol: "Şişli'nin dar sokaklarında ve yoğun Mecidiyeköy trafiğinde hızlı manevra yapabilen kompakt yapılı, düşük emisyonlu ve süratli hidrolik açılır kayar kasalar kullanmaktayız. Bomonti tüneli kurtarmaları için yüksek görünürlüklü tepe ikaz sistemleri ve sesli anons donanımı mevcuttur. Fulya yokuşlarında askıda kalan araçları kaldırmak için hava yastıklı (air-jack) gövde altı kaldırma kitleri hazır bulundurulur.",
    localAdvice: "Mecidiyeköy ve Şişli merkezinde konuşlu nöbetçi ekiplerimizle çağrınızdan itibaren 10-12 dakika içinde konumunuza geliyoruz. Aracınızı Maslak Atatürk Oto Sanayi Sitesi'ndeki uzman ustalara veya Şişli/Fulya civarındaki yetkili bayilere güvenle teslim ediyoruz. Yoğun trafikte arızalandığınızda panik yapmadan dörtlülerinizi yakın ve aracı emniyetli şeride almaya çalışınız.",
    faqs: [
      { q: 'Mecidiyeköy viyadüğünde arıza yaparsam ne kadar sürede gelirsiniz?', a: 'Büyükdere aksından hızlı intikal ile ortalama 10-12 dakikada yanınızdayız.' },
      { q: 'Fulya’nın dik yokuşlarında çekici çalışabiliyor mu?', a: 'Evet, Fulya ve Bomonti’nin dik yokuşlarına uygun güçlü vinç ve çekicilerimiz vardır.' },
      { q: 'Kaza tespit tutanağı için bekliyor musunuz?', a: 'Evet, polis veya sürücüler tutanağı tamamlayana kadar emniyet desteği sağlıyoruz.' },
      { q: 'Şişli’den Maslak Sanayi’ye çekici taşır mı?', a: 'Evet, Maslak Oto Sanayi ana uzmanlık ve servis bölgemizdir.' },
      { q: 'Kredi kartı geçiyor mu?', a: 'Tüm araçlarımızda mobil POS mevcuttur.' }
    ]
  },
  {
    slug: 'istinye-oto-cekici',
    name: 'İstinye',
    category: 'maslak-sariyer',
    categoryLabel: 'İstinye & İstinyePark',
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
    trafficAnalysis: "İstinye, İstinyePark Alışveriş Merkezi, Katar Caddesi, İstinye Bayırı, İstinye Koyu ve Marinası ile lüks rezidans sitelerini kapsayan Sarıyer'in en prestijli semtlerinden biridir. Bölge, Maslak plazalar hattını Boğaz sahiline bağlayan ana vadi konumundadır. İstinye Bayırı'nın virajlı inişi ve Katar Caddesi'nin geniş bulvar yapısı hafta içi iş trafiği, hafta sonu ise AVM ve sahil ziyaretçileri sebebiyle yoğunluk yaşar. İstinye Koyu çevresindeki dar sahil yolu ve balıkçı barınakları bölgesi ise sahil trafiğinin yavaş aktığı noktalardır.",
    scenarios: "İstinye'de filomuzun en sık karşılaştığı durumlar, İstinyePark AVM'nin açık ve kapalı otoparklarında, vale teslim noktalarında elektronik arıza yaşayan lüks SUV ve süper spor otomobillerdir. Ferrari, Lamborghini, Bentley, Porsche gibi araçlarda akü zayıflaması sonucu el freni bırakmama durumları sık yaşanır. Ayrıca İstinye Bayırı'nın dik virajlarında yağmurlu günlerde kontrolden çıkarak kaldırıma vuran ve rot/aks kıran araçlar ile marina bölgesinde tekne römorku çekerken şanzıman zorlayan 4x4 araçlar çekilmektedir.",
    equipmentProtocol: "İstinye bölgesine özel olarak süper spor ve basık otomobiller için yere sıfır dereceyle inen ilave alüminyum rampa uzatmalı kayar kasalarımız sevk edilir. Karbonfiber tampon, basık marşpiyel ve jantların çizilmesini önlemek amacıyla özel tekstil tekerlek sarma kemerleri ve hava süspansiyonlu çekici platformları kullanılır. İstinyePark kapalı otoparkı için düşük kabinli ahtapot çekicimiz devrededir.",
    localAdvice: "İstinye Katar Caddesi ve Bayır mevkisinde 7/24 nöbet tutan ekibimizle İstinye'nin her noktasına ortalama 8 ila 10 dakika içinde varış sağlıyoruz. Lüks aracınız Maslak Atatürk Oto Sanayi'deki uzman lüks araç servislerine (Borusan, Doğuş, Fer-Mas vb.) tam emtia sigortasıyla teslim edilir. Süper spor aracınız çalışmıyorsa vites kilit açma butonunu zorlamadan profesyonel ekibimizin gelmesini bekleyiniz.",
    faqs: [
      { q: 'İstinyePark çevresine çekici ne kadar sürede ulaşır?', a: 'Maslak üssümüzden sadece 7-10 dakika içinde İstinyePark ve çevresine varıyoruz.' },
      { q: 'İstinye Koyu ve sahil yoluna çekici geliyor mu?', a: 'Evet, İstinye sahil şeridinde 7/24 nöbetçi çekicimiz mevcuttur.' },
      { q: 'Aracım taşınırken kaskolu mu?', a: 'Evet, tüm araçlar %100 nakliyat ve emtia kaskosu ile taşınır.' },
      { q: 'Akü takviyesi için çekici çağırmak şart mı?', a: 'Hayır, mobil akü takviye ekiplerimiz yerinde çalıştırma desteği sağlar.' },
      { q: 'Ödeme nasıl yapılıyor?', a: 'Nakit, kredi kartı veya FAST ile güvenle ödeyebilirsiniz.' }
    ]
  },
  {
    slug: 'tarabya-oto-cekici',
    name: 'Tarabya',
    category: 'maslak-sariyer',
    categoryLabel: 'Tarabya & Hacıosman',
    title: 'Tarabya Oto Çekici 7/24 | 12 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Tarabya Koyu, Hacıosman Bayırı, Tarabya Sahili, Kalender ve Ferahevler mevkisinde 7/24 kaskolu oto çekici. 12 dakikada intikal: 0533 265 70 89.',
    keywords: 'tarabya çekici, tarabya oto çekici, hacıosman çekici, ferahevler çekici, tarabya koyu çekici, tarabya sahil yol yardım',
    eta: '12 Dk',
    caseTitle: 'Hacıosman İnişinde Fren Boşalması ve Emniyetli Tahliye',
    caseDesc: 'Hacıosman inişi Tarabya kavşağında fren hidrolik kaçağı yaşayan araca 9 dakikada ulaşılarak vinçli kayar kasaya alındı ve Maslak servisine çekildi.',
    vehicleType: 'C-Segment Hatchback',
    deliveryPoint: 'Maslak Atatürk Oto Sanayi',
    leadText: 'Tarabya Koyu, Hacıosman Bayırı, Haydar Aliyev Caddesi, Ferahevler Mahallesi ve Şalgan Tekne barınağı çevresinde 7/24 acil çekici ve yol yardım hizmeti veriyoruz. Dik Hacıosman inişlerinde güvenli yükleme donanımına sahibiz.',
    hotspots: 'Tarabya Sahil Yolu, Hacıosman Bayırı, Ferahevler, Tarabya Koyu, Vilayetler Evi Çevresi',
    trafficAnalysis: "Tarabya, Tarabya Sahil Yolu, Haydar Aliyev Caddesi, Hacıosman'dan sahile inen dik Tarabya Bayırı, Şalvarcı Yokuşu, Vilayetler Evi mevkii ve Kalender Orduevi sınırlarını içine alır. Boğaz'ın en güzel koylarından biri olan Tarabya, yüksek kot farkına sahip tepelerden sahil şeridine aniden inen dik yokuşlarıyla bilinir. Tarabya Bayırı, Hacıosman metro ve Maslak bağlantısını sağladığı için virajlı ve yüksek akışlı bir arterdir. Sahil şeridi ise hafta sonları balık lokantaları ve Boğaz gezintisi yapan araçlarla dolarak tek şeride düşer. Kış aylarında deniz tuzu ve sert poyraz rüzgarı asfalt üzerinde kaygan bir film tabakası oluşturur.",
    scenarios: "Tarabya'da en sık müdahale edilen olaylar, dik Tarabya Bayırı inişinde virajı alamayarak yol kenarındaki refüje veya ağaçlara çarpan araçlardır. İkinci sık vaka, sahil yolunda dar alanda manevra yapmaya çalışırken deniz tarafındaki kaldırım taşlarına takılıp alt karterini patlatan veya tekeri askıda kalan araçlardır. Ayrıca lüks yalı sitelerinin dik garaj çıkışlarında şanzıman kilitleyen veya kışın deniz nemi sebebiyle marş motoru oksitlenip basmayan araçlar sıkça kurtarılmaktadır.",
    equipmentProtocol: "Tarabya Bayırı'nın dik virajlarında güvenli tahliye yapabilmek amacıyla yüksek çekme kapasiteli hidrolik vinçler, takozlama ekipmanları ve kaymayı önleyici zemin kilitleri kullanılır. Sahil hattındaki dar yollarda trafiği tıkamamak için hızlı hareket eden kızaklı kayar kasa sistemleri tercih edilir. Tüm araçlarımızda kaza yeri aydınlatması için 360 derece dönebilen LED projektörler bulunur.",
    localAdvice: "Hacıosman ve Tarabya sahil hattında hazır bekleyen nöbetçi çekicilerimizle Tarabya Koyu, Vilayetler Evi ve Tarabya Bayırı'na ortalama 8-10 dakika içinde ulaşıyoruz. Aracınız Maslak Atatürk Oto Sanayi Sitesi'ndeki güvenilir ustalara veya Sarıyer yetkili servislerine kaskolu olarak sevk edilir. Tarabya Bayırı'nda arızalanırsanız aracınızı kesinlikle viraj içinde bırakmayıp düzlüğe almaya çalışınız.",
    faqs: [
      { q: 'Tarabya sahile çekici ne kadar sürede ulaşır?', a: 'Hacıosman ve Maslak çıkışlı araçlarımızla ortalama 10-12 dakikada yanınızdayız.' },
      { q: 'Hacıosman yokuşunda kalan aracı çekebilir misiniz?', a: 'Evet, güçlü çelik halat ve hidrolik frenleme sistemi ile dik rampalarda güvenle çalışıyoruz.' },
      { q: 'Tarabya’dan Maslak Sanayi’ye çekici fiyatı nedir?', a: 'Mesafe yakın olduğundan uygun sabit fiyat garantisi sunulur; telefonda teyit edilir.' },
      { q: 'Gece açık mısınız?', a: 'Evet, 7 gün 24 saat nöbetçi filomuz sahadadır.' },
      { q: 'Kart geçerli mi?', a: 'Mobil POS ile kredi kartı veya FAST kabul edilmektedir.' }
    ]
  },
  {
    slug: 'etiler-oto-cekici',
    name: 'Etiler',
    category: 'besiktas-sisli',
    categoryLabel: 'Etiler & Akatlar',
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
    trafficAnalysis: "Etiler, Nispetiye Caddesi, Tepecik Yolu, Akatlar Mahallesi, Mayadrom çevresi, Bebek Dağyolu inişi ve Le Meridien kavşağını içine alan Beşiktaş'ın lüks yaşam ve gastronomi merkezidir. Nispetiye Caddesi boyunca uzanan popüler kafe ve restoranlar, bölgede yoğun bir vale ve lüks araç sirkülasyonu yaratır. Akatlar'ın iç kısımları nezih sitelerden oluşurken, Bebek Dağyolu ve Uçaksavar inişi Boğaz sahiline bağlanan son derece dik ve virajlı bir eğime sahiptir. Mesai çıkış saatlerinde Akmerkez çevresi ve Nispetiye Caddesi çift yönlü yoğunluğa sahne olur.",
    scenarios: "Etiler bölgesinde en sık karşılaştığımız arıza profili, son model lüks SUV ve elektrikli araçların havalı süspansiyon (airmatic) arızası vererek aracın tamamen yere oturmasıdır. Yere sıfırlanan bu araçlar standart çekicilerle çekilemez. İkinci yaygın olay, Nispetiye Caddesi üzerindeki yoğun dur-kalk ve vale teslimlerinde yaşanan elektronik park freni takılmaları ve akü tükenmeleridir. Ayrıca Bebek Dağyolu'nun dik virajlarında fren balatası aşırı ısınan araçların kurtarılması sıkça yapılır.",
    equipmentProtocol: "Etiler bölgesinde görev yapan filomuz, havalı süspansiyonu inmiş ve tekerlekleri dönmeyen araçlar için özel hava yastıklı kriko tertibatı ve tekerlek altı kaydırma makaralarıyla (dolly) donatılmıştır. Sıfır açılı hidrolik platformlarımız, Bentley, Porsche, Range Rover ve BMW araçlarının gövdesine temas etmeden güvenle yükleme yapar. Lüks segment araçlar için tam poliçe kapsamlı yüksek teminatlı emtia sigortası uygulanır.",
    localAdvice: "Nispetiye Caddesi ve Akatlar bölgesinde devriye gezen ekibimizle Etiler'in tüm noktalarına 8 ila 10 dakika içinde varış sağlıyoruz. Aracınızı Maslak Atatürk Oto Sanayi'deki lüks araç özel servislerine veya Maslak/Levent yetkili acentelerine doğrudan teslim ediyoruz. Aracınızın airmatic süspansiyonu indiyse aracı çalıştırmaya zorlamadan uzman ekibimizin gelmesini bekleyiniz.",
    faqs: [
      { q: 'Etiler’e Maslak’tan çekici ne kadar sürede ulaşır?', a: 'Büyükdere Caddesi ve Levent üzerinden ortalama 10 dakika içinde yanınızdayız.' },
      { q: 'Lüks ve spor arabalar için uygun araç var mı?', a: 'Evet, basık spor arabalar için sıfır açılı rampa ve teker kilit aparatlarımız bulunmaktadır.' },
      { q: 'Akatlar ve Mayadrom bölgesine servisiniz var mı?', a: 'Evet, Etiler ve Akatlar’ın tüm cadde ve sitelerine 7/24 hizmet veriyoruz.' },
      { q: 'Araç taşıma esnasında sigortalı mı?', a: 'Evet, %100 emtia taşıma kaskosu ile tam güvence altındasınız.' },
      { q: 'Ödeme kredi kartıyla yapılabilir mi?', a: 'Tüm çekicilerimizde mobil POS cihazı mevcuttur.' }
    ]
  },
  {
    slug: 'bebek-oto-cekici',
    name: 'Bebek',
    category: 'bogaz-sahil',
    categoryLabel: 'Bebek & Boğaz',
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
    trafficAnalysis: "Bebek, İstanbul Boğazı'nın en ikonik semtlerinden biri olup Cevdet Paşa Caddesi, Bebek Parkı sahil şeridi, Küçük Bebek Caddesi, İnşirah Yokuşu ve Bebek Dağyolu bağlantısını kapsar. Bebek'in en belirgin özelliği, sahil yolunun (Cevdet Paşa Caddesi) son derece dar, tek gidiş-tek geliş ve yoğun yaya trafiğiyle çevrili olmasıdır. Küçük Bebek ve İnşirah yokuşları ise %18'e varan aşırı dik eğimleri, tarihi dar sokakları ve keskin virajlarıyla sürüş açısından oldukça zorludur. Hafta sonu Bebek sahilinde arıza yapan tek bir araç, Beşiktaş'tan Sarıyer'e kadar tüm Boğaz hattını kilitleyebilir.",
    scenarios: "Bebek sahil yolunda yaşanan en kritik senaryo, yoğun trafikte aniden stop eden veya hararet yapan araçların sahili tamamen tıkamasıdır. Bu durumda dakikalar içinde acil müdahale şarttır. İkinci yaygın vaka, Küçük Bebek Yokuşu ve İnşirah Yokuşu gibi dik Arnavut kaldırımlı yollarda geri kayarak duvara temas eden, debriyaj balatası tamamen yanan veya şanzımanı kilitleyen araçlardır. Ayrıca deniz kenarında rutubet kaynaklı akü/marş arızaları sıklıkla görülür.",
    equipmentProtocol: "Bebek için özel olarak nöbette tuttuğumuz araçlarımız, dar sahil yolunda 3-4 dakika içinde aracı kasaya alabilen hızlı hidrolik kayar platform sistemine sahiptir. Dik Bebek yokuşları için arka tekerlek sabitleme kilitleri ve güçlü çelik tambur vinçler devreye girer. Dar sokaklarda dönebilen kısa dingilli kurtarıcılarımız sayesinde Boğaz trafiği aksatılmadan operasyon tamamlanır.",
    localAdvice: "Bebek Sahil ve Beşiktaş hattında hazır bekleyen nöbetçi kurtarıcımızla Bebek Parkı, Küçük Bebek ve sahil şeridine ortalama 10 dakika içinde ulaşıyoruz. Aracınızı güvenle Maslak Atatürk Oto Sanayi'ye veya Beşiktaş yetkili servislerine naklediyoruz. Bebek sahil yolunda kalırsanız trafiğin tamamen kilitlenmemesi için aracınızı derhal en yakın cep alanına almaya çalışıp 0533 265 70 89 numaramızı arayınız.",
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
    category: 'bogaz-sahil',
    categoryLabel: 'Emirgan & Koruluk',
    title: 'Emirgan Oto Çekici 7/24 | 10 Dk En Yakın - 0533 265 70 89',
    metaDesc: 'Emirgan Korusu, Sakıp Sabancı Caddesi, Baltalimanı ve Çınaraltı mevkiinde 7/24 kaskolu oto çekici. 10 dakikada intikal: 0533 265 70 89.',
    keywords: 'emirgan çekici, emirgan oto çekici, sakıp sabancı caddesi çekici, emirgan korusu çekici, baltalimanı emirgan çekici, emirgan yol yardım',
    eta: '10 Dk',
    caseTitle: 'Sakıp Sabancı Caddesi Sahilinde Elektrik Kesintisi',
    caseDesc: 'Emirgan Çınaraltı mevkiinde elektrik tesisatı arızasıyla stop eden araca İstinye nöbetçi ekibimiz 8 dakikada ulaştı.',
    vehicleType: 'Binek Sedan',
    deliveryPoint: 'Maslak Oto Sanayi',
    leadText: 'Emirgan Korusu çevresi, Sakıp Sabancı Caddesi sahil boyu, Çınaraltı, Reşitpaşa ve Baltalimanı sahil bağlantısında 7/24 nöbetçi çekici hizmeti. Maslak ve İstinye üslerimize çok yakın konumda olduğundan 10 dakikada yanınızdayız.',
    hotspots: 'Sakıp Sabancı Caddesi, Emirgan Korusu, Çınaraltı Meydanı, Baltalimanı Sahil Yolu, Reşitpaşa',
    trafficAnalysis: "Emirgan, Sakıp Sabancı Caddesi boyunca uzanan Boğaz sahili, tarihi Emirgan Korusu yokuşları, Çınaraltı Meydanı ve Baltalimanı sınırlarını içine alan tarihi ve turistik bir Boğaz semtidir. Sahil yolu geniş yürüyüş parkurları ve balıkçı lokantalarıyla gün boyu yoğun akarken, Emirgan Korusu çevresindeki sokaklar dik tepelere tırmanan virajlı ve dar bir yapıya sahiptir. Nisan ayındaki Lale Festivali döneminde ve bahar hafta sonlarında koru çevresine on binlerce araç gelir; yokuşlar ve otoparklar aşırı yüklenir.",
    scenarios: "Emirgan bölgesinde ekiplerimizin en sık karşılaştığı arıza, Koru çevresindeki dik yokuşlarda dur-kalk yaparken acemi sürücülerin debriyaj balatasını yakması veya aracın geri kayarak arkadaki araçlara çarpmasıdır. İkinci sık görülen durum, Sakıp Sabancı Caddesi'ndeki sahil virajlarında dikkatsizlik sonucu kaldırıma vurarak lastik yaran ve jant kıran lüks araçlardır. Ayrıca tarihi ahşap konakların bulunduğu dar sokaklarda park arızası yaşayan araçlar vinçle kurtarılmaktadır.",
    equipmentProtocol: "Emirgan Korusu'nun dik ve ağaçlık yokuşlarında güvenli kurtarma yapabilmek için özel uzaktan kumandalı vinç tertibatı, aracı dengede tutan çift kancalı çeki sistemi ve yumuşak jant bağlama aparatları kullanıyoruz. Sahil yolundaki arızalar için ise hızlı kayar kasa platformlarımızla sahil akışını engellemeden seri yükleme gerçekleştirilir.",
    localAdvice: "İstinye ve Maslak üssümüzden hareket eden nöbetçi çekicilerimizle Emirgan Sahili, Çınaraltı ve Koru çevresine 8-10 dakika içinde varıyoruz. Aracınız Maslak Atatürk Oto Sanayi'deki güvenilir tamircilere veya yetkili servislere emtia sigortasıyla taşınır. Koru yokuşlarında aracınız durursa el frenini çekip vitesi 1'e takarak ekibimizi bekleyiniz.",
    faqs: [
      { q: 'Emirgan’a çekici ne kadar sürede gelir?', a: 'Maslak ve İstinye’den ortalama 8-10 dakika içinde yanınızdayız.' },
      { q: 'Emirgan Korusu yokuşunda araç çekiyor musunuz?', a: 'Evet, koru çevresindeki virajlı ve dik yollara uygun kayar kasalı araçlarımız vardır.' },
      { q: 'Sahil yolunda çekici çağırmak kolay mı?', a: '0533 265 70 89 numaramızı aramanız veya WhatsApp’tan konum atmanız yeterlidir.' },
      { q: 'Taşıma kaskosu mevcut mu?', a: 'Evet, aracınız yükleme anından itibaren tam kaskolu taşınır.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, araç başında kredi kartıyla ödeme yapabilirsiniz.' }
    ]
  },
  {
    slug: 'yenikoy-oto-cekici',
    name: 'Yeniköy',
    category: 'bogaz-sahil',
    categoryLabel: 'Yeniköy & Boğaz',
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
    trafficAnalysis: "Yeniköy, Köybaşı Caddesi boyunca uzanan tarihi yalıları, Kalender Sahili, Yeniköy Bağlar mevkiisi ve Sait Halim Paşa Yalısı aksını içine alan Boğaz'ın en prestijli yerleşimlerindendir. Semtin omurgası olan Köybaşı Caddesi, denizle yalılar arasında sıkışmış, dar ve virajlı bir sahil yoludur. Birçok noktada yol kenarına park etmiş araçlar sebebiyle karşılıklı iki büyük aracın geçişi güçleşir. Yeniköy Bağlar mevkii ise sahilden tepelere doğru tırmanan dik sokaklara ve villa sitelerine sahiptir. Hafta sonları sahil boyunca yoğun restoran ve kafe trafiği yaşanır.",
    scenarios: "Yeniköy Köybaşı Caddesi'nde yaşanan en yaygın problem, dar yolda durmak zorunda kalan araçların arkasından gelen trafik tarafından sıkıştırılması ve sürtmeli kaza riskidir. İkinci yaygın senaryo, elektrikli ve hibrit araçların şarj tükenmesi sebebiyle dar sahil yolunda hareketsiz kalmasıdır. Ayrıca Bağlar mevkisindeki dik villa yokuşlarında geri kayma, lastik patlaması ve kış aylarında deniz tuzu sebebiyle paslanan fren kilitlenmeleri sıkça kurtarma gerektirir.",
    equipmentProtocol: "Yeniköy sahilinin dar yapısına uygun olarak filomuzda kompakt boyutlu, hidrolik olarak yana kayabilen ve hızlı yükleme yapabilen kayar kasa çekiciler bulunur. Lüks ve klasik otomobil yoğunluğuna sahip semtte, araç şasisine ve kaportasına asla metal temas ettirmeyen özel yumuşak dokuma güvenlik kuşakları ve kauçuk koruyucular kullanılır.",
    localAdvice: "İstinye ve Sarıyer sahil devriye araçlarımızla Yeniköy Sahil, Köybaşı Caddesi ve Bağlar mevkisine ortalama 10 ila 12 dakikada ulaşıyoruz. Aracınızı dilediğiniz yetkili servise veya Maslak Atatürk Oto Sanayi'ye kaskolu teslim ediyoruz. Köybaşı Caddesi'nde yolda kalırsanız diğer sürücülerin sizi görebilmesi için dörtlülerinizi yakıp hemen WhatsApp'tan canlı konum paylaşınız.",
    faqs: [
      { q: 'Yeniköy sahilinde çekici ne kadar sürede gelir?', a: 'Sahil ve Maslak çıkışlı araçlarımızla ortalama 12-15 dakikada adresteyiz.' },
      { q: 'Dar sahil yolunda trafik tıkanmadan aracı nasıl yüklüyorsunuz?', a: 'Hızlı açılan hidrolik kayar kasa ve vinç donanımımızla 3-4 dakikada yükleme tamamlanır.' },
      { q: 'Yeniköy’den Maslak Sanayi’ye araç çeker misiniz?', a: 'Evet, en çok transfer yaptığımız güzergahlardan biridir.' },
      { q: 'Kaza durumunda vinç desteği var mı?', a: 'Evet, vinçli kurtarma araçlarımız hazırdır.' },
      { q: 'Fiyatlar sabit mi?', a: 'Evet, telefonda verilen sabit fiyat geçerlidir.' }
    ]
  },
  {
    slug: 'gokturk-kemerburgaz-oto-cekici',
    name: 'Göktürk & Kemerburgaz',
    category: 'kuzey-otoyol',
    categoryLabel: 'Göktürk & Kuzey Aksı',
    title: 'Göktürk & Kemerburgaz Oto Çekici 7/24 | 15 Dk - 0533 265 70 89',
    metaDesc: 'Göktürk, Kemerburgaz, Kemer Country, Hasdal Otoyolu ve orman yolunda 7/24 lüks ve spor araç oto çekici. 15 dakikada intikal: 0533 265 70 89.',
    keywords: 'göktürk çekici, kemerburgaz çekici, kemer country çekici, hasdal kemerburgaz çekici, göktürk oto kurtarma, göktürk yol yardım',
    eta: '15 Dk',
    caseTitle: 'Kemer Country Çıkışında Elektrikli Araç Batarya Kilitlenmesi',
    caseDesc: 'Bataryası tamamen tükenen ve tekerlekleri dönmeyen elektrikli lüks SUV, özel kayar rampa ve patinaj tekerlekleriyle çiziksiz yüklendi.',
    vehicleType: 'Elektrikli Lüks SUV',
    deliveryPoint: 'Maslak Yetkili Servis Merkezi',
    leadText: 'Göktürk Merkez, İstanbul Caddesi, Kemer Country villa siteleri, Kemerburgaz Mithatpaşa, Hasdal-Kemerburgaz otoyolu ve Maslak tünel bağlantısında 7/24 kesintisiz çekici hizmeti sunuyoruz. Lüks, basık spor ve elektrikli araçlar için özel donanımlı kayar kasa kullanıyoruz.',
    hotspots: 'İstanbul Caddesi Göktürk, Kemer Country, Kemerburgaz Meydan, Hasdal Otoyolu, Maslak Bağlantısı',
    trafficAnalysis: "Göktürk ve Kemerburgaz, Eyüpsultan ilçesine bağlı olmakla birlikte Maslak ve Sarıyer'e doğrudan Hasdal Otoyolu ve orman tünel bağlantısıyla entegre, üst gelir grubu villa projelerinin ve Kemer Country'nin bulunduğu özel bir bölgedir. Bölgenin ana ulaşım arterleri İstanbul Caddesi, Kemerburgaz Mithatpaşa Meydanı, Hasdal-Kemerburgaz Otoyolu ve Pirinççi orman yoludur. Bölge geniş düzlükler ve otoyol standartlarının yanı sıra Belgrad Ormanı'na uzanan aydınlatmasız, virajlı orman yollarına sahiptir. Kış aylarında orman içi sıcaklık şehir merkezine göre 4-5 derece daha düşüktür; bu da yoğun sis ve şiddetli gizli buzlanmaya yol açar.",
    scenarios: "Göktürk-Hasdal otoyolunda en sık karşılaşılan vakalar, yüksek hızda seyir halindeyken lastik yarılması, motor arızası ve hararet sebebiyle emniyet şeridine çekilen araçlardır. Kemer Country ve Göktürk sitelerinde ise garajda uzun süre yatan lüks araçların akü bitmesi ve hava süspansiyonlarının çökmesi vakaları çok yaygındır. Orman yollarında ise mıcırlı zeminde virajı alamayarak yol kenarındaki toprak kanala veya şarampole kayan araçların vinçle kurtarılması gerekir.",
    equipmentProtocol: "Göktürk bölgesinde görev yapan filomuzda hem otoyol için yüksek hızlı kayar kasalar hem de ormanlık arazi şartlarına uygun 4x4 kurtarma vinçleri yer alır. Şarampolden araç çekebilen 30 metrelik çelik halatlı vinç sistemlerimiz ve gece kurtarmaları için yüksek lümenli LED projektör kulelerimiz aktiftir. Kemer Country gibi özel güvenlikli sitelere giriş yetkisine sahip kurumsal çekiciler sevk edilir.",
    localAdvice: "Hasdal ve Maslak çıkışlı nöbetçi filomuzla tünel yolunu kullanarak Göktürk Merkez, İstanbul Caddesi ve Kemer Country'ye ortalama 12 ila 15 dakikada varıyoruz. Lüks araçlarınız Maslak Atatürk Oto Sanayi'deki yetkili bayilere doğrudan ulaştırılır. Orman yolunda kalırsanız aracın içinde bekleyip kapıları kilitleyerek konumunuzu WhatsApp üzerinden iletmeniz güvenliğiniz açısından tavsiye edilir.",
    faqs: [
      { q: 'Göktürk ve Kemerburgaz’a Maslak’tan çekici ne kadar sürede varır?', a: 'Hasdal ve tünel yolundan ortalama 12-15 dakika içinde adrese ulaşıyoruz.' },
      { q: 'Kemer Country sitelerine çekici girebiliyor mu?', a: 'Evet, site güvenliğiyle koordineli şekilde kapınıza kadar geliyoruz.' },
      { q: 'Elektrikli ve hibrit araç çekimi yapılıyor mu?', a: 'Evet, şanzımanı veya el freni kilitlenen araçlara özel aparatlarla sıfır hasar güvencesi veriyoruz.' },
      { q: 'Kaza ve şarampol durumunda vinç var mı?', a: 'Evet, orman yolu ve otoyol kazaları için güçlü kurtarma vinçlerimiz mevcuttur.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Tüm araçlarımızda mobil POS cihazı mevcuttur.' }
    ]
  },
  {
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
    trafficAnalysis: "TEM Otoyolu (O-2), İstanbul'un doğu-batı transit omurgası olup Maslak etki alanında Hasdal Kavşağı, Seyrantepe Viyadüğü, Türk Telekom Stadyumu katılımı, Levent sapağı ve Fatih Sultan Mehmet Köprüsü yaklaşımını kapsar. Günde yüz binlerce binek, ticari ve ağır vasıta aracın geçtiği bu otoyolda hız limiti 120-140 km/s arasındadır. TEM Seyrantepe ve Hasdal viyadükleri üzerinde emniyet şeridi yer yer daralır; bu durum duran araçlar için ölümcül tehlike yaratır. Mesai saatlerinde her iki yönde aşırı trafik akışı varken, gece saatlerinde yüksek hızlı transit kamyon ve tır trafiği hakimdir.",
    scenarios: "TEM Otoyolu üzerinde karşılaşılan arızalar hayati risk taşır. En sık yaşanan senaryo, 100 km/s üzeri hızlarda aniden motor kitleyen, radyatörü patlayan veya şanzımanı devre dışı kalan araçların emniyet şeridine zorlukla sığınmasıdır. Emniyet şeridinde bekleyen araçlara arkadan çarpma riski son derece yüksektir. Diğer senaryolar ise çoklu araçların karıştığı zincirleme otoyol kazaları, ağır vasıta lastik patlamaları ve gece saatlerinde yakıtı tükenerek yolda kalan araçlardır.",
    equipmentProtocol: "TEM Otoyolu operasyonları için araçlarımız Karayolları ve Trafik Şube standartlarında özel güvenlik ekipmanlarıyla donatılmıştır. Çekicilerimizin üzerinde arkadan gelen trafiği yüzlerce metre önceden uyaran stroboskopik LED tepe ikaz panelleri bulunur. Ekiplerimiz olay yerine vardığında derhal 150 metrelik emniyet dubalama koridoru oluşturur. Hızlı hidrolik kayar platformumuz sayesinde arızalı araç en geç 3-4 dakika içinde kasaya çekilerek emniyet şeridinden güvenle tahliye edilir.",
    localAdvice: "Hasdal ve Seyrantepe mevkilerinde konuşlu TEM nöbetçi çekicimizle arıza noktanıza 8 ila 10 dakika içinde intikal ediyoruz. TEM Otoyolu'nda kalırsanız: Dörtlü ikaz lambalarınızı derhal yakın, aracın sağ kapısından inerek çelik bariyerlerin arkasına geçin, kesinlikle araç içinde veya arkasında beklemeyin ve 0533 265 70 89 acil çağrı hattımıza WhatsApp'tan canlı konum paylaşın.",
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
    trafficAnalysis: "Kuzey Marmara Otoyolu (O-7), İstanbul'un en modern ve yüksek hızlı transit arteri olup Sarıyer Tünelleri (Çayırbaşı-Uskumruköy), Uskumruköy Gişeleri, Yavuz Sultan Selim Köprüsü Avrupa yaklaşımı, Zekeriyaköy ve İstanbul Havalimanı koridorunu içine alır. 140 km/s hız sınırına sahip olan bu güzergahta çok sayıda uzun viyadük ve derin tüneller bulunmaktadır. Açık arazi yapısı sebebiyle kışın şiddetli yan rüzgarlar, yoğun sis ve aniden bastıran kar yağışları görülür. Şehir merkezine göre yerleşimden uzak olması, arıza anında hızlı profesyonel yardım almayı zorunlu kılar.",
    scenarios: "Kuzey Marmara Otoyolu'nda en sık yaşanan durumlar, Sarıyer tünelleri içinde motoru duran veya lastiği patlayan araçların tünel trafiğini tehlikeye sokmasıdır. Viyadükler üzerinde rüzgar etkisiyle savrularak bariyerlere çarpan araçlar, yüksek süratte lastik parçalanması yaşayan lüks SUV'ler ve uzun yolda bataryası tükenen elektrikli araçlar diğer yaygın vakalardır. Ayrıca İstanbul Havalimanı'na uçuşa yetişirken arızalanan yolcu araçlarının acil kurtarılması ve yolcuların taksiye aktarılması sıkça karşılaşılan bir koordinasyondur.",
    equipmentProtocol: "Kuzey Marmara Otoyolu'na çıkan çekicilerimiz, otoyol işletmesi (ICA) regülasyonlarına tam uyumlu yüksek tonajlı ve güçlü motorlu araçlardır. Tünel içi acil müdahaleler için güçlü çelik vinç tertibatı, hava destekli hızlı kaldırma sistemleri ve yüksek güçlü LED aydınlatma kuleleri kullanılır. Ağır elektrikli araçların taşınmasında batarya güvenliğini koruyan şasi sabitleme kilitleri ve özel tekerlek arabaları (dolly) kullanılır.",
    localAdvice: "Uskumruköy gişeleri ve Sarıyer tünel çıkışındaki nöbet noktamız sayesinde KMO Avrupa yakası güzergahına 12 ila 15 dakikada ulaşıyoruz. Aracınızı Maslak Atatürk Oto Sanayi'ye veya Havalimanı bölgesindeki yetkili servislere güvenle teslim ediyoruz. Otoyolda arıza durumunda aracınızı emniyet şeridine çekip dörtlülerinizi yakın ve otoyol acil çağrı butonları veya telefonumuz üzerinden konumunuzu derhal iletiniz.",
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
    trafficAnalysis: "Büyükdere Caddesi, İstanbul'un Avrupa yakasındaki en kritik ana arteri olup Şişli-Mecidiyeköy'den başlayarak Gayrettepe, Levent, 4. Levent, Sanayi Mahallesi, Maslak üzerinden Hacıosman Bayırı ve Sarıyer'e kadar uzanan yaklaşık 14 kilometrelik mega bir koridordur. Bu cadde üzerinde onlarca gökdelen, holding merkezi, üniversite kampüsleri ve AVM'ler yer alır. Günde yüz binlerce aracın aktığı Büyükdere Caddesi'nde tek bir şeridin 5 dakika kapanması dahi trafiği felç eder. Metrobüs köprüsü, 4. Levent metro alt geçidi, Sanayi Mahallesi viyadüğü ve Maslak plazalar kavşağı caddenin en yoğun düğüm noktalarıdır.",
    scenarios: "Büyükdere Caddesi'nde yaşanan arızalar çoğunlukla mesai saatlerindeki yoğun dur-kalk trafiğinde meydana gelir. Otomatik vitesli araçların şanzıman mekatronik arızası vermesi, soğutma hortumu patlatarak buhar çıkaran araçlar ve kavşak katılımlarında yaşanan maddi hasarlı kazalar en sık rastlanan vakalardır. Bu arterde duran araca arkadan gelen dikkatsiz sürücülerin çarpma riski son derece yüksektir; bu nedenle dakikalar içinde hızlı müdahale ve tahliye operasyonu gereklidir.",
    equipmentProtocol: "Büyükdere Caddesi operasyonlarımız için Maslak Atatürk Oto Sanayi çıkışımızda doğrudan caddeye açılan hazır nöbetçi kayar kasa kurtarıcılarımız bekletilir. Aracın yanına varıldığı andan itibaren hidrolik platform 60 saniye içinde yere indirilir, araç vinç yardımıyla çekilerek en fazla 3 dakika içinde cadde trafiği tamamen açılır. Kilitli kalan otomatik vitesli araçlar için tekerlek altına yerleştirilen kayar kızaklar standart donanımdır.",
    localAdvice: "Büyükdere Caddesi üzerinde konuşlu çekici ağımızla Maslak, 4. Levent, Sanayi Mahallesi veya Levent aksındaki çağrılarınıza sadece 6 ila 8 dakika içinde ulaşıyoruz. Arızalı aracınız doğrudan Büyükdere Caddesi'ne komşu olan Maslak 1. Kısım veya 2. Kısım Oto Sanayi Sitesi'ndeki dilediğiniz servise en kısa yoldan aktarılır. Caddede kalırsanız hemen dörtlülerinizi yakın, reflektörünüzü yerleştirin ve çağrı merkezimize hangi metro durağı veya plaza hizasında olduğunuzu bildirin.",
    faqs: [
      { q: 'Büyükdere Caddesi gibi yoğun bir arterde ne kadar sürede ulaşıyorsunuz?', a: 'Merkez garajımız doğrudan Büyükdere Caddesi bağlantısında olduğundan ortalama 7-10 dakikada aracınızın yanındayız.' },
      { q: 'Plazaların kapalı otoparklarına girebiliyor musunuz?', a: 'Evet, alçak tavanlı otoparklar için özel mini kurtarıcı ve ahtapot araçlarımız mevcuttur.' },
      { q: 'Büyükdere Caddesi’nden Maslak Oto Sanayi’ye çekici fiyatı nedir?', a: 'Kısa mesafe için en uygun sabit fiyat garantisi sunulmaktadır; hemen arayıp öğrenebilirsiniz.' },
      { q: 'Otomatik vitesli araçlara zarar vermeden çekim yapıyor musunuz?', a: 'Evet, çeker tekerlekler havaya kaldırılarak veya tam platform üzerine tekerlek aparatı ile alınarak çekilir.' },
      { q: 'Akü takviyesi hizmetiniz var mı?', a: 'Evet, akü bitmesi durumunda 12V/24V profesyonel booster ile araç başında akü takviyesi yapıyoruz.' }
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
          <span>${reg.name} & Maslak Çevresinde 10-15 Dk Varış</span>
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
            <span class="brand-name">MASLAK <span>OTO ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Acil Yol Yardım & Kurtarma</span>
          </div>
        </a>

        <nav class="main-nav" aria-label="Ana Menü">
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

  <!-- Breadcrumb & Hero -->
  <section class="subpage-hero" style="background: linear-gradient(135deg, #070b14 0%, #0f172a 60%, #162032 100%); color: #fff; padding: 45px 0;">
    <div class="container">
      <nav class="breadcrumb-nav" aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 15px; color: #94a3b8;">
        <a href="../index.html" style="color: #cbd5e1; text-decoration: none;">Ana Sayfa</a> /
        <a href="index.html" style="color: #cbd5e1; text-decoration: none;">Bölgelerimiz</a> /
        <span style="color: #ff5500; font-weight: 600;">${reg.name} Oto Çekici</span>
      </nav>
      <div style="max-width: 820px;">
        <span class="badge" style="background: rgba(255,85,0,0.15); color: #ff5500; border: 1px solid rgba(255,85,0,0.3); padding: 5px 12px; border-radius: 999px; font-weight: 700; font-size: 0.8125rem; display: inline-flex; align-items: center; gap: 6px; margin-bottom: 12px;">
          <span class="pulse-dot"></span> 7/24 Canlı Nöbetçi Ekip • ${reg.eta} Varış
        </span>
        <h1 style="font-size: clamp(1.8rem, 4vw, 2.75rem); font-weight: 900; line-height: 1.2; margin-bottom: 15px; letter-spacing: -0.02em;">
          ${reg.name} Oto Çekici & <span style="color: #ff5500;">7/24 Oto Kurtarma</span>
        </h1>
        <p style="font-size: 1.05rem; line-height: 1.6; color: #cbd5e1; margin-bottom: 25px;">
          ${reg.metaDesc}
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
            <span>Hemen Ara: ${PHONE}</span>
          </a>
          <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
            <span>WhatsApp ile Konum Gönder</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Ana İçerik Alanı -->
  <main class="section">
    <div class="container">
      <div style="display: grid; grid-template-columns: 1fr; gap: 40px;" class="region-page-grid">
        <div class="region-content-col">
          
          <!-- Bölge Genel Bakış -->
          <article class="content-block" style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 30px; margin-bottom: 30px;">
            <h2 style="font-size: 1.6rem; font-weight: 800; color: #0f172a; margin-bottom: 15px;">
              ${reg.name} Bölgesinde 7/24 Kesintisiz Çekici & Kurtarma
            </h2>
            <p style="font-size: 1.05rem; line-height: 1.7; color: #334155; margin-bottom: 20px;">
              ${reg.leadText}
            </p>
            <div style="background: #f8fafc; border-left: 4px solid #ff5500; padding: 15px 20px; border-radius: 8px; margin-bottom: 25px;">
              <strong style="color: #0f172a; display: block; margin-bottom: 5px;">📍 ${reg.name} Sık Hizmet Verdiğimiz Noktalar:</strong>
              <span style="color: #475569; font-size: 0.95rem;">${reg.hotspots}</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
              <div style="background: #fff7ed; border: 1px solid #ffedd5; padding: 15px; border-radius: 12px; text-align: center;">
                <span style="font-size: 1.8rem; font-weight: 900; color: #ea580c; display: block;">${reg.eta}</span>
                <span style="font-size: 0.875rem; color: #7c2d12; font-weight: 600;">Ortalama İntikal</span>
              </div>
              <div style="background: #ecfdf5; border: 1px solid #d1fae5; padding: 15px; border-radius: 12px; text-align: center;">
                <span style="font-size: 1.8rem; font-weight: 900; color: #059669; display: block;">%100</span>
                <span style="font-size: 0.875rem; color: #064e3b; font-weight: 600;">Emtia Sigortalı</span>
              </div>
              <div style="background: #eff6ff; border: 1px solid #dbeafe; padding: 15px; border-radius: 12px; text-align: center;">
                <span style="font-size: 1.8rem; font-weight: 900; color: #2563eb; display: block;">7/24</span>
                <span style="font-size: 0.875rem; color: #1e3a8a; font-weight: 600;">Nöbetçi Filo</span>
              </div>
            </div>
          </article>

          
          <!-- BÖLGEYE ÖZEL DETAYLI YOL, TRAFİK VE KURTARMA REHBERİ (MİNİMUM 2500 KARAKTER ÖZGÜN İÇERİK) -->
          <article class="content-block" style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; margin-bottom: 30px; box-shadow: var(--shadow-sm);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
              <span style="background: #ff5500; color: #fff; padding: 5px 12px; border-radius: 999px; font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Kapsamlı Saha Rehberi</span>
              <span style="color: #64748b; font-size: 0.88rem; font-weight: 600;">${reg.name} Çekici Operasyon Dinamikleri</span>
            </div>

            <h2 style="font-size: 1.55rem; font-weight: 900; color: #0f172a; margin-bottom: 20px; line-height: 1.3;">
              ${reg.name} Bölgesi Yol Şartları, Sık Karşılaşılan Arızalar ve Çekici Çözümleri
            </h2>

            <!-- 1. Alt Başlık: Coğrafi ve Trafik Analizi -->
            <div style="margin-bottom: 24px;">
              <h3 style="font-size: 1.18rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
                <span style="color: #ff5500;">📌</span> ${reg.name} Bölgesinin Yol ve Trafik Karakteristiği
              </h3>
              <p style="font-size: 0.98rem; line-height: 1.75; color: #334155; margin: 0; text-align: justify;">
                ${reg.trafficAnalysis}
              </p>
            </div>

            <!-- 2. Alt Başlık: Sık Karşılaşılan Arıza ve Kaza Senaryoları -->
            <div style="margin-bottom: 24px;">
              <h3 style="font-size: 1.18rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
                <span style="color: #ea580c;">⚠️</span> Bu Lokasyonda En Sık Karşılaştığımız Kurtarma Senaryoları
              </h3>
              <p style="font-size: 0.98rem; line-height: 1.75; color: #334155; margin: 0; text-align: justify;">
                ${reg.scenarios}
              </p>
            </div>

            <!-- 3. Alt Başlık: Kullanılan Özel Donanım ve Taşıma Güvenliği -->
            <div style="margin-bottom: 24px;">
              <h3 style="font-size: 1.18rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
                <span style="color: #10b981;">🛡️</span> ${reg.name} Çekici Donanımımız ve Sıfır Hasar Protokolü
              </h3>
              <p style="font-size: 0.98rem; line-height: 1.75; color: #334155; margin: 0; text-align: justify;">
                ${reg.equipmentProtocol}
              </p>
            </div>

            <!-- 4. Alt Başlık: Yerel Teslimat Noktaları ve Sürücü Tavsiyeleri -->
            <div style="background: #f8fafc; border-left: 4px solid var(--primary); padding: 20px; border-radius: 8px;">
              <h3 style="font-size: 1.12rem; font-weight: 800; color: var(--secondary); margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                <span style="color: #ff5500;">💡</span> ${reg.name} Sürücülerine Özel Tavsiyeler & Yetkili Servis Aktarımı
              </h3>
              <p style="font-size: 0.95rem; line-height: 1.7; color: #475569; margin: 0; text-align: justify;">
                ${reg.localAdvice}
              </p>
            </div>
          </article>

          <!-- Gerçek Kurtarma Vakası -->
          <article class="content-block" style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 30px; margin-bottom: 30px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <span style="background: #0f172a; color: #fff; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase;">Saha Operasyonu</span>
              <span style="color: #64748b; font-size: 0.875rem;">${reg.name} Bölgesi</span>
            </div>
            <h3 style="font-size: 1.35rem; font-weight: 800; color: #0f172a; margin-bottom: 12px;">
              ${reg.caseTitle}
            </h3>
            <p style="font-size: 1rem; line-height: 1.6; color: #475569; margin-bottom: 18px;">
              ${reg.caseDesc}
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 20px; font-size: 0.875rem; color: #334155; border-top: 1px solid #f1f5f9; padding-top: 15px;">
              <div><strong>Araç:</strong> ${reg.vehicleType}</div>
              <div><strong>Teslim Noktası:</strong> ${reg.deliveryPoint}</div>
              <div><strong>Güvence:</strong> Tam Kaskolu Transfer</div>
            </div>
          </article>

          <!-- Sıkça Sorulan Sorular -->
          <article class="content-block" style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 30px; margin-bottom: 30px;">
            <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 20px;">
              ${reg.name} Çekici Hakkında Sıkça Sorulan Sorular
            </h2>
            <div class="faq-list">
              ${reg.faqs.map((f, i) => `
                <div style="margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 16px;">
                  <h4 style="font-size: 1.05rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">
                    ${i + 1}. ${f.q}
                  </h4>
                  <p style="color: #475569; line-height: 1.6; font-size: 0.95rem;">
                    ${f.a}
                  </p>
                </div>
              `).join('')}
            </div>
          </article>

          <!-- Diğer Çevre Bölgeler Linkleri -->
          <article class="content-block" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 25px;">
            <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 15px;">
              Maslak Çevresindeki Diğer Hizmet Bölgelerimiz
            </h3>
            <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px; list-style: none; padding: 0;">
              ${otherRegionsList}
            </ul>
            <div style="margin-top: 15px; text-align: right;">
              <a href="index.html" style="color: #ff5500; font-weight: 700; text-decoration: none;">Tüm Bölgelerimizi İncele →</a>
            </div>
          </article>

        </div>
      </div>
    </div>
  </main>

  <!-- Acil Çağrı Alt Şeridi -->
  <section class="section" style="padding-top: 0;">
    <div class="container">
      <div class="emergency-banner-box">
        <div class="emergency-banner-content">
          <h2 class="emergency-banner-title">${reg.name} Bölgesinde Yolda mı Kaldınız?</h2>
          <p class="emergency-banner-desc">En yakın nöbetçi çekicimiz ${reg.eta} içinde yanınızda olsun. Sabit fiyat garantisi.</p>
        </div>
        <div class="emergency-banner-actions">
          <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
            <span>${PHONE}</span>
          </a>
          <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
            <span>WhatsApp Konum</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="brand-logo" style="margin-bottom: 1rem;">
            <img src="../images/logo.svg" alt="Maslak Çekici" width="38" height="38" style="border-radius:50%;">
            <div class="brand-text">
              <span class="brand-name" style="font-size: 1.05rem;">MASLAK <span>OTO ÇEKİCİ</span></span>
            </div>
          </div>
          <p style="font-size: 0.875rem; line-height: 1.6; color: #94a3b8;">
            Maslak Atatürk Oto Sanayi merkezli filomuzla Maslak, Sarıyer, Beşiktaş, Kağıthane, Şişli ve Boğaz hattında 7/24 kaskolu, sabit fiyatlı oto çekici hizmeti.
          </p>
        </div>
        <div>
          <h3 class="footer-title">Öne Çıkan Bölgeler</h3>
          <ul class="footer-links">
            <li><a href="maslak-oto-cekici.html">Maslak Çekici</a></li>
            <li><a href="ayazaga-oto-cekici.html">Ayazağa Çekici</a></li>
            <li><a href="levent-oto-cekici.html">Levent Çekici</a></li>
            <li><a href="sariyer-oto-cekici.html">Sarıyer Çekici</a></li>
            <li><a href="istinye-oto-cekici.html">İstinye Çekici</a></li>
            <li><a href="index.html" style="color: #ff5500; font-weight:700;">Tüm Bölgeleri Gör →</a></li>
          </ul>
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
    <article class="region-square-card" data-category="${r.category}">
      <div class="region-square-top">
        <div class="region-square-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        </div>
        <span class="region-square-live"><span class="region-live-dot"></span> 7/24 Nöbetçi</span>
      </div>
      <div class="region-square-body">
        <span class="region-square-category">${r.categoryLabel}</span>
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
  <title>Maslak Çekici Hizmet Bölgelerimiz & Otoyollar - 0533 265 70 89</title>
  <meta name="description" content="Maslak merkezli Sarıyer, Beşiktaş, Kağıthane, Şişli, TEM Otoyolu ve Kuzey Marmara Otoyolu aksında 7/24 oto çekici, kurtarma ve yol yardım. 10-15 dk varış.">
  <link rel="canonical" href="${DOMAIN}/bolgeler/index.html">
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
        <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
          <span>Hemen Ara: ${PHONE}</span>
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
        ${cardsHtml}
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
          <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
            <span>${PHONE}</span>
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
            <li style="color: #fff; font-weight: 700;">📞 ${PHONE}</li>
            <li>📍 Maslak Oto Sanayi / İstanbul</li>
            <li>⏰ 7 Gün 24 Saat Açık</li>
            <li>💳 Nakit & Kart & FAST</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Maslak Çekici & Acil Kurtarma.</span>
        <span>7/24 Acil: <a href="tel:${PHONE_RAW}" style="color: #34d399; font-weight: 700;">${PHONE}</a></span>
      </div>
    </div>
  </footer>

  <div class="mobile-sticky-dock" aria-label="Sabit Acil Çağrı Çubuğu">
    <div class="sticky-dock-inner">
      <a href="tel:${PHONE_RAW}" class="sticky-dock-btn sticky-call-btn" aria-label="Maslak Çekici Ara">
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

// Çıktı Klasörünü Hazırla ve Sayfaları Oluştur
if (require.main === module) {
  const bolgelerDir = path.join(__dirname, '..', 'bolgeler');
  if (!fs.existsSync(bolgelerDir)) {
    fs.mkdirSync(bolgelerDir, { recursive: true });
  }

  // 1. Tekil Bölge Sayfaları
  regions.forEach(reg => {
    const filePath = path.join(bolgelerDir, `${reg.slug}.html`);
    fs.writeFileSync(filePath, buildRegionPage(reg), 'utf8');
    console.log(`Oluşturuldu: bolgeler/${reg.slug}.html`);
  });

  // 2. bolgeler/index.html
  const indexFilePath = path.join(bolgelerDir, 'index.html');
  fs.writeFileSync(indexFilePath, buildRegionsIndexPage(), 'utf8');
  console.log(`Oluşturuldu: bolgeler/index.html`);

  console.log(`Tüm ${regions.length} bölge ve bolgeler/index.html başarıyla tamamlandı!`);
}

module.exports = regions;
