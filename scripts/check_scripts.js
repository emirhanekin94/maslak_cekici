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
let fixedCount = 0;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace <script src="...main.js"> without defer
  content = content.replace(/<script\s+([^>]*src=["'][^"']*main\.js["'][^>]*)>/gi, (match, attrs) => {
    if (attrs.includes('defer')) return match;
    return `<script ${attrs} defer>`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    fixedCount++;
    console.log('Added defer in:', path.relative('.', file));
  }
});

console.log(`Finished. Fixed defer on ${fixedCount} files.`);
