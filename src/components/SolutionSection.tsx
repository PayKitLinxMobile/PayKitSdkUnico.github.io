import { CheckCircle, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import solutionImage from "@/assets/solution-illustration.jpg";

const benefits = [
  "Interface única e padronizada para todas as adquirentes",
  "Redução de 80% no tempo de desenvolvimento",
  "Documentação unificada e suporte dedicado",
  "Atualização automática de integrações",
  "Compatibilidade com múltiplos modelos de terminal",
  "Facilita o processo de homologação"
];

export const SolutionSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
            A Solução
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Conheça o{" "}
            <span className="text-accent">SDK Único</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma camada de abstração inteligente que simplifica tudo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Solution Benefits */}
          <div className="space-y-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 animate-in fade-in slide-in-from-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-accent/5 border-accent/20 shadow-glow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shadow-glow">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Integração Simplificada</h3>
                  <p className="text-muted-foreground">
                    O SDK Único traduz sua aplicação para os diversos formatos de SDKs das 
                    adquirentes, incluindo soluções multi-adquirência.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Solution Visualization */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border-2 border-accent/20">
              <img 
                src={solutionImage} 
                alt="SDK Único simplificando integrações" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Success Indicator */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-6 rounded-xl shadow-elevated border-2 border-accent">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">1 SDK</div>
                <div className="text-sm text-muted-foreground">Múltiplas Adquirentes</div>
              </div>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-card max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Como Funciona</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-2xl font-bold text-white mx-auto shadow-glow">
                1
              </div>
              <h4 className="font-bold text-lg">Integre Uma Vez</h4>
              <p className="text-muted-foreground">
                Desenvolva sua aplicação usando a interface padronizada do SDK Único
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-2xl font-bold text-white mx-auto shadow-glow">
                2
              </div>
              <h4 className="font-bold text-lg">Tradução Automática</h4>
              <p className="text-muted-foreground">
                O SDK traduz suas chamadas para o formato de cada adquirente
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-2xl font-bold text-white mx-auto shadow-glow">
                3
              </div>
              <h4 className="font-bold text-lg">Publique Rapidamente</h4>
              <p className="text-muted-foreground">
                Acelere seu processo de homologação e publique em múltiplas lojas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
