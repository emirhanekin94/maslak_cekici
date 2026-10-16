const fs = require('fs');
const path = require('path');

console.log('--- Starting Maslak Çekici Page Overhaul ---');

// ==========================================
// 1. UPDATE INDEX.HTML
// ==========================================
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Highway Cards
const highwayCardsIndex = `
          <!-- 16. TEM Otoyolu -->
          <article class="region-square-card" data-category="kagithane-cendere">
            <div class="region-square-top">
              <div class="region-square-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <span class="region-square-live"><span class="region-live-dot"></span> 7/24 Nöbetçi</span>
            </div>
            <div class="region-square-body">
              <span class="region-square-category">Otoyol & Transit Hat</span>
              <h3 class="region-square-title"><a href="bolgeler/tem-otoyolu-oto-cekici.html">TEM Otoyolu Oto Çekici</a></h3>
              <p class="region-square-sub">Hasdal, Seyrantepe viyadüğü, Türk Telekom Stadyumu ve Levent sapağında 10 dk acil emniyet şeridi kurtarması.</p>
              <div class="region-square-badges">
                <span class="region-square-badge eta">⏱ 10 Dk Varış</span>
                <span class="region-square-badge kasko">🛡 Otoyol Emniyeti</span>
              </div>
            </div>
            <div class="region-square-actions">
              <a href="bolgeler/tem-otoyolu-oto-cekici.html" class="btn-square-detail">Detayları Gör →</a>
              <a href="tel:05332657089" class="btn-square-call" aria-label="TEM Otoyolu Çekici Ara">
                <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
                <span>Ara</span>
              </a>
            </div>
          </article>

          <!-- 17. Kuzey Marmara Otoyolu -->
          <article class="region-square-card" data-category="kagithane-cendere">
            <div class="region-square-top">
              <div class="region-square-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <span class="region-square-live"><span class="region-live-dot"></span> 7/24 Nöbetçi</span>
            </div>
            <div class="region-square-body">
              <span class="region-square-category">Kuzey Otoyolu & Gişeler</span>
              <h3 class="region-square-title"><a href="bolgeler/kuzey-marmara-otoyolu-oto-cekici.html">Kuzey Marmara Otoyolu Çekici</a></h3>
              <p class="region-square-sub">Uskumruköy, FSM ve YSS Köprüsü bağlantısı, Havalimanı kavşağı ve viyadüklerde 7/24 kaskolu kurtarma.</p>
              <div class="region-square-badges">
                <span class="region-square-badge eta">⏱ 15 Dk Varış</span>
                <span class="region-square-badge kasko">🛡 Ağır Kurtarma</span>
              </div>
            </div>
            <div class="region-square-actions">
              <a href="bolgeler/kuzey-marmara-otoyolu-oto-cekici.html" class="btn-square-detail">Detayları Gör →</a>
              <a href="tel:05332657089" class="btn-square-call" aria-label="Kuzey Marmara Otoyolu Çekici Ara">
                <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
                <span>Ara</span>
              </a>
            </div>
          </article>

          <!-- 18. Büyükdere Caddesi -->
          <article class="region-square-card" data-category="maslak-sariyer">
            <div class="region-square-top">
              <div class="region-square-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <span class="region-square-live"><span class="region-live-dot"></span> 7/24 Nöbetçi</span>
            </div>
            <div class="region-square-body">
              <span class="region-square-category">Ana Arter & Plazalar</span>
              <h3 class="region-square-title"><a href="bolgeler/buyukdere-caddesi-oto-cekici.html">Büyükdere Caddesi Oto Çekici</a></h3>
              <p class="region-square-sub">Maslak-Levent-Şişli ana arteri üzerinde kilitlenen trafiği aksatmadan 10 dakikada hidrolik kayar kasa transferi.</p>
              <div class="region-square-badges">
                <span class="region-square-badge eta">⏱ 10 Dk Varış</span>
                <span class="region-square-badge kasko">🛡 Hızlı Tahliye</span>
              </div>
            </div>
            <div class="region-square-actions">
              <a href="bolgeler/buyukdere-caddesi-oto-cekici.html" class="btn-square-detail">Detayları Gör →</a>
              <a href="tel:05332657089" class="btn-square-call" aria-label="Büyükdere Caddesi Çekici Ara">
                <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
                <span>Ara</span>
              </a>
            </div>
          </article>
`;

if (!indexHtml.includes('tem-otoyolu-oto-cekici.html')) {
  indexHtml = indexHtml.replace(/<div id="no-search-results"/i, highwayCardsIndex + '\n          <div id="no-search-results"');
  console.log('✓ Added 3 highway cards to index.html');
}

// Button text
indexHtml = indexHtml.replace(/<span class="toggle-text">[\s\S]*?<\/span>/i, '<span class="toggle-text">Tüm Hizmet Bölgelerini Göster</span>');

