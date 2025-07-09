## Interface Paykit

A interface `Paykit` define os métodos que cada adquirente deve implementar para realizar transações de pagamento.

### Métodos

| Método                          | Descrição                                                                 | Parâmetros                                                         | Retorno             |
|---------------------------------|---------------------------------------------------------------------------|--------------------------------------------------------------------|---------------------|
| **activate**                    | Ativa o SDK com os parâmetros fornecidos. *Executar apenas 1 (uma) vez ou quando o terminal é realocado para outra loja.* | `activationParameters`: Parâmetros de ativação.                                     | `ActivationResult`  |
| **credit**                      | Realiza uma transação de crédito.                        | `creditParameters`: Parâmetros da transação.                                       | `PaymentResult`     |
| **debit**                       | Realiza uma transação de débito.                         | `debitParameters`: Parâmetros da transação.                                       | `PaymentResult`     |
| **voucher**                     | Processa um pagamento por meio de voucher.               | `voucherParameters`: Parâmetros da transação.                                       | `PaymentResult`     |
| **pix**                         | Processa um pagamento via PIX.                           | `paymentParameters`: Parâmetros da transação.                                       | `PaymentResult`     |
| **wallet**                      | Processa um pagamento utilizando carteira digital.        | `paymentParameters`: Parâmetros da transação.                                      | `PaymentResult`     |
| **cancel**                      | Cancela uma transação.                                   | `cancelParameter`: Parâmetros de cancelamento.                                      | `CancelResult`      |
| **preAuthorize**                      | Realiza uma transação de pré-autorização.          | `creditParameters`: Parâmetros da transação.                                        | `PaymentResult`      |
| **capturePreAuthorization***                     | Captura o valor de uma pré-autorização.          | `pendingPreParameters`: Parâmetros da transação.                                        | `PaymentResult`      |
| **cancelPreAuthorization***                      | Cancela uma transação de pré-autorização.          | `pendingPreParameters`: Parâmetros da transação.                                        | `CancelResult`      |
| **printLastReceipt**          | Imprime o último recibo.                                | `receiptType`: Tipo de recibo a ser impresso.                                          | `PrintResult`           |
| **print**                       | Imprime uma imagem bitmap.                              | `bitmap`: A imagem a ser impressa.                                                   | `PrintResult`           |
| **retrieveSdkInfo**            | Recupera informações sobre o SDK.                       |                               | `Map<String, String>`           |
| **startPayment**            | Executa o fluxo genérico de pagamentos do SDK.             | `paymentParameters`: Parâmetros da transação.                                         | `PaymentResult`  |
| **getTransaction**             | Recupera informações de uma transação.                  | `transactionParameters`: Parâmetros da transação.                                     | `PaymentResult`  |

_*Algumas adquirentes não possuem essas operações._