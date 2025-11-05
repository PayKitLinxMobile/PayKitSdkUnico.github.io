import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-primary opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full gradient-primary opacity-20 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto shadow-elevated border-2 border-primary/20 overflow-hidden">
          <div className="gradient-primary p-1">
            <div className="bg-background p-12 lg:p-16 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Pronto para Simplificar suas Integrações?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Junte-se às empresas que já estão acelerando seu desenvolvimento 
                  com o SDK Único
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white shadow-glow transition-smooth group text-lg px-8 font-semibold"
                >
                  <Link to="/devcenter">
                    Começar Agora
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                  className="border-2 hover:bg-muted text-lg px-8 group font-semibold"
                >
                  <a href="mailto:parcerias@equals.com.br">
                    <Mail className="mr-2 h-5 w-5" />
                    Falar com Vendas
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <Card className="p-6 text-center hover:shadow-card transition-smooth bg-card border-border">
            <div className="text-3xl font-bold text-accent mb-2">5 min</div>
            <div className="text-sm text-muted-foreground">Setup inicial</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-card transition-smooth bg-card border-border">
            <div className="text-3xl font-bold text-accent mb-2">2 semanas</div>
            <div className="text-sm text-muted-foreground">Primeira integração</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-card transition-smooth bg-card border-border">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Suporte técnico</div>
          </Card>
        </div>
      </div>
    </section>
  );
};
