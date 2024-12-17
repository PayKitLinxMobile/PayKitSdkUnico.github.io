## Explicação do `VoucherTransactionType`

Para o `voucherType` é utilizado um `enum` para identificação da Modalidade de Voucher.

```kotlin
/**
 * Enum representando os tipos de transação de Voucher.
 * Correspondência DE-PARA (Português -> Inglês):
 * - VOUCHER_ALIMENTACAO -> FOOD
 * - VOUCHER_REFEICAO ->    MEAL
 * - VOUCHER_AUTOMOTIVO ->  AUTOMOTIVE
 * - VOUCHER_CULTURA ->     CULTURE
 * - VOUCHER_PEDAGIO ->     TOLL
 * - VOUCHER_BENEFICIOS ->  BENEFITS
 * - VOUCHER_AUTO ->        AUTOMOBILE
 * - VOUCHER_CONSULTA_SALDO -> BALANCE_INQUIRY
 * - VOUCHER_VALE_PEDAGIO -> TOLL_VALE
 * - TRANSACAO_VOUCHER -> DEFAULT
 */
enum class VoucherTransactionType(
    override val hasInterest: Boolean = false,
    override val hasInstalments: Boolean = false
) : TransactionType {
    FOOD,                     // VOUCHER_ALIMENTACAO
    MEAL,                     // VOUCHER_REFEICAO
    AUTOMOTIVE,               // VOUCHER_AUTOMOTIVO
    CULTURE,                  // VOUCHER_CULTURA
    TOLL,                     // VOUCHER_PEDAGIO
    BENEFITS,                 // VOUCHER_BENEFICIOS
    AUTOMOBILE,               // VOUCHER_AUTO
    BALANCE_INQUIRY,          // VOUCHER_CONSULTA_SALDO
    TOLL_VALE,                // VOUCHER_VALE_PEDAGIO
}
```