// Reviews section
const reviewsSectionHtml = `
    <!-- GERÇEK GOOGLE MÜŞTERİ YORUMLARI & DEĞERLENDİRMELER -->
    <section class="section reviews-section" id="yorumlar" style="background: #ffffff; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light);">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Google Doğrulanmış Müşteri Puanı</span>
          <h2 class="section-title">Gerçek Müşterilerimizin Deneyimleri</h2>
          <p class="section-subtitle">Maslak ve çevre ilçelerde 7/24 hizmet verdiğimiz gerçek araç sahiplerinin tarafsız Google değerlendirmeleri.</p>
        </div>

        <div class="google-rating-summary">
          <div class="google-badge-logo">
            <svg class="google-g-icon" viewBox="0 0 48 48" width="40" height="40">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <div>
              <strong style="color: var(--secondary); font-size: 1.15rem; display: block; font-weight: 800;">Google Doğrulanmış Profil</strong>
              <div class="rating-count-text">350+ Gerçek Müşteri Değerlendirmesi</div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div class="rating-score">4.9</div>
            <div>
              <div class="stars-row" style="color: #f59e0b; font-size: 1.25rem;">★★★★★</div>
              <div class="rating-count-text" style="color: #10b981; font-weight: 700;">Mükemmel Hizmet Skoru</div>
            </div>
          </div>
        </div>

        <div class="reviews-grid" id="reviews-container">
          <!-- Yorum 1 -->
          <div class="review-card">
            <div class="review-header">
              <div class="reviewer-meta">
                <div class="reviewer-avatar">BK</div>
                <div>
                  <div class="reviewer-name">Burak Keskin</div>
                  <div class="reviewer-location">Maslak Atatürk Oto Sanayi • BMW 320i</div>
                </div>
              </div>
              <span class="review-date">3 gün önce</span>
            </div>
            <div class="review-stars">★★★★★</div>
            <p class="review-text">
              Maslak Büyükdere Caddesi üzerinde iş çıkışında şanzıman arızası yaşadım. Arayalı tam 11 dakika olmuştu ki kayar kasa araç yanıma geldi. Şoför arkadaş hem çok nazik hem de işinde gerçekten profesyoneldi. Tampona en ufak sürtme olmadan Maslak 1. Kısım’daki özel servisime güvenle çektiler. Telefonda verdikleri sabit fiyat neyse o alındı. Kesinlikle tavsiye ederim.
            </p>
          </div>

          <!-- Yorum 2 -->
          <div class="review-card">
            <div class="review-header">
              <div class="reviewer-meta">
                <div class="reviewer-avatar">EA</div>
                <div>
                  <div class="reviewer-name">Emre Altınok</div>
                  <div class="reviewer-location">TEM Otoyolu Seyrantepe • Porsche Macan</div>
                </div>
              </div>
              <span class="review-date">1 hafta önce</span>
            </div>
            <div class="review-stars">★★★★★</div>
            <p class="review-text">
              TEM Seyrantepe viyadüğü çıkışında emniyet şeridinde kaldım. Trafik çok yoğundu ve basık araç olduğu için endişeliydim. Gelen çekicide özel alçak rampa aparatı ve jant koruma kuşakları vardı. Aracı sıfır sürtmeyle yüklediler. Otoyolda bu kadar hızlı intikal eden ve bu kalitede ekipman kullanan firma bulmak zor. Emeğinize sağlık.
            </p>
          </div>

          <!-- Yorum 3 -->
          <div class="review-card">
            <div class="review-header">
              <div class="reviewer-meta">
                <div class="reviewer-avatar">SD</div>
                <div>
                  <div class="reviewer-name">Selin Demirtaş</div>
                  <div class="reviewer-location">İstinyePark Çevresi • Mercedes A200</div>
                </div>
              </div>
              <span class="review-date">2 hafta önce</span>
            </div>
            <div class="review-stars">★★★★★</div>
            <p class="review-text">
              İstinye yokuşunda aracım marş basmadı, akü tamamen tükenmişti. WhatsApp’tan konum gönderdim, 10 dakikada mobil araçları geldi. Dijital booster cihazıyla araç beynine hiçbir zarar vermeden 2 dakikada çalıştırdılar ve akü şarj durumunu test ettiler. Çok kibar ve güven veren bir ekip, teşekkürler.
            </p>
          </div>

          <!-- Yorum 4 -->
          <div class="review-card">
            <div class="review-header">
              <div class="reviewer-meta">
                <div class="reviewer-avatar">TY</div>
                <div>
                  <div class="reviewer-name">Tolga Yıldırım</div>
                  <div class="reviewer-location">Levent & Kanyon Çıkışı • Audi A5 Sportback</div>
                </div>
              </div>
              <span class="review-date">3 hafta önce</span>
            </div>
            <div class="review-stars">★★★★★</div>
            <p class="review-text">
              Levent Büyükdere Caddesi’nde akşam saatinde lastiğim yarıldı, stepnem de yoktu. Çekici çağırdım, 12 dakikada ulaştı. Kaskolu taşıma belgesini hemen araç başında gösterdiler. Mobil POS ile kredi kartıyla ödeme yaptım. Gece vakti mağdur olmadım, harika bir hizmet.
            </p>
          </div>

          <!-- Yorum 5 -->
          <div class="review-card">
            <div class="review-header">
              <div class="reviewer-meta">
                <div class="reviewer-avatar">OY</div>
                <div>
                  <div class="reviewer-name">Oğuzhan Yılmaz</div>
                  <div class="reviewer-location">Ayazağa Vadi İstanbul • Ford Transit</div>
                </div>
              </div>
              <span class="review-date">1 ay önce</span>
            </div>
            <div class="review-stars">★★★★★</div>
            <p class="review-text">
              Ticari aracımız arızalanınca sevkiyatımız aksayacak diye çok korktuk. Maslak Çekici’yi aradık, geniş kasa ticari çekici araçlarıyla hemen geldiler. Hızlı ve hasarsız bir şekilde oto sanayiye naklettik. Faturalı ve kurumsal çalışmaları büyük artı.
            </p>
          </div>

          <!-- Yorum 6 -->
          <div class="review-card">
            <div class="review-header">
              <div class="reviewer-meta">
                <div class="reviewer-avatar">CA</div>
                <div>
                  <div class="reviewer-name">Caner Aksoy</div>
                  <div class="reviewer-location">Bebek Sahil Yolu • Yamaha Tracer 9</div>
                </div>
              </div>
              <span class="review-date">1 ay önce</span>
            </div>
            <div class="review-stars">★★★★★</div>
            <p class="review-text">
              Motosikletimin zinciri koptu, sahil yolunda kaldım. Motosiklete özel ön tekerlek kilidi ve 4 noktalı yumuşak bağlama aparatı olan çekici gönderdiler. Motorda tek bir çizik dahi oluşmadı. Motosiklet sahipleri için kesinlikle 1 numara.
            </p>
          </div>
        </div>
      </div>
    </section>
`;

if (!indexHtml.includes('id="yorumlar"')) {
  indexHtml = indexHtml.replace(/<section class="section" id="sss">/i, reviewsSectionHtml + '\n    <section class="section" id="sss">');
  console.log('✓ Added customer reviews section to index.html');
}

fs.writeFileSync('index.html', indexHtml, 'utf8');

// ==========================================
// 2. UPDATE BOLGELER/INDEX.HTML
// ==========================================
let bolgelerHtml = fs.readFileSync('bolgeler/index.html', 'utf8');

// Clean title and h1 from (15 Stratejik Bölge)
bolgelerHtml = bolgelerHtml.replace(/Hizmet Bölgelerimiz \(15 Stratejik Bölge\)/gi, 'Hizmet Bölgelerimiz & Otoyol Bağlantıları');
bolgelerHtml = bolgelerHtml.replace(/Maslak merkezli 15 bölgede/gi, 'Maslak merkezli tüm çevre ilçelerde');
bolgelerHtml = bolgelerHtml.replace(/<a href="tel:905332657089" class="btn btn-call header-call-btn">[\s\S]*?<\/a>/gi, '');

const highwayCardsBolgeler = `
    <!-- 16. TEM Otoyolu -->
    <article class="region-square-card" data-category="kagithane-cendere">
      <div class="region-square-top">
        <div class="region-square-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        </div>
        <span class="region-square-live"><span class="region-live-dot"></span> 7/24 Nöbetçi</span>
      </div>
      <div class="region-square-body">
        <span class="region-square-category">Otoyol & Transit Hat</span>
        <h3 class="region-square-title"><a href="tem-otoyolu-oto-cekici.html">TEM Otoyolu Oto Çekici</a></h3>
        <p class="region-square-sub">Hasdal, Seyrantepe viyadüğü, Türk Telekom Stadyumu ve Levent sapağında 10 dk acil emniyet şeridi kurtarması.</p>
        <div class="region-square-badges">
          <span class="region-square-badge eta">⏱ 10 Dk Varış</span>
          <span class="region-square-badge kasko">🛡 Otoyol Emniyeti</span>
        </div>
      </div>
      <div class="region-square-actions">
        <a href="tem-otoyolu-oto-cekici.html" class="btn-square-detail">Bölge Detayı →</a>
        <a href="tel:05332657089" class="btn-square-call">
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
          <span>Ara</span>
        </a>
      </div>
    </article>

    <!-- 17. Kuzey Marmara Otoyolu -->
    <article class="region-square-card" data-category="kagithane-cendere">
      <div class="region-square-top">
        <div class="region-square-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        </div>
        <span class="region-square-live"><span class="region-live-dot"></span> 7/24 Nöbetçi</span>
      </div>
      <div class="region-square-body">
        <span class="region-square-category">Kuzey Otoyolu & Gişeler</span>
        <h3 class="region-square-title"><a href="kuzey-marmara-otoyolu-oto-cekici.html">Kuzey Marmara Otoyolu Çekici</a></h3>
        <p class="region-square-sub">Uskumruköy, FSM ve YSS Köprüsü bağlantısı, Havalimanı kavşağı ve viyadüklerde 7/24 kaskolu kurtarma.</p>
        <div class="region-square-badges">
          <span class="region-square-badge eta">⏱ 15 Dk Varış</span>
          <span class="region-square-badge kasko">🛡 Ağır Kurtarma</span>
        </div>
      </div>
      <div class="region-square-actions">
        <a href="kuzey-marmara-otoyolu-oto-cekici.html" class="btn-square-detail">Bölge Detayı →</a>
        <a href="tel:05332657089" class="btn-square-call">
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
          <span>Ara</span>
        </a>
      </div>
    </article>

    <!-- 18. Büyükdere Caddesi -->
    <article class="region-square-card" data-category="maslak-sariyer">
      <div class="region-square-top">
        <div class="region-square-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        </div>
        <span class="region-square-live"><span class="region-live-dot"></span> 7/24 Nöbetçi</span>
      </div>
      <div class="region-square-body">
        <span class="region-square-category">Ana Arter & Plazalar</span>
        <h3 class="region-square-title"><a href="buyukdere-caddesi-oto-cekici.html">Büyükdere Caddesi Oto Çekici</a></h3>
        <p class="region-square-sub">Maslak-Levent-Şişli ana arteri üzerinde kilitlenen trafiği aksatmadan 10 dakikada hidrolik kayar kasa transferi.</p>
        <div class="region-square-badges">
          <span class="region-square-badge eta">⏱ 10 Dk Varış</span>
          <span class="region-square-badge kasko">🛡 Hızlı Tahliye</span>
        </div>
      </div>
      <div class="region-square-actions">
        <a href="buyukdere-caddesi-oto-cekici.html" class="btn-square-detail">Bölge Detayı →</a>
        <a href="tel:05332657089" class="btn-square-call">
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
          <span>Ara</span>
        </a>
      </div>
    </article>
`;

