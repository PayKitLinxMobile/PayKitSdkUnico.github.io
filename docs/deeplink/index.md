# Integração Deeplink SDK Único 

## Introdução

O PaykitDeeplink é uma interface que permite a integração e comunicação com o SDK Unico para
processamento de pagamentos através de deeplinks. Esta documentação detalha as rotas disponíveis e
os parâmetros aceitos para cada método de pagamento.

## Rota Base

Para chamar o PaykitDeeplink, a aplicação deve utilizar o seguinte formato de URL:

```
paykit://payment
```

## Tipos de Operações

O parâmetro `paymentType` determina qual tipo de operação será executada. As operações disponíveis
são:

1. [**activate**](#1-ativacao-activate) - Ativa o terminal. *Executar apenas 1 (uma) vez ou quando o terminal é realocado para outra loja*
2. [**credit**](#2-pagamento-com-cartao-de-credito-credit) - Realiza pagamento com cartão de crédito  
3. [**debit**](#3-pagamento-com-cartao-de-debito-debit) - Realiza pagamento com cartão de débito  
4. [**voucher**](#4-pagamento-com-voucher-voucher) - Realiza pagamento com voucher/vale  
5. [**fleet**](#5-pagamento-com-cartao-de-frota-fleet) - Realiza pagamento com cartão de frota  
6. [**pix**](#6-pagamento-via-pix-pix) - Realiza pagamento via PIX  
7. [**wallet**](#7-pagamento-via-carteira-digital-wallet) - Realiza pagamento via carteira digital  
8. [**qrcode**](#8-pagamento-via-qr-code-qrcode) - Realiza pagamento via QR Code  
9. [**confirm**](#9-confirmacao-de-transacao-pendente-confirm) - Confirma uma transação pendente  
10. [**undo**](#10-desfazer-transacao-pendente-undo) - Desfaz uma transação pendente  
11. [**print_last_receipt**](#11-imprimir-ultimo-recibo-print_last_receipt) - Imprime o último recibo  
12. [**get_transaction**](#12-consulta-de-transacao-get_transaction) - Consulta detalhes de uma transação  
13. [**cancel**](#13-cancelar-transacao-cancel) - Cancela uma transação  
14. [**cancel_interactive**](#14-cancelamento-interativo-cancel_interactive) - Realiza cancelamento interativo  
15. [**print**](#15-impressao-print) - Imprime uma imagem  
16. [**query_report**](#16-consulta-de-relatorios-query_report) - Consulta relatórios

## Parâmetros por Método de Pagamento

### 1. Ativação

```
paykit://payment?paymentType=activate
```

_*Executar apenas 1 (uma) vez ou quando o terminal é realocado para outra loja._

**Parâmetros:**

- `activationCode`: Código de ativação fornecido pelo provedor de pagamento
- `storeCnpj`: CNPJ do estabelecimento comercial (sem máscara)
- `automationCnpj`: CNPJ da automação (sem máscara)
- `isProduction`: Indicador de ambiente de produção (true/false)
- `host`: Host para configuração do provedor de pagamento (opcional, IP ou URL)
- `token`: Token de autenticação no provedor de pagamento (opcional)

### 2. Pagamento com Cartão de Crédito (credit)

```
paykit://payment?paymentType=credit
```

**Parâmetros:**

- `amount`: Valor da transação (pode ser informado como valor inteiro em centavos, ex: "1000" para
  R$ 10,00, ou como valor decimal com ponto, ex: "10.25" para R$ 10,25)
- `installments`: Número de parcelas (opcional)
- `billOfSale`: Referência do pedido/venda
- `autoPrintReceipt`: Indicador para imprimir recibo (true/false)
- `printMerchantReceipt`: Indicador para imprimir recibo do lojista (true/false)
- `autoConfirm`: Indicador para confirmação automática (true/false)
- `externalId`: ID externo para identificação da transação
- `cpf`: CPF do cliente (opcional, sem máscara)
- `transactionType`: Tipo de transação de crédito (at_sight, installments, store_installments, etc.)
- `orderItems`: Lista de itens do pedido (opcional, formato JSON ou delimitado)

### 3. Pagamento com Cartão de Débito (debit)

```
paykit://payment?paymentType=debit
```

**Parâmetros:**

- `amount`: Valor da transação (pode ser informado como valor inteiro em centavos, ex: "1000" para
  R$ 10,00, ou como valor decimal com ponto, ex: "10.25" para R$ 10,25)
- `installments`: Número de parcelas (opcional)
- `billOfSale`: Referência do pedido/venda
- `autoPrintReceipt`: Indicador para imprimir recibo (true/false)
- `printMerchantReceipt`: Indicador para imprimir recibo do lojista (true/false)
- `autoConfirm`: Indicador para confirmação automática (true/false)
- `externalId`: ID externo para identificação da transação
- `cpf`: CPF do cliente (opcional, sem máscara)
- `postCreditDays`: Dias para pós-datamento (opcional)
- `transactionType`: Tipo de transação de débito (at_sight, acquirer_at_sight, etc.)
- `downpaymentAmount`: Valor de entrada (opcional)
- `firstInstallmentAmount`: Valor da primeira parcela (opcional)
- `orderItems`: Lista de itens do pedido (opcional, formato JSON ou delimitado)

### 4. Pagamento com Voucher (voucher)

```
paykit://payment?paymentType=voucher
```

**Parâmetros:**

- `amount`: Valor da transação (pode ser informado como valor inteiro em centavos, ex: "1000" para
  R$ 10,00, ou como valor decimal com ponto, ex: "10.25" para R$ 10,25)
- `billOfSale`: Referência do pedido/venda
- `autoPrintReceipt`: Indicador para imprimir recibo (true/false)
- `printMerchantReceipt`: Indicador para imprimir recibo do lojista (true/false)
- `autoConfirm`: Indicador para confirmação automática (true/false)
- `externalId`: ID externo para identificação da transação
- `cpf`: CPF do cliente (opcional, sem máscara)
- `transactionType`: Tipo de voucher (food, meal, automotive, culture, benefits, etc.)
- `orderItems`: Lista de itens do pedido (opcional, formato JSON ou delimitado)

### 5. Pagamento com Cartão de Frota (fleet)

```
paykit://payment?paymentType=fleet
```

**Parâmetros:**

- `amount`: Valor da transação (pode ser informado como valor inteiro em centavos, ex: "1000" para
  R$ 10,00, ou como valor decimal com ponto, ex: "10.25" para R$ 10,25)
- `billOfSale`: Referência do pedido/venda
- `autoPrintReceipt`: Indicador para imprimir recibo (true/false)
- `printMerchantReceipt`: Indicador para imprimir recibo do lojista (true/false)
- `autoConfirm`: Indicador para confirmação automática (true/false)
- `externalId`: ID externo para identificação da transação
- `cpf`: CPF do cliente (opcional, sem máscara)
- `providerParams`: Parâmetros específicos do provedor (JSON codificado para URL)
- `orderItems`: Lista de itens do pedido (opcional, formato JSON ou delimitado)

### 6. Pagamento via PIX (pix)

```
paykit://payment?paymentType=pix
```

**Parâmetros:**

- `amount`: Valor da transação (pode ser informado como valor inteiro em centavos, ex: "1000" para
  R$ 10,00, ou como valor decimal com ponto, ex: "10.25" para R$ 10,25)
- `billOfSale`: Referência do pedido/venda
- `autoPrintReceipt`: Indicador para imprimir recibo (true/false)
- `printMerchantReceipt`: Indicador para imprimir recibo do lojista (true/false)
- `autoConfirm`: Indicador para confirmação automática (true/false)
- `externalId`: ID externo para identificação da transação
- `providerParams`: Parâmetros específicos do provedor (JSON codificado para URL)
- `orderItems`: Lista de itens do pedido (opcional, formato JSON ou delimitado)

### 7. Pagamento via Carteira Digital (wallet)

```
paykit://payment?paymentType=wallet
```

**Parâmetros:**

- `amount`: Valor da transação (pode ser informado como valor inteiro em centavos, ex: "1000" para
  R$ 10,00, ou como valor decimal com ponto, ex: "10.25" para R$ 10,25)
- `billOfSale`: Referência do pedido/venda
- `autoPrintReceipt`: Indicador para imprimir recibo (true/false)
- `printMerchantReceipt`: Indicador para imprimir recibo do lojista (true/false)
- `autoConfirm`: Indicador para confirmação automática (true/false)
- `externalId`: ID externo para identificação da transação
- `providerParams`: Parâmetros específicos do provedor (JSON codificado para URL)
- `orderItems`: Lista de itens do pedido (opcional, formato JSON ou delimitado)

### 8. Pagamento via QR Code (qrcode)

```
paykit://payment?paymentType=qrcode
```

**Parâmetros:**

- `amount`: Valor da transação (pode ser informado como valor inteiro em centavos, ex: "1000" para
  R$ 10,00, ou como valor decimal com ponto, ex: "10.25" para R$ 10,25)
- `billOfSale`: Referência do pedido/venda
- `autoPrintReceipt`: Indicador para imprimir recibo (true/false)
- `printMerchantReceipt`: Indicador para imprimir recibo do lojista (true/false)
- `autoConfirm`: Indicador para confirmação automática (true/false)
- `externalId`: ID externo para identificação da transação
- `providerParams`: Parâmetros específicos do provedor (JSON codificado para URL)
- `orderItems`: Lista de itens do pedido (opcional, formato JSON ou delimitado)

### 9. Confirmação de Transação Pendente (confirm)

```
paykit://payment?paymentType=confirm
```

**Parâmetros:**

- `transactionId`: ID da transação a ser confirmada
- `amount`: Valor da transação (pode ser informado como valor inteiro em centavos, ex: "1000" para
  R$ 10,00, ou como valor decimal com ponto, ex: "10.25" para R$ 10,25)
- `finalizeTransaction`: Indicador para finalizar a transação (true/false)

### 10. Desfazer Transação Pendente (undo)

```
paykit://payment?paymentType=undo
```

**Parâmetros:**

- `transactionId`: ID da transação a ser desfeita
- `amount`: Valor da transação (pode ser informado como valor inteiro em centavos, ex: "1000" para
  R$ 10,00, ou como valor decimal com ponto, ex: "10.25" para R$ 10,25)
- `finalizeTransaction`: Indicador para finalizar a transação (true/false)

### 11. Imprimir Último Recibo (print_last_receipt)

```
paykit://payment?paymentType=print_last_receipt
```

**Parâmetros:**

- `receiptType`: Tipo de recibo a ser impresso (merchant, customer, both)

### 12. Consulta de Transação (get_transaction)

```
paykit://payment?paymentType=get_transaction
```

**Parâmetros:**

- `transactionId`: ID da transação a ser consultada
- `externalId`: ID externo da transação (opcional)

### 13. Cancelar Transação (cancel)

```
paykit://payment?paymentType=cancel
```

**Parâmetros:**

- `transactionId`: ID da transação (paymentId)
- `amount`: Valor a ser cancelado (pode ser informado como valor inteiro em centavos, ex: "1000"
  para R$ 10,00, ou como valor decimal com ponto, ex: "10.25" para R$ 10,25)
- `autoPrintReceipt`: Indicador para imprimir recibo (true/false)
- `printMerchantReceipt`: Indicador para imprimir recibo do lojista (true/false)
- `autoConfirm`: Indicador para confirmação automática (true/false)
- `externalId`: ID externo para identificação da transação
- `dateTimeOfSale`: Data/hora da venda original (timestamp em milissegundos)

### 14. Cancelamento Interativo (cancel_interactive)

```
paykit://payment?paymentType=cancel_interactive
```

Não requer parâmetros adicionais, inicia a interface de cancelamento interativo.

### 15. Impressão (print)

```
paykit://payment?paymentType=print
```

**Parâmetros:**

- `bitmap`: Imagem a ser impressa (codificada em base64)

**Observações sobre o parâmetro bitmap:**

A imagem para impressão deve ser enviada como uma string codificada em base64. O sistema processa o parâmetro `bitmap` da seguinte forma:

1. Extrai o valor do parâmetro `bitmap` da URL ou dos extras do Intent
2. Decodifica a string base64 para um array de bytes usando `Base64.decode()`
3. Converte o array de bytes para um objeto Bitmap usando `BitmapFactory.decodeByteArray()`

**Limitações importantes:**

- Os deeplinks têm um limite de tamanho de aproximadamente 2000 caracteres em muitos navegadores e sistemas
- Considerando a codificação base64 (que aumenta o tamanho em aproximadamente 33%), recomenda-se que a imagem original não ultrapasse 1.5 MB
- Intents do Android também têm um limite de aproximadamente 500KB para extras, portanto é necessário comprimir adequadamente as imagens
- A impressora térmica do terminal tem uma largura limitada (geralmente 384 pixels), então imagens muito grandes serão redimensionadas

**Exemplo de codificação:**

```kotlin
// Converte um bitmap para string base64
fun bitmapToBase64(bitmap: Bitmap): String {
    val byteArrayOutputStream = ByteArrayOutputStream()
    // Use PNG para imagens com transparência ou JPEG para fotos
    // O último parâmetro (0-100) define a qualidade da compressão para JPEG
    bitmap.compress(Bitmap.CompressFormat.PNG, 100, byteArrayOutputStream)
    val byteArray = byteArrayOutputStream.toByteArray()
    return Base64.encodeToString(byteArray, Base64.DEFAULT)
}

// Opcionalmente, redimensione a imagem antes da codificação
fun resizeBitmap(originalBitmap: Bitmap, maxWidthInPixels: Int = 384): Bitmap {
    if (originalBitmap.width <= maxWidthInPixels) return originalBitmap
    
    val ratio = maxWidthInPixels.toFloat() / originalBitmap.width
    val newHeight = (originalBitmap.height * ratio).toInt()
    
    return Bitmap.createScaledBitmap(
        originalBitmap,
        maxWidthInPixels,
        newHeight, 
        true
    )
}

// Uso no deeplink
val resizedBitmap = resizeBitmap(myBitmap)
val base64Image = bitmapToBase64(resizedBitmap)
val uri = Uri.parse("paykit://payment")
    .buildUpon()
    .appendQueryParameter("paymentType", "print")
    .appendQueryParameter("bitmap", base64Image)
    .build()
```

**Recomendações:**

- Use um formato de imagem compacto (como PNG) antes da codificação em base64
- Redimensione a imagem para a largura da impressora (geralmente 384 pixels)
- Converta imagens coloridas para escala de cinza quando possível para melhorar a impressão térmica
- Teste a impressão com diferentes resoluções para garantir compatibilidade com a impressora do terminal
- Para imagens maiores, considere usar o método de Intent com extras em vez de deeplink na URL

### 16. Consulta de Relatórios (query_report)

```
paykit://payment?paymentType=query_report
```

**Parâmetros:**

- `providerParams`: Parâmetros específicos do provedor para consulta (JSON codificado para URL)

## Tipos de Transação

O parâmetro `transactionType` pode variar de acordo com o método de pagamento. Valores possíveis:

### Para Cartão de Crédito

- `at_sight`: À vista
- `installments`: Parcelado genérico
- `store_installments`: Parcelado loja
- `admin_installments`: Parcelado administradora
- `bank_installments`: Parcelado banco
- `issuer_installments`: Parcelado emissor
- `pre_authorization`: Pré-autorização
- `financing`: Financiamento
- `credit_1_minute`: Crédito em 1 minuto

### Para Cartão de Débito

- `at_sight`: À vista
- `acquirer_at_sight`: À vista pela adquirente
- `with_instalments`: Com parcelamento
- `invoice_payment`: Pagamento de fatura
- `postdated`: Pós-datado

### Para Voucher

- `food`: Alimentação
- `meal`: Refeição
- `automotive`: Automotivo
- `culture`: Cultura
- `toll`: Pedágio
- `benefits`: Benefícios
- `automobile`: Automóvel

## Formato dos Itens do Pedido (OrderItems)

O parâmetro `orderItems` pode ser informado em dois formatos:

### Formato JSON

```json
[
  {
    "sku": "123",
    "name": "Produto 1",
    "value": 1000,
    "quantity": 1,
    "unityOfMeasure": "UN"
  },
  {
    "sku": "456",
    "name": "Produto 2",
    "value": 2000,
    "quantity": 2,
    "unityOfMeasure": "UN"
  }
]
```

**Importante**: O JSON deve ser codificado para URL.
Exemplo:

```
orderItems=%5B%7B%22sku%22%3A%22123%22%2C%22name%22%3A%22Produto%201%22%2C%22value%22%3A1000%2C%22quantity%22%3A1%2C%22unityOfMeasure%22%3A%22UN%22%7D%5D
```

### Formato Delimitado

```
123|Produto 1|1000|1|UN;456|Produto 2|2000|2|UN
```

**Importante**: O texto delimitado deve ser codificado para URL.
Exemplo:

```
orderItems=123%7CProduto%201%7C1000%7C1%7CUN%3B456%7CProduto%202%7C2000%7C2%7CUN
```

Formato: `sku|nome|valor|quantidade|unidadeMedida`  
Separador de itens: `;`  
Separador de campos: `|`

## Formatos de String Suportados

### CPF e CNPJ

Os parâmetros `cpf`, `storeCnpj` e `automationCnpj` devem ser informados sem máscara ou caracteres
especiais.

**Exemplos corretos:**

- CPF: `12345678909`
- CNPJ: `12345678000123`

**Exemplos incorretos:**

- CPF: `123.456.789-09`
- CNPJ: `12.345.678/0001-23`

### Host

O parâmetro `host` aceita tanto endereços IP quanto URLs.

**Exemplos:**

- IP: `192.168.0.1`
- URL: `https://api.pagamento.com.br`

### Parâmetros JSON

Os parâmetros que utilizam formato JSON (`providerParams`, `orderItems`) devem ser codificados
adequadamente para URLs.

**Exemplo correto:**

```
providerParams={"terminal_id":"12345","merchant_id":"67890"}
```

**Codificado para URL:**

```
providerParams=%7B%22terminal_id%22%3A%2212345%22%2C%22merchant_id%22%3A%2267890%22%7D
```

**Observação importante sobre JSON e URL-encoding:**
Quando uma URL com parâmetros JSON é processada pelo Android, o sistema automaticamente faz o
URL-decode antes de disponibilizar os valores. Por isso, é essencial que você faça o URL-encode
correto do JSON ao construir a URL de deeplink, caso contrário, caracteres especiais como `{`,
`}`, `"`, `:` podem quebrar a formação da URL ou o parseamento do JSON.

Para `orderItems`, o sistema tenta primeiro o parseamento como JSON, e se falhar, tenta o formato
delimitado.

### Data e Hora

O parâmetro `dateTimeOfSale` deve ser informado como timestamp em milissegundos.

**Exemplo:**

```
dateTimeOfSale=1717401600000
```

### Valores Booleanos

Parâmetros como `autoPrintReceipt`, `printMerchantReceipt`, `autoConfirm`, `finalizeTransaction` e `isProduction`
aceitam valores `"true"` ou `"false"` como strings.

**Exemplos:**

```
autoPrintReceipt=true
autoConfirm=false
```

## Processando Resultados

Após a operação ser concluída, o PaykitDeeplink retorna um resultado que pode ser processado pela
aplicação que originou a chamada. Os resultados são fornecidos como extras em um Intent, onde a
chave é `result`.

Dependendo do tipo de operação, o resultado pode conter:

- **PaymentResult** - Para operações de pagamento (crédito, débito, voucher, etc.)
- **ActivationResult** - Para operações de ativação
- **CancelResult** - Para operações de cancelamento
- **TransactionQueryResult** - Para consultas de transação
- **PrintResult** - Para operações de impressão
- **QueryReportResult** - Para consultas de relatórios
- **Boolean** - Para operações de confirmação/desfazer transação pendente

## Exemplos de Implementação

### 1. Implementação com URI

Para implementar a chamada de um deeplink para pagamento com cartão de crédito usando URI:

```kotlin
val uri = Uri.parse("paykit://payment")
    .buildUpon()
    .appendQueryParameter("paymentType", "credit")
    .appendQueryParameter("amount", "1000") // R$ 10,00
    .appendQueryParameter("billOfSale", "PEDIDO123")
    .appendQueryParameter("installments", "1")
    .appendQueryParameter("autoPrintReceipt", "true")
    .build()

val intent = Intent(Intent.ACTION_VIEW, uri)
startActivityForResult(intent, REQUEST_CODE_PAYMENT)
```

### 2. Implementação com Intent

Alternativamente, você pode implementar usando diretamente o Intent com extras:

```kotlin
val intent = Intent(Intent.ACTION_VIEW)
intent.setPackage("com.linx.paykit.example") // Pacote da aplicação de pagamento
intent.setData(Uri.parse("paykit://payment"))
intent.putExtra("paymentType", "credit")
intent.putExtra("amount", "1000") // R$ 10,00
intent.putExtra("billOfSale", "PEDIDO123")
intent.putExtra("installments", "1")
intent.putExtra("autoPrintReceipt", "true")
startActivityForResult(intent, REQUEST_CODE_PAYMENT)
```

### Processando o resultado:

```kotlin
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    super.onActivityResult(requestCode, resultCode, data)

    if (requestCode == REQUEST_CODE_PAYMENT && resultCode == Activity.RESULT_OK) {
        val result = data?.getParcelableExtra<ParcelablePaymentResult>("result")
        // Processar o resultado da transação
        // Você pode obter dados de pagamento como:
        val transactionId = result?.paymentResult?.id
        val amount = result?.paymentResult?.amount
        val success = result?.paymentResult?.status == TransactionStatus.COMPLETED
        // ... outros dados conforme necessário
    }
}
```

## Biblioteca de Apoio ao Desenvolvedor

O SDK disponibiliza classes auxiliares na biblioteca `com.linx.paykit.common.deeplink.parameters` no pacote `SDKPayServices.common` para facilitar a integração com o PaykitDeeplink. Estas classes fornecem abstrações que simplificam o processo de construção e processamento de parâmetros.

### DeeplinkParameter

A classe `DeeplinkParameter` contém todas as definições dos parâmetros suportados como uma enumeração, o que facilita a consistência na nomeação dos parâmetros:

```kotlin
enum class DeeplinkParameter(val key: String, val value: String? = null) {
    SCHEME("scheme", "paykit"),
    AUTOMATION_CNPJ("automationCnpj"),
    STORE_CNPJ("storeCnpj"),
    ACTIVATION_CODE("activationCode"),
    HOST("host", "payment"),
    // ... outros parâmetros
}
```

Usando esta enumeração, você pode referenciar os parâmetros de forma segura para evitar erros de digitação:

```kotlin
intent.putExtra(DeeplinkParameter.AMOUNT.key, "10.50")
```

### DeeplinkExtensions

A classe `DeeplinkExtensions` fornece métodos de extensão para facilitar a extração e processamento de parâmetros de um Intent:

```kotlin
// Exemplo de uso dos métodos de extensão
val amount = intent.extractAmount()
val cpf = intent.extractCpf()
val providerParams = intent.extractProviderParams()
val orderItems = intent.extractOrderItems()
```

Estes métodos já realizam conversões de tipos e tratamento de nulos, economizando código e reduzindo erros:

- `extractAmount()`: Converte a string para BigDecimal
- `extractInstallments()`: Converte a string para Int
- `extractDateTimeOfSale()`: Converte a string timestamp para Date
- `extractProviderParams()`: Converte a string JSON para JSONObject
- `extractOrderItems()`: Suporta parsing de formato JSON ou delimitado

### TransactionParameterBuilder

Para construir os parâmetros de transação necessários, o SDK fornece a classe `TransactionParameterBuilder`, que permite criar facilmente diferentes tipos de parâmetros:

```kotlin
// Criando parâmetros a partir de um Intent
val builder = TransactionParameterBuilder.fromUri(intent)

// Construindo diferentes tipos de parâmetros
val creditParams = builder.buildCreditParameters()
val debitParams = builder.buildDebitParameters()
val cancelParams = builder.buildCancelParameter()

// Ou usando método genérico
val params = builder.build<CreditParameters>()
```

Esta classe simplifica a construção de parâmetros para diferentes tipos de transações, extraindo automaticamente os valores do Intent e aplicando as conversões necessárias.

### PaymentTypeOption e TransactionTypeOption

As classes `PaymentTypeOption` e `TransactionTypeOption` oferecem abstrações seguras para trabalhar com tipos de pagamento e transação:

```kotlin
// Convertendo string para PaymentTypeOption
val paymentTypeOption = PaymentTypeOption.fromString("credit")

// Convertendo string para TransactionTypeOption
val transactionTypeOption = TransactionTypeOption.fromString("at_sight")
```

Estas classes já tratam a conversão de nomes de constantes para os enums correspondentes, incluindo normalização de caixa (lowercase).

Usando essas classes auxiliares, você pode construir integrações mais robustas e com menos código, reduzindo significativamente a possibilidade de erros em tempo de execução.

## Observações Importantes

1. Todos os valores monetários podem ser fornecidos como valores inteiros em centavos (ex: "1000"
   para R$ 10,00) ou como valores decimais com ponto (ex: "10.25" para R$ 10,25).
2. Se o parâmetro `installments` não for informado ou for inválido, o sistema utilizará o valor
   configurado pela adquirente ou o comportamento padrão definido pelo provedor de pagamento.
3. Para parâmetros do tipo JSON (`providerParams`, `orderItems`), utilize a codificação adequada
   para URLs.
4. Verifique com o provedor de pagamento quais são os parâmetros específicos exigidos.
5. O parâmetro `transactionType` pode variar dependendo do `paymentType` selecionado.
6. Os itens do pedido podem ser enviados em formato JSON ou em formato delimitado.
7. Alguns tipos de operação podem não estar disponíveis, dependendo da configuração do SDK.
