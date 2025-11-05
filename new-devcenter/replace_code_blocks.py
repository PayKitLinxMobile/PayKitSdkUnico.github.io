import re

# Read the file
with open('src/pages/DevCenter.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to match <pre className="bg-accent..."><code>{`...`}</code></pre>
pattern = r'<pre className="bg-accent p-4 rounded-lg overflow-x-auto(?:\s+text-sm)?(?:\s+mb-\d+)?">\s*<code>(\{`(?:[^`]|`(?!\}))*`\})</code>\s*</pre>'

def replace_pre_code(match):
    code_content = match.group(1)
    # Extract className modifiers
    full_match = match.group(0)
    mb_match = re.search(r'mb-(\d+)', full_match)
    mb_class = f'\n                className="mb-{mb_match.group(1)}"' if mb_match else ''
    
    return f'''<CodeBlock 
                language="kotlin"
                code={code_content}{mb_class}
              />'''

# Replace all occurrences
new_content = re.sub(pattern, replace_pre_code, content, flags=re.DOTALL)

# Write back
with open('src/pages/DevCenter.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f'Successfully replaced code blocks!')
