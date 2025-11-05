const fs = require('fs');

// Read the file
const content = fs.readFileSync('src/pages/DevCenter.tsx', 'utf-8');

// Pattern to match <pre className="bg-accent..."><code>{`...`}</code></pre>
const pattern = /<pre className="bg-accent p-4 rounded-lg overflow-x-auto(?:\s+text-sm)?(?:\s+mb-\d+)?">\s*<code>(\{`[\s\S]*?`\})<\/code>\s*<\/pre>/g;

let count = 0;
const newContent = content.replace(pattern, (match, codeContent) => {
    count++;
    // Extract mb-X class if exists
    const mbMatch = match.match(/mb-(\d+)/);
    const mbClass = mbMatch ? `\n                className="mb-${mbMatch[1]}"` : '';
    
    return `<CodeBlock 
                language="kotlin"
                code=${codeContent}${mbClass}
              />`;
});

// Write back
fs.writeFileSync('src/pages/DevCenter.tsx', newContent, 'utf-8');

console.log(`Successfully replaced ${count} code blocks!`);
