Para realizar uma Transação de **Pré-autorização de crédito**, utilize os métodos **preAuthorize**, **capturePreAuthorization** (ou **credit**) e **cancelPreAuthorization** (ou **cancel**) da classe **paykit**.

Os parâmetros de entrada da transação de pré-autorização são configurados no objeto **CreditParameters**

{% include "../snippets/credit-parameters.md" %}

Já os parâmetros de entrada da transação de captura ou cancelamento de pré-autorização são configurados no objeto **PendingPreParameters**

{% include "../snippets/pending-pre-parameters.md" %}

Perceba que os parâmetros são os mesmos de uma transação normal de crédito, afinal, só existe pré-autorização para a modalidade crédito. Entretanto, o preenchimento ou não de alguns parâmetros se dá pela `Adquirente`, pois em algumas a pré-autorização é uma transação completa e, posteriormente precisamos apenas efetuar a captura (ou confirmação) dessa pré-autorização. Já em outras adquirentes, a captura do valor ocorre em uma transação de crédito normal (método **credit**); nesses casos o importante na pré-autorização é apenas o valor que será reservado. Com relação ao cancelamento possumios um comportamento semelhante.

A tabela abaixo especifica quais métodos devem ser chamados nas principais adquirentes para efetuar a captura do valor ou o cancelamento da pré-autorização:


| Provedor* | Adquirente* | Método de captura*        | Método de cancelamento*  |
|-----------|-------------|---------------------------|--------------------------|
| TEF       | Stone       |                           |                          |
| TEF       | Rede        | `capturePreAuthorization` | `cancel`                 |
| TEF       | PagSeguro   |                           |                          |
| TEF       | GetNet      | `credit`                  | `cancel`                 |
| TEF       | Cielo       | `credit`                  | `cancel`                 |
| TEF       | Adyen       |                           |                          |
| TEF       | Vero        |                           |                          |
| TEF       | Sicoob      |                           |                          |
| TEF       | Sicredi     |                           |                          |

_*Matriz em construção_

Os resultados da transação de pré-autorização ou captura de pré-autoriação serão devolvidos no objeto **PaymentResult**.

{% include "../snippets/payment-result.md" %}

Por outro lado, o resultado da transação de cancelamento de pré-autorização serão devolvidos no objeto **CancelResult**.

{% include "../snippets/cancel-result.md" %}

## Exemplos

### Exemplo de Pré-autorização com captura da pré-autorização

!!! Atenção 

    Verifique os parametros da transação. Os atributos devem seguir os critérios: <br/>
    - **amount**: MAIOR ou igual a 0.01

```kotlin
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.PaymentResult
import com.linx.paykit.common.TransactionStatus
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.CreditParameters
import com.linx.paykit.common.parameter.PendingPreParameters
import com.linx.paykit.common.parameter.type.CreditTransactionType
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Pré-autorização com captura da pré-autorização", PaykitId("PAYKIT_ID")))

        val preParameter = CreditParameters(
            installments = 1,  // Número de parcelas (1 para crédito à vista)
            amount = BigDecimal("100.00"),  // Valor da transação
            creditType =  CreditTransactionType.AT_SIGHT // Crédito à vista
        )

        paykit.preAuthorize(preParameter, object : Callback<PaymentResult> {
            override fun execute(result: PaymentResult) {
                Log.i("PaymentResult", "ID: ${result.id}, Transaction: ${result.rawData}")
                onPreResult(result.id, result)
            }
        })
    }

    private fun onPreResult(id: String?, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado da pré-autorização

        // ...

        // Implementada lógica de captura aqui apenas para fins educativos
        if (transaction.status == TransactionStatus.APPROVED) {
            val pendingParameter = PendingPreParameters(
                preId = transaction.id,
                amount = BigDecimal("100.00")  // Valor que será capturado
            )

            paykit.capturePre(pendingParameter, object : Callback<PaymentResult> {
                override fun execute(result: PaymentResult) {
                    Log.i("PaymentResult", "ID: ${result.id}, Transaction: ${result.rawData}")
                    onCaptureResult(result.id, result.rawData)
                }
            })
        }
    }

    private fun onCaptureResult(id: String?, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado da captura da pré-autorização
    }
}
```

### Exemplo de Pré-autorização com operação de crédito para captura

!!! Atenção 

    Verifique os parametros da transação. Os atributos devem seguir os critérios:<br/>
    - **amount**: MAIOR ou igual a 0.01

```kotlin
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.PaymentResult
import com.linx.paykit.common.TransactionStatus
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.CreditParameters
import com.linx.paykit.common.parameter.PendingPreParameters
import com.linx.paykit.common.parameter.type.CreditTransactionType
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Pré-autorização com captura da pré-autorização", PaykitId("PAYKIT_ID")))

        val preParameter = CreditParameters(
            amount = BigDecimal("100.00"),  // Valor da transação
        )

        paykit.preAuthorize(preParameter, object : Callback<PaymentResult> {
            override fun execute(result: PaymentResult) {
                Log.i("PaymentResult", "ID: ${result.id}, Transaction: ${result.rawData}")
                onPreResult(result.id, result)
            }
        })
    }

    private fun onPreResult(id: String?, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado da pré-autorização

        // ...

        // Implementada lógica de captura aqui apenas para fins educativos
        if (transaction.status == TransactionStatus.APPROVED) {
            val creditParameter = CreditParameters(
                installments = 1,  // Número de parcelas (1 para crédito à vista)
                amount = BigDecimal("100.00"),  // Valor da transação
                creditType =  CreditTransactionType.AT_SIGHT // Crédito à vista
            )

            paykit.credit(creditParameter, object : Callback<PaymentResult> {
                override fun execute(result: PaymentResult) {
                    Log.i("PaymentResult", "ID: ${result.id}, Transaction: ${result.rawData}")
                    onCaptureResult(result.id, result.rawData)
                }
            })
        }
    }

    private fun onCaptureResult(id: String?, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado da captura da pré-autorização
    }
}
```