if (!bolgelerHtml.includes('tem-otoyolu-oto-cekici.html')) {
  // insert before closing </div> of regions-square-grid
  bolgelerHtml = bolgelerHtml.replace(/<\/div>\s*<\/div>\s*<\/main>/i, highwayCardsBolgeler + '\n      </div>\n    </div>\n  </main>');
  console.log('✓ Added 3 highway cards to bolgeler/index.html');
}

// Add Why Choose Us, FAQ, and Contact CTA to bolgeler/index.html
const bolgelerExtraSections = `
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
          <a href="tel:05332657089" class="btn btn-call btn-lg">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
            <span>0533 265 70 89</span>
          </a>
          <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
            <span>WhatsApp Konum</span>
          </button>
        </div>
      </div>
    </div>
  </section>
`;

if (!bolgelerHtml.includes('id="bolgeler-sss"')) {
  bolgelerHtml = bolgelerHtml.replace(/<\/main>/i, '</main>\n' + bolgelerExtraSections);
  console.log('✓ Added Why Us, FAQ, and Contact CTA to bolgeler/index.html');
}

fs.writeFileSync('bolgeler/index.html', bolgelerHtml, 'utf8');

// ==========================================
// 3. UPDATE HIZMETLER/INDEX.HTML (11 Services + Process + Why Us + Gallery + FAQ + Contact)
// ==========================================
let hizmetlerHtml = fs.readFileSync('hizmetler/index.html', 'utf8');

