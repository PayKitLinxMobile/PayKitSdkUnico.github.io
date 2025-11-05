import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shadow-glow">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">SDK Único</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Simplificando integrações de pagamento para desenvolvedores.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">Produto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/devcenter#cadastro" className="hover:text-accent transition-smooth">Documentação</Link></li>
              <li><a href="mailto:parcerias@equals.com.br" className="hover:text-accent transition-smooth">Preços</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">Empresa</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="https://equals.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth">Sobre</a></li>
              <li><a href="https://equals.com.br/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth">Blog</a></li>
              <li><a href="mailto:parcerias@equals.com.br" className="hover:text-accent transition-smooth">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 SDK Único. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
