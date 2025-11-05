import { AlertCircle, Zap, DollarSign, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import problemImage from "@/assets/problem-illustration.jpg";

const painPoints = [
  {
    icon: Zap,
    title: "Complexidade Técnica",
    description: "Múltiplas integrações com SDKs diferentes, cada uma com sua documentação e particularidades"
  },
  {
    icon: Clock,
    title: "Tempo de Desenvolvimento",
    description: "Meses de desenvolvimento para integrar com cada adquirente individualmente"
  },
  {
    icon: DollarSign,
    title: "Custos Elevados",
    description: "Investimento em múltiplas máquinas e custos de manutenção de várias integrações"
  },
  {
    icon: AlertCircle,
    title: "Homologação Repetitiva",
    description: "Processo de certificação individual para cada adquirente e terminal"
  }
];

export const ProblemSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-semibold">
            O Desafio Atual
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            A Complexidade que Freia seu Negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hoje, lojistas e desenvolvedores enfrentam uma verdadeira maratona de integrações
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Problem Visualization */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-destructive/20">
              <img 
                src={problemImage} 
                alt="Complexidade das integrações atuais" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
            </div>
            
            {/* Complexity Indicators */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="bg-card/95 backdrop-blur-sm p-6 rounded-xl shadow-elevated border border-border">
                <div className="text-5xl font-bold text-destructive mb-2">10+</div>
                <div className="text-sm font-medium">SDKs Diferentes</div>
              </div>
            </div>
          </div>

          {/* Pain Points Grid */}
          <div className="grid gap-6">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-card transition-smooth border-l-4 border-l-destructive/50"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-destructive" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{point.title}</h3>
                      <p className="text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Problem Statement */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">O Resultado?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Projetos que demoram meses para serem concluídos, custos operacionais elevados, 
                e uma complexidade técnica que dificulta a escalabilidade do negócio. 
                Cada nova adquirente representa um novo ciclo de desenvolvimento, testes e homologação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