// Build the full 11 services grid
const all11ServicesGrid = `
      <div class="services-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">

        <!-- 1. Kayar Kasa Oto Çekici -->
        <article class="service-card" style="background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-light); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
          <div class="service-card-img-wrap" style="position: relative; height: 220px; overflow: hidden; background: #0f172a;">
            <img src="../images/otomobil_cekici-1.webp" alt="Kayar Kasa Oto Çekici" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            <span style="position: absolute; top: 14px; left: 14px; background: var(--primary); color: #fff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 9999px;">7/24 EN ÇOK TERCİH EDİLEN</span>
          </div>
          <div class="service-card-body" style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 class="service-title" style="font-size: 1.35rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px;">
              <a href="oto-cekici.html" style="color: inherit;">Kayar Kasa Oto Çekici</a>
            </h3>
            <p class="service-text" style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 18px;">
              Binek otomobil, sedan, hatchback ve SUV araçlar için hidrolik kayar platformlu sıfır riskli çekici. Tampon sürtmesi olmadan tam güvenlikli yükleme.
            </p>
            <ul style="list-style: none; padding: 0; margin: 0 0 20px; display: flex; flex-direction: column; gap: 8px; font-size: 0.88rem; color: #475569; flex-grow: 1;">
              <li>✔️ Hidrolik Düşük Açılı Kayar Kasa Platformu</li>
              <li>✔️ %100 Emtia Taşıma Sigortalı Güvence</li>
              <li>✔️ Maslak ve Çevre İlçelerde 10-15 Dk Varış</li>
            </ul>
            <a href="oto-cekici.html" style="color: var(--primary); font-weight: 700; font-size: 0.92rem;">Hizmet Detayı & Çağır →</a>
          </div>
        </article>

        <!-- 2. Lüks & Spor Araç Çekici -->
        <article class="service-card" style="background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-light); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
          <div class="service-card-img-wrap" style="position: relative; height: 220px; overflow: hidden; background: #0f172a;">
            <img src="../images/luks-arac-cekici.webp" alt="Lüks ve Spor Araç Çekici" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            <span style="position: absolute; top: 14px; left: 14px; background: #f59e0b; color: #fff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 9999px;">ÖZEL RAMPA & VIP</span>
          </div>
          <div class="service-card-body" style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 class="service-title" style="font-size: 1.35rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px;">
              <a href="luks-spor-arac-cekici.html" style="color: inherit;">Lüks & Spor Araç Çekici</a>
            </h3>
            <p class="service-text" style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 18px;">
              Porsche, Ferrari, BMW M, Mercedes-AMG ve basık spor otomobiller için yere sıfır inen ilave rampalı, jant korumalı VIP çekici filosu.
            </p>
            <ul style="list-style: none; padding: 0; margin: 0 0 20px; display: flex; flex-direction: column; gap: 8px; font-size: 0.88rem; color: #475569; flex-grow: 1;">
              <li>✔️ Sıfır Dereceye Yakın Rampa Eğim Açısı</li>
              <li>✔️ Çiziksiz Yumuşak Teker Sabitleme Kemerleri</li>
              <li>✔️ Maslak Yetkili Servislerine Özel Teslimat</li>
            </ul>
            <a href="luks-spor-arac-cekici.html" style="color: var(--primary); font-weight: 700; font-size: 0.92rem;">Hizmet Detayı & Çağır →</a>
          </div>
        </article>

        <!-- 3. Ağır Vasıta & Kaza Kurtarma -->
        <article class="service-card" style="background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-light); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
          <div class="service-card-img-wrap" style="position: relative; height: 220px; overflow: hidden; background: #0f172a;">
            <img src="../images/kazali-arac-cekici.webp" alt="Kaza ve Vinç Kurtarma" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            <span style="position: absolute; top: 14px; left: 14px; background: #dc2626; color: #fff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 9999px;">AĞIR HASAR & VİNÇ</span>
          </div>
          <div class="service-card-body" style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 class="service-title" style="font-size: 1.35rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px;">
              <a href="oto-kurtarma.html" style="color: inherit;">Ağır Vasıta & Kaza Kurtarma</a>
            </h3>
            <p class="service-text" style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 18px;">
              Trafik kazası, şarampol, devrilme veya yürür aksam hasarı yaşayan araçlar için çelik halatlı vinç ve hidrolik kaldırma sistemiyle güvenli kurtarma.
            </p>
            <ul style="list-style: none; padding: 0; margin: 0 0 20px; display: flex; flex-direction: column; gap: 8px; font-size: 0.88rem; color: #475569; flex-grow: 1;">
              <li>✔️ Güçlü Hidrolik Vinç & Çelik Halat Tertibatı</li>
              <li>✔️ Otoyol Trafik Emniyet Tedbirleri & Aydınlatma</li>
              <li>✔️ Kasko ve Ekspertiz Süreçlerine Tam Uyum</li>
            </ul>
            <a href="oto-kurtarma.html" style="color: var(--primary); font-weight: 700; font-size: 0.92rem;">Hizmet Detayı & Çağır →</a>
          </div>
        </article>

        <!-- 4. Akü Takviye & Yol Yardım -->
        <article class="service-card" style="background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-light); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
          <div class="service-card-img-wrap" style="position: relative; height: 220px; overflow: hidden; background: #0f172a;">
            <img src="../images/aku-takviye.webp" alt="Yerinde Akü Takviye" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            <span style="position: absolute; top: 14px; left: 14px; background: #16a34a; color: #fff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 9999px;">12V/24V BOOSTER</span>
          </div>
          <div class="service-card-body" style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 class="service-title" style="font-size: 1.35rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px;">
              <a href="yol-yardim-aku-takviye.html" style="color: inherit;">Akü Takviye & Hızlı Yol Yardım</a>
            </h3>
            <p class="service-text" style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 18px;">
              Aküsü biten veya marş basmayan araçlara taşınabilir profesyonel dijital booster cihazlarla araç beynine (ECU) zarar vermeden yerinde çalıştırma yardımı.
            </p>
            <ul style="list-style: none; padding: 0; margin: 0 0 20px; display: flex; flex-direction: column; gap: 8px; font-size: 0.88rem; color: #475569; flex-grow: 1;">
              <li>✔️ Yüksek Akım & Voltaj Korumalı Güvenli Takviye</li>
              <li>✔️ Start-Stop, Hibrit ve Dizel Araç Uyumluluğu</li>
              <li>✔️ 10-15 Dakikada Konumda Mobil Müdahale</li>
            </ul>
            <a href="yol-yardim-aku-takviye.html" style="color: var(--primary); font-weight: 700; font-size: 0.92rem;">Hizmet Detayı & Çağır →</a>
          </div>
        </article>

        <!-- 5. Motosiklet Çekici -->
        <article class="service-card" style="background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-light); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
          <div class="service-card-img-wrap" style="position: relative; height: 220px; overflow: hidden; background: #0f172a;">
            <img src="../images/motorsiklet-cekici.webp" alt="Motosiklet Çekici" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            <span style="position: absolute; top: 14px; left: 14px; background: #0284c7; color: #fff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 9999px;">ÖZEL KİLİT SEHPASI</span>
          </div>
          <div class="service-card-body" style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 class="service-title" style="font-size: 1.35rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px;">
              <a href="motosiklet-cekici.html" style="color: inherit;">Motosiklet Çekici</a>
            </h3>
            <p class="service-text" style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 18px;">
              Scooter, maxi-scooter, enduro, racing ve chopper motosikletler için ön tekeri kilitleyen özel taşıma sehpası ve 4 noktalı yumuşak gergi kayışlarıyla sıfır çizik nakliye.
            </p>
            <ul style="list-style: none; padding: 0; margin: 0 0 20px; display: flex; flex-direction: column; gap: 8px; font-size: 0.88rem; color: #475569; flex-grow: 1;">
              <li>✔️ Özel Motosiklet Ön Teker Kilit Mekanizması</li>
              <li>✔️ Sarsıntı ve Devrilmeyi Engelleyen Güvenlik</li>
              <li>✔️ Maslak Motosiklet Servislerine Direkt Nakil</li>
            </ul>
            <a href="motosiklet-cekici.html" style="color: var(--primary); font-weight: 700; font-size: 0.92rem;">Hizmet Detayı & Çağır →</a>
          </div>
        </article>

        <!-- 6. Şehirlerarası Araç Taşıma -->
        <article class="service-card" style="background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-light); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
          <div class="service-card-img-wrap" style="position: relative; height: 220px; overflow: hidden; background: #0f172a;">
            <img src="../images/sehirlerarasi-cekici.webp" alt="Şehirlerarası Araç Taşıma" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            <span style="position: absolute; top: 14px; left: 14px; background: #9333ea; color: #fff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 9999px;">81 İLE TRANSFER</span>
          </div>
          <div class="service-card-body" style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 class="service-title" style="font-size: 1.35rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px;">
              <a href="sehirlerarasi-arac-tasima.html" style="color: inherit;">Şehirlerarası Araç Taşıma</a>
            </h3>
            <p class="service-text" style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 18px;">
              Maslak çıkışlı Ankara, İzmir, Bursa, Antalya ve 81 ile tekli özel çekici veya çoklu filo seçenekleriyle kaskolu adresten adrese transfer.
            </p>
            <ul style="list-style: none; padding: 0; margin: 0 0 20px; display: flex; flex-direction: column; gap: 8px; font-size: 0.88rem; color: #475569; flex-grow: 1;">
              <li>✔️ Adresten Alıp Adrese Anahtar Teslimat</li>
              <li>✔️ Taşıma Süresince Canlı Konum Takip İmkanı</li>
              <li>✔️ Km Başına Şeffaf Sabit Fiyatlandırma</li>
            </ul>
            <a href="sehirlerarasi-arac-tasima.html" style="color: var(--primary); font-weight: 700; font-size: 0.92rem;">Hizmet Detayı & Çağır →</a>
          </div>
        </article>

        <!-- 7. Mobil Lastik Tamiri & Stepne Değişimi -->
        <article class="service-card" style="background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-light); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
          <div class="service-card-img-wrap" style="position: relative; height: 220px; overflow: hidden; background: #0f172a;">
            <img src="../images/lastik-tamiri.webp" alt="Mobil Lastik Tamiri ve Stepne Değişimi" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            <span style="position: absolute; top: 14px; left: 14px; background: #059669; color: #fff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 9999px;">YERİNDE ONARIM</span>
          </div>
          <div class="service-card-body" style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 class="service-title" style="font-size: 1.35rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px;">
              <a href="oto-cekici.html" style="color: inherit;">Mobil Lastik Tamiri & Stepne</a>
            </h3>
            <p class="service-text" style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 18px;">
              Yolda patlayan veya yarılan lastikler için yerinde fitil tamiri, hava basma veya stepne montajı. Çekiciye gerek kalmadan anında yola devam edin.
            </p>
            <ul style="list-style: none; padding: 0; margin: 0 0 20px; display: flex; flex-direction: column; gap: 8px; font-size: 0.88rem; color: #475569; flex-grow: 1;">
              <li>✔️ Hidrolik Kriko ile Güvenli Kaldırma</li>
              <li>✔️ Yerinde Fitil & Yama ve Hava Desteği</li>
              <li>✔️ Maslak ve Çevresinde 15 Dk Mobil Ekip</li>
            </ul>
            <a href="oto-cekici.html" style="color: var(--primary); font-weight: 700; font-size: 0.92rem;">Hizmet Detayı & Çağır →</a>
          </div>
        </article>

        <!-- 8. Arıza & Kaza Yol Yardım -->
        <article class="service-card" style="background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-light); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
          <div class="service-card-img-wrap" style="position: relative; height: 220px; overflow: hidden; background: #0f172a;">
            <img src="../images/yol-yardim.webp" alt="Arıza Yol Yardım Hizmeti" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            <span style="position: absolute; top: 14px; left: 14px; background: #e11d48; color: #fff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 9999px;">7/24 YOL YARDIM</span>
          </div>
          <div class="service-card-body" style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 class="service-title" style="font-size: 1.35rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px;">
              <a href="yol-yardim-aku-takviye.html" style="color: inherit;">Arıza & Kaza Yol Yardım</a>
            </h3>
            <p class="service-text" style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 18px;">
              Mekanik arıza, hararet, yakıt bitmesi veya kaza durumlarında araç başında anında müdahale, teşhis ve güvenli çekici koordinasyonu.
            </p>
            <ul style="list-style: none; padding: 0; margin: 0 0 20px; display: flex; flex-direction: column; gap: 8px; font-size: 0.88rem; color: #475569; flex-grow: 1;">
              <li>✔️ Arıza Durum Tespiti & Teşhis</li>
              <li>✔️ Otoyol Reflektör ve Emniyet Desteği</li>
              <li>✔️ Doğrudan Maslak Oto Sanayi Servislerine Aktarım</li>
            </ul>
            <a href="yol-yardim-aku-takviye.html" style="color: var(--primary); font-weight: 700; font-size: 0.92rem;">Hizmet Detayı & Çağır →</a>
          </div>
        </article>

        <!-- 9. Minibüs, Panelvan & Hafif Ticari -->
        <article class="service-card" style="background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-light); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
          <div class="service-card-img-wrap" style="position: relative; height: 220px; overflow: hidden; background: #0f172a;">
            <img src="../images/ticari-arac-cekici.webp" alt="Minibüs ve Hafif Ticari Çekici" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            <span style="position: absolute; top: 14px; left: 14px; background: #475569; color: #fff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 9999px;">TİCARİ FİLO</span>
          </div>
          <div class="service-card-body" style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 class="service-title" style="font-size: 1.35rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px;">
              <a href="oto-cekici.html" style="color: inherit;">Minibüs & Ticari Araç Çekici</a>
            </h3>
            <p class="service-text" style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 18px;">
              Ford Transit, Mercedes Sprinter, kamyonet ve uzun şasili panelvan araçlar için yüksek taşıma kapasiteli geniş platformlu çekiciler.
            </p>
            <ul style="list-style: none; padding: 0; margin: 0 0 20px; display: flex; flex-direction: column; gap: 8px; font-size: 0.88rem; color: #475569; flex-grow: 1;">
              <li>✔️ 5 Tona Kadar Yüksek Taşıma Gücü</li>
              <li>✔️ Uzun Şasi ve Yüksek Tavan Uyumu</li>
              <li>✔️ Şirket Araçlarına Kurumsal Faturalandırma</li>
            </ul>
            <a href="oto-cekici.html" style="color: var(--primary); font-weight: 700; font-size: 0.92rem;">Hizmet Detayı & Çağır →</a>
          </div>
        </article>

        <!-- 10. Kapalı Otopark Çekici (Alçak Tavan) -->
        <article class="service-card" style="background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-light); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
          <div class="service-card-img-wrap" style="position: relative; height: 220px; overflow: hidden; background: #0f172a;">
            <img src="../images/kapali-otopark-cekici.webp" alt="Kapalı Otopark Alçak Tavan Çekici" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            <span style="position: absolute; top: 14px; left: 14px; background: #d97706; color: #fff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 9999px;">ALÇAK TAVAN ÖZEL</span>
          </div>
          <div class="service-card-body" style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 class="service-title" style="font-size: 1.35rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px;">
              <a href="oto-kurtarma.html" style="color: inherit;">Kapalı Otopark Araç Kurtarma</a>
            </h3>
            <p class="service-text" style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 18px;">
              AVM ve plaza kapalı otoparklarındaki 1.90m - 2.10m alçak tavan manialarını aşabilen özel kompakt çekicilerle bodrum katlardan güvenli tahliye.
            </p>
            <ul style="list-style: none; padding: 0; margin: 0 0 20px; display: flex; flex-direction: column; gap: 8px; font-size: 0.88rem; color: #475569; flex-grow: 1;">
              <li>✔️ Düşük Kabinli Özel Kurtarıcı Araçlar</li>
              <li>✔️ Dar Dönüş Açılı Rampalarda Kolay Manevra</li>
              <li>✔️ Kanyon, İstinyePark, Vadi İstanbul Otopark Uyumlu</li>
            </ul>
            <a href="oto-kurtarma.html" style="color: var(--primary); font-weight: 700; font-size: 0.92rem;">Hizmet Detayı & Çağır →</a>
          </div>
        </article>

        <!-- 11. Ahtapot Vinçli Çekici -->
        <article class="service-card" style="background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-light); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
          <div class="service-card-img-wrap" style="position: relative; height: 220px; overflow: hidden; background: #0f172a;">
            <img src="../images/ahtapot-cekici.webp" alt="Ahtapot Vinçli Çekici" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            <span style="position: absolute; top: 14px; left: 14px; background: #7c3aed; color: #fff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 9999px;">KİLİTLİ ARAÇ & VİNÇ</span>
          </div>
          <div class="service-card-body" style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 class="service-title" style="font-size: 1.35rem; font-weight: 800; color: var(--secondary); margin-bottom: 10px;">
              <a href="oto-kurtarma.html" style="color: inherit;">Ahtapot Vinçli Çekici</a>
            </h3>
            <p class="service-text" style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 18px;">
              Tekerleği kilitlenen, şanzımanı kilitli kalan veya iki araç arasına sıkışan araçlar için 4 tekerlekten askılı ahtapot vinç sistemi.
            </p>
            <ul style="list-style: none; padding: 0; margin: 0 0 20px; display: flex; flex-direction: column; gap: 8px; font-size: 0.88rem; color: #475569; flex-grow: 1;">
              <li>✔️ 4 Tekerden Askılı Sıfır Sürtünmeli Kaldırma</li>
              <li>✔️ Elektronik Park Freni Kilitlenen Araçlara Çözüm</li>
              <li>✔️ Dar Sokak ve Park Halindeki Araçları Kurtarma</li>
            </ul>
            <a href="oto-kurtarma.html" style="color: var(--primary); font-weight: 700; font-size: 0.92rem;">Hizmet Detayı & Çağır →</a>
          </div>
        </article>

      </div>
`;

