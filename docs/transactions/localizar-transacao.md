O processo de busca de transação, tem como premissa que a ativação do SDK foi previamente realizada. 
Para **Localizar uma Transação**, utilize o exemplo abaixo.


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
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Busca Transação", PaykitId("PAYKIT_ID")))

        // Utilizar o ID da transação ou o ID externo para localizar 
        val transactionParameter = TransactionInfoParameters(
            transactionId = "1", // (transactionId) NSU da Transação
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

{% include "../snippets/transactioninfo-result.md" %}
