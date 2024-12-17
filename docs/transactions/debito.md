O processo para realizar qualquer transação, tem como premissa que a ativação do SDK foi previamente realizada. 
Para realizar uma Transação de **Débito**, utilize o exemplo abaixo. 

!!! Atenção 

    Verifique os parametros da transação. Os atributos devem seguir os critérios: <br/>
    - **amount**: MAIOR ou igual a 1

```kotlin
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.Paykit
import com.linx.paykit.common.PaymentResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.PaymentParameters
import com.linx.paykit.common.parameter.type.DebitTransactionType
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Débito"))

        val debitParameter = DebitParameters(
            amount = BigDecimal("100.00"),  // Valor da transação
            debitType = DebitTransactionType.AT_SIGHT // Débito à vista
        )

        paykit.credit(debitParameter, object : Callback<PaymentResult> {
            override fun execute(result: PaymentResult) {
                Log.i("PaymentResult", "ID: ${result.id}, Transaction: ${result.transactionData}")
                onPaymentResult(result.id, result.transactionData)
            }
        })
    }

    private fun onPaymentResult(transactionId: String, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado do pagamento
    }
}
```

O `debitParameter` pode mudar de acordo com a o `debitType`, onde dado o suporte pela adquirente à modalidade, exemplo do `DebitTransactionType.POSTDATED`
para o pré-datado.

```kotlin
    val debitParameter = PaymentParameters(
        amount = BigDecimal("100.00"),  // Valor da transação
        debitType = DebitTransactionType.POSTDATED // Débito pré-datado
        postCreditDays = 30 // Dias para o pré-datado
    )
```

{% include "../snippets/debit-type.md" %}
{% include "../snippets/payment-result.md" %}
