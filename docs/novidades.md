# O que há de novo?

## Versão 3.0 - Suporte a múltiplas adquirentes

:::tip Novo
Lançado recentemente
:::

Agora o SDK Único oferece suporte completo para 10+ adquirentes diferentes, permitindo maior flexibilidade nas integrações.

### Principais recursos:

- Integração unificada com múltiplas adquirentes
- Interface consistente entre diferentes processadores
- Configuração simplificada via flavors ou standalone
- Suporte a todos os tipos de pagamento (Crédito, Débito, PIX, Voucher)

---

## Versão 2.8 - Performance aprimorada

:::note Melhoria
Atualização importante
:::

Otimizações significativas no processamento de transações, reduzindo o tempo de resposta em até 40%.

### Melhorias implementadas:

- Otimização do fluxo de comunicação com adquirentes
- Redução do tempo de inicialização do SDK
- Melhoria na gestão de memória
- Cache inteligente de configurações

---

## Versão 2.7.16.8 - Novos terminais homologados

- Suporte ao **Positivo L400** com Rede
- Suporte ao **Newland ME30S** (Pinpad Bluetooth) com Rede
- Suporte ao **PAX D140** (Pinpad USB) com Stone

---

## Versão 2.7.13 - Expansão de dispositivos

- Suporte ao **Ingenico DX8000** com Stone
- Suporte ao **Gertec PPC-940** (Pinpad USB) com múltiplas adquirentes

---

## Versão 2.7.12 - Ingenico LANE-3600

- Suporte ao **Ingenico LANE-3600** (Pinpad USB)
- Compatível com Stone, Cielo, Rede, Getnet, Banrisul e Safrapay

---

## Versão 2.7.11 - Gertec GPOS760

- Suporte ao **Gertec GPOS760** com Tribanco

---

## Versão 2.7.10 - Novos dispositivos Gertec

- Suporte ao **Gertec GPOS780** com Stone
- Suporte ao **Gertec SK-210** (Totem Mobile)

---

## Versão 2.7.8 - Grande atualização de Pinpads USB

:::tip Importante
Versão com suporte massivo a Pinpads USB
:::

- Suporte aos modelos **Gertec PPC-920, PPC-930 e Ingenico LANE-3000**
- Compatibilidade com 6 adquirentes: Stone, Cielo, Rede, Getnet, Banrisul e Safrapay
- Suporte a múltiplos **Totems Mobile** da TecToy (D2, K2, T2 e variações Mini)
- Suporte ao **Gertec GS300** (Totem Mobile)

---

## Versão 2.7.0 - Gertec MP15

- Suporte ao **Gertec MP15** (Pinpad Bluetooth) com Cielo

---

## Versão 2.6.6 - Versão Piloto Pinpads USB

:::caution Piloto
Versão de testes para Pinpads USB
:::

Primeira versão com suporte experimental a Pinpads USB e Totems Mobile.

---

## Versão 2.6.3 - Expansão Pinpads Bluetooth

- Suporte ao **Gertec MOBI PIN10** com Getnet
- Suporte ao **Ingenico ICMP** com Getnet
- Suporte ao **PAX D180** com Rede
- Suporte ao **PAX D200** com Cielo e Getnet

---

## Versão 2.6.0 - Lançamento Inicial

:::tip Marco
Primeira versão do SDK Único
:::

- Suporte aos primeiros SmartPOS:
  - **TecToy P2-B** (Android 7)
  - **Ingenico APOS A8**
- Integração com múltiplas adquirentes
- Implementação da interface Paykit unificada

---

## Versão 2.5 - Integração DeepLink

:::info Feature
Nova funcionalidade
:::

Nova funcionalidade de integração via DeepLink para facilitar a comunicação entre aplicações.

### Recursos DeepLink:

- Iniciar pagamentos via URL
- Realizar cancelamentos via URL
- Operações administrativas via URL
- Retorno de resultados para aplicação chamadora

---

## Roadmap Futuro

### Em Desenvolvimento 🚧

- **Ingenico DX4000** - Em homologação
- **Adyen S1F2** - Em desenvolvimento
- Suporte a mais adquirentes
- Novos recursos de relatórios

### Planejado 📋

- SDK para iOS
- Suporte a pagamentos por aproximação (NFC)
- Dashboard de gerenciamento de transações
- Análise avançada de transações

---

## Como Atualizar

Para atualizar para a versão mais recente, atualize a versão no seu `build.gradle.kts`:

```kotlin
val sdkPayServicesVersion = "0.0.000169" // Versão mais recente

implementation("SDKPayServices:core:$sdkPayServicesVersion")
implementation("SDKPayServices:config:$sdkPayServicesVersion")
implementation("SDKPayServices:common:$sdkPayServicesVersion")
```

:::warning Importante
Sempre consulte as notas de release antes de atualizar para verificar breaking changes e novos requisitos.
:::
