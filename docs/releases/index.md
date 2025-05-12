# O que há de novo?

Aqui você encontrará as últimas atualizações, recursos e melhorias do SDK Único, organizadas por versão.

> ⚠️ As versões `0.0.*` e `0.1.*` são consideradas **alpha/beta** e não representam versões estáveis.

> ⚠️ As versões com final `r` significam que elas foram compiladas com `kotlin 1.8.22` e `Java 8`, basta adicionar o `r` ao número de versão abaixo. 


## 2025

### Abril

=== "v1.1.49 (Stable)"

    ``` sh
    - Suporte a novos ícones integrados ao projeto.
    - Scaffold padrão para unificação da estrutura visual das telas.
    - Novo menu de seleção de meio de pagamento, mais intuitivo e integrado.
    - Tela de pagamento aprovado com design renovado.
    - Rotas tipadas adicionadas para maior segurança e organização na navegação.
    - Header (cabeçalho) redesenhado, com novo alinhamento, cor de fundo e organização de arquivos.
    - Transações de PIX e QR Code (TEF)
    - Adicionado botão de voltar na tela de valor.
    - Foco automático na caixa de texto do AmountInput.
    - Reorganização e nomeação de arquivos para melhor manutenção.
    - Telas agora são serializáveis, possibilitando transições mais robustas.
    - Remoção do header nas telas de impressão, erro, retire o cartão e aprovado.
    - Header removido após tela de senha.
    - Melhorias nas telas de cancelamento, incluindo tipo da operação.
    - Vários ajustes de alinhamento visual, especialmente no header.
    - Corrigido problema no merge da tela AmountDefinitionScreen.
    - Diversas correções na navegação entre telas.
    - Parametrização de Layout via servidor, permitindo alterar logo e cores
    ```

=== "v1.0.1.18662.8 (Stable)"

    ``` sh
    - Parâmetro adicional na criação de QR Code na integração com TEF.
    - Retorno de parâmetro adicional no callback de pagamentos com QR Code na integração com o TEF.
    - Consulta genérica na integração com o TEF.
    - Impressão via ReceiptBuilder adaptada
	- Novo ícone e ajustes visuais para operações específicas
	- Adição de tratamento especial para voucher como débito
	- Suporte a cancelamento com retorno do comprovante formatado
    - Suporte à listagem de transações com status e ações
    - Alterado ícone de pagamento frotas e carteira.
    - Atualizada versão SDK DTEF MOBILE 2.7.16-2504031854
    ```

### Janeiro
=== "v0.1.1"

    ``` sh
    - Conectividade com SDK Sicoob
    - Conectividade com SDK Sicredi (Sitef)
	- Implementação de fluxo de captura genérico
	- Suporte a confirmação automática e configurações customizadas
	- Refatoração da lógica de transações
	- Separação de responsabilidades via camada de fachada
	- Novos parâmetros para integração com sistemas de terceiro
    ```

## 2024

### Novembro

=== "v0.1.1.*"

    ``` sh
    - Jornada completa de captura de pagamentos
    - Novos fluxos de ativação e cancelamento
	- Telas de entrada e navegação redesenhadas
	- Impressão e callbacks unificados para todos os providers
    ```


### Outubro

=== "v0.1.0.*"

    ``` sh
    - Conectividade com SDK Rede
    - Conectividade com SDK Vero    
    - Conectividade com SDK Cielo 
    - Conectividade com SDK Adyen 
    ```

### Junho

A primeira versão do SDK Único foi lançada com suporte para conectividade com o LinxTef e Stone.

=== "v0.0.1.*"

    ``` sh
    - Conectividade com SDK Mobile Linx Tef
    - Conectividade com SDK Stone 
    - Conectividade com SDK PagSeguro
    - Conectividade com SDK GetNet
    - Seleção dinâmica de adquirente com base na configuração
	- Implementação inicial da ativação e impressão por adquirente
	- Estrutura do projeto com flavors e pipeline básico
    ```
