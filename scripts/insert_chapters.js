const fs = require('fs');

console.log('--- Inserting extra chapters into pricing and automatic transmission blogs ---');

let f1 = fs.readFileSync('blog/oto-cekici-fiyatlari-nasil-hesaplanir.html', 'utf8');
const extraFiyat = `
        <!-- EK BÖLÜM: DETAYLI FİYAT DİNAMİKLERİ VE EKSPERTİZ NAKLİYESİ -->
        <section id="ek-fiyat-detaylari" style="margin-top: 35px; border-top: 1px solid #f1f5f9; padding-top: 25px;">
          <h2 style="font-size: 1.55rem; font-weight: 800; color: var(--secondary); margin-bottom: 15px;">
            Ekspertiz Nakliyesi, Kiralık Filo Transferi ve Şehirlerarası Fiyatlandırma
          </h2>
          <p style="font-size: 1.02rem; line-height: 1.8; color: #334155; margin-bottom: 16px;">
            Oto çekici hizmeti sadece arıza ve kaza durumlarında aranmaz. İkinci el araç alım satımlarında noter öncesi ekspertiz merkezine aracın kilometre yapmadan ve risk almadan götürülmesi, bayiden sıfır kilometre alınan lüks spor araçların ruhsat ve plaka tescili tamamlanana kadar trafiğe sokulmadan garaja taşınması veya araç kiralama şirketlerinin şubeler arası filo transferleri de çekici fiyatlandırmasında ayrı bir kategori oluşturur.
          </p>
          <p style="font-size: 1.02rem; line-height: 1.8; color: #334155; margin-bottom: 16px;">
            Planlı transferlerde çoklu çekici tercih edilerek kilometre maliyeti tekli çekiciye göre yüzde 40 ila 50 oranında daha ekonomik hale getirilebilmektedir. Maslak Çekici olarak hem tekli özel VIP kayar kasa hem de çoklu lojistik araçlarımızla her bütçeye uygun kurumsal taşıma çözümleri sunuyoruz.
          </p>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-lg); padding: 22px; margin-bottom: 25px;">
            <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px;">📊 2026 Şehirlerarası Çekici Tahmini Maliyet Tablosu:</h4>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem;">
                <thead>
                  <tr style="background: #0f172a; color: #fff;">
                    <th style="padding: 10px 14px; border: 1px solid #1e293b;">Güzergah</th>
                    <th style="padding: 10px 14px; border: 1px solid #1e293b;">Mesafe</th>
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

if (!f1.includes('id="ek-fiyat-detaylari"')) {
  f1 = f1.replace(/<div class="faq-accordion"/i, extraFiyat + '\n        <div class="faq-accordion"');
  fs.writeFileSync('blog/oto-cekici-fiyatlari-nasil-hesaplanir.html', f1, 'utf8');
  console.log('✓ Successfully enriched oto-cekici-fiyatlari-nasil-hesaplanir.html');
}

let f2 = fs.readFileSync('blog/otomatik-vitesli-araclar-nasil-cekilir.html', 'utf8');
const extraOtoVites = `
        <!-- EK BÖLÜM: ELEKTRİKLİ ARAÇLAR (EV) VE 4 ÇEKER (AWD/4WD) SİSTEMLERDE ŞANZIMAN KORUMASI -->
        <section id="ek-ev-awd-rehberi" style="margin-top: 35px; border-top: 1px solid #f1f5f9; padding-top: 25px;">
          <h2 style="font-size: 1.55rem; font-weight: 800; color: var(--secondary); margin-bottom: 15px;">
            Elektrikli Araçlar (Tesla, TOGG, Porsche Taycan) ve 4 Çeker (AWD) Çekici Kuralları
          </h2>
          <p style="font-size: 1.02rem; line-height: 1.8; color: #334155; margin-bottom: 16px;">
            Son yıllarda Maslak ve çevresinde elektrikli araç kullanımı hızla artmıştır. Ancak elektrikli otomobillerin yürür aksamı içten yanmalı motorlu araçlardan tamamen farklıdır. Bir elektrikli araçta şanzımanı boşa alsanız bile, tekerlekler döndükçe elektrik motorları birer jeneratör gibi çalışarak yüksek voltajlı ters elektrik akımı üretir. Eğer araç kapatılmış durumdayken veya çekilirken bu akım invertör ve batarya yönetim sistemine ulaşırsa, aracın ana bataryasında kalıcı hasar oluşabilir veya yangın tehlikesi doğabilir.
          </p>
          <p style="font-size: 1.02rem; line-height: 1.8; color: #334155; margin-bottom: 16px;">
            Aynı şekilde Quattro, xDrive, 4Matic veya All-Wheel Drive sürekli dört çeker sistemine sahip araçlarda ön tekerlekler çekiciye kaldırılıp arka tekerlekler yerde döndürülürse, merkez diferansiyel kilitlenir ve şanzıman dağılır. Bu nedenle tüm AWD ve elektrikli otomobiller istisnasız tüm tekerlekleri havada olacak şekilde platform üzerinde taşınmalıdır.
          </p>
          <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: var(--radius-lg); padding: 22px; margin-bottom: 25px;">
            <h4 style="font-size: 1.1rem; font-weight: 800; color: #c2410c; margin-bottom: 10px;">⚡ Elektrikli Araç Taşıma Prosedürü:</h4>
            <ul style="padding-left: 20px; color: #9a3412; font-size: 0.95rem; line-height: 1.7; margin: 0;">
              <li><strong>Çekici Modu (Transport / Tow Mode):</strong> Tesla ve TOGG ekranındaki ayarlar menüsünden Çekici Modu aktif edilerek elektronik park frenleri serbest bırakılmalıdır.</li>
              <li><strong>12V Düşük Voltaj Bataryası:</strong> Ana batarya dolsa bile 12V akü bittiyse ekran açılmaz ve kapılar kilitli kalır. Bu durumda ön kaput altındaki harici 12V terminallerine taşınabilir dijital booster bağlanarak ekran uyandırılmalıdır.</li>
              <li><strong>Özel Taşıma Makaraları (Dolly):</strong> Araç hiçbir şekilde tekerleklerini döndürmüyorsa, tekerleklerin altına küçük hareketli tekerlek kızakları sürülerek araç çekici kasasına sıfır sürtünmeyle vinçlenir.</li>
            </ul>
          </div>
        </section>
`;

if (!f2.includes('id="ek-ev-awd-rehberi"')) {
  f2 = f2.replace(/<div class="faq-accordion"/i, extraOtoVites + '\n        <div class="faq-accordion"');
  fs.writeFileSync('blog/otomatik-vitesli-araclar-nasil-cekilir.html', f2, 'utf8');
  console.log('✓ Successfully enriched otomatik-vitesli-araclar-nasil-cekilir.html');
}
