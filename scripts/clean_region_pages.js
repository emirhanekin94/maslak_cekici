const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'generate_regions.js');
let code = fs.readFileSync(scriptPath, 'utf8');

// Replace top bar and nav in buildRegionPage
code = code.replace(
  `        <div class="top-bar-left">
          <span class="live-badge"><span class="pulse-dot"></span> 7/24 Canlı Nöbetçi Çekici</span>
          <span>\${reg.name} & Maslak Merkezli 15 Bölgede 10-15 Dk Varış</span>
        </div>
        <div class="top-bar-right">
          <a href="tel:\${PHONE_RAW}" class="top-bar-link">
            <span>📞 7/24 Acil: <strong>\${PHONE}</strong></span>
          </a>
        </div>`,
  `        <div class="top-bar-left">
          <span class="live-badge"><span class="pulse-dot"></span> 7/24 Canlı Nöbetçi Çekici</span>
          <span>\${reg.name} & Maslak Çevresinde 10-15 Dk Varış</span>
        </div>`
);

code = code.replace(
  `        <nav class="main-nav" aria-label="Ana Menü">
          <ul class="nav-list">
            <li><a href="../index.html" class="nav-link">Ana Sayfa</a></li>
            <li><a href="index.html" class="nav-link active">Bölgelerimiz (15 Bölge)</a></li>
            <li><a href="../hizmetler/oto-cekici.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="../galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="../hakkimizda.html" class="nav-link">Hakkımızda</a></li>
            <li><a href="../iletisim.html" class="nav-link">İletişim</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <a href="tel:\${PHONE_RAW}" class="btn btn-call header-call-btn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
            <span>\${PHONE}</span>
          </a>
          <button type="button" class="menu-toggle-btn" aria-label="Menüyü Aç/Kapat" aria-expanded="false">`,
  `        <nav class="main-nav" aria-label="Ana Menü">
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
          <button type="button" class="menu-toggle-btn" aria-label="Menüyü Aç/Kapat" aria-expanded="false">`
);

code = code.replace(/Tüm 15 Bölgeyi İncele →/g, 'Tüm Bölgelerimizi İncele →');
code = code.replace(/Tüm 15 Bölgeyi Gör →/g, 'Tüm Bölgeleri Gör →');
code = code.replace(/Maslak Merkezli 15 Bölgede/g, 'Maslak ve Çevre Bölgelerde');

fs.writeFileSync(scriptPath, code, 'utf8');
console.log('✓ Cleaned buildRegionPage in generate_regions.js');
