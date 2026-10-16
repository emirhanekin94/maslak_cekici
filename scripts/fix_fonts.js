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

const htmlFiles = getHtmlFiles('.');
let updated = 0;

const modernFontMarkup = `  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap">
  </noscript>`;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // If it has plain render-blocking fonts.googleapis.com without media="print"
  if (content.includes('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans') && !content.includes("media='all'")) {
    // Replace the plain link tag
    content = content.replace(/<link\s+rel=["']stylesheet["']\s+href=["']https:\/\/fonts\.googleapis\.com\/css2\?family=Plus\+Jakarta\+Sans[^"']*["']>/gi, modernFontMarkup);

    // If preconnect was missing, make sure it wasn't duplicated
    // Clean up any double preconnect
    content = content.replace(/(<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">\s*){2,}/g, '$1');
  } else if (!content.includes('https://fonts.googleapis.com') && content.includes('<head>')) {
    // If it didn't have fonts link at all, add it before </head> or before style.css
    content = content.replace(/(<link\s+[^>]*href=["'][^"']*style\.css["'][^>]*>)/i, `${modernFontMarkup}\n  $1`);
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    updated++;
    console.log('Optimized fonts in:', path.relative('.', file));
  }
});

console.log(`Finished. Updated font loading in ${updated} files.`);
