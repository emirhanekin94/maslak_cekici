const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace the aggregate rating and close of areaServed
const oldPartRegex = /"name":\s*"Göktürk & Kemerburgaz"\s*\}\s*\]\s*,\s*"aggregateRating":\s*\{[\s\S]*?"worstRating":\s*"1"\s*\}\s*\},/i;

const newPart = `"name": "Göktürk & Kemerburgaz"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Baltalimanı"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Zekeriyaköy"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Kilyos"
          },
          {
            "@type": "AdministrativeArea",
            "name": "TEM Otoyolu"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Kuzey Marmara Otoyolu"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Maslak Çekici Hizmet Kataloğu",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Kayar Kasa Oto Çekici",
                "description": "Binek ve SUV araçlar için hidrolik kayar platformlu güvenli çekici."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "7/24 Acil Kurtarma",
                "description": "Kaza, devrilme ve acil şarampol kurtarma operasyonları."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Lüks & Spor Araç Taşıma",
                "description": "Basık şasili, spor ve lüks otomobiller için sıfır dereceli rampa ile hasarsız taşıma."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Akü Takviye & Mobil Yol Yardım",
                "description": "Yerinde 12V/24V profesyonel akü takviye ve şarj kontrolü."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Motosiklet Taşıma",
                "description": "Devrilme önleyici özel tekerlek kilitli aparatlarla motosiklet nakli."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Şehirlerarası Araç Taşıma",
                "description": "İstanbul çıkışlı tüm illere kaskolu çoklu veya tekli araç transferi."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobil Lastik Tamiri & Stepne Değişimi",
                "description": "Yolda patlayan veya inen lastiklerin yerinde onarımı."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hafif Ticari Araç Çekici",
                "description": "Minibüs, panelvan ve kamyonetler için uzun şasili ağır tonaj çekici."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Kapalı Otopark Çekicisi",
                "description": "Alçak tavanlı AVM ve rezidans kapalı otoparklarına özel kurtarıcı."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ahtapot Çekici (Vinçli Kurtarıcı)",
                "description": "Kilitli veya hareket edemeyen araçlar için 4 tekerden vinçli kaldırma."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Acil Yakıt Desteği",
                "description": "Yakıtı biten sürücülere yerinde benzin veya motorin temini."
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "284",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://maslakotocekici.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://maslakotocekici.com/"
          }
        ]
      },`;

if (oldPartRegex.test(html)) {
  html = html.replace(oldPartRegex, newPart);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Successfully updated index.html Schema JSON-LD!');
} else {
  console.error('Regex did not match in index.html');
}
