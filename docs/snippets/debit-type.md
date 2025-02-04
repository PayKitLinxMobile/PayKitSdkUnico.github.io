### Explicação do `DebitTransactionType`

Para o `debitType` é utilizado um `enum` para identificação da Modalidade de Débito.

```kotlin
/**
 * Enum representando os tipos de transação de Débito.
 * Correspondência DE-PARA (Português -> Inglês):
 * - DEBITO_AVISTA | TRANSACAO_DEBITO_VISTA -> AT_SIGHT
 * - DEBITO_PAGTO_FATURA_DEBITO -> DEBIT_INVOICE_PAYMENT
 * - TRANSACAO_BANRICOMPRAS_VISTA -> ACQUIRER_AT_SIGHT
 * - TRANSACAO_BANRICOMPRAS_PREDATADO -> POSTDATED
 * - TRANSACAO_BANRICOMPRAS_PARCELADO -> WITH_INSTALMENTS
 */
enum class DebitTransactionType(
    override val hasInterest: Boolean = false,
    override val hasInstalments: Boolean = false
) : TransactionType {
    AT_SIGHT,                  // DEBITO_AVISTA
    ACQUIRER_AT_SIGHT,         // TRANSACAO_BANRICOMPRAS_VISTA
    INVOICE_PAYMENT,           // DEBITO_PAGTO_FATURA_DEBITO
    POSTDATED,                 // TRANSACAO_BANRICOMPRAS_PREDATADO
    WITH_INSTALMENTS(hasInstalments = true) // TRANSACAO_BANRICOMPRAS_PARCELADO
}
```
