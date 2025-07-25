O processo para realizar qualquer transação, tem como premissa que a ativação do SDK foi previamente realizada. 

Para realizar uma Transação de **Crédito**, utilize o método **credit** da classe **paykit**.

Os parâmetros de entrada da transação são configurados no objeto **CreditParameters**

{% include "../snippets/credit-parameters.md" %}

Existem diversas modalidades de crédito, sendo as mais conhecidas, a vista, parcelada pelo lojista e parcelada pelo estabelecimento.
A tabela a seguir mostra todas as opções disponíveis.

{% include "../snippets/credit-type.md" %}

Independente da modalidade, os resultados da transação serão devolvidos no objeto **paymentResult**

{% include "../snippets/payment-result.md" %}

## Exemplos

### Exemplo de Crédito a vista

!!! Atenção 

    Verifique os parametros da transação. Os atributos devem seguir os critérios: <br/>
    - **amount**: MAIOR ou igual a 0.01

```kotlin
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.PaymentResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.PaymentParameters
import com.linx.paykit.common.parameter.type.CreditTransactionType
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Credito à Vista", PaykitId("PAYKIT_ID")))

        val creditParameter = CreditParameters(
            installments = 1,  // Número de parcelas (1 para crédito à vista)
            amount = BigDecimal("100.00"),  // Valor da transação
            creditType =  CreditTransactionType.AT_SIGHT // Crédito à vista
        )

        paykit.credit(creditParameter, object : Callback<PaymentResult> {
            override fun execute(result: PaymentResult) {
                Log.i("PaymentResult", "ID: ${result.id}, Transaction: ${result.rawData}")
                onPaymentResult(result.id, result.rawData)
            }
        })
    }

    private fun onPaymentResult(id: String, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado do pagamento
    }
}
```

### Exemplo de Crédito parcelado pelo lojista 

!!! Atenção 

    Verifique os parametros da transação. Os atributos devem seguir os critérios:<br/>
    - **installments**: MAIOR que 1<br/>
    - **amount**: MAIOR ou igual a 0.01

```kotlin
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.PaymentResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.PaymentParameters
import com.linx.paykit.common.parameter.type.CreditTransactionType
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Credito parcelado", PaykitId("PAYKIT_ID")))

        val creditParameter = CreditParameters(
            installments = 2,  // Número de parcelas
            amount = BigDecimal("100.00"),  // Valor da transação
            creditType =  CreditTransactionType.STORE_INSTALMENTS // Crédito parcelado lojista
        )

        paykit.credit(creditParameter, object : Callback<PaymentResult> {
            override fun execute(result: PaymentResult) {
                Log.i("PaymentResult", "ID: ${result.id}, Transaction: ${result.rawData}")
                onPaymentResult(result.id, result.rawData)
            }
        })
    }

    private fun onPaymentResult(transactionId: String, transaction: PaymentResult) {
        // Implementar a lógica para lidar com o resultado do pagamento
    }
}
```
