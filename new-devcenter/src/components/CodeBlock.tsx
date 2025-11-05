import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

const CodeBlock = ({ code, language = 'kotlin', className = '', showLineNumbers = false }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Custom theme with better readability - lighter background
  const customTheme = {
    ...vscDarkPlus,
    'pre[class*="language-"]': {
      ...vscDarkPlus['pre[class*="language-"]'],
      background: 'hsl(210 40% 16%)', // Lighter dark background for better readability
      border: '1px solid hsl(210 30% 25%)', // Subtle border
    },
    'code[class*="language-"]': {
      ...vscDarkPlus['code[class*="language-"]'],
      background: 'transparent',
      textShadow: 'none', // Remove text shadow for cleaner look
    },
  };

  // Language display names
  const languageNames: Record<string, string> = {
    kotlin: 'Kotlin',
    java: 'Java',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    json: 'JSON',
    xml: 'XML',
    bash: 'Bash',
    shell: 'Shell',
    text: 'Text',
    gradle: 'Gradle',
  };

  return (
    <div className={`relative group rounded-lg overflow-hidden shadow-md border border-border/50 ${className}`}>
      {/* Header with language and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-b border-border/50">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          {languageNames[language] || language}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 px-2 text-xs opacity-70 hover:opacity-100 transition-opacity"
          aria-label={copied ? 'Código copiado' : 'Copiar código'}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 mr-1.5 text-green-500" />
              <span className="text-green-500">Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 mr-1.5" />
              <span>Copiar</span>
            </>
          )}
        </Button>
      </div>

      {/* Code content */}
      <div className="relative">
        <SyntaxHighlighter
          language={language}
          style={customTheme}
          customStyle={{
            margin: 0,
            padding: '1rem',
            borderRadius: 0,
            fontSize: '0.8125rem', // Slightly smaller font (13px)
            lineHeight: '1.6',
            background: 'hsl(210 40% 16%)', // Lighter dark background
            border: 'none',
          }}
          showLineNumbers={showLineNumbers}
          wrapLines={true}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
