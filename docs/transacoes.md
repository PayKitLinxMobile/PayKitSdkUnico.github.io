# Transações

## Localizar Transação

O processo de busca de transação tem como premissa que a ativação do SDK foi previamente realizada. Para localizar uma transação, utilize o exemplo abaixo.

### Exemplo de Implementação

```kotlin
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.TransactionQueryResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.TransactionInfoParameters
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory

class MainActivity : AppCompatActivity() {
    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(
            Parameters(
                this.applicationContext,
                "Busca Transação",
                PaykitId("PAYKIT_ID")
            )
        )

        // Utilizar o ID da transação ou o ID externo para localizar
        val transactionParameter = TransactionInfoParameters(
            transactionId = "1", // NSU da Transação
            // externalId = "123456" // ID externo da transação
        )

        paykit.getTransaction(transactionParameter, object : Callback<TransactionQueryResult?> {
            override fun execute(result: TransactionQueryResult?) {
                Log.i("TransactionQueryResult", "Transaction: ${result}")
                onGetTransaction(result)
            }
        })
    }

    private fun onGetTransaction(transaction: TransactionQueryResult?) {
        // Implementar a lógica para lidar com o resultado da consulta
    }
}
```

## TransactionQueryResult

O objeto `TransactionQueryResult`, retornado no callback da transação, contém informações da consulta.

### Campos Principais

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | String | Identificador único da transação |
| `externalId` | String | Identificador externo da transação (Informado pela automação comercial) |
| `processor` | Enum | Indica o processador da transação (STONE, TEF, REDE, GETNET, PAGSEGURO, VERO, CIELO, SICOOB, SITEF) |
| `status` | Enum | Status da transação (PENDING, APPROVED, CANCELLED, PARTIALLY_CANCELLED, ERROR, DECLINED) |
| `amount` | BigDecimal | Valor da transação |
| `dateTime` | Date | Data e hora da transação |
| `paymentType` | Enum | Método de pagamento (CREDIT, DEBIT, VOUCHER, PIX, WALLET, FLEET, QR_CODE) |
| `transactionType` | Interface | Modalidade do método (ex: Crédito Parcelado Lojista) |
| `nsuInfo` | NsuInfo | Dados de NSU do retorno transacional da adquirente |
| `transactionInfo` | TransactionInfo | Dados de retorno transacional da adquirente |
| `rawData` | Map<String, String> | Retorno estilo chave/valor recebido do provedor |

### Status da Transação

| Status | Descrição |
|--------|-----------|
| `PENDING` | Aguardando processamento |
| `APPROVED` | Transação aprovada |
| `CANCELLED` | Transação cancelada |
| `PARTIALLY_CANCELLED` | Transação parcialmente cancelada |
| `ERROR` | Ocorreu um erro na transação |
| `DECLINED` | Transação recusada |

## NsuInfo

O objeto `NsuInfo` contém informações essenciais da transação que são preenchidos de acordo com o retorno do provedor.

### Campos

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `nsu` | String | Código da transação de cartão. Gerado em transações com cartão |
| `e2eId` | String | Código da transação PIX. Gerado apenas em transações PIX |
| `nsuAcquirer` | String | Código da transação da adquirente/rede. Gerado pela rede autorizadora |
| `nsuLocal` | String | Identificador interno da transação em algumas adquirentes |

## TransactionInfo

O objeto `TransactionInfo` contém informações essenciais da adquirente.

### Campos

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `authorizationCode` | String | Código de autorização da transação |
| `cardBrand` | String | Bandeira do cartão utilizado |
| `cardNumber` | String | Número do cartão (com máscara) |
| `cardHolder` | String | Nome do proprietário do cartão |
| `cardLastDigits` | String | Últimos dígitos do cartão |
| `bankAccount` | String | Identificador do banco |
| `installments` | String | Número de parcelas |
| `storeReceipt` | String | Comprovante da Loja |
| `customerReceipt` | String | Comprovante do Cliente |

## Impressão de Comprovante

### Exemplo

```kotlin
val printParams = PrintReceiptParameters(
    transactionId = "123456", // NSU da transação
    receiptType = ReceiptType.MERCHANT // ou CUSTOMER
)

paykit.printReceipt(printParams, object : Callback<PrintResult> {
    override fun execute(result: PrintResult?) {
        if (result?.success == true) {
            Log.i("Print", "Comprovante impresso com sucesso")
        }
    }
})
```

### Tipos de Comprovante

| Tipo | Descrição |
|------|-----------|
| `MERCHANT` | Comprovante do estabelecimento |
| `CUSTOMER` | Comprovante do cliente |
| `BOTH` | Ambos os comprovantes |

## Última Transação

Para obter a última transação realizada no terminal:

```kotlin
paykit.getLastTransaction(object : Callback<TransactionQueryResult?> {
    override fun execute(result: TransactionQueryResult?) {
        if (result != null) {
            Log.i("LastTransaction", "NSU: ${result.nsuInfo?.nsu}")
            Log.i("LastTransaction", "Valor: ${result.amount}")
        }
    }
})
```
