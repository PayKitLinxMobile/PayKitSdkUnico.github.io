const fs = require('fs');

// Read the file
let content = fs.readFileSync('src/pages/DevCenter.tsx', 'utf-8');

let count = 0;

// Replace all <pre> blocks with bg-accent
while (content.includes('<pre className="bg-accent')) {
    const preStart = content.indexOf('<pre className="bg-accent');
    if (preStart === -1) break;
    
    const preEnd = content.indexOf('</pre>', preStart);
    if (preEnd === -1) break;
    
    const fullBlock = content.substring(preStart, preEnd + 6);
    
    // Extract className modifiers
    const mbMatch = fullBlock.match(/mb-(\d+)/);
    const mbClass = mbMatch ? `\n                className="mb-${mbMatch[1]}"` : '';
    
    // Extract code content
    const codeMatch = fullBlock.match(/<code>(\{`[\s\S]*?`\})<\/code>/);
    if (!codeMatch) {
        console.log('Could not find code content in block:', fullBlock.substring(0, 100));
        break;
    }
    
    const codeContent = codeMatch[1];
    
    const replacement = `<CodeBlock 
                language="kotlin"
                code=${codeContent}${mbClass}
              />`;
    
    content = content.substring(0, preStart) + replacement + content.substring(preEnd + 6);
    count++;
    
    console.log(`Replaced block ${count}`);
}

// Write back
fs.writeFileSync('src/pages/DevCenter.tsx', content, 'utf-8');

console.log(`\nSuccessfully replaced ${count} code blocks!`);
