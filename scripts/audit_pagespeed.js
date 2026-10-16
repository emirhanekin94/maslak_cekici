const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!['node_modules', '.git'].includes(file)) {
        getHtmlFiles(fullPath, files);
      }
    } else if (file.endsWith('.html')) {
      files.push(fullPath);
    }
  });
  return files;
}

const htmlFiles = getHtmlFiles('.');
console.log('Total HTML files:', htmlFiles.length);

const results = {
  totalHtmlFiles: htmlFiles.length,
  missingTitle: [],
  missingMetaDesc: [],
  missingCanonical: [],
  missingViewport: [],
  missingLang: [],
  missingH1: [],
  missingJsonLd: [],
  invalidJsonLd: [],
  missingImgAlt: [],
  missingImgDimensions: [],
  missingAriaOnButtons: [],
  missingAriaOnEmptyLinks: [],
  inputsMissingLabel: []
};

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative('.', file).replace(/\\/g, '/');

  if (!content.includes('<title>')) results.missingTitle.push(relPath);
  if (!content.includes('name="description"')) results.missingMetaDesc.push(relPath);
  if (!content.includes('rel="canonical"')) results.missingCanonical.push(relPath);
  if (!content.includes('name="viewport"')) results.missingViewport.push(relPath);
  if (!content.includes('<html lang="tr"')) results.missingLang.push(relPath);
  if (!content.match(/<h1[^>]*>.*?<\/h1>/is)) results.missingH1.push(relPath);

  // Check Schema JSON-LD
  const jsonLdMatches = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
  if (!jsonLdMatches || jsonLdMatches.length === 0) {
    results.missingJsonLd.push(relPath);
  } else {
    jsonLdMatches.forEach(tag => {
      const jsonStr = tag.replace(/<script type="application\/ld\+json">/i, '').replace(/<\/script>/i, '').trim();
      try {
        JSON.parse(jsonStr);
      } catch (err) {
        results.invalidJsonLd.push({ file: relPath, error: err.message });
      }
    });
  }

  // Check img tags
  const imgRegex = /<img\s+([^>]+)>/gi;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const attrs = match[1];
    if (!attrs.includes('alt=')) {
      results.missingImgAlt.push({ file: relPath, tag: match[0] });
    }
    if (!attrs.includes('width=') || !attrs.includes('height=')) {
      results.missingImgDimensions.push({ file: relPath, tag: match[0] });
    }
  }

  // Check buttons without text or aria-label
  const btnRegex = /<button\s*([^>]*)>(.*?)<\/button>/gis;
  while ((match = btnRegex.exec(content)) !== null) {
    const attrs = match[1];
    const inner = match[2].trim().replace(/<[^>]*>/g, '').trim();
    if (!inner && !attrs.includes('aria-label')) {
      results.missingAriaOnButtons.push({ file: relPath, tag: match[0].substring(0, 80) });
    }
  }

  // Check links with only icons or no text and no aria-label
  const aRegex = /<a\s+([^>]+)>(.*?)<\/a>/gis;
  while ((match = aRegex.exec(content)) !== null) {
    const attrs = match[1];
    const inner = match[2].trim().replace(/<[^>]*>/g, '').trim();
    if (!inner && !attrs.includes('aria-label') && !attrs.includes('title')) {
      results.missingAriaOnEmptyLinks.push({ file: relPath, tag: match[0].substring(0, 80) });
    }
  }

  // Check inputs, selects, textareas
  const ctrlRegex = /<(input|select|textarea)\s+([^>]+)>/gi;
  while ((match = ctrlRegex.exec(content)) !== null) {
    const type = match[1].toLowerCase();
    const attrs = match[2];
    if (attrs.includes('type="hidden"') || attrs.includes('type="submit"') || attrs.includes('type="button"')) continue;

    const hasAria = attrs.includes('aria-label') || attrs.includes('aria-labelledby');
    const idMatch = attrs.match(/id=["']([^"']+)["']/i);
    let hasLabelFor = false;
    if (idMatch) {
      const idVal = idMatch[1];
      if (content.includes(`for="${idVal}"`) || content.includes(`for='${idVal}'`)) {
        hasLabelFor = true;
      }
    }

    if (!hasAria && !hasLabelFor) {
      results.inputsMissingLabel.push({ file: relPath, tag: match[0].substring(0, 100) });
    }
  }
});

console.log('--- COMPREHENSIVE PAGESPEED & AI AUDIT ---');
console.log('Total HTML files:', results.totalHtmlFiles);
console.log('Missing <html lang="tr">: ', results.missingLang.length);
console.log('Missing <title>:          ', results.missingTitle.length);
console.log('Missing meta description: ', results.missingMetaDesc.length);
console.log('Missing canonical link:   ', results.missingCanonical.length);
console.log('Missing viewport:         ', results.missingViewport.length);
console.log('Missing <h1>:             ', results.missingH1.length);
console.log('Missing Schema JSON-LD:   ', results.missingJsonLd.length);
console.log('Invalid JSON-LD syntax:   ', results.invalidJsonLd.length);
console.log('<img> missing alt:        ', results.missingImgAlt.length);
console.log('<img> missing dimensions: ', results.missingImgDimensions.length);
console.log('Buttons missing aria/text:', results.missingAriaOnButtons.length);
console.log('Links missing aria/text:  ', results.missingAriaOnEmptyLinks.length);
console.log('Inputs missing label/aria:', results.inputsMissingLabel.length);

if (results.invalidJsonLd.length > 0) {
  console.log('\nInvalid JSON-LD errors:', results.invalidJsonLd);
}
if (results.inputsMissingLabel.length > 0) {
  console.log('\nInputs missing label/aria:', results.inputsMissingLabel);
}
