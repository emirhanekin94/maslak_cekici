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
let totalModified = 0;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace <img tags that do not have width/height
  content = content.replace(/<img\s+([^>]+)>/gi, (match, attrs) => {
    // If it already has width and height, leave it alone
    if (attrs.includes('width=') && attrs.includes('height=')) {
      return match;
    }

    let newAttrs = attrs;

    // Check if it's the lightbox image
    if (attrs.includes('id="lightbox-img"')) {
      newAttrs = newAttrs.replace('id="lightbox-img"', 'id="lightbox-img" width="1200" height="800"');
      return `<img ${newAttrs}>`;
    }

    // Check if it's a service detail or blog detail hero image
    if (attrs.includes('style="width: 100%; height: auto;') || attrs.includes('style="width: 100%; max-height: 400px;')) {
      newAttrs += ' width="1000" height="600"';
    } else if (attrs.includes('logo.svg') || attrs.includes('logo.webp') || attrs.includes('logo.png')) {
      newAttrs += ' width="48" height="48"';
    } else {
      newAttrs += ' width="600" height="400"';
    }

    return `<img ${newAttrs}>`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    totalModified++;
    console.log('Updated dimensions in:', path.relative('.', file));
  }
});

console.log(`Finished. Updated ${totalModified} files.`);
