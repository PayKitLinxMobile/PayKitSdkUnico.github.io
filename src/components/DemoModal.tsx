import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import demoBefore from "@/assets/demo-before.jpg";
import demoIntegration from "@/assets/demo-integration.png";
import demoAfter from "@/assets/demo-after.jpg";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const steps = [
  {
    id: 1,
    title: "O Problema: Múltiplas Máquinas",
    description: "Lojistas precisam gerenciar diversas máquinas de pagamento de diferentes adquirentes. Isso gera complexidade operacional, custos elevados e ocupação excessiva do espaço no caixa.",
    image: demoBefore,
    highlights: [
      "Múltiplos terminais no caixa",
      "Cabos e equipamentos desorganizados",
      "Complexidade operacional",
      "Custos de manutenção elevados"
    ]
  },
  {
    id: 2,
    title: "A Solução: SDK Único",
    description: "O SDK Único oferece uma interface padrão que traduz mensagens para diversos formatos de SDKs das adquirentes, incluindo soluções multi-adquirentes. Uma única integração para todas as necessidades.",
    image: demoIntegration,
    highlights: [
      "Interface unificada de comunicação",
      "Compatível com 15+ adquirentes",
      "Suporte a multi-adquirência",
      "Redução de 80% no tempo de integração"
    ]
  },
  {
    id: 3,
    title: "O Resultado: SmartPOS Multi-Adquirente",
    description: "Com o SDK Único, sua loja opera com apenas um terminal SmartPOS que conecta-se a múltiplas adquirentes. Ambiente organizado, operação simplificada e atendimento mais ágil.",
    image: demoAfter,
    highlights: [
      "Um único terminal para tudo",
      "Ambiente de trabalho organizado",
      "Operação simplificada",
      "Atendimento mais rápido"
    ]
  }
];

export const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(0);
    onOpenChange(false);
  };

  const step = steps[currentStep];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              Demonstração Interativa
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="px-6 pb-6">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? "w-12 bg-primary"
                    : index < currentStep
                    ? "w-8 bg-primary/50"
                    : "w-8 bg-muted"
                }`}
              />
            ))}
          </div>

          {/* Step Content */}
          <div className="space-y-6 animate-in fade-in duration-500">
            {/* Step Number and Title */}
            <div className="text-center space-y-2">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                Passo {step.id} de {steps.length}
              </div>
              <h3 className="text-3xl font-bold">{step.title}</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {step.description}
              </p>
            </div>

            {/* Image */}
            <div className="relative rounded-xl overflow-hidden shadow-elevated">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-auto"
              />
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {step.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg bg-muted/50"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </Button>

            <div className="text-sm text-muted-foreground">
              {currentStep + 1} / {steps.length}
            </div>

            {currentStep < steps.length - 1 ? (
              <Button
                onClick={handleNext}
                className="gradient-primary text-white gap-2"
              >
                Próximo
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={handleClose}
                className="gradient-primary text-white gap-2"
              >
                Finalizar
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
