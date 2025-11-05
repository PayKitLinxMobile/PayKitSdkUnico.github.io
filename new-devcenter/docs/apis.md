# APIs

## Interface Paykit

A interface `Paykit` define os métodos que cada adquirente deve implementar para realizar transações de pagamento.

### Métodos

| Método | Descrição | Parâmetros | Retorno |
|--------|-----------|------------|---------|
| `activate` | Ativa o terminal com as credenciais da adquirente | `ActivationParameters`, `Callback<ActivationResult>` | void |
| `payment` | Realiza uma transação de pagamento | `PaymentParameters`, `Callback<PaymentResult>` | void |
| `cancelPayment` | Cancela uma transação previamente aprovada | `CancelPaymentParameters`, `Callback<CancelPaymentResult>` | void |
| `getTransaction` | Busca informações de uma transação | `TransactionInfoParameters`, `Callback<TransactionQueryResult>` | void |
| `getLastTransaction` | Retorna a última transação realizada | `Callback<TransactionQueryResult>` | void |
| `printReceipt` | Imprime o comprovante de uma transação | `PrintReceiptParameters`, `Callback<PrintResult>` | void |
| `administrative` | Realiza operações administrativas | `AdministrativeParameters`, `Callback<AdministrativeResult>` | void |

### Exemplo de uso básico

```kotlin
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.PaykitId

class MainActivity : AppCompatActivity() {
    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Inicializa o SDK
        paykit = PaykitFactory().build(
            Parameters(
                this.applicationContext,
                "Nome da Aplicação",
                PaykitId("SEU_PAYKIT_ID")
            )
        )
    }
}
```

## Ativação do Terminal

### Parâmetros de Ativação

```kotlin
val activationParams = ActivationParameters(
    stoneCode = "123456789", // Para Stone
    // ou outros parâmetros específicos da adquirente
)

paykit.activate(activationParams, object : Callback<ActivationResult> {
    override fun execute(result: ActivationResult?) {
        if (result?.success == true) {
            // Terminal ativado com sucesso
            Log.i("Activation", "Terminal ativado")
        } else {
            // Erro na ativação
            Log.e("Activation", "Erro: ${result?.message}")
        }
    }
})
```

### Resultado da Ativação

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `success` | Boolean | Indica se a ativação foi bem-sucedida |
| `message` | String | Mensagem de retorno (sucesso ou erro) |
| `serialNumber` | String | Número de série do terminal |

## Pagamento

### Parâmetros de Pagamento

```kotlin
val paymentParams = PaymentParameters(
    amount = BigDecimal("10.00"),
    paymentType = PaymentType.CREDIT,
    installments = 1,
    externalId = "ORDER_123456"
)

paykit.payment(paymentParams, object : Callback<PaymentResult> {
    override fun execute(result: PaymentResult?) {
        if (result?.success == true) {
            Log.i("Payment", "Pagamento aprovado: ${result.nsu}")
        } else {
            Log.e("Payment", "Pagamento negado: ${result?.message}")
        }
    }
})
```

### Tipos de Pagamento

| Tipo | Descrição |
|------|-----------|
| `CREDIT` | Pagamento com cartão de crédito |
| `DEBIT` | Pagamento com cartão de débito |
| `VOUCHER` | Pagamento com voucher/vale |
| `PIX` | Pagamento via PIX |
| `WALLET` | Pagamento com carteira digital |

### Resultado do Pagamento

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `success` | Boolean | Indica se o pagamento foi aprovado |
| `nsu` | String | NSU da transação |
| `authorizationCode` | String | Código de autorização |
| `cardBrand` | String | Bandeira do cartão |
| `amount` | BigDecimal | Valor da transação |
| `receipt` | String | Comprovante da transação |

## Cancelamento

### Parâmetros de Cancelamento

```kotlin
val cancelParams = CancelPaymentParameters(
    transactionId = "123456", // NSU da transação
    amount = BigDecimal("10.00") // Valor a ser cancelado
)

paykit.cancelPayment(cancelParams, object : Callback<CancelPaymentResult> {
    override fun execute(result: CancelPaymentResult?) {
        if (result?.success == true) {
            Log.i("Cancel", "Cancelamento aprovado")
        } else {
            Log.e("Cancel", "Erro no cancelamento: ${result?.message}")
        }
    }
})
```

### Tipos de Cancelamento

- **Total**: Cancela o valor total da transação
- **Parcial**: Cancela apenas parte do valor (quando suportado pela adquirente)

## Operações Administrativas

### Tipos de Operações

| Operação | Descrição |
|----------|-----------|
| `PRINT_REPORT` | Imprime relatório de transações |
| `CLOSE_BATCH` | Fecha o lote de transações |
| `REPRINT` | Reimprime comprovante |
| `UPDATE_TABLES` | Atualiza tabelas da adquirente |

### Exemplo

```kotlin
val adminParams = AdministrativeParameters(
    operationType = AdministrativeOperationType.CLOSE_BATCH
)

paykit.administrative(adminParams, object : Callback<AdministrativeResult> {
    override fun execute(result: AdministrativeResult?) {
        if (result?.success == true) {
            Log.i("Admin", "Operação realizada com sucesso")
        }
    }
})
```
