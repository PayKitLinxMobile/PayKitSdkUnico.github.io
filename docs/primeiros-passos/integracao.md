# Primeira Integração

## Passo 1 - Ativação

O SDK único, em sua definição, simplifica a integração com os SDKs das adquirentes, a partir de sua interface única. <br/>
Certifique-se de ter as chaves para baixar as dependências, de acordo com a instrução de [configuração](./config-sdk.md) do SDK Único. E seu `PaykitId` que será necessário para ativar o SDK Único.<br>

### PaykitId e Credenciamento

Para utilizar o SDK Único, é necessário ser credenciado como Automação Comercial/Integrador. Esse processo é feito ao preencher o formulário na etapa de [configuração](./config-sdk.md) do SDK Único e mediante a aprovação.

Para integrar e ativar sua aplicação com o SDK Único, siga os passos abaixo. Certifique-se de adicionar as devidas importações e configurar os parâmetros corretamente.

!!! Atenção

    Realize a operação de ativação apenas 1 (uma) vez no terminal ou quando ele for realocado para outra loja.

```kotlin
import android.util.Log
import com.linx.paykit.common.Callback
import com.linx.paykit.common.activation.ActivationParameters
import com.linx.paykit.common.activation.ActivationResult
import com.linx.paykit.common.builder.Parameters
import com.linx.paykit.core.Paykit
import com.linx.paykit.core.PaykitFactory

val TAG = "SDKUnicoExample"
var paykit: Paykit? = null

fun setupPaykit() {

    val sdkUnicoBuildParams = Parameters(this, "AppTeste", PaykitId("PAYKIT_ID"))
    paykit = PaykitFactory().build(sdkUnicoBuildParams)

    //Defina os parâmetros de acordo com as adquirentes desejadas
    val params = ActivationParameters("STORE_CNPJ").apply {}

    paykit?.activate(p, object : Callback<ActivationResult> {
        override fun execute(result: ActivationResult) {
            Log.d(TAG, "SDK Ativado com sucesso")
        }
    })
}
```

A classe `Parameters` mapeia os parâmetros do SDK Único, que são utilizados no método `activate`.

A classe `ActivationParameters` mapeia os parâmetros conforme os requisitos dos SDKs das Adquirentes, que demandam parâmetros específicos para ativação.

```kotlin
data class Parameters(
    val applicationContext: Context,
    val appName: String = "",
    val paykitId: String = ""
)

data class ActivationParameters(
    val storeCnpj: String,
    val tef: TefActivationParameters = TefActivationParameters(),
    val pagSeguro: PagSeguroActivationParameters = PagSeguroActivationParameters()
)

data class TefActivationParameters(
    var production: Boolean = false,
    var host: String? = null,
    var token: String? = null
)

data class PagSeguroActivationParameters (
    var activationCode: String? = null
)
```

```kotlin
val params = ActivationParameters("STORE_CNPJ").apply {
    tef.production = false
    tef.token = "TOKEN"
    pagSeguro.activationCode = "CODIGO_PAG_SEGURO"
}
```

## Passo 2 - Configuração

O SDK Único permite definir quais modalidades e métodos de pagamento estarão disponíveis, facilitando a configuração por parte do integrador.

!!! Atenção

    Realize a operação de configuração sempre que sua aplicação é inicializada.

A configuração dos métodos de pagamento pode variar por adquirente. Segue abaixo definição e exemplos:


```kotlin
interface Paykit {
    //...
    val paymentMethods: HashMap<PaymentType, PaymentMethod>
}

enum class PaymentType {
    CREDIT,
    DEBIT,
    VOUCHER,
    PIX,
    WALLET,
    FLEET,
    QR_CODE
}

data class PaymentMethod(
    //...
    var enabled: Boolean,
    val methodTypes: HashMap<TransactionType, MethodType>? = null
)

data class MethodType(
    //...
    var enabled: Boolean,
)

enum class DebitTransactionType(
    //...
) : TransactionType {
    AT_SIGHT, // DEBITO_AVISTA
    //...
}
```


Para desativar uma modalidade ou método de pagamento, basta alterar a `flag` de `enabled` para `false`

```kotlin
paykit.paymentMethods[PaymentType.CREDIT]?.enabled = false
```


Esse recurso também é útil quando o integrador deseja construir a interface de forma dinâmica.

```kotlin
@Composable
fun PaymentTypeSelector(
    paymentMethods: HashMap<PaymentType, PaymentMethod>,
    selectedType: PaymentType = PaymentType.DEBIT,
    selectedTransactionType: TransactionType = DebitTransactionType.AT_SIGHT,
    onTypeChanged: ((PaymentType) -> Unit)? = null,
    onTransactionTypeChanged: ((TransactionType) -> Unit)? = null
) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp)
    ) {
        paymentMethods.forEach { (paymentType, paymentMethod) ->
            PaymentTypeOption(
                paymentType = paymentType,
                paymentMethod = paymentMethod,
                isSelected = selectedType == paymentType,
                selectedTransactionType = selectedTransactionType,
                onTypeChanged = onTypeChanged,
                onTransactionTypeChanged = onTransactionTypeChanged
            )
        }
    }
}
```

- Verifique a [aplicação de exemplo](./projeto-exemplo.md/#projeto-exemplo) para auxiliar em sua integração.

- Verifique as transações disponíveis em [Transações](../transactions/index.md).
