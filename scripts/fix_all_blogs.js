const fs = require('fs');

console.log('--- Fixing all Blog Headers, Branding and Expanding Word Counts to >2200 ---');

const blogFiles = [
  'blog/aku-neden-aniden-biter-takviye-nasil-yapilir.html',
  'blog/maslak-ve-sariyer-en-yakin-oto-cekici-rehberi.html',
  'blog/oto-cekici-fiyatlari-nasil-hesaplanir.html',
  'blog/otomatik-vitesli-araclar-nasil-cekilir.html',
  'blog/otoyolda-arac-arizalandiginda-yapilmasi-gerekenler.html'
];

blogFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Fix branding
  content = content.replace(/TUZLA <span>YOL YARDIM<\/span>/gi, 'MASLAK <span>OTO ÇEKİCİ</span>');
  content = content.replace(/Tuzla Yol Yardım/gi, 'Maslak Çekici');
  content = content.replace(/tuzlayolyardim\.com/gi, 'maslakotocekici.com');
  content = content.replace(/0551\s*675\s*66\s*24/gi, '0533 265 70 89');
  content = content.replace(/05516756624/gi, '05332657089');
  content = content.replace(/<span class="footer-heading">15 Stratejik Bölge<\/span>/gi, '<span class="footer-heading">Hizmet Bölgelerimiz</span>');
  content = content.replace(/15 Stratejik Bölge/gi, 'Hizmet Bölgelerimiz');

  fs.writeFileSync(file, content, 'utf8');
  console.log('✓ Cleaned branding in', file);
});

// Now let's append substantial authoritative technical guide chapters to ensure >2200 words
// 1. maslak-ve-sariyer-en-yakin-oto-cekici-rehberi.html
let maslakFile = fs.readFileSync('blog/maslak-ve-sariyer-en-yakin-oto-cekici-rehberi.html', 'utf8');
const extraMaslak = `
        <!-- EK REHBER BÖLÜMÜ: SARIYER, LEVENT VE BEŞİKTAŞ GÜZERGAHLARINDA ÇEKİCİ GÜVENLİĞİ -->
        <section id="ek-guvenlik-protokolleri" style="margin-top: 35px; border-top: 1px solid #f1f5f9; padding-top: 25px;">
          <h2 style="font-size: 1.55rem; font-weight: 800; color: var(--secondary); margin-bottom: 15px;">
            Sarıyer Sahil Yolu, Levent Plazalar ve TEM Otoyolunda Çekici Koordinasyonu
          </h2>
          <p style="font-size: 1.02rem; line-height: 1.8; color: #334155; margin-bottom: 16px;">
            İstanbul Avrupa Yakası’nın coğrafi yapısı, özellikle Boğaziçi sahil şeridi ile tepeler arasındaki dik bağlantı yollarıyla karakterizedir. Baltalimanı Yokuşu, Tarabya Bayırı, İstinye Yokuşu ve Bebek Aşiyan bağlantısı gibi noktalarda motor harareti veya fren şişmesi yaşayan araçların güvenli çekimi özel uzmanlık gerektirir. Dik yokuşlarda yükleme yapılırken kayar kasa çekicinin hidrolik arka sabitleme ayaklarının yere tam oturması, aracın kaymasını önlemek için çelik takozların yerleştirilmesi ve çift emniyet halatı bağlanması hayati zorunluluktur.
          </p>
          <p style="font-size: 1.02rem; line-height: 1.8; color: #334155; margin-bottom: 16px;">
            Ayrıca Levent ve Maslak gibi yüksek katlı iş merkezlerinin bulunduğu bölgelerde çok katlı yer altı kapalı otoparkları mevcuttur. Bu otoparkların giriş tavan yükseklikleri genellikle 2.00 metre ile 2.10 metre arasında sınırlandırılmıştır. 3 metrelik standart bir çekicinin bu otoparklara girmesi imkansızdır. Maslak Çekici özel olarak tasarlanmış alçak şasili, tavanı basık hidrolik ahtapot vinçli araçları sayesinde otoparkın -4. katından dahi aracı sıfır sürtmeyle çıkarabilmektedir.
          </p>
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-lg); padding: 22px; margin-bottom: 25px;">
            <h4 style="font-size: 1.1rem; font-weight: 800; color: #166534; margin-bottom: 10px;">🌟 Maslak Çekici Çağırırken Sürücülere Özel 5 Altın Tavsiye:</h4>
            <ul style="padding-left: 20px; color: #14532d; font-size: 0.95rem; line-height: 1.7; margin: 0;">
              <li><strong>1. Net Kilometre / Nokta Tespiti:</strong> TEM veya Kuzey Marmara Otoyolu'nda kaldıysanız en yakın otoyol tabelası veya köprü ayağındaki kod numarasını çağrı operatörümüze bildirin.</li>
              <li><strong>2. Direksiyon Kilidi Açıklığı:</strong> Eğer aracın elektrik sistemi tamamen kapandıysa direksiyon kilidinin kilitli olup olmadığını kontrol edin; zira kilitli direksiyonlu araçlar için ilave kaydırma aparatları gerekir.</li>
              <li><strong>3. Bagaj ve Eşya Güvenliği:</strong> Çekiciye yükleme öncesinde araç içindeki değerli şahsi eşyalarınızı, dizüstü bilgisayar veya cüzdanınızı yanınıza alın.</li>
              <li><strong>4. Kasko Sigorta Poliçe Numarası:</strong> Çekici masrafını kaskodan rücu edecekseniz poliçe numaranızı faturaya işletmek üzere operatörümüze iletin.</li>
              <li><strong>5. Yetkili Servis İletişim Bilgisi:</strong> Aracın teslim edileceği yetkili servisteki danışmanınızın ismini ve telefonunu şoförümüzle paylaşarak teslimatın beklemeden tamamlanmasını sağlayın.</li>
            </ul>
          </div>
        </section>
`;

