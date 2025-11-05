import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoModal } from "@/components/DemoModal";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold border border-accent/30">
                Solução Inovadora
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              Um SDK.{" "}
              <span className="text-accent">
                Infinitas Possibilidades
              </span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              Integre sua aplicação com múltiplas adquirentes através de uma única interface. 
              Acelere seu desenvolvimento e reduza a complexidade em até 80%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white shadow-glow transition-smooth group font-semibold"
                asChild
              >
                <a href="/devcenter">
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                onClick={() => setDemoOpen(true)}
              >
                Multi-Adquirência
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-accent">80%</div>
                <div className="text-sm text-white/70">Redução de Tempo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-white/70">Adquirentes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">1x</div>
                <div className="text-sm text-white/70">Integração</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={heroImage} 
                alt="SDK Único Platform" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-elevated border border-gray-200 animate-in fade-in slide-in-from-top duration-1000 delay-500">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-semibold text-foreground">SDK Ativo</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-elevated border border-gray-200 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
              <div className="text-2xl font-bold text-accent">99.9%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
};
