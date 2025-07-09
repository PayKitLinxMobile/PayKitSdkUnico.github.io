#### `CreditParameters`

O objeto `CreditParameters`, utilizado em transações de crédito.

| Campo                    | Tipo           | Descrição                                                                                  |
|--------------------------|----------------|--------------------------------------------------------------------------------------------|
| **amount**               | `BigDecimal`   | O valor total da transação.                                                                |
| **installments**         | `Int?`         | O número de parcelas para pagamento.                                                       |
| **cpf**                  | `String?`      | CPF do cliente, se aplicável. Este campo é opcional.                                       |
| **billOfSale**           | `String?`      | Documento de venda associado à transação. Este campo é opcional.                           |
| **dateTimeOfSale**       | `Date?`        | Data e hora em que a venda foi realizada. Este campo é opcional.                           |
| **externalId**           | `String?`      | Identificador externo para a transação, se necessário. Este campo é opcional.              |
| **items**                | `List<OrderItem>?`  | Lista dos items de venda, relacionados a transação a ser realizada. Este campo é opcional. |
| **autoPrintReceipt**     | `Boolean`      | Imprime automaticamente o comprovante do lojista quando o processador da transação é o TEF. |
| **printMerchantReceipt** | `Boolean`      | Imprime (ou não) o recibo do lojista. Utilizar apenas em totens de auto atendimento.       |
| **deadline**             | `Int?`         | Data de expiração da primeira parcela, em dias. Este campo é opcional.                     |
| **postCreditDays**       | `Int?`         | Data de expiração da primeira parcela, em dias. Este campo é opcional.                     |
| **creditType**           | `CreditTransactionType?`  | Tipo de transação de crédito.                                                   |
| **autoConfirm**          | `Boolean?`  | Envia a confirmação automaticamente. Só utilizada quando o processador da transação é o TEF   |



