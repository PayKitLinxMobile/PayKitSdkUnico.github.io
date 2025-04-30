### Explicação do `TransactionQueryResult`

O objeto `TransactionQueryResult`, retornado no callback da transação, contém informações da consulta. Abaixo estão os principais campos disponíveis:

| Campo      | Tipo     | Descrição                                                            |
|------------|----------|----------------------------------------------------------------------|
| **id**     | `String?` | Identificador único da transação.                                   |
| **externalId**  | `String?` | Identificador externo da transação (Informado pela automação comercial). |
{% include "./processor-Field.md" %}
| **status** | `Enum`   | Representa o status da transação. Valores possíveis:                 |
|            |          | - `PENDING`: Aguardando processamento.                               |
|            |          | - `APPROVED`: Transação aprovada.                                    |
|            |          | - `CANCELLED`: Transação cancelada.                                  |
|            |          | - `ERROR`: Ocorreu um erro na transação.                             |
|            |          | - `DECLINED`: Transação recusada.                                    |
| **amount** | `BigDecimal`   | Representa o valor da transação.                |
| **dateTime** | `Date?` |  Representa data e hora da transação.    |
| **paymentType** | `Enum`   | Representa o método de pagamento da transação. Valores possíveis:                 |
|            |          | - `CREDIT`                               |
|            |          | - `DEBIT`                                    |
|            |          | - `VOUCHER`                                 |
|            |          | - `PIX`                             |
|            |          | - `WALLET`                                  |
|            |          | - `FLEET`                                  |
|            |          | - `QR_CODE`                                  |
