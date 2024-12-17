O processo para realizar qualquer transação, tem como premissa que a ativação do SDK foi previamente realizada. 
Para realizar uma Transação de **Cancelamento**, utilize o exemplo abaixo.


```kotlin
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.Paykit
import com.linx.paykit.common.CancelResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.CancelParameter
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Cancelamento"))

        val cancelParameter = CancelParameter(
            paymentId = "1",  // (transactionId) NSU da Transação
            amount = BigDecimal("100.00"),  // Valor da original da transação
            originalTransactionDate = Date()  // Data original da transação
        )

        paykit.cancel(cancelParameter, object : Callback<CancelResult> {
            override fun execute(result: CancelResult) {
                 Log.i("PaymentResult", "ID: ${result.id}, Transaction: ${result.transactionData}")
                onPaymentResult(result.id, result.transactionData)
            }
        })
    }

    private fun onPaymentResult(transactionId: String, transaction: CancelResult) {
        // Implementar a lógica para lidar com o resultado da reversão
    }
}
```

{% include "../snippets/cancel-result.md" %}
