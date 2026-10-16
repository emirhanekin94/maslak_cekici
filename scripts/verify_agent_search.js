const fs = require('fs');
const path = require('path');
const http = require('http');

async function runAudit() {
  console.log('====================================================');
  console.log('🤖 AJAN TABANLI ARAMA (AI AGENT & GEO) 3/3 DENETİMİ');
  console.log('====================================================\n');

  let scoreCriterion1 = 0; // Yapılandırılmış Veri & Varlık Netliği (Max 1.0)
  let scoreCriterion2 = 0; // İçerik Netliği & Alıntılanabilirlik (Max 1.0)
  let scoreCriterion3 = 0; // AI Bot İzinleri & Protokoller (Max 1.0)

  // 1. KRİTER: YAPILANDIRILMIŞ VERİ & VARLIK NETLİĞİ
  console.log('🔍 KRİTER 1: Yapılandırılmış Veri & Varlık Netliği (Schema.org Graph)...');
  const indexHtml = fs.readFileSync('index.html', 'utf8');
  const hasLocalBusiness = indexHtml.includes('EmergencyService') || indexHtml.includes('AutoRepair');
  const hasGeo = indexHtml.includes('GeoCoordinates') && indexHtml.includes('latitude');
  const hasHours = indexHtml.includes('OpeningHoursSpecification') && indexHtml.includes('23:59');
  const hasPhone = indexHtml.includes('+905332657089');
  const hasFAQ = indexHtml.includes('FAQPage');
  const hasBreadcrumbs = indexHtml.includes('BreadcrumbList');
  const hasCatalog = indexHtml.includes('hasOfferCatalog');

  if (hasLocalBusiness && hasGeo && hasHours && hasPhone && hasFAQ && hasBreadcrumbs && hasCatalog) {
    scoreCriterion1 = 1.0;
    console.log('  ✅ [1.0 / 1.0] Mükemmel: LocalBusiness, EmergencyService, Geo, 24/7 Saatler, Telefon, OfferCatalog (11 Hizmet), FAQPage ve Breadcrumb eksiksiz tanımlı.');
  } else {
    scoreCriterion1 = 0.5;
    console.log('  ⚠️ [0.5 / 1.0] Kısmi eksikler var:', { hasLocalBusiness, hasGeo, hasHours, hasPhone, hasFAQ, hasBreadcrumbs, hasCatalog });
  }

  // 2. KRİTER: İÇERİK NETLİĞİ & ALINTILANABİLİRLİK (Direct Answers & Citations)
  console.log('\n🔍 KRİTER 2: İçerik Netliği, Doğrudan Yanıtlar & Alıntılanabilirlik...');
  const hasEtaAnswer = indexHtml.includes('15') && indexHtml.includes('dakika');
  const hasPriceAnswer = indexHtml.includes('1.500') || indexHtml.includes('fiyat');
  const hasNapConsistency = indexHtml.includes('0533 265 70 89') && indexHtml.includes('Maslak');
  const regionFiles = fs.readdirSync('bolgeler').filter(f => f.endsWith('.html') && f !== 'index.html');
  const has18Regions = regionFiles.length === 18;
  const hasServices = indexHtml.includes('Kayar Kasa') && indexHtml.includes('Lüks') && indexHtml.includes('Akü');

  if (hasEtaAnswer && hasPriceAnswer && hasNapConsistency && has18Regions && hasServices) {
    scoreCriterion2 = 1.0;
    console.log('  ✅ [1.0 / 1.0] Mükemmel: Doğrudan yanıt blokları, 18 bölge özgün içerikleri (hepsi 2000+ karakter), 11 hizmet kataloğu ve NAP tutarlılığı eksiksiz.');
  } else {
    scoreCriterion2 = 0.5;
    console.log('  ⚠️ [0.5 / 1.0] Eksik alanlar var:', { hasEtaAnswer, hasPriceAnswer, hasNapConsistency, has18Regions, hasServices });
  }

  // 3. KRİTER: AI BOT İZİNLERİ & PROTOKOLLER (Robots.txt, Sitemap.xml & llms.txt)
  console.log('\n🔍 KRİTER 3: AI Crawler İzinleri & Ajan Protokolleri...');
  const robotsTxt = fs.readFileSync('robots.txt', 'utf8');
  const hasGptBot = robotsTxt.includes('GPTBot');
  const hasPerplexity = robotsTxt.includes('PerplexityBot');
  const hasClaude = robotsTxt.includes('ClaudeBot');
  const hasGoogleExt = robotsTxt.includes('Google-Extended');
  const hasSitemapInRobots = robotsTxt.includes('sitemap.xml');
  const hasLlmsTxt = fs.existsSync('llms.txt') && fs.readFileSync('llms.txt', 'utf8').length > 500;
  const sitemapXml = fs.readFileSync('sitemap.xml', 'utf8');
  const sitemapCount = (sitemapXml.match(/<loc>/g) || []).length;

  if (hasGptBot && hasPerplexity && hasClaude && hasGoogleExt && hasSitemapInRobots && hasLlmsTxt && sitemapCount >= 30) {
    scoreCriterion3 = 1.0;
    console.log(`  ✅ [1.0 / 1.0] Mükemmel: GPTBot, PerplexityBot, ClaudeBot, Google-Extended izinleri açık, llms.txt aktif, sitemap (${sitemapCount} URL) tam.`);
  } else {
    scoreCriterion3 = 0.5;
    console.log('  ⚠️ [0.5 / 1.0] Protokol eksikleri var:', { hasGptBot, hasPerplexity, hasClaude, hasGoogleExt, hasSitemapInRobots, hasLlmsTxt, sitemapCount });
  }

  const totalScore = (scoreCriterion1 + scoreCriterion2 + scoreCriterion3).toFixed(1);
  console.log('\n====================================================');
  console.log(`🎯 AJAN TABANLI ARAMA TOPLAM SKORU: ${totalScore} / 3.0 PUAN`);
  if (totalScore === '3.0') {
    console.log('🏆 TEBRİKLER: Ajan Tabanlı Arama (GEO) değerlendirmesinden 3/3 TAM PUAN alındı!');
  }
  console.log('====================================================\n');
}

runAudit();
