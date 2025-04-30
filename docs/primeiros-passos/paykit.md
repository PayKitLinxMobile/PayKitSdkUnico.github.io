## Interface Paykit

A interface `Paykit` define os métodos que cada aplicação deve implementar para realizar transações de pagamento.

### Métodos

| Método                          | Descrição                                                                 | Parâmetros                                                         | Retorno             |
|---------------------------------|---------------------------------------------------------------------------|--------------------------------------------------------------------|---------------------|
| **activate**                    | Ativa o SDK com os parâmetros fornecidos.                | `activationParameters`: Parâmetros de ativação.                                     | `ActivationResult`  |
| **credit**                      | Realiza uma transação de crédito.                        | `CreditParameters`: Parâmetros da transação.                                       | `PaymentResult`     |
| **debit**                       | Realiza uma transação de débito.                         | `DebitParameters`: Parâmetros da transação.                                       | `PaymentResult`     |
| **voucher**                     | Processa um pagamento por meio de voucher.               | `paymentParameters`: Parâmetros da transação.                                       | `PaymentResult`     |
| **pix**                         | Processa um pagamento via PIX.                           | `paymentParameters`: Parâmetros da transação.                                       | `PaymentResult`     |
| **wallet**                      | Processa um pagamento utilizando carteira digital.       | `paymentParameters`: Parâmetros da transação.                                      | `PaymentResult`     |
| **fleet**                       | Processa uma transação de controle de frota.             | `paymentParameters`: Parâmetros da transação.                                      | `PaymentResult`     |
| **cancel**                      | Cancela uma transação.                                   | `cancelParameter`: Parâmetros de cancelamento.                                      | `CancelResult`      |
| **printLastReceipt**          | Imprime o último recibo.                                | `receiptType`: Tipo de recibo a ser impresso.                                         | `Boolean`           |
| **print**                       | Imprime uma imagem bitmap.                              | `bitmap`: A imagem a ser impressa.                                                   | `Boolean`           |
| **retrieveSdkInfo**            | Recupera informações sobre o SDK.                       | `callback`: Callback para receber as informações do SDK.                              | `SdkInfo`           |
| **startPayment**            | Executa o fluxo genérico de pagamentos do SDK.             | `amount` Valor da transação.<br>`callback`: Callback para receber as informações do SDK.| `PaymentResult`  |



### Configurar uma transação de pagamento

Para realizar uma transação de pagamento, utilize a classe definida na tabela.

#### `paymentParameters`

| Campo                    | Tipo           | Descrição                                                                                  |
|--------------------------|----------------|--------------------------------------------------------------------------------------------|
| **amount**               | `BigDecimal`   | O valor total da transação.                                                                |
| **installments**         | `Int?`         | O número de parcelas para pagamento. O valor .                                              |
| **cpf**                  | `String?`      | CPF do cliente, se aplicável. Este campo é opcional.                                       |
| **billOfSale**           | `String?`      | Documento de venda associado à transação. Este campo é opcional.                           |
| **dateTimeOfSale**      | `Date?`        | Data e hora em que a venda foi realizada. Este campo é opcional.                            |
| **externalId**           | `String?`      | Identificador externo para a transação, se necessário. Este campo é opcional.              |
| **items**           | `List<OrderItem>?`  | Lista dos items de venda, relacionados a transação a ser realizada. Este campo é opcional. |
| **autoPrintReceipt**     | `Boolean`      | Imprime automaticamente o comprovante do lojista quando o processador da transação é o TEF.   |
| **deadline**             | `Int?`         | Data de expiração da primeira parcela, em dias. Este campo é opcional.                     |
| **automaticConfirmation** | `Boolean?`  | Envia a confirmação automaticamente. Só utilizada quando o processador da transação é o TEF   |


{% include "../snippets/credit-parameters.md" %}
{% include "../snippets/credit-type.md" %}
{% include "../snippets/debit-parameters.md" %}
{% include "../snippets/debit-type.md" %}
{% include "../snippets/voucher-type.md" %}

{% include "../snippets/payment-result.md" %}