if (!maslakFile.includes('id="ek-guvenlik-protokolleri"')) {
  maslakFile = maslakFile.replace(/<!-- Blog Sonu İletişim Kutusu -->/i, extraMaslak + '\n        <!-- Blog Sonu İletişim Kutusu -->');
  fs.writeFileSync('blog/maslak-ve-sariyer-en-yakin-oto-cekici-rehberi.html', maslakFile, 'utf8');
}

// 2. oto-cekici-fiyatlari-nasil-hesaplanir.html
let fiyatFile = fs.readFileSync('blog/oto-cekici-fiyatlari-nasil-hesaplanir.html', 'utf8');
const extraFiyat = `
        <!-- EK BÖLÜM: DETAYLI FİYAT DİNAMİKLERİ VE EKSPERTİZ NAKLİYESİ -->
        <section id="ek-fiyat-detaylari" style="margin-top: 35px; border-top: 1px solid #f1f5f9; padding-top: 25px;">
          <h2 style="font-size: 1.55rem; font-weight: 800; color: var(--secondary); margin-bottom: 15px;">
            Ekspertiz Nakliyesi, Kiralık Filo Transferi ve Şehirlerarası Fiyatlandırma
          </h2>
          <p style="font-size: 1.02rem; line-height: 1.8; color: #334155; margin-bottom: 16px;">
            Oto çekici hizmeti sadece arıza ve kaza durumlarında aranmaz. İkinci el araç alım satımlarında noter öncesi ekspertiz merkezine aracın kilometre yapmadan ve risk almadan götürülmesi, bayiden sıfır kilometre alınan lüks spor araçların ruhsat ve plaka tescili tamamlanana kadar trafiğe sokulmadan garaja taşınması veya araç kiralama (rent a car) şirketlerinin şubeler arası filo transferleri de çekici fiyatlandırmasında ayrı bir kategori oluşturur.
          </p>
          <p style="font-size: 1.02rem; line-height: 1.8; color: #334155; margin-bottom: 16px;">
            Planlı transferlerde (örneğin 2 gün sonrasına randevulu Maslak - Ankara veya Maslak - Bodrum araç taşıma) "çoklu çekici" (çift katlı 8'li veya 4'lü tır transferi) tercih edilerek kilometre maliyeti tekli çekiciye göre %40 ila %50 oranında daha ekonomik hale getirilebilmektedir. Maslak Çekici olarak hem tekli özel VIP kayar kasa hem de çoklu lojistik araçlarımızla her bütçeye uygun kurumsal taşıma çözümleri sunuyoruz.
          </p>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-lg); padding: 22px; margin-bottom: 25px;">
            <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px;">📊 2026 Şehirlerarası Çekici Tahmini Maliyet Tablosu:</h4>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem;">
                <thead>
                  <tr style="background: #0f172a; color: #fff;">
                    <th style="padding: 10px 14px; border: 1px solid #1e293b;">Güzergah (İstanbul Çıkışlı)</th>
                    <th style="padding: 10px 14px; border: 1px solid #1e293b;">Mesafe (Ortalama)</th>
                    <th style="padding: 10px 14px; border: 1px solid #1e293b;">Tekli Özel Çekici</th>
                    <th style="padding: 10px 14px; border: 1px solid #1e293b;">Çoklu Filo Transferi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background: #ffffff;">
                    <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: 700;">İstanbul - Kocaeli / İzmit</td>
                    <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">100 Km</td>
                    <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #ea580c; font-weight: 800;">Sabit Fiyat Teklifi</td>
                    <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #16a34a; font-weight: 700;">Ekonomik Grup Taşıma</td>
                  </tr>
                  <tr style="background: #f8fafc;">
                    <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: 700;">İstanbul - Bursa</td>
                    <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">150 Km</td>
                    <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #ea580c; font-weight: 800;">Sabit Fiyat Teklifi</td>
                    <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #16a34a; font-weight: 700;">Ekonomik Grup Taşıma</td>
                  </tr>
                  <tr style="background: #ffffff;">
                    <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: 700;">İstanbul - Ankara</td>
                    <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">450 Km</td>
                    <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #ea580c; font-weight: 800;">Sabit Fiyat Teklifi</td>
                    <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #16a34a; font-weight: 700;">Ekonomik Grup Taşıma</td>
                  </tr>
                  <tr style="background: #f8fafc;">
                    <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: 700;">İstanbul - İzmir</td>
                    <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">480 Km</td>
                    <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #ea580c; font-weight: 800;">Sabit Fiyat Teklifi</td>
                    <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #16a34a; font-weight: 700;">Ekonomik Grup Taşıma</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
`;

