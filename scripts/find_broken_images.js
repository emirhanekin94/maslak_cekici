const fs = require('fs');
const path = require('path');

const brokenList = [];

function checkDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (item === 'node_modules' || item === '.git') continue;
    if (fs.statSync(fullPath).isDirectory()) {
      checkDir(fullPath);
    } else if (item.endsWith('.html')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const regex = /src=["']([^"']+\.(webp|png|jpg|jpeg|svg))["']/gi;
      let match;
      while ((match = regex.exec(content)) !== null) {
        const src = match[1];
        if (src.startsWith('http://') || src.startsWith('https://')) continue;
        const resolvedPath = path.resolve(dir, src);
        if (!fs.existsSync(resolvedPath)) {
          brokenList.push({
            htmlFile: path.relative(process.cwd(), fullPath),
            src: src,
            expected: path.relative(process.cwd(), resolvedPath)
          });
        }
      }
    }
  }
}

checkDir(process.cwd());

console.log(`Found ${brokenList.length} broken images:`);
brokenList.forEach(b => {
  console.log(`- ${b.htmlFile} : "${b.src}"`);
});
