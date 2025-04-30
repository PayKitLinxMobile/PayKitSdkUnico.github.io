# Pré-requisitos para Integração com o SDK Único

Para integrar o SDK Único na sua aplicação, é necessário atender a determinados requisitos técnicos.

## Requisitos do Sistema Operacional

O **SDK Único** é desenvolvido nativamente para Android, sendo necessário que sua aplicação também seja Android ou possua uma interface/plugin que permita a comunicação se for híbrida. A versão mínima suportada do Android é a **5.0+ (API 21)** ou superior.

## Versões Android dos Terminais

Os terminais compatíveis possuem diferentes versões do sistema operacional, conforme definido pelo fabricante:


|                      |  Stone     |      TEF        | Rede      | Getnet    | PagSeguro | Cielo  | Adyen | Vero | Sicoob | Sicredi |
|----------------------|------------|-----------------|-----------|-----------|-----------|--------|-------|------|--------|--------|
| SUNMI P2  v7.1       |     ✔️      |        ✔️        |           |     ✔️     |      ✔️    |        |       |  ✔️   |   ✔️    |        |
| GPOS 700: v5.1       |     ✔️      |        ✔️        |           |           |           |        |       |  ✔️   |        |        |
| GPOS 700X: v8.1      |     ✔️      |        ✔️        |           |           |           |        |       |      |        |        |
| Positivo L400 : v11  |     ✔️      |                 |     ✔️     |           |           |   ✔️    |       |      |        |        |
| Positivo L300 : v7.1 |     ✔️      |                 |           |           |           |   ✔️    |       |  ✔️   |        |        |
| APOS A8: v5.1        |            |        ✔️        |           |           |           |        |       |      |        |        |
| Verifone X990: v10   |            |                 |           |           |           |        |       |      |   ✔️    |        |
| Ingenico DX8000: v10 |     ✔️      |                 |           |           |           |   ✔️    |       |      |   ✔️    |   ✔️    |
| Saturn S1F2: v10     |            |                 |           |           |           |        |   ✔️   |      |        |        |

- "✔️" indica que o terminal é compatível pelo SDK.

É essencial desenvolver com retrocompatibilidade para a versão mínima (5.0) a fim de garantir o funcionamento em todos os modelos.

## Versões das bibliotecas do SDK Único

Para dar suporte a integradores com versões mais antigas do Gradle e Android, possuímos 2 versões do SDK Único. 
Uma versão retrocompativél, e outra com bibliotecas atualizadas.


|  Biblioteca          | Versão retrocompativél | Versão atualizada |
|----------------------|------------------------|-------------------|
| `kotlin`             | `1.7.10`               | `1.9.22`          |
| `gradle`             | `6.9.4`                | `8.9`             |


Qualquer dependência que o SDK Único utilize internamente, vai respeitar sua determinada versão de `gradle` e `kotlin` e todo `bytecode` está sendo transpilado para `Java 8`, assim conseguimos atender uma maior quantidade de integradores.


## Versões das bibliotecas das Adquirentes do SDK Único


|  Adquirente          | Versão            |   Deeplink    |
|----------------------|-------------------|---------------|
| Stone                |                   |     ✔️         |
| Linx TEF             | `1.1.0-2203201805`|     ❌        |
| Rede                 | `4.0.6`           |     ✔️         |
| Getnet               | `1.8.1`           |     ✔️         |
| Cielo                | `2.0.1`           |     ✔️         |
| PagSeguro*           | `1.28.0`          |    ❌         |
| Adyen**              | `1.1.0-2203201805`|    ❌         |
| Vero                 | `1.01.06`         |     ✔️         |
| Sicoob (P2)          | `1.09`            |     ✔️         |
| Sicoob (X990)        | `1.09`            |     ✔️         |
| Sicredi              | `3.218` ***       |     ❌         |

- "✔️" indica que a adquirente possui Deeplink.
- "❌" indica que a adquirente não possui Deeplink.

*** - Usa o SiTef. A versão indicada é a versão do mSiTef
