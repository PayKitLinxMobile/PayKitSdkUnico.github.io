import { Rocket, Shield, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Rocket,
    title: "Time to Market Reduzido",
    description: "Lance seu produto em múltiplas plataformas em semanas, não meses",
    stat: "80%",
    statLabel: "Mais rápido"
  },
  {
    icon: Shield,
    title: "Segurança e Conformidade",
    description: "Mantemos as melhores práticas de segurança e conformidade PCI",
    stat: "99.9%",
    statLabel: "Uptime"
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    description: "Adicione novas adquirentes sem refatorar seu código",
    stat: "15+",
    statLabel: "Adquirentes"
  },
  {
    icon: Users,
    title: "Suporte Dedicado",
    description: "Equipe técnica especializada para acelerar sua integração",
    stat: "24/7",
    statLabel: "Suporte"
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold">
            Benefícios
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Por que Escolher o SDK Único?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme a complexidade em simplicidade e acelere seu crescimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-elevated transition-smooth group cursor-pointer"
              >
                 <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center group-hover:scale-110 transition-smooth shadow-glow">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-accent">{benefit.stat}</div>
                    <div className="text-xs text-muted-foreground">{benefit.statLabel}</div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-elevated">
            <div className="gradient-hero p-6 text-center">
              <h3 className="text-2xl font-bold text-white">Comparação de Abordagens</h3>
            </div>
            
            <div className="grid md:grid-cols-2 divide-x divide-border">
              {/* Traditional Approach */}
              <div className="p-8 bg-muted/30">
                <h4 className="font-bold text-xl mb-6 text-center text-destructive">
                  Abordagem Tradicional
                </h4>
                <ul className="space-y-4">
                  {[
                    "Múltiplas integrações complexas",
                    "6-12 meses de desenvolvimento",
                    "Custos de manutenção elevados",
                    "Homologação repetitiva",
                    "Equipe técnica grande",
                    "Difícil escalar"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-destructive text-xl">✗</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SDK Único Approach */}
              <div className="p-8">
                <h4 className="font-bold text-xl mb-6 text-center text-accent">
                  Com SDK Único
                </h4>
                <ul className="space-y-4">
                  {[
                    "Uma única integração padronizada",
                    "2-4 semanas de desenvolvimento",
                    "Manutenção simplificada",
                    "Processo facilitado",
                    "Equipe enxuta",
                    "Escalável por design"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent text-xl font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
