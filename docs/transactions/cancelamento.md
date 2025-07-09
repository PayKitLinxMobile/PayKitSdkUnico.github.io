O processo para realizar qualquer transação, tem como premissa que a ativação do SDK foi previamente realizada. 

Para realizar uma Transação de **Cancelamento**, utilize o método **cancel** da classe **paykit**.

Os parâmetros de entrada da transação são configurados no objeto **CancelParameter**

{% include "../snippets/cancel-parameters.md" %}

Os parâmetros `paymentId`, `amount`, `originalPaymentType` e `originalTransactionDate` são utilizados para localizar a transação original que deve ser cancelada. Quando não informado será consultado no momento do cancelamento. Alguns provedores permitem cancelamento parcial (veja regras de negócio com o próprio provedor). Para esse caso possuímos o parâmetro `cancelAmount` que pode ser utilizado. 

## Exemplo

Para realizar uma Transação de **Cancelamento**, utilize o exemplo abaixo.

```kotlin
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.CancelResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.CancelParameter
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Cancelamento", PaykitId("PAYKIT_ID")))

        val cancelParameter = CancelParameter(
            paymentId = "1",  // (transactionId) NSU da Transação
            amount = BigDecimal("100.00"),  // Valor da original da transação
            originalTransactionDate = Date()  // Data original da transação
        )

        paykit.cancel(cancelParameter, object : Callback<CancelResult> {
            override fun execute(result: CancelResult) {
                 Log.i("PaymentResult", "ID: ${result.id}, Transaction: ${result.rawData}")
                onPaymentResult(result.id, result.rawData)
            }
        })
    }

    private fun onPaymentResult(transactionId: String, transaction: CancelResult) {
        // Implementar a lógica para lidar com o resultado da reversão
    }
}
```

{% include "../snippets/cancel-result.md" %}
