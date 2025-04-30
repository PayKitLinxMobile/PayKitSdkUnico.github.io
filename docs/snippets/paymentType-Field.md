| **id**     | `String` | Identificador único da transação.                              |
{% include "./processor-Field.md" %}
| **status** | `Enum`   | Representa o status da transação. Valores possíveis:                 |
|            |          | - `PENDING`: Aguardando processamento.                               |
|            |          | - `APPROVED`: Transação aprovada.                                    |
|            |          | - `CANCELLED`: Transação cancelada.                                  |
|            |          | - `ERROR`: Ocorreu um erro na transação.                             |
|            |          | - `DECLINED`: Transação recusada.                                    |
| **amount** | `BigDecimal`   | Representa o valor da transação.                |
| **transactionData** | `Map<String, String>` | Inclui os dados da transação da adquirente.    |
| **message** | `String` | Mensagem de sucesso ou erro, caso aplicável.  
| **paymentType** | `Enum`   | Representa o método de pagamento da transação. Valores possíveis:                 |
|            |          | - `CREDIT`                               |
|            |          | - `DEBIT`                                    |
|            |          | - `VOUCHER`                                 |
|            |          | - `PIX`                             |
|            |          | - `WALLET`                                  |
|            |          | - `FLEET`                                  |
|            |          | - `QR_CODE`                                  |
| **transactionType** | `Interface` | Representa a interface que o enumerador do modalidade de cada método possuí. Exemplo: Crédito Parcelado Lojista. Ver exemplos abaixo. (`CreditTransactionType`,`DebitTransactionType`,`VoucherTransactionType`) |
| **transactionInfo** | `Object` | Representa dados de retorno transacional da adquirente. |
| **nsuInfo** | `Object` | Representa dados de NSU do retorno transacional da adquirente. |
| **dateTime** | `Date` | Representa data e hora da transação. |



#### TransactionInfo

O objeto `TransactionInfo` contém informações essenciais da adquirente. Abaixo estão os principais campos disponíveis:

| Campo      | Tipo     | Descrição                                                            |
|------------|----------|----------------------------------------------------------------------|
| **authorizationCode**     | `String` | Código de autorização da transação.                              |
| **cardBrand**     | `String` | Bandeira do cartão utilizado na transação.                              |
| **cardNumber**     | `String` | Número do cartão, com mascara, utilizado na transação.                              |
| **cardHolder**     | `String` | Proprietário do cartão utilizado na transação.                              |
| **cardLastDigits**     | `String` | Últimos dígitos do cartão utilizado na transação.                              |
| **bankAccount**     | `String` | Identificador do banco utilizado na transação.                              |
| **installments**     | `String` | Número de parcelas utilizadas na transação.                              |
| **storeReceipt**     | `String` | Comprovante da Loja.                              |
| **customerReceipt**     | `String` | Comprovante do Cliente.                              |
