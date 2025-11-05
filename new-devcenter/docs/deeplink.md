# DeepLink

O SDK Único suporta integração via DeepLink, permitindo que aplicações externas iniciem transações através de URLs customizadas.

## Formato do DeepLink

```
paykit://[action]?[parameters]
```

## Ações Disponíveis

### Payment (Pagamento)

Inicia uma transação de pagamento.

#### Parâmetros

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `paymentType` | String | Sim | Tipo de pagamento (credit, debit, voucher, pix) |
| `amount` | Long | Sim | Valor em centavos (ex: 1000 = R$ 10,00) |
| `installments` | Integer | Não | Número de parcelas (padrão: 1) |
| `externalId` | String | Não | Identificador externo da transação |

#### Exemplos

**Pagamento com Crédito:**
```
paykit://payment?paymentType=credit&amount=1000
```

**Pagamento com Débito:**
```
paykit://payment?paymentType=debit&amount=1000
```

**Pagamento com PIX:**
```
paykit://payment?paymentType=pix&amount=1000
```

**Pagamento Parcelado:**
```
paykit://payment?paymentType=credit&amount=5000&installments=3
```

**Pagamento com ID Externo:**
```
paykit://payment?paymentType=credit&amount=1000&externalId=ORDER_123
```

### Cancel (Cancelamento)

Cancela uma transação previamente aprovada.

#### Parâmetros

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `transactionId` | String | Sim | NSU da transação a ser cancelada |
| `amount` | Long | Não | Valor a cancelar (para cancelamento parcial) |

#### Exemplos

**Cancelamento Total:**
```
paykit://cancel?transactionId=123456
```

**Cancelamento Parcial:**
```
paykit://cancel?transactionId=123456&amount=500
```

### Administrative (Operações Administrativas)

Realiza operações administrativas no terminal.

#### Parâmetros

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `operation` | String | Sim | Tipo de operação (closeBatch, updateTables, printReport) |

#### Exemplos

**Fechar Lote:**
```
paykit://administrative?operation=closeBatch
```

**Atualizar Tabelas:**
```
paykit://administrative?operation=updateTables
```

**Imprimir Relatório:**
```
paykit://administrative?operation=printReport
```

## Configuração no AndroidManifest.xml

Para sua aplicação responder aos DeepLinks, adicione o intent-filter na Activity:

```xml
<activity android:name=".MainActivity">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        
        <data
            android:scheme="paykit"
            android:host="payment" />
        <data
            android:scheme="paykit"
            android:host="cancel" />
        <data
            android:scheme="paykit"
            android:host="administrative" />
    </intent-filter>
</activity>
```

## Processamento do DeepLink

### Kotlin

```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        intent?.data?.let { uri ->
            handleDeepLink(uri)
        }
    }
    
    override fun onNewIntent(intent: Intent?) {
        super.onNewIntent(intent)
        intent?.data?.let { uri ->
            handleDeepLink(uri)
        }
    }
    
    private fun handleDeepLink(uri: Uri) {
        when (uri.host) {
            "payment" -> {
                val paymentType = uri.getQueryParameter("paymentType")
                val amount = uri.getQueryParameter("amount")?.toLongOrNull()
                val installments = uri.getQueryParameter("installments")?.toIntOrNull() ?: 1
                val externalId = uri.getQueryParameter("externalId")
                
                if (paymentType != null && amount != null) {
                    processPayment(paymentType, amount, installments, externalId)
                }
            }
            "cancel" -> {
                val transactionId = uri.getQueryParameter("transactionId")
                val amount = uri.getQueryParameter("amount")?.toLongOrNull()
                
                if (transactionId != null) {
                    processCancel(transactionId, amount)
                }
            }
            "administrative" -> {
                val operation = uri.getQueryParameter("operation")
                
                if (operation != null) {
                    processAdministrative(operation)
                }
            }
        }
    }
}
```

## Retorno da Operação

Após processar o DeepLink, você pode retornar o resultado para a aplicação chamadora:

```kotlin
private fun returnResult(success: Boolean, data: Bundle) {
    val resultIntent = Intent().apply {
        putExtra("success", success)
        putExtras(data)
    }
    setResult(if (success) RESULT_OK else RESULT_CANCELED, resultIntent)
    finish()
}
```

## Boas Práticas

1. **Validação**: Sempre valide os parâmetros recebidos antes de processar
2. **Tratamento de Erros**: Implemente tratamento robusto de erros
3. **Timeout**: Configure timeouts adequados para operações
4. **Logs**: Registre todas as operações para debugging
5. **Segurança**: Valide a origem das chamadas quando necessário

## Exemplo Completo

```kotlin
// Aplicação externa iniciando pagamento
val intent = Intent(Intent.ACTION_VIEW).apply {
    data = Uri.parse("paykit://payment?paymentType=credit&amount=1000&externalId=ORDER_123")
}
startActivityForResult(intent, PAYMENT_REQUEST_CODE)

// Recebendo o resultado
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    super.onActivityResult(requestCode, resultCode, data)
    
    if (requestCode == PAYMENT_REQUEST_CODE) {
        if (resultCode == RESULT_OK) {
            val success = data?.getBooleanExtra("success", false) ?: false
            val nsu = data?.getStringExtra("nsu")
            
            if (success) {
                Log.i("Payment", "Pagamento aprovado. NSU: $nsu")
            }
        }
    }
}
```