if (!fiyatFile.includes('id="ek-fiyat-detaylari"')) {
  fiyatFile = fiyatFile.replace(/<div class="faq-wrap"/i, extraFiyat + '\n        <div class="faq-wrap"');
  fs.writeFileSync('blog/oto-cekici-fiyatlari-nasil-hesaplanir.html', fiyatFile, 'utf8');
}

// 3. otomatik-vitesli-araclar-nasil-cekilir.html
let otoVitesFile = fs.readFileSync('blog/otomatik-vitesli-araclar-nasil-cekilir.html', 'utf8');
const extraOtoVites = `
        <!-- EK BÖLÜM: ELEKTRİKLİ ARAÇLAR (EV) VE 4 ÇEKER (AWD/4WD) SİSTEMLERDE ŞANZIMAN KORUMASI -->
        <section id="ek-ev-awd-rehberi" style="margin-top: 35px; border-top: 1px solid #f1f5f9; padding-top: 25px;">
          <h2 style="font-size: 1.55rem; font-weight: 800; color: var(--secondary); margin-bottom: 15px;">
            Elektrikli Araçlar (Tesla, TOGG, Porsche Taycan) ve 4 Çeker (AWD) Çekici Kuralları
          </h2>
          <p style="font-size: 1.02rem; line-height: 1.8; color: #334155; margin-bottom: 16px;">
            Son yıllarda Maslak ve çevresinde elektrikli araç kullanımı hızla artmıştır. Ancak elektrikli otomobillerin (EV) yürür aksamı içten yanmalı motorlu araçlardan tamamen farklıdır. Bir elektrikli araçta şanzımanı boşa alsanız bile, tekerlekler döndükçe elektrik motorları birer jeneratör gibi çalışarak yüksek voltajlı ters elektrik akımı üretir. Eğer araç kapatılmış durumdayken veya çekilirken bu akım invertör ve batarya yönetim sistemine (BMS) ulaşırsa, aracın ana bataryasında kalıcı hasar oluşabilir veya yangın tehlikesi doğabilir.
          </p>
          <p style="font-size: 1.02rem; line-height: 1.8; color: #334155; margin-bottom: 16px;">
            Aynı şekilde Quattro, xDrive, 4Matic veya All-Wheel Drive (AWD) sürekli dört çeker sistemine sahip araçlarda ön tekerlekler çekiciye kaldırılıp arka tekerlekler yerde döndürülürse, merkez diferansiyel kilitlenir ve şanzıman dağılır. Bu nedenle tüm AWD ve elektrikli otomobiller istisnasız <strong>tüm tekerlekleri havada olacak şekilde platform üzerinde</strong> taşınmalıdır.
          </p>
          <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: var(--radius-lg); padding: 22px; margin-bottom: 25px;">
            <h4 style="font-size: 1.1rem; font-weight: 800; color: #c2410c; margin-bottom: 10px;">⚡ Elektrikli Araç Taşıma Prosedürü:</h4>
            <ul style="padding-left: 20px; color: #9a3412; font-size: 0.95rem; line-height: 1.7; margin: 0;">
              <li><strong>Çekici Modu (Transport / Tow Mode):</strong> Tesla ve TOGG ekranındaki ayarlar menüsünden "Çekici Modu" aktif edilerek elektronik park frenleri serbest bırakılmalıdır.</li>
              <li><strong>12V Düşük Voltaj Bataryası:</strong> Ana batarya dolsa bile 12V akü bittiyse ekran açılmaz ve kapılar kilitli kalır. Bu durumda ön kaput altındaki harici 12V terminallerine taşınabilir dijital booster bağlanarak ekran uyandırılmalıdır.</li>
              <li><strong>Özel Taşıma Makaraları (Dolly):</strong> Araç hiçbir şekilde tekerleklerini döndürmüyorsa, tekerleklerin altına küçük hareketli tekerlek kızakları (dolly) sürülerek araç çekici kasasına sıfır sürtünmeyle vinçlenir.</li>
            </ul>
          </div>
        </section>
`;

if (!otoVitesFile.includes('id="ek-ev-awd-rehberi"')) {
  otoVitesFile = otoVitesFile.replace(/<div class="faq-wrap"/i, extraOtoVites + '\n        <div class="faq-wrap"');
  fs.writeFileSync('blog/otomatik-vitesli-araclar-nasil-cekilir.html', otoVitesFile, 'utf8');
}

console.log('--- Blog Enrichments successfully written ---');
