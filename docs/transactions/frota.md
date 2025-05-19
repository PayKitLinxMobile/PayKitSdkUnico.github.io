O processo para realizar qualquer transação, tem como premissa que a ativação do SDK foi previamente realizada. 
Para realizar uma Transação de **Frota**, utilize o exemplo abaixo. 

!!! Atenção 

    Verifique os parâmetros da transação. Os atributos devem seguir os critérios:
    - amount: MAIOR ou igual a 1

## Fluxo Unificado de Frotas (TEFs)

```kotlin
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.PaymentResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.FleetParameters
import com.linx.paykit.common.builder.TefFleetUnifiedBuilder
import com.linx.paykit.common.builder.models.RefuelItem
import com.linx.paykit.common.builder.models.ServiceItem
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory

import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Frota", PaykitId("PAYKIT_ID")))

        val unifiedFleetRequest = TefFleetUnifiedBuilder()
            .setAcquirerCode(121)
            .setCpf("12345678901")
            .setVehiclePlate("ABC1234")
            .setDriverId("12345678901")
            .setOdometer(1000)
            .setHourMeter(1000)
            .setMileage(1000)
            .setWorkOrderNumber("12345678901")
            .setEmployeeId("12345678901")
            .setHasBrPremmia(false)
            .setBrPremmiaEmployeeCode("12345678901")
            .addServiceItem(
                ServiceItem(
                    1231, 123.45.toBigDecimal(), 123.45.toBigDecimal()
                )
            )
            .setServiceItems(
                listOf(
                    ServiceItem(
                        1231, 123.45.toBigDecimal(), 123.45.toBigDecimal()
                    ),
                    ServiceItem(
                        1232, 123.45.toBigDecimal(), 123.45.toBigDecimal()
                    )
                )
            )
            .addRefuelItem(
                RefuelItem(
                    123, 123.45.toBigDecimal(), 123.45.toBigDecimal()
                )
            )
            .setRefuelItems(
                listOf(
                    RefuelItem(
                        123, 123.45.toBigDecimal(), 123.45.toBigDecimal()
                    ),
                    RefuelItem(
                        125, 123.45.toBigDecimal(), 123.45.toBigDecimal()
                    )
                )
            )
            .setParameter(
                "brand", ParameterValue.Str("Rovias S/A")
            )
            .setParameter(
                "responsaveis", ParameterValue.ListVal(
                    listOf(
                        ParameterValue.Str("João"),
                        ParameterValue.Str("Cleber")
                    )
                )
            )
            .build()


        val fleetParameters = FleetParameters(
            providerParams = unifiedFleetRequest // JSONObject com as informações da transação
        )

        paykit.fleet(fleetParameters, object : Callback<PaymentResult> {
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

## Demais Rotinas de Frotas


```kotlin
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.linx.paykit.common.Callback
import com.linx.paykit.common.PaymentResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.common.parameter.FleetParameters
import com.linx.paykit.common.builder.models.RefuelItem
import com.linx.paykit.common.builder.models.ServiceItem
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory

import java.math.BigDecimal

class MainActivity : AppCompatActivity() {

    private lateinit var paykit: Paykit

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        paykit = PaykitFactory().build(Parameters(this.applicationContext, "Frota", PaykitId("PAYKIT_ID")))

        val fleetParameters = FleetParameters(
            amount = BigDecimal("100.00"),      // Valor da transação
            vehiclePlate = "ABC1234",           // Placa do Veículo
            driverId = "234123",                // Matrícula ou Código do Motorista
            odometer = 1000,                    // Contador da quilometragem percorrida pelo veículo
            hourMeter = 1000,                   // Representa a quantidade de tempo de funcionamento do veículo
            providerParams = JSONObject(..)     // JSON para parâmetros extras, utilize um JSONObjectBuilder.
        )

        paykit.fleet(fleetParameters, object : Callback<PaymentResult> {
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

___
# JSONObjectBuilders

!!! Atenção 

    Verifique os parâmetros do JSON, a **título de consulta**, na documentação do provedor/adquirente.<br>
    Exemplo de JSON no [TEF Mobile](https://paykitlinxmobile.github.io/pages/Integracao/ParameterType/#parametros-de-transacao-frota)

{% include "../snippets/fleet-parameter-builder.md" %}
___
{% include "../snippets/payment-result.md" %}
