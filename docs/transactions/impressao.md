O processo para realizar qualquer transação, tem como premissa que a ativação do SDK foi previamente realizada. 
Para realizar uma Transação de *Impressão*, utilize o exemplo abaixo.


```kotlin
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.Paykit
import com.linx.paykit.common.parameter.ReceiptType
import com.linx.paykit.core.PaykitFactory
import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Impressão"))

        val bitmap: Bitmap // Bitmap para impressão

        paykit.print(bitmap, object : Callback<Boolean> {
            override fun execute(result: Boolean) {
                Log.i("PaymentResult", "Status: ${result}")
                onPaymentResult(result)
            }
        })
    }

    private fun onPaymentResult(result: Boolean) {
        // Implementar a lógica para lidar com o resultado da reversão
    }
}
```
