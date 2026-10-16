const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

const COMPRESSIBLE_EXTS = new Set(['.html', '.css', '.js', '.json', '.svg', '.xml', '.txt']);

let currentPort = parseInt(process.env.PORT, 10) || 3000;

function startServer(port) {
  const currentServer = http.createServer((req, res) => {
    let cleanUrl = req.url.split('?')[0];
    if (cleanUrl === '/' || cleanUrl === '') {
      cleanUrl = '/index.html';
    }

    cleanUrl = decodeURIComponent(cleanUrl);
    let filePath = path.join(__dirname, cleanUrl);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    } else if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, {
          'Content-Type': 'text/html; charset=utf-8',
          'X-Content-Type-Options': 'nosniff'
        });
        res.end('<h1>404 - Sayfa Bulunamadı</h1><p><a href="/">Ana Sayfaya Dön</a></p>');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      // Security and PageSpeed optimization headers
      const headers = {
        'Content-Type': contentType,
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      };

      // Caching policy based on resource type
      if (['.webp', '.png', '.jpg', '.jpeg', '.svg', '.ico', '.woff', '.woff2', '.ttf'].includes(ext)) {
        headers['Cache-Control'] = 'public, max-age=31536000, immutable';
      } else if (['.css', '.js'].includes(ext)) {
        headers['Cache-Control'] = 'public, max-age=31536000, immutable';
      } else if (['.html', '.xml', '.json', '.txt'].includes(ext)) {
        headers['Cache-Control'] = 'public, max-age=3600, stale-while-revalidate=86400';
      }

      // Check gzip / deflate compression for text & SVG
      const acceptEncoding = req.headers['accept-encoding'] || '';
      if (COMPRESSIBLE_EXTS.has(ext)) {
        headers['Vary'] = 'Accept-Encoding';

        if (acceptEncoding.includes('gzip')) {
          headers['Content-Encoding'] = 'gzip';
          zlib.gzip(data, (compressErr, compressedData) => {
            if (compressErr) {
              res.writeHead(200, headers);
              res.end(data);
            } else {
              headers['Content-Length'] = compressedData.length;
              res.writeHead(200, headers);
              res.end(compressedData);
            }
          });
          return;
        } else if (acceptEncoding.includes('deflate')) {
          headers['Content-Encoding'] = 'deflate';
          zlib.deflate(data, (compressErr, compressedData) => {
            if (compressErr) {
              res.writeHead(200, headers);
              res.end(data);
            } else {
              headers['Content-Length'] = compressedData.length;
              res.writeHead(200, headers);
              res.end(compressedData);
            }
          });
          return;
        }
      }

      headers['Content-Length'] = data.length;
      res.writeHead(200, headers);
      res.end(data);
    });
  });

  currentServer.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`⚠️ Port ${port} başka bir uygulama tarafından kullanılıyor. Port ${port + 1} deneniyor...`);
      startServer(port + 1);
    } else {
      console.error('Sunucu hatası:', err);
    }
  });

  currentServer.listen(port, () => {
    console.log(`\n🚀 Maslak Çekici Yüksek Hızlı Sunucu Yayında!`);
    console.log(`🌐 Adres: http://localhost:${port}`);
    console.log(`⚡ Gzip Sıkıştırma, 1 Yıllık Önbellekleme (Cache-Control) & Güvenlik Başlıkları Aktif.\n`);
  });
}

startServer(currentPort);
