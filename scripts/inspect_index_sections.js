const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');

const sectionStarts = [];

lines.forEach((line, index) => {
  if (line.includes('<section') || line.includes('<!-- ') && (line.includes('SECTION') || line.includes('BÖLÜM') || line.includes('HİZMET') || line.includes('BÖLGE') || line.includes('GALERİ') || line.includes('YORUM') || line.includes('NEDEN'))) {
    sectionStarts.push({
      line: index + 1,
      text: line.trim()
    });
  }
});

console.log(sectionStarts);
