const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!['node_modules', '.git'].includes(file)) getHtmlFiles(fullPath, files);
    } else if (file.endsWith('.html')) files.push(fullPath);
  });
  return files;
}

const missingPreconnect = [];
const missingFontDisplay = [];

getHtmlFiles('.').forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative('.', file).replace(/\\/g, '/');

  if (!content.includes('fonts.gstatic.com')) {
    missingPreconnect.push(rel);
  }
  if (content.includes('fonts.googleapis.com') && !content.includes('display=swap')) {
    missingFontDisplay.push(rel);
  }
});

console.log('Files missing preconnect to fonts.gstatic.com:', missingPreconnect.length);
console.log('Files missing display=swap on Google Fonts:', missingFontDisplay.length);
if (missingPreconnect.length > 0) console.log('Sample missing preconnect:', missingPreconnect);
