### Detalhamento do `TransactionQueryResult`

O objeto `TransactionQueryResult`, retornado no callback da transação, contém informações da consulta. Abaixo estão os principais campos disponíveis:

| Campo      | Tipo     | Descrição                                                            |
|------------|----------|----------------------------------------------------------------------|
| **id**     | `String` | Identificador único da transação.                                   |
| **externalId**  | `String` | Identificador externo da transação (Informado pela automação comercial). |
{% include "./processor-Field.md" %}
{% include "./status-Field.md" %}
| **amount** | `BigDecimal`   | Representa o valor da transação.                |
| **dateTime** | `Date` |  Representa data e hora da transação.    |
{% include "./paymentType-Field.md" %}
| **transactionType** | `Interface` | Representa a interface que o enumerador do modalidade de cada método possuí. Exemplo: Crédito Parcelado Lojista. Ver exemplos abaixo. (`CreditTransactionType`,`DebitTransactionType`,`VoucherTransactionType`) |
| **nsuInfo** | `NsuInfo` | Representa dados de NSU do retorno transacional da adquirente. |
| **transactionInfo** | `TransactionInfo` | Representa dados de retorno transacional da adquirente. |
| **rawData**  | `Map<String, String>` | Retorno estilo chave/valor recebido do provedor. |
|              |                       | OBS: Os dados desse campo mudam de acordo com o provedor e o tipo de transação. |

{% include "./nsuInfo-type.md" %}

{% include "./transactionInfo-type.md" %}