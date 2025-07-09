#### `CancelParameter`

O objeto `CancelParameter`, utilizado em transações de cancelamento.

| Campo                       | Tipo           | Descrição                                                                                          |
|-----------------------------|----------------|----------------------------------------------------------------------------------------------------|
| **paymentId**               | `String`       | Identificador da transação de pagamento que será cancelada.                                        |
| **externalId**              | `String?`      | Identificador externo para a transação, se necessário. Este campo é opcional.                      |
| **amount**                  | `BigDecimal?`  | O valor total da transação de pagamento que será cancelada. Este campo é opcional.                 |
| **originalPaymentType**     | `PaymentType?` | Modalidade (débito, crédito, voucher, Pix, etc.) da transação de pagamento. Este campo é opcional. |
| **originalTransactionDate** | `Date?`        | Data em que a transação de pagamento foi realizada. Este campo é opcional.                         |
| **cancelAmount**            | `BigDecimal?`  | O valor que será cancelado da transação para cancelamento parcial. Este campo é opcional.          |
| **autoPrintReceipt**        | `Boolean`      | Imprime automaticamente o comprovante do lojista quando o processador da transação é o TEF.        |
| **printMerchantReceipt**    | `Boolean`      | Imprime (ou não) o recibo do lojista. Utilizar apenas em totens de auto atendimento.               |
| **autoConfirm**             | `Boolean?`     | Envia a confirmação automaticamente. Só utilizada quando o processador da transação é o TEF.       |
