### Explicação do `CreditTransactionType`

Para o `creditType` é utilizado um `enum` para identificação da Modalidade de Crédito.

```kotlin
/**
 * Enum representando os tipos de transação de Crédito.
 * Correspondência DE-PARA (Português -> Inglês):
 * - CREDITO_AVISTA | TRANSACAO_CREDITO_VISTA -> AT_SIGHT
 * - CREDITO_PARCELADO_LOJA | TRANSACAO_CREDITO_PARCELADO_LOJISTA -> STORE_INSTALMENTS
 * - CREDITO_PARCELADO_ADM -> ADMIN_INSTALMENTS
 * - CREDITO_PARCELADO_BNCO -> BANK_INSTALMENTS
 * - PRE_AUTORIZACAO -> PRE_AUTHORIZATION
 * - CREDITO_CREDIARIO_CREDITO -> CREDIT_FINANCING
 * - TRANSACAO_CREDITO_VISTA -> CREDIT_TRANSACTION_AT_SIGHT
 * - TRANSACAO_CREDITO_PARCELADO_EMISSOR -> ISSUER_INSTALMENTS
 * - TRANSACAO_BANRICOMPRAS_CREDITO_1_MINUTO -> CREDIT_1_MINUTE
 */
enum class CreditTransactionType(
    override val hasInterest: Boolean,
    override val hasInstalments: Boolean
) : TransactionType {
    AT_SIGHT(false, false),                 // CREDITO_AVISTA
    STORE_INSTALMENTS(false, true),         // CREDITO_PARCELADO_LOJA
    ADMIN_INSTALMENTS(true, true),          // CREDITO_PARCELADO_ADM
    BANK_INSTALMENTS(true, true),           // CREDITO_PARCELADO_BNCO
    PRE_AUTHORIZATION(false, false),        // PRE_AUTORIZACAO
    FINANCING(true, false),                 // CREDITO_CREDIARIO_CREDITO
    ISSUER_INSTALMENTS(true, true),         // TRANSACAO_CREDITO_PARCELADO_EMISSOR
    CREDIT_1_MINUTE(false, false);          // TRANSACAO_BANRICOMPRAS_CREDITO_1_MINUTO
}
```