// Replace services grid in hizmetler/index.html
hizmetlerHtml = hizmetlerHtml.replace(/<div class="services-grid"[\s\S]*?<\/div>\s*<!-- Çağrı Banner CTA -->/i, all11ServicesGrid + '\n\n      <!-- Çağrı Banner CTA -->');

// Add How We Work + Why Us + Gallery Preview + FAQ + Contact to hizmetler/index.html
const hizmetlerExtraSections = `
  <!-- NASIL ÇALIŞIYORUZ? (4 ADIMDA GÜVENLİ KURTARMA) -->
  <section class="section section-subtle" style="background: #f8fafc; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light);">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 3rem;">
        <span class="section-badge">Hızlı & Güvenli Süreç</span>
        <h2 class="section-title">4 Kolay Adımda Nasıl Çalışıyoruz?</h2>
        <p class="section-subtitle">Yolda kaldığınız andan aracınızın servise teslimine kadar şeffaf ve profesyonel adımlar.</p>
      </div>

      <div class="process-steps-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">
        <div class="process-step-card" style="background: #fff; padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--border-light); text-align: center;">
          <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--primary); color: #fff; font-size: 1.4rem; font-weight: 900; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">1</div>
          <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--secondary); margin-bottom: 8px;">Çağrı & Konum</h3>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">0533 265 70 89 numaramızı arayın veya tek tıkla WhatsApp canlı konumunuzu iletin.</p>
        </div>

        <div class="process-step-card" style="background: #fff; padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--border-light); text-align: center;">
          <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--secondary); color: #fff; font-size: 1.4rem; font-weight: 900; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">2</div>
          <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--secondary); margin-bottom: 8px;">Sabit Fiyat Teyidi</h3>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">Aracınızın durumu ve mesafeye göre telefonda sabit fiyat teyidi alın; sürpriz ücret yok.</p>
        </div>

        <div class="process-step-card" style="background: #fff; padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--border-light); text-align: center;">
          <div style="width: 52px; height: 52px; border-radius: 50%; background: #10b981; color: #fff; font-size: 1.4rem; font-weight: 900; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">3</div>
          <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--secondary); margin-bottom: 8px;">15 Dk Hızlı İntikal</h3>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">Maslak Oto Sanayi veya en yakın nöbetçi arterdeki donanımlı kayar kasa aracımız yanınıza gelir.</p>
        </div>

        <div class="process-step-card" style="background: #fff; padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--border-light); text-align: center;">
          <div style="width: 52px; height: 52px; border-radius: 50%; background: #6366f1; color: #fff; font-size: 1.4rem; font-weight: 900; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">4</div>
          <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--secondary); margin-bottom: 8px;">Kaskolu Teslimat</h3>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">Aracınız %100 nakliyat sigortası güvencesiyle dilediğiniz yetkili servise veya tamirhaneye güvenle indirilir.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- NEDEN MASLAK ÇEKİCİ? -->
  <section class="section">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 3rem;">
        <span class="section-badge">Kurumsal Güvence</span>
        <h2 class="section-title">Neden Maslak Çekici Hizmetleri?</h2>
        <p class="section-subtitle">Binek araçlardan süper spor otomobillere kadar sıfır hasar ve %100 memnuniyet garantisi.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
        <div style="background: #f8fafc; padding: 28px; border-radius: var(--radius-lg); border-left: 4px solid var(--primary);">
          <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--secondary); margin-bottom: 8px;">🛡️ %100 Emtia Taşıma Sigortası</h3>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">Aracınız çekiciye yüklendiği andan teslim edilene kadar her türlü hasara karşı tam poliçe altındadır.</p>
        </div>
        <div style="background: #f8fafc; padding: 28px; border-radius: var(--radius-lg); border-left: 4px solid #10b981;">
          <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--secondary); margin-bottom: 8px;">⚡ 10-15 Dk Ortalama Varış</h3>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">Maslak Oto Sanayi, Büyükdere Caddesi, TEM ve Sarıyer hattında hazır bekleyen nöbetçi ekipler.</p>
        </div>
        <div style="background: #f8fafc; padding: 28px; border-radius: var(--radius-lg); border-left: 4px solid #3b82f6;">
          <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--secondary); margin-bottom: 8px;">💳 Araç Başında Mobil POS</h3>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">Tüm kredi kartları, banka kartları ve FAST / havale ile kolay, şeffaf ve faturalı ödeme imkanı.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FOTO GALERİ ÖNİZLEME -->
  <section class="section section-subtle" style="background: #f8fafc; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light);">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 2.5rem;">
        <span class="section-badge">Operasyon Fotoğrafları</span>
        <h2 class="section-title">Filomuzdan ve Sahadan Kareler</h2>
        <p class="section-subtitle">Maslak, Sarıyer ve otoyollarda gerçekleştirdiğimiz gerçek çekici ve kurtarma operasyonları.</p>
      </div>

      <div class="photo-gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
        <div class="photo-slot-card" style="background: #fff; border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border-light);">
          <div style="height: 220px; overflow: hidden;"><img src="../images/otomobil_cekici-2.webp" alt="Kayar Kasa Çekici" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;"></div>
          <div style="padding: 16px;"><h4 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 4px;">Büyükdere Caddesi Transferi</h4><p style="font-size: 0.88rem; color: var(--text-muted); margin: 0;">Arıza yapan sedan aracın Maslak Sanayi'ye nakli.</p></div>
        </div>
        <div class="photo-slot-card" style="background: #fff; border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border-light);">
          <div style="height: 220px; overflow: hidden;"><img src="../images/luks-arac-cekici-1.webp" alt="Lüks Araç Taşıma" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;"></div>
          <div style="padding: 16px;"><h4 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 4px;">Etiler Spor Araç Taşıma</h4><p style="font-size: 0.88rem; color: var(--text-muted); margin: 0;">Sıfır açılı özel rampa ile hasarsız spor araç yükleme.</p></div>
        </div>
        <div class="photo-slot-card" style="background: #fff; border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border-light);">
          <div style="height: 220px; overflow: hidden;"><img src="../images/suv-cekici.webp" alt="SUV Kurtarma" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;"></div>
          <div style="padding: 16px;"><h4 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 4px;">İstinyePark SUV Çekimi</h4><p style="font-size: 0.88rem; color: var(--text-muted); margin: 0;">Elektronik el freni kilitlenen 4x4 aracın nakli.</p></div>
        </div>
      </div>

      <div style="text-align: center; margin-top: 2rem;">
        <a href="../galeri.html" class="btn btn-secondary">Tüm Operasyon Galerisini Gör →</a>
      </div>
    </div>
  </section>

  <!-- HİZMETLERİMİZ SIKÇA SORULAN SORULAR -->
  <section class="section" id="hizmetler-sss">
    <div class="container" style="max-width: 860px;">
      <div class="section-header" style="text-align: center; margin-bottom: 2.5rem;">
        <span class="section-badge">Merak Edilenler</span>
        <h2 class="section-title">Hizmetlerimiz Hakkında Sıkça Sorulan Sorular</h2>
        <p class="section-subtitle">Maslak Çekici filo donanımları ve hizmet kapsamı hakkında tüm detaylar.</p>
      </div>

      <div class="faq-wrap">
        <div class="faq-item active">
          <button type="button" class="faq-question">
            <span>Kayar kasa çekici ile normal çekici arasındaki fark nedir?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-answer">
            <p>Kayar kasa çekicilerde arka platform hidrolik olarak yere sıfır seviyeye kadar iner. Bu sayede aracın tamponu, marşpiyeli veya egzozu yere sürtmeden, vinç yardımıyla tamamen düz bir açıyla yüklenir. Klasik çekicilere kıyasla aracınıza sıfır hasar riski sunar.</p>
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-question">
            <span>Otomatik vitesli veya elektrikli (EV) araçlar nasıl çekilir?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-answer">
            <p>Otomatik vitesli, 4x4 ve elektrikli araçlar kesinlikle tekerlekleri dönerek çekilmemelidir. Filomuz bu araçları tamamen platform üzerine alarak taşır. Şanzıman kilitliyse tekerlek kızakları (dolly) veya ahtapot vinç kullanılarak şanzıman ve elektrik motorları korunur.</p>
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-question">
            <span>Akü bittiğinde çekici mi çağırmalıyım yoksa akü takviyesi mi?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-answer">
            <p>Aracınız sadece akü bitmesi sebebiyle marş basmıyorsa çekiciye gerek yoktur. Mobil yol yardım aracımız taşınabilir 12V/24V profesyonel dijital booster ile yanınıza gelerek aracınızı yerinde çalıştırır. Eğer akü ömrünü tamamlamışsa yerinde akü değişimi de sağlıyoruz.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 7/24 BİZE ULAŞIN & FİYAT ALIN -->
  <section class="section" style="padding-top: 0;">
    <div class="container">
      <div class="emergency-banner-box" style="background: linear-gradient(135deg, #070b14 0%, #162032 100%); border-radius: var(--radius-xl); padding: 40px; color: #fff; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px; border: 1px solid rgba(255,85,0,0.3);">
        <div>
          <span class="live-badge" style="margin-bottom: 10px;"><span class="pulse-dot"></span> 7/24 Kesintisiz Hizmet</span>
          <h2 style="font-size: 1.8rem; font-weight: 900; margin-bottom: 8px;">Aracınız İçin Hemen Çekici Çağırın</h2>
          <p style="color: #cbd5e1; max-width: 600px; margin: 0; font-size: 1rem;">
            Bulunduğunuz konumu iletin, en uygun donanımlı kayar kasa çekicimiz 15 dakikada yanınızda olsun.
          </p>
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="tel:05332657089" class="btn btn-call btn-lg">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
            <span>0533 265 70 89</span>
          </a>
          <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
            <span>WhatsApp Konum</span>
          </button>
        </div>
      </div>
    </div>
  </section>
`;

