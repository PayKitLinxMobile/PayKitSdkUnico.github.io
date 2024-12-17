## Explicação do `PaymentResult`

No `callback` da transação, é possível capturar detalhes da adquirente, como detalhado a seguir.

 - `id`: Identificador único da transação (NSU).
 - `processor`: Tipo de processador de pagamento utilizado (STONE, TEF, REDE, GETNET, PAGSEGURO, VERO).
 - `transactionData`: Objeto contendo o resultado detalhado da transação da adquirente, útil para deserialização.
 - `status`: Status da transação.
 - `message`: Mensagem de sucesso ou erro, se houver.
 - `paymentType`: Modalidade de pagamento utilizada (CREDIT, DEBIT, VOUCHER, PIX, WALLET).
 - `transactionType`: Tipo da transação utilizado (`CreditTransactionType`,`DebitTransactionType`,`VoucherTransactionType`).
