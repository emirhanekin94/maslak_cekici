const fs = require('fs');
const path = require('path');

function getAllFiles(dir, exts, fileList = []) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!['node_modules', '.git'].includes(file)) {
        getAllFiles(fullPath, exts, fileList);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (exts.includes(ext) || file === 'robots.txt' || file === 'llms.txt' || file === 'sitemap.xml') {
        fileList.push(fullPath);
      }
    }
  });
  return fileList;
}

const targetFiles = getAllFiles('.', ['.html', '.xml', '.txt', '.js', '.json']);
console.log(`Found ${targetFiles.length} files to scan for domain and brand update.`);

let updatedCount = 0;

targetFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Domain replacements
  content = content.replace(/https?:\/\/maslakcekici\.com/g, 'https://maslakotocekici.com');
  content = content.replace(/https?:\/\/www\.maslakcekici\.com/g, 'https://maslakotocekici.com');
  content = content.replace(/maslakcekici\.com/g, 'maslakotocekici.com');

  // Brand text in logo
  content = content.replace(/<span class="brand-name"(.*?)>MASLAK <span>ÇEKİCİ<\/span><\/span>/g, '<span class="brand-name"$1>MASLAK <span>OTO ÇEKİCİ</span></span>');
  content = content.replace(/MASLAK <span>ÇEKİCİ<\/span>/g, 'MASLAK <span>OTO ÇEKİCİ</span>');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log('Updated:', path.relative('.', filePath));
  }
});

console.log(`\nFinished updating domain and brand. Total files updated: ${updatedCount}`);