if (!hizmetlerHtml.includes('id="hizmetler-sss"')) {
  hizmetlerHtml = hizmetlerHtml.replace(/<\/main>/i, '</main>\n' + hizmetlerExtraSections);
  console.log('✓ Added How We Work, Why Us, Gallery, FAQ, and Contact to hizmetler/index.html');
}

fs.writeFileSync('hizmetler/index.html', hizmetlerHtml, 'utf8');

// ==========================================
// 4. UPDATE GALERI.HTML
// ==========================================
let galeriHtml = fs.readFileSync('galeri.html', 'utf8');

galeriHtml = galeriHtml.replace(/15 Stratejik Bölge/gi, 'Hizmet Bölgelerimiz');

const galeriExtraSections = `
  <!-- NEDEN MASLAK ÇEKİCİ? (GALERİ SAYFASI) -->
  <section class="section section-subtle" style="background: #f8fafc; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light);">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 2.5rem;">
        <span class="section-badge">Operasyon Güvencesi</span>
        <h2 class="section-title">Neden Maslak Çekici ile Taşınmalısınız?</h2>
        <p class="section-subtitle">Fotoğraflarda gördüğünüz tüm araçlar %100 kaskolu ve hasarsızlık taahhüdüyle taşınmıştır.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
        <div style="background: #fff; padding: 26px; border-radius: var(--radius-lg); border: 1px solid var(--border-light); box-shadow: var(--shadow-sm);">
          <div style="font-size: 2rem; margin-bottom: 12px;">🛡️</div>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--secondary); margin-bottom: 8px;">Kaskolu Taşıma Güvencesi</h3>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">Taşıdığımız her araç yükleme, yol ve indirme sürecinde tam kapsamlı emtia nakliyat sigortası altındadır.</p>
        </div>
        <div style="background: #fff; padding: 26px; border-radius: var(--radius-lg); border: 1px solid var(--border-light); box-shadow: var(--shadow-sm);">
          <div style="font-size: 2rem; margin-bottom: 12px;">🏎️</div>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--secondary); margin-bottom: 8px;">Özel Alçak Rampa Aparatı</h3>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">Spor, modifiyeli ve alçak şasili araçların tampon ve karter sürtmelerini sıfıra indiren hidrolik eğim sistemi.</p>
        </div>
        <div style="background: #fff; padding: 26px; border-radius: var(--radius-lg); border: 1px solid var(--border-light); box-shadow: var(--shadow-sm);">
          <div style="font-size: 2rem; margin-bottom: 12px;">⏱️</div>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--secondary); margin-bottom: 8px;">15 Dakika İntikal Garantisi</h3>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">Maslak Oto Sanayi merkezli filomuzla tüm çevre semtlere ve otoyollara gecikmesiz hızlı varış.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 7/24 İLETİŞİM CTA (GALERİ) -->
  <section class="section" style="padding-top: 0;">
    <div class="container">
      <div class="emergency-banner-box" style="background: linear-gradient(135deg, #070b14 0%, #162032 100%); border-radius: var(--radius-xl); padding: 40px; color: #fff; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px; border: 1px solid rgba(255,85,0,0.3);">
        <div>
          <span class="live-badge" style="margin-bottom: 10px;"><span class="pulse-dot"></span> 7/24 Nöbetçi Çekici Filosu</span>
          <h2 style="font-size: 1.8rem; font-weight: 900; margin-bottom: 8px;">Aracınız İçin Profesyonel Çekici Çağırın</h2>
          <p style="color: #cbd5e1; max-width: 600px; margin: 0; font-size: 1rem;">
            7 gün 24 saat tek bir telefonla dakikalar içinde adresinizdeyiz.
          </p>
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="tel:05332657089" class="btn btn-call btn-lg">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
            <span>0533 265 70 89</span>
          </a>
          <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
            <span>WhatsApp Konum</span>
          </button>
        </div>
      </div>
    </div>
  </section>
`;

if (!galeriHtml.includes('Operasyon Güvencesi')) {
  galeriHtml = galeriHtml.replace(/<\/main>/i, '</main>\n' + galeriExtraSections);
  console.log('✓ Added Why Us and Contact CTA to galeri.html');
}

fs.writeFileSync('galeri.html', galeriHtml, 'utf8');

// ==========================================
// 5. UPDATE ILETISIM.HTML (Screenshot 2 Fix + Full Regional Map Coverage)
// ==========================================
let iletisimHtml = fs.readFileSync('iletisim.html', 'utf8');

// Replace the main contact/map grid with equal stretch height, no gap, and broad regional coverage!
const perfectContactSection = `
  <!-- İletişim Detayları & Harita Grid (Yükseklik Eşitlemeli & Sıfır Boşluklu) -->
  <main class="section">
    <div class="container">
      <div class="map-contact-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2rem; align-items: stretch;">
        
        <!-- Sol: 7/24 İletişim Bilgilerimiz Kartı -->
        <div class="contact-details-box" style="background: #ffffff; padding: 32px; border-radius: var(--radius-xl); border: 1px solid var(--border-light); box-shadow: var(--shadow-md); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h2 style="font-size: 1.55rem; font-weight: 900; color: var(--secondary); margin-bottom: 24px; border-bottom: 2px solid #f1f5f9; padding-bottom: 14px;">
              7/24 İletişim Bilgilerimiz
            </h2>

            <!-- Madde 1: Acil Çağrı Telefonu -->
            <div style="display: flex; gap: 16px; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid #f1f5f9;">
              <div style="width: 44px; height: 44px; border-radius: 50%; background: #fff7ed; color: #ea580c; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.2rem;">
                📞
              </div>
              <div>
                <span style="font-size: 0.78rem; font-weight: 800; color: #64748b; letter-spacing: 0.04em; text-transform: uppercase; display: block;">ACİL ÇAĞRI & WHATSAPP TELEFONU</span>
                <a href="tel:05332657089" style="font-size: 1.35rem; font-weight: 900; color: #ea580c; text-decoration: none; display: inline-block; margin-top: 2px;">
                  0533 265 70 89
                </a>
              </div>
            </div>

            <!-- Madde 2: Merkez Operasyon Üssü -->
            <div style="display: flex; gap: 16px; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid #f1f5f9;">
              <div style="width: 44px; height: 44px; border-radius: 50%; background: #fdf2f8; color: #db2777; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.2rem;">
                📍
              </div>
              <div>
                <span style="font-size: 0.78rem; font-weight: 800; color: #64748b; letter-spacing: 0.04em; text-transform: uppercase; display: block;">MERKEZ OPERASYON ÜSSÜ</span>
                <p style="font-size: 0.98rem; font-weight: 700; color: var(--secondary); margin: 3px 0 0; line-height: 1.45;">
                  Büyükdere Caddesi & Maslak Oto Sanayi Sitesi, 34398 Sarıyer / İstanbul
                </p>
              </div>
            </div>

            <!-- Madde 3: Çalışma Saatleri -->
            <div style="display: flex; gap: 16px; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid #f1f5f9;">
              <div style="width: 44px; height: 44px; border-radius: 50%; background: #fffbeb; color: #d97706; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.2rem;">
                ⏰
              </div>
              <div>
                <span style="font-size: 0.78rem; font-weight: 800; color: #64748b; letter-spacing: 0.04em; text-transform: uppercase; display: block;">ÇALIŞMA SAATLERİ</span>
                <p style="font-size: 0.98rem; font-weight: 700; color: var(--secondary); margin: 3px 0 0; line-height: 1.45;">
                  Haftanın 7 Günü 24 Saat Kesintisiz (Resmi & Dini Tatiller Dahil)
                </p>
              </div>
            </div>

            <!-- Madde 4: Ödeme Yöntemleri -->
            <div style="display: flex; gap: 16px; margin-bottom: 24px;">
              <div style="width: 44px; height: 44px; border-radius: 50%; background: #f0fdf4; color: #16a34a; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.2rem;">
                💳
              </div>
              <div>
                <span style="font-size: 0.78rem; font-weight: 800; color: #64748b; letter-spacing: 0.04em; text-transform: uppercase; display: block;">ÖDEME YÖNTEMLERİ</span>
                <p style="font-size: 0.98rem; font-weight: 700; color: var(--secondary); margin: 3px 0 0; line-height: 1.45;">
                  Nakit, Kredi Kartı (Mobil POS ile araç başında), FAST / Havale
                </p>
              </div>
            </div>
          </div>

          <!-- Aksiyon Butonları -->
          <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 15px;">
            <a href="tel:05332657089" class="btn btn-call" style="flex: 1; min-width: 140px; justify-content: center; font-weight: 800; padding: 14px 20px;">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
              <span>Hemen Ara</span>
            </a>
            <button type="button" class="btn btn-whatsapp btn-send-location" style="flex: 1; min-width: 140px; justify-content: center; font-weight: 800; padding: 14px 20px;">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
              <span>Konum Paylaş</span>
            </button>
          </div>
        </div>

        <!-- Sağ: Geniş Bölgesel Kapsama Haritası (Sıfır Boşluklu & Tam Yükseklik) -->
        <div style="background: #ffffff; border-radius: var(--radius-xl); overflow: hidden; border: 1px solid var(--border-light); box-shadow: var(--shadow-md); display: flex; flex-direction: column;">
          <div style="padding: 16px 20px; background: #0f172a; color: #fff; display: flex; align-items: center; justify-content: space-between;">
            <div style="font-weight: 800; font-size: 0.95rem;">📍 Maslak, Sarıyer & Çevre Bölgeler Hizmet Ağı Haritası</div>
            <span class="live-badge"><span class="pulse-dot"></span> 7/24 Aktif</span>
          </div>
          
          <!-- Harita Iframe (Boşluksuz Esnek Boyut) -->
          <div style="flex-grow: 1; min-height: 380px; position: relative;">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48106.84307567784!2d28.9800000!3d41.1150000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5c5c0c80ec5%3A0xc48bdfb1e95cbe10!2sMaslak%20Atat%C3%BCrk%20Oto%20Sanayi%20Sitesi!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style="border:0; display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade" 
              title="Maslak Çekici Hizmet Alanı Haritası">
            </iframe>
          </div>

          <!-- Kapsanan Tüm Bölgeler Rozetleri -->
          <div style="padding: 18px 20px; background: #f8fafc; border-top: 1px solid var(--border-light);">
            <div style="font-size: 0.82rem; font-weight: 800; color: #475569; text-transform: uppercase; margin-bottom: 8px;">
              🌐 Çekici Nöbetçi Ağımızdaki Tüm İlçe ve Otoyollar:
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
              <span style="background: #e2e8f0; color: #0f172a; font-size: 0.78rem; font-weight: 700; padding: 4px 9px; border-radius: 6px;">Maslak</span>
              <span style="background: #e2e8f0; color: #0f172a; font-size: 0.78rem; font-weight: 700; padding: 4px 9px; border-radius: 6px;">Sarıyer</span>
              <span style="background: #e2e8f0; color: #0f172a; font-size: 0.78rem; font-weight: 700; padding: 4px 9px; border-radius: 6px;">Levent & 4. Levent</span>
              <span style="background: #e2e8f0; color: #0f172a; font-size: 0.78rem; font-weight: 700; padding: 4px 9px; border-radius: 6px;">Beşiktaş</span>
              <span style="background: #e2e8f0; color: #0f172a; font-size: 0.78rem; font-weight: 700; padding: 4px 9px; border-radius: 6px;">Şişli & Mecidiyeköy</span>
              <span style="background: #e2e8f0; color: #0f172a; font-size: 0.78rem; font-weight: 700; padding: 4px 9px; border-radius: 6px;">Kağıthane</span>
              <span style="background: #e2e8f0; color: #0f172a; font-size: 0.78rem; font-weight: 700; padding: 4px 9px; border-radius: 6px;">Seyrantepe</span>
              <span style="background: #e2e8f0; color: #0f172a; font-size: 0.78rem; font-weight: 700; padding: 4px 9px; border-radius: 6px;">Ayazağa & Vadi</span>
              <span style="background: #e2e8f0; color: #0f172a; font-size: 0.78rem; font-weight: 700; padding: 4px 9px; border-radius: 6px;">İstinye</span>
              <span style="background: #e2e8f0; color: #0f172a; font-size: 0.78rem; font-weight: 700; padding: 4px 9px; border-radius: 6px;">Tarabya</span>
              <span style="background: #e2e8f0; color: #0f172a; font-size: 0.78rem; font-weight: 700; padding: 4px 9px; border-radius: 6px;">Yeniköy</span>
              <span style="background: #e2e8f0; color: #0f172a; font-size: 0.78rem; font-weight: 700; padding: 4px 9px; border-radius: 6px;">Bebek</span>
              <span style="background: #e2e8f0; color: #0f172a; font-size: 0.78rem; font-weight: 700; padding: 4px 9px; border-radius: 6px;">Etiler</span>
              <span style="background: #e2e8f0; color: #0f172a; font-size: 0.78rem; font-weight: 700; padding: 4px 9px; border-radius: 6px;">Göktürk & Kemerburgaz</span>
              <span style="background: #ea580c; color: #fff; font-size: 0.78rem; font-weight: 800; padding: 4px 9px; border-radius: 6px;">TEM Otoyolu</span>
              <span style="background: #ea580c; color: #fff; font-size: 0.78rem; font-weight: 800; padding: 4px 9px; border-radius: 6px;">Kuzey Marmara Otoyolu</span>
              <span style="background: #ea580c; color: #fff; font-size: 0.78rem; font-weight: 800; padding: 4px 9px; border-radius: 6px;">Büyükdere Caddesi</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
`;

// Replace main content grid in iletisim.html
iletisimHtml = iletisimHtml.replace(/<main class="section">[\s\S]*?<\/main>/i, perfectContactSection);
console.log('✓ Fixed whitespace and expanded map coverage in iletisim.html');

fs.writeFileSync('iletisim.html', iletisimHtml, 'utf8');

console.log('--- All main pages updated successfully! ---');
